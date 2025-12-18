import type { Transporter } from 'nodemailer';

declare module 'nodemailer' {
  const nodemailer: {
    createTransport(options: any): Transporter<any>;
    // d’autres propriétés/options peuvent être ajoutées ici
  };
  export default nodemailer;
}
