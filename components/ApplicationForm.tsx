"use client";

import { useState, useRef } from "react";
import { Send, CheckCircle, AlertCircle, Upload } from "lucide-react";

export default function ApplicationForm() {
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", cover_letter: "", consent: false });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const inputClass = "w-full border border-[#DEE3DC] rounded bg-white px-4 py-3 text-sm text-[#17262B] focus:outline-none focus:border-[#165B38] transition-colors";
  const labelClass = "block text-sm font-semibold text-[#17262B] mb-1.5";

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f && f.type === "application/pdf") setFile(f);
    else { setFile(null); alert("Please upload a PDF file only."); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) { setErrorMsg("Please agree to the data terms before submitting."); return; }
    if (!file) { setErrorMsg("Please upload your CV/Resume as a PDF."); return; }
    setStatus("submitting");
    setErrorMsg("");

    try {
      const fd = new FormData();
      fd.append("full_name", form.full_name);
      fd.append("email", form.email);
      fd.append("phone", form.phone);
      fd.append("cover_letter", form.cover_letter);
      fd.append("resume", file);

      const res = await fetch("/api/apply", { method: "POST", body: fd });
      if (res.ok) {
        setStatus("success");
      } else {
        throw new Error("Server error");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or call 303-421-3366.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center py-12">
        <div className="w-16 h-16 rounded-full bg-[#165B38]/10 flex items-center justify-center mb-5">
          <CheckCircle size={32} className="text-[#165B38]" />
        </div>
        <h3 className="text-xl font-bold text-[#17262B] mb-2">Application Received</h3>
        <p className="text-gray-500 text-sm max-w-sm">
          Thank you for applying. Alpine will review your application and be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-2xl font-bold text-[#17262B]">Apply for this position</h3>

      <div>
        <label className={labelClass}>Full Name <span className="text-red-500">*</span></label>
        <input required className={inputClass} value={form.full_name}
          onChange={e => setForm(f => ({ ...f, full_name: e.target.value }))} />
      </div>

      <div>
        <label className={labelClass}>Email <span className="text-red-500">*</span></label>
        <input required type="email" className={inputClass} value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
      </div>

      <div>
        <label className={labelClass}>Phone <span className="text-red-500">*</span></label>
        <input required type="tel" className={inputClass} value={form.phone}
          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
      </div>

      <div>
        <label className={labelClass}>Cover Letter <span className="text-red-500">*</span></label>
        <textarea required rows={6} className={inputClass + " resize-y"} value={form.cover_letter}
          onChange={e => setForm(f => ({ ...f, cover_letter: e.target.value }))} />
      </div>

      <div>
        <label className={labelClass}>Upload CV/Resume <span className="text-red-500">*</span></label>
        <div
          onClick={() => fileRef.current?.click()}
          className="border border-[#DEE3DC] rounded bg-white px-4 py-4 flex items-center gap-4 cursor-pointer hover:border-[#165B38] transition-colors"
        >
          <Upload size={18} className="text-[#165B38] shrink-0" />
          <span className="text-sm text-gray-500">
            {file ? file.name : "Choose file"}
          </span>
        </div>
        <input ref={fileRef} type="file" accept=".pdf" className="hidden" onChange={handleFile} />
        <p className="text-xs text-gray-400 mt-1.5">Allowed type: .pdf</p>
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          checked={form.consent}
          onChange={e => setForm(f => ({ ...f, consent: e.target.checked }))}
          className="mt-0.5 accent-[#165B38]"
        />
        <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
          By using this form you agree with the storage and handling of your data by this website. <span className="text-red-500">*</span>
        </label>
      </div>

      {errorMsg && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded p-3">
          <AlertCircle size={16} className="shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 bg-[#165B38] hover:bg-[#1a7044] disabled:opacity-60 text-white font-bold px-8 py-3 rounded uppercase tracking-widest text-sm transition-colors"
      >
        {status === "submitting" ? "Submitting..." : <><Send size={16}/> Submit</>}
      </button>
    </form>
  );
}
