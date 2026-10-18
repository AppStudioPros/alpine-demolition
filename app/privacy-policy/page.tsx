import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Alpine Demolition",
  description:
    "Alpine Demolition's privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  const updated = "October 18, 2026";

  return (
    <>
      <section className="bg-[#17262B] text-white py-16">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold mb-3">Privacy Policy</h1>
          <p className="text-white/60 text-sm">Last updated: {updated}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 py-16">
          <div className="prose prose-gray max-w-none text-base leading-relaxed space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#17262B] mb-3">1. Who We Are</h2>
              <p className="text-gray-600">
                Alpine Demolition LLC (&quot;Alpine,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) operates this website located at alpinedemolition.com. Alpine is a
                commercial and industrial demolition contractor based in Arvada, Colorado. You can
                contact us at:
              </p>
              <address className="not-italic mt-3 text-gray-600 bg-[#F4F2ED] border border-[#DEE3DC] rounded p-4">
                Alpine Demolition<br />
                5790 W 56th Ave Suite C<br />
                Arvada, CO 80002<br />
                Phone: <a href="tel:3034213366" className="text-[#165B38]">303-421-3366</a>
              </address>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#17262B] mb-3">2. Information We Collect</h2>
              <p className="text-gray-600 mb-3">
                When you submit a project inquiry or callback request through this website, we
                collect the information you provide, which may include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name (optional)</li>
                <li>Project type and location</li>
                <li>Project description and site details</li>
              </ul>
              <p className="text-gray-600 mt-3">
                We also collect basic technical data including IP address (stored as a one-way hash
                for rate limiting purposes only), browser type, and referring pages through standard
                server logs and analytics.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#17262B] mb-3">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-3">We use the information you provide to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
                <li>Respond to your project inquiry or callback request</li>
                <li>Route your request to the appropriate team member</li>
                <li>Follow up regarding your project needs</li>
                <li>Maintain records of project inquiries for business operations</li>
              </ul>
              <p className="text-gray-600 mt-3">
                We do not sell, rent, or share your personal information with third parties for
                marketing purposes. Your information is used solely in connection with Alpine's
                business operations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#17262B] mb-3">4. Data Storage &amp; Security</h2>
              <p className="text-gray-600">
                Inquiry data is stored in a secured database hosted by Supabase, a SOC 2-compliant
                infrastructure provider. We take reasonable technical and organizational measures to
                protect your personal information against unauthorized access, alteration, or
                disclosure. No transmission over the internet is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#17262B] mb-3">5. Data Retention</h2>
              <p className="text-gray-600">
                We retain project inquiry information for as long as necessary to fulfill the
                purpose it was collected for, or as required by applicable law. If you wish to have
                your information removed from our records, please contact us at the address above.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#17262B] mb-3">6. Cookies &amp; Analytics</h2>
              <p className="text-gray-600">
                This website uses Vercel Analytics to understand aggregate traffic patterns. Vercel
                Analytics does not use cookies and does not track individual users across sessions.
                No personally identifiable information is collected through analytics. For more
                information, see{" "}
                <a
                  href="https://vercel.com/docs/analytics/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#165B38] underline"
                >
                  Vercel&apos;s analytics privacy documentation
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#17262B] mb-3">7. Your Rights</h2>
              <p className="text-gray-600 mb-3">
                Depending on your location, you may have rights regarding your personal data,
                including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
                <li>The right to access the personal data we hold about you</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your personal data</li>
                <li>The right to withdraw consent at any time</li>
              </ul>
              <p className="text-gray-600 mt-3">
                To exercise any of these rights, contact us at the address listed in Section 1.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#17262B] mb-3">8. Third-Party Services</h2>
              <p className="text-gray-600">
                This website uses the following third-party services that may process data on our
                behalf:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2 mt-3">
                <li>
                  <strong>Vercel</strong> — website hosting and analytics
                </li>
                <li>
                  <strong>Supabase</strong> — secure database storage for inquiry records
                </li>
                <li>
                  <strong>Resend</strong> — transactional email delivery for inquiry notifications
                </li>
              </ul>
              <p className="text-gray-600 mt-3">
                Each provider maintains its own privacy policy and data handling practices.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#17262B] mb-3">9. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this privacy policy from time to time. Changes will be posted on this
                page with an updated revision date. We encourage you to review this policy
                periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#17262B] mb-3">10. Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this privacy policy or how we handle your personal
                information, please contact us:
              </p>
              <address className="not-italic mt-3 text-gray-600 bg-[#F4F2ED] border border-[#DEE3DC] rounded p-4">
                Alpine Demolition<br />
                5790 W 56th Ave Suite C<br />
                Arvada, CO 80002<br />
                Phone: <a href="tel:3034213366" className="text-[#165B38]">303-421-3366</a>
              </address>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
