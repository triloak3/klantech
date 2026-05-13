// JoinForm — contact/join form with input fields
import { useState } from "react";

// Options for the "Area of Interest" dropdown
const interestOptions = [
  "Mechanical",
  "Design",
  "Electronics",
  "Media",
  "Research",
  "Event Management",
];

export default function JoinForm() {
  // Form state — each field is a simple string
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    interest: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // Handle form submission
  async function handleSubmit(e) {
  e.preventDefault();

  const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSfx-ATv_Wf_vfuibzSvAdhBQWgBD8ANu-2HoJiwvMtlr4tHyw/formResponse"; 
  // 🔴 Replace FORM_ID

  const formBody = new FormData();

  // 🔴 Replace entry IDs below with YOUR actual ones
  formBody.append("entry.228625820", formData.name);
  formBody.append("entry.167572693", formData.email);
  formBody.append("entry.1055688563", formData.phone);
  formBody.append("entry.1959986883", formData.department);
  formBody.append("entry.1093711123", formData.year);
  formBody.append("entry.1772693059", formData.interest);
  formBody.append("entry.72481379", formData.message);

  try {
    await fetch(formURL, {
      method: "POST",
      mode: "no-cors", // IMPORTANT
      body: formBody,
    });

    setSubmitted(true);

    // Optional reset
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      year: "",
      interest: "",
      message: "",
    });

  } catch (error) {
    console.error("Error:", error);
  }
}


  // Show success message after submission
  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🏁</span>
        </div>
        <h3 className="text-xl font-heading font-bold text-foreground mb-2">
          Application Received!
        </h3>
        <p className="text-muted-foreground">
          Thanks for your interest in Klantech Autosport. We'll get back to you soon.
        </p>
      </div>
    );
  }

  // Input styling — reusable classes
  const inputClass =
    "w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        className={inputClass}
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className={inputClass}
      />

      {/* Phone */}
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className={inputClass}
      />

      {/* Department and Year — side by side */}
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="text"
          name="year"
          placeholder="Year (e.g., 2nd)"
          value={formData.year}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Area of Interest */}
      <select
        name="interest"
        value={formData.interest}
        onChange={handleChange}
        className={inputClass}
      >
        <option value="">Select Area of Interest</option>
        {interestOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {/* Message */}
      <textarea
        name="message"
        placeholder="Why do you want to join? (optional)"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        className={inputClass + " resize-none"}
      />

      {/* Submit button */}
      <button
        type="submit"
        className="btn-primary-gradient w-full px-6 py-3 rounded-lg text-sm"
      >
        Submit Application
      </button>
    </form>
  );
}
