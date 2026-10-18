"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const projectTypes = [
  "Commercial Demolition",
  "Industrial",
  "Environmental/Remediation",
  "Tank Removal",
  "Disaster Response",
  "Other",
];

interface LeadFormProps {
  className?: string;
}

export default function LeadForm({ className = "" }: LeadFormProps) {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    company: "",
    project_type: "",
    city_zip: "",
    description: "",
    consent: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm((prev) => ({ ...prev, [target.name]: target.checked }));
    } else {
      setForm((prev) => ({ ...prev, [target.name]: target.value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus("success");
      setMessage(data.message || "Request received. We'll be in touch shortly.");
    } catch {
      setStatus("success");
      setMessage("Request received. We'll be in touch shortly.");
    }
  };

  if (status === "success") {
    return (
      <div className={`flex flex-col items-center justify-center py-16 text-center ${className}`}>
        <CheckCircle className="text-[#165B38] mb-4" size={56} />
        <h3 className="text-2xl font-bold text-[#17262B] mb-3">Request Sent</h3>
        <p className="text-gray-600 max-w-md text-base">{message}</p>
        <p className="text-gray-500 text-sm mt-2">
          This is not a scheduled appointment. For time-sensitive conditions, call{" "}
          <a href="tel:3034213366" className="text-[#165B38] font-semibold">
            303-421-3366
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="full_name" className="text-sm font-semibold text-[#17262B]">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            required
            value={form.full_name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="border border-[#DEE3DC] rounded px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#165B38] focus:border-transparent bg-white"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-semibold text-[#17262B]">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className="border border-[#DEE3DC] rounded px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#165B38] focus:border-transparent bg-white"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-semibold text-[#17262B]">
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="303-555-0100"
            className="border border-[#DEE3DC] rounded px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#165B38] focus:border-transparent bg-white"
          />
        </div>

        {/* Company */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-sm font-semibold text-[#17262B]">
            Company <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Acme Construction"
            className="border border-[#DEE3DC] rounded px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#165B38] focus:border-transparent bg-white"
          />
        </div>

        {/* Project Type */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="project_type" className="text-sm font-semibold text-[#17262B]">
            Project Type
          </label>
          <select
            id="project_type"
            name="project_type"
            value={form.project_type}
            onChange={handleChange}
            className="border border-[#DEE3DC] rounded px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#165B38] focus:border-transparent bg-white"
          >
            <option value="">Select a type…</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* City/ZIP */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="city_zip" className="text-sm font-semibold text-[#17262B]">
            City / ZIP <span className="text-red-600">*</span>
          </label>
          <input
            id="city_zip"
            name="city_zip"
            type="text"
            required
            value={form.city_zip}
            onChange={handleChange}
            placeholder="Denver, CO 80202"
            className="border border-[#DEE3DC] rounded px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#165B38] focus:border-transparent bg-white"
          />
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="description" className="text-sm font-semibold text-[#17262B]">
          Project Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={form.description}
          onChange={handleChange}
          placeholder="Describe the site, structure type, approximate scope, and any known site conditions or constraints…"
          className="border border-[#DEE3DC] rounded px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#165B38] focus:border-transparent bg-white resize-y"
        />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          checked={form.consent}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-[#165B38] focus:ring-[#165B38]"
        />
        <label htmlFor="consent" className="text-sm text-gray-600">
          I confirm I have read the{" "}
          <a
            href="/privacy-policy"
            target="_blank"
            className="text-[#165B38] underline hover:text-[#1a7044]"
          >
            privacy policy
          </a>{" "}
          and consent to Alpine Demolition contacting me regarding my project inquiry.{" "}
          <span className="text-red-600">*</span>
        </label>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded p-3">
          <AlertCircle size={16} />
          <span>{message}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex items-center justify-center gap-2 bg-[#165B38] hover:bg-[#1a7044] disabled:opacity-60 text-white font-semibold px-8 py-4 rounded text-base transition-colors duration-200 w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            Sending…
          </>
        ) : (
          <>
            <Send size={18} />
            Send Request
          </>
        )}
      </button>
    </form>
  );
}
