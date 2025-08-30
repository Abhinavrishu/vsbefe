import nodemailer from 'nodemailer';

// Helper to format the 'to' field for Nodemailer
function formatToField(to) {
  if (typeof to === 'string') {
    return to; // Handles comma-separated email addresses
  } else if (typeof to === 'object' && to.email) {
    // Handles { name: "John Doe", email: "john.doe@example.com" }
    return to.name ? `${to.name} <${to.email}>` : to.email;
  } else {
    // Fallback or error for unsupported formats
    throw new Error('Invalid "to" format for email');
  }
}

// Create a Nodemailer transporter using Gmail service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use an App Password for Gmail
  },
});

// Function to send an email
export async function sendEmail(to, subject, text) {
  const toField = formatToField(to);

  const mailOptions = {
    from: `"VakeelSetu" <${process.env.EMAIL_USER}>`, // Branded sender name
    to: toField,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    // console.log(`Email sent successfully to ${toField}`); // Optional: log success
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email"); // Re-throw to be caught by asyncHandler
  }
}