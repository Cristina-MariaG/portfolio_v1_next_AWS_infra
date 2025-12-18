import nodemailer from 'nodemailer';

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  subject?: string;
  to?: string;
};

/**
 * Send a contact email using environment SMTP settings.
 *
 * Expects the following environment variables (recommended):
 * - SMTP_HOST
 * - SMTP_PORT
 * - SMTP_SECURE (optional, 'true'|'false')
 * - SMTP_USER
 * - SMTP_PASS
 * - CONTACT_TO (optional, fallback recipient)
 */
export async function sendContactEmail(payload: ContactPayload) {
  const { name, email, message, subject, to } = payload;
  console.log('sendContactEmail payload:', payload);

  if (!name || !email || !message) {
    throw new Error('Missing required fields: name, email, message');
  }

  const service = process.env.SMTP_HOST || 'gmail';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error('SMTP credentials are not set (SMTP_USER / SMTP_PASS)');
  }

  // Use Gmail service with simple config
  const transporter = nodemailer.createTransport({
    service: service,
    auth: {
      user,
      pass,
    },
  });

  // verify connection configuration before sending
  try {
    await transporter.verify();
    console.log('✓ SMTP connection verified');
  } catch (err: unknown) {
    throw new Error(`SMTP connection/credentials problem: ${err instanceof Error ? err.message : String(err)}`);
  }

  // Many SMTP providers reject messages where 'from' is an arbitrary address.
  // Use the authenticated SMTP user as the envelope sender and set replyTo to the visitor address.
  const envelopeFrom = process.env.CONTACT_FROM || user;

  const info = await transporter.sendMail({
    from: `"${envelopeFrom}" <${envelopeFrom}>`,
    to: to || process.env.CONTACT_TO || user,
    replyTo: `${name} <${email}>`,
    subject: subject || `Nouveau message de ${name}`,
    text: message,
    html: `<p>${message}</p><p>De : ${name} (${email})</p>`,
  });

  return info;
}
