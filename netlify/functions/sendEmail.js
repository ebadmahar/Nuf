const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    // Gmail SMTP setup
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Gmail address
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    let subject = '';
    let textBody = '';

    // Check form type
    if (data.formType === 'Book Consultation') {
      subject = `New Consultation Booking from ${data.fullName}`;
      textBody = `
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Visa Type: ${data.visaType}
Additional Info: ${data.additionalInfo}
Selected Date: ${data.date}
      `;
    } else {
      // Default: Contact Us
      subject = `New Contact from ${data.name}`;
      textBody = `
Name: ${data.name}
Email: ${data.email}
Service: ${data.service}
Message:
${data.message}
      `;
    }

    // Send email
    await transporter.sendMail({
      from: `"Website Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject,
      text: textBody,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
};
