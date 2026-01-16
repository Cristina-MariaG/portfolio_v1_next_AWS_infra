// getGmailTokens.js

const { google } = require('googleapis');
const readline = require('readline');

const CLIENT_ID = '1017387982476-1lv06mibcu4nlr7r6ktfiouu1gvmbuga.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:3000/oauth2callback';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const SCOPES = ['https://mail.google.com/'];

// 1️⃣ Generează link-ul pentru permisii
const authUrl = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
});

console.log('\n🔗 Deschide acest link și autorizează accesul:\n');
console.log(authUrl);

// 2️⃣ Așteaptă codul de la Google
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('\n✏️ Introdu codul primit de la Google: ', (code) => {
  // 3️⃣ Generează token-urile
  oAuth2Client.getToken(code, (err, token) => {
    if (err) {
      console.error('❌ Eroare la generarea tokenului:', err);
      return rl.close();
    }

    console.log('\n✅ Token generat cu succes!\n');
    console.log('access_token:', token.access_token);
    console.log('refresh_token:', token.refresh_token);
    console.log('scope:', token.scope);
    console.log('token_type:', token.token_type);
    console.log('expiry_date:', token.expiry_date);

    console.log(`
-----------------------
👉 Folosește aceste date în Nodemailer:

auth: {
  type: "OAuth2",
  user: "EMAILUL_TAU@gmail.com",
  clientId: "${CLIENT_ID}",
  clientSecret: "${CLIENT_SECRET}",
  refreshToken: "${token.refresh_token}",
}

-----------------------
`);

    rl.close();
  });
});
