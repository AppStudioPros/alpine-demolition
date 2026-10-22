import type { Metadata } from "next";
import { Phone, MapPin, Clock } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Contact Alpine Demolition | Arvada, Colorado',
  description: 'Contact Alpine Demolition to discuss your commercial or industrial demolition project in Colorado. Call 303-421-3366 or submit a project inquiry online.',
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Contact Alpine Demolition | Arvada, Colorado', description: 'Contact Alpine Demolition to discuss your commercial or industrial demolition project in Colorado. Call 303-421-3366 or submit a project inquiry online.' },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#17262B] text-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 w-full text-center">
          <p className="text-[#76B852] text-xs font-bold uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 max-w-2xl mx-auto text-center">
            Talk to the Alpine Team
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mx-auto text-center">
            Tell us about your site and scope. Alpine will route your request to the right person
            and follow up using the contact details you provide.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="bg-[#F4F2ED]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: contact info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-[#17262B] mb-6">Contact Information</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 bg-white border border-[#DEE3DC] rounded-lg p-6">
                  <div className="w-10 h-10 rounded-lg bg-[#165B38] flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:3034213366"
                      className="text-lg font-bold text-[#165B38] hover:text-[#17262B] transition-colors"
                    >
                      303-421-3366
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Call to discuss your project</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 bg-white border border-[#DEE3DC] rounded-lg p-6">
                  <div className="w-10 h-10 rounded-lg bg-[#165B38] flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                      Address
                    </p>
                    <address className="not-italic text-[#17262B] font-semibold">
                      5790 W 56th Ave Suite C<br />
                      Arvada, CO 80002
                    </address>
                  </div>
                </div>

                {/* Office hours note */}
                <div className="flex items-start gap-4 bg-white border border-[#DEE3DC] rounded-lg p-6">
                  <div className="w-10 h-10 rounded-lg bg-[#165B38] flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                      Response
                    </p>
                    <p className="text-[#17262B] font-semibold text-sm">
                      Alpine will follow up using the contact details you provide.
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      This is not a scheduled appointment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6 rounded-lg overflow-hidden border border-[#DEE3DC]">
                <iframe
                  title="Alpine Demolition location"
                  src="https://maps.google.com/maps?q=5790+W+56th+Ave+Suite+C,+Arvada,+CO+80002&output=embed&z=15"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#DEE3DC] rounded-xl p-8 sm:p-10 shadow-sm">
                <h2 className="text-2xl font-extrabold text-[#17262B] mb-2">
                  Request a Callback
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Send your project details. Alpine will contact you to discuss scope and next
                  steps. Fields marked with * are required.
                </p>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
