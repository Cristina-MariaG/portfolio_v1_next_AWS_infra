// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/sendContact';

export async function POST(req: Request) {
  console.log('SMTP_USER set:', !!process.env.SMTP_USER);
  const body = await req.json();
  const { name, email, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 });
  }

  try {
    await sendContactEmail({ name, email, message });
    return NextResponse.json({ message: 'Email envoyé avec succès !' });
  } catch (err) {
    console.error('sendContactEmail error:', err);
    const msg = err instanceof Error ? err.message : String(err);
    console.error('Error message sent to client:', msg);
    return NextResponse.json({ error: `Erreur lors de l'envoi: ${msg}` }, { status: 500 });
  }
}
