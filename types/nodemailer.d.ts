// import type { Transporter, TransportOptions, SentMessageInfo } from 'nodemailer';

// declare module 'nodemailer' {
//   const nodemailer: {
//     createTransport(options: TransportOptions): Transporter<SentMessageInfo>;
//   };

//   export default nodemailer;
// }

import type { Transporter } from 'nodemailer';

declare module 'nodemailer' {
  const nodemailer: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createTransport(options: any): Transporter<any>;
    // d’autres propriétés/options peuvent être ajoutées ici
  };
  export default nodemailer;
}
