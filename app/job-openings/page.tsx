import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, ChevronRight, CheckCircle, MapPin } from "lucide-react";
import Footer from "@/components/Footer";
import ApplicationForm from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Job Openings | Alpine Demolition",
  description: "Alpine Demolition is hiring. View current job openings and apply for positions in commercial and industrial demolition in Colorado.",
  alternates: { canonical: "/job-openings" },
};

const required = [
  "Valid driver's license",
  "One or more years of experience in construction or demolition",
  "Able to safely perform physical and manual work",
  "Solid understanding of the importance of safety",
  "Excellent stamina",
];

const preferred = [
  "High school diploma or equivalent",
  "OSHA 10-hour safety training",
];

const responsibilities = [
  "Clean and sort construction debris, concrete, trash, trees, and dirt by hand or with equipment",
  "Perform demolition inside and outside of buildings using tools such as jackhammers, sledgehammers, and cutting torches",
  "Hook up water hoses and spray for dust control during the demolition process",
  "Assist demolition equipment operators",
  "Keep the job site clean and in order",
  "Work safely and take direction from leadership",
];

export default function JobOpenings() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#17262B] text-white min-h-[320px] flex items-center">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 w-full text-center">
          <p className="text-[#76B852] text-xs font-bold tracking-[0.2em] uppercase mb-5">
            Careers
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
            Join the Team.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mx-auto">
            Alpine Demolition offers competitive pay and opportunities for advancement for
            experienced demolition professionals throughout Colorado.
          </p>
        </div>
      </section>

      {/* Job listing */}
      <section className="bg-[#F4F2ED] py-20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-3 text-center">
            Current Openings
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17262B] mb-10 text-center">
            Open Positions
          </h2>

          {/* Listing card */}
          <div className="bg-white border border-[#DEE3DC] rounded-xl overflow-hidden">
            {/* Card header */}
            <div className="bg-[#17262B] px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#165B38] flex items-center justify-center shrink-0">
                  <Briefcase size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">Demolition Laborer</h3>
                  <div className="flex flex-wrap gap-3 mt-1">
                    <span className="flex items-center gap-1 text-white/60 text-xs"><MapPin size={12}/> Arvada, CO</span>
                    <span className="text-[#76B852] text-xs font-semibold bg-[#76B852]/10 border border-[#76B852]/30 px-2 py-0.5 rounded">Full Time</span>
                    <span className="text-[#76B852] text-xs font-semibold bg-[#76B852]/10 border border-[#76B852]/30 px-2 py-0.5 rounded">Part Time</span>
                  </div>
                </div>
              </div>
              <a href="#apply" className="inline-flex items-center gap-2 bg-[#165B38] hover:bg-[#1a7044] text-white font-semibold px-6 py-3 rounded text-sm transition-colors shrink-0">
                Apply Now <ChevronRight size={16} />
              </a>
            </div>

            <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Summary + Responsibilities */}
              <div>
                <div className="mb-8">
                  <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-3">Summary</p>
                  <p className="text-gray-600 text-base leading-relaxed">
                    We're looking for an experienced and responsible demolition laborer. Alpine offers
                    competitive pay and opportunities for advancement within a safety-first team environment.
                  </p>
                </div>
                <div>
                  <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-3">Responsibilities</p>
                  <ul className="space-y-3">
                    {responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle size={15} className="text-[#165B38] mt-0.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Qualifications */}
              <div>
                <div className="mb-8">
                  <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-3">Required Qualifications</p>
                  <ul className="space-y-3">
                    {required.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle size={15} className="text-[#165B38] mt-0.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-3">Preferred</p>
                  <ul className="space-y-3">
                    {preferred.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle size={15} className="text-[#DEE3DC] mt-0.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="bg-white py-20">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-3">Apply</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17262B] mb-4">
              Apply for Demolition Laborer
            </h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto">
              Send your details and Alpine will be in touch. For the fastest response, call{" "}
              <a href="tel:3034213366" className="text-[#165B38] font-semibold">303-421-3366</a>.
            </p>
          </div>
          <div className="bg-[#F4F2ED] rounded-xl border border-[#DEE3DC] p-8 sm:p-10">
            <ApplicationForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
