import type * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  inquiryType?: string;
  subject: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<ContactEmailProps> = ({
  name,
  email,
  phone,
  inquiryType,
  subject,
  message,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    <div
      style={{
        backgroundColor: "#2d5a3d",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "white", margin: "0", fontSize: "24px" }}>
        New Contact Form Submission
      </h1>
      <p style={{ color: "#f5f1e8", margin: "10px 0 0 0" }}>
        AnimaLife Website
      </p>
    </div>

    <div style={{ padding: "30px", backgroundColor: "#ffffff" }}>
      <h2 style={{ color: "#2d5a3d", marginBottom: "20px" }}>
        Contact Details
      </h2>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tr>
          <td
            style={{
              padding: "10px 0",
              borderBottom: "1px solid #e5e5e5",
              fontWeight: "bold",
              color: "#2d5a3d",
            }}
          >
            Name:
          </td>
          <td style={{ padding: "10px 0", borderBottom: "1px solid #e5e5e5" }}>
            {name}
          </td>
        </tr>
        <tr>
          <td
            style={{
              padding: "10px 0",
              borderBottom: "1px solid #e5e5e5",
              fontWeight: "bold",
              color: "#2d5a3d",
            }}
          >
            Email:
          </td>
          <td style={{ padding: "10px 0", borderBottom: "1px solid #e5e5e5" }}>
            {email}
          </td>
        </tr>
        {phone && (
          <tr>
            <td
              style={{
                padding: "10px 0",
                borderBottom: "1px solid #e5e5e5",
                fontWeight: "bold",
                color: "#2d5a3d",
              }}
            >
              Phone:
            </td>
            <td
              style={{ padding: "10px 0", borderBottom: "1px solid #e5e5e5" }}
            >
              {phone}
            </td>
          </tr>
        )}
        {inquiryType && (
          <tr>
            <td
              style={{
                padding: "10px 0",
                borderBottom: "1px solid #e5e5e5",
                fontWeight: "bold",
                color: "#2d5a3d",
              }}
            >
              Inquiry Type:
            </td>
            <td
              style={{ padding: "10px 0", borderBottom: "1px solid #e5e5e5" }}
            >
              {inquiryType}
            </td>
          </tr>
        )}
        <tr>
          <td
            style={{
              padding: "10px 0",
              borderBottom: "1px solid #e5e5e5",
              fontWeight: "bold",
              color: "#2d5a3d",
            }}
          >
            Subject:
          </td>
          <td style={{ padding: "10px 0", borderBottom: "1px solid #e5e5e5" }}>
            {subject}
          </td>
        </tr>
      </table>

      <h3 style={{ color: "#2d5a3d", marginTop: "30px", marginBottom: "15px" }}>
        Message:
      </h3>
      <div
        style={{
          backgroundColor: "#f5f1e8",
          padding: "20px",
          borderRadius: "8px",
          lineHeight: "1.6",
          whiteSpace: "pre-wrap",
        }}
      >
        {message}
      </div>
    </div>

    <div
      style={{
        backgroundColor: "#f5f1e8",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p style={{ color: "#2d5a3d", margin: "0", fontSize: "14px" }}>
        This email was sent from the AnimaLife website contact form.
      </p>
    </div>
  </div>
);

interface AutoReplyEmailProps {
  name: string;
}

export const AutoReplyEmailTemplate: React.FC<AutoReplyEmailProps> = ({
  name,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    <div
      style={{
        backgroundColor: "#2d5a3d",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "white", margin: "0", fontSize: "24px" }}>
        Thank You for Contacting AnimaLife!
      </h1>
    </div>

    <div style={{ padding: "30px", backgroundColor: "#ffffff" }}>
      <h2 style={{ color: "#2d5a3d", marginBottom: "20px" }}>Hello {name},</h2>

      <p style={{ lineHeight: "1.6", color: "#333", marginBottom: "20px" }}>
        Thank you for reaching out to AnimaLife! We've received your message and
        our team will get back to you within 24 hours.
      </p>

      <p style={{ lineHeight: "1.6", color: "#333", marginBottom: "20px" }}>
        At AnimaLife, we're committed to providing the best nutrition for your
        furry friends. Whether you have questions about our products, need
        nutrition advice, or want to learn more about our science-backed
        approach to pet food, we're here to help.
      </p>

      <div
        style={{
          backgroundColor: "#f5f1e8",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ color: "#2d5a3d", marginTop: "0", marginBottom: "15px" }}>
          While you wait, here are some helpful resources:
        </h3>
        <ul style={{ color: "#2d5a3d", paddingLeft: "20px" }}>
          <li style={{ marginBottom: "8px" }}>
            Browse our complete product range
          </li>
          <li style={{ marginBottom: "8px" }}>
            Read our AnimaLife Academy articles
          </li>
          <li style={{ marginBottom: "8px" }}>
            Find the perfect match for your dog's breed and age
          </li>
          <li style={{ marginBottom: "8px" }}>
            Learn about complete and balanced nutrition
          </li>
        </ul>
      </div>

      <p style={{ lineHeight: "1.6", color: "#333" }}>
        Best regards,
        <br />
        <strong style={{ color: "#2d5a3d" }}>The AnimaLife Team</strong>
      </p>
    </div>

    <div
      style={{
        backgroundColor: "#2d5a3d",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "white",
          margin: "0 0 10px 0",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Follow us for more pet nutrition tips!
      </p>
      <p style={{ color: "#f5f1e8", margin: "0", fontSize: "14px" }}>
        Visit our website: AnimaLife.com | Email: support@animalife.com
      </p>
    </div>
  </div>
);
