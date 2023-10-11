import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { 
        firstName, 
        name, 
        society, 
        phone, 
        email, 
        date, 
        participants,
        message } = req.body;

        const finalDate = new Date(date)

    console.log(process.env.CONTACT_FORM_USERNAME, process.env.CONTACT_FORM_PASS)

    try {
      // Configuration du transporteur de messagerie
      let transporter = nodemailer.createTransport({
        host: process.env.CONTACT_FORM_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.CONTACT_FORM_USERNAME,
            pass: process.env.CONTACT_FORM_PASS,
        },
        tls: { rejectUnauthorized: false },
      });

      // Configuration l'e-mail à envoyer
      const mailOptions = {
        from: `"LEWIS TINA" <${process.env.CONTACT_FORM_USERNAME}>`,
        replyTo: email,
        to: process.env.PERSONAL_MAIL,
        subject: 'Nouveau message de contact',
        text:`Nom: ${firstName} ${name}\nEmail: ${email}\ntéléphone: ${phone}\ndate: ${(finalDate).toLocaleString('fr', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false})}\nNombre de participant: ${participants}\nMessage: ${message || ''}\nsociety:${society || ''},
             `,
      };

      // Envoyez l'e-mail
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'message_send_success' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'fail_sending_email' });;
    }
  }

  else {
  res.send('Lewis tina node js mailer');
  }
}
