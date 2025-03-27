import connectDB from "@/lib/db";
import nodemailer from "nodemailer";
import ContactForm from "@/lib/model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, email, subject, message } = await req.json();
  try {
    await connectDB();
    await ContactForm.create({
      username,
      email,
      subject,
      message,
    });

    // ✅ Setup Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 📌 Email to Webizera (You)
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `📌 New Inquiry - ${subject}`,
      text: `Website requirement from ${username} :\n\n${message}`,
      html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="color: #007bff;">🎉 New Contact Form Submission! 🎉</h2>
            <p><strong>📌 Name:</strong> ${username}</p>
            <p><strong>📌 Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>📌 Subject:</strong> ${subject}</p>
            <p><strong>📝 Message:</strong></p>
            <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #007bff;">${message}</blockquote>
            <hr>
            <p><strong>🔗 Reply to:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
        `,
    });

    // 📌 Thank You Email to the User
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "🎉 Thank You for Contacting Me!",
      text: `Hi ${username},\n\nThank you for reaching out! We'll get back to you soon.\n\nBest regards,\nBrightly Dunsford`,
      html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="color: #007bff;">🎉 Thank You for Contacting Webizera! 🚀</h2>
            <p>Hi <strong>${username}</strong>,</p>
            <p>Thank you for reaching out! We have received your message and will get back to you as soon as possible.</p>
            <h3>📌 Your Details:</h3>
            <p><strong>Name:</strong> ${username}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #007bff;">${message}</blockquote>
            <hr>
            <p>Best regards,<br>
            🌍 <strong>Brightly Dunsford</strong></p>
          </div>
        `,
    });

    return NextResponse.json({
      message: "Form submitted successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error occured in submitting form: ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
