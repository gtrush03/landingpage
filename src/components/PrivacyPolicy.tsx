import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(146,132,102,0.1),transparent_70%)]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-xl z-50 border-b border-[#928466]/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#928466] hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span className="text-sm tracking-wider">Back to Dashboard</span>
          </button>
        </div>
        {/* Progress bar */}
        <div className="relative h-0.5 bg-[#928466]/20">
          <div 
            className="absolute top-0 left-0 h-full bg-[#928466] transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>

      {/* Content */}
      <div className="relative pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-4xl font-thin tracking-wider text-[#928466] mb-8">
              PRIVACY POLICY
            </h1>

            <p className="text-white/60 italic">Last updated March 20, 2025</p>

            <p className="text-white/80 mt-8">
              This Privacy Notice for TRU Synth ("we," "us," or "our") describes how and why we collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-white/80">
              <li>Visit our website at https://trusynth.com or any website linking to this Privacy Policy</li>
              <li>Engage with us regarding consulting, digital employees, AI agent services, sales, or events</li>
            </ul>

            <div className="bg-[#928466]/10 border border-[#928466]/30 rounded-lg p-6 my-8">
              <h2 className="text-2xl text-[#928466] mt-0 mb-4">NO CONTACT POLICIES</h2>
              <p className="text-white/80 mb-4">
                TRU Synth operates autonomously. We do not initiate unsolicited contact, outreach, or marketing communication. Any engagement is strictly user-initiated. By using our Services, you engage at your discretion. All communication is done through secured, client-driven channels.
              </p>
              <p className="text-white/80">
                If you have specific inquiries, reach out to hello@trusynth.com or by phone at +420 777 009 354.
              </p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">SUMMARY OF KEY POINTS</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse my-6">
                <thead>
                  <tr>
                    <th className="text-left p-4 text-[#928466] border-b border-[#928466]/20">Topic</th>
                    <th className="text-left p-4 text-[#928466] border-b border-[#928466]/20">Summary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b border-[#928466]/20 text-white/80">What personal information do we process?</td>
                    <td className="p-4 border-b border-[#928466]/20 text-white/80">Basic identifiers and payment data provided voluntarily by you when using Services.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-[#928466]/20 text-white/80">Do we process sensitive personal information?</td>
                    <td className="p-4 border-b border-[#928466]/20 text-white/80">No.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-[#928466]/20 text-white/80">Do we receive third-party information?</td>
                    <td className="p-4 border-b border-[#928466]/20 text-white/80">No.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-[#928466]/20 text-white/80">How do we process information?</td>
                    <td className="p-4 border-b border-[#928466]/20 text-white/80">To deliver Services, administer consulting projects, improve operations, and comply with law.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-[#928466]/20 text-white/80">Do we share data?</td>
                    <td className="p-4 border-b border-[#928466]/20 text-white/80">Only in specific, clearly outlined cases (e.g., legal compliance, service facilitation).</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-[#928466]/20 text-white/80">Security</td>
                    <td className="p-4 border-b border-[#928466]/20 text-white/80">We implement robust security procedures, but 100% security cannot be guaranteed.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-[#928466]/20 text-white/80">Your rights</td>
                    <td className="p-4 border-b border-[#928466]/20 text-white/80">Rights under GDPR, CCPA, CPA, CTDPA, and other frameworks apply.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-[#928466]/20 text-white/80">Contact</td>
                    <td className="p-4 border-b border-[#928466]/20 text-white/80">hello@trusynth.com, +420 777 009 354</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">TABLE OF CONTENTS</h2>
            <ol className="list-decimal pl-6 space-y-2 text-white/80">
              <li>WHAT INFORMATION DO WE COLLECT?</li>
              <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
              <li>WHAT LEGAL BASES DO WE RELY ON?</li>
              <li>WHEN AND WITH WHOM DO WE SHARE INFORMATION?</li>
              <li>DO WE USE COOKIES AND TRACKING TECHNOLOGIES?</li>
              <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
              <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
              <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
              <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
              <li>DO-NOT-TRACK FEATURES</li>
              <li>SPECIFIC PRIVACY RIGHTS FOR US RESIDENTS</li>
              <li>UPDATES TO THIS NOTICE</li>
              <li>CONTACT US</li>
            </ol>

            <h2 className="text-2xl text-[#928466] mt-12">1. WHAT INFORMATION DO WE COLLECT?</h2>
            <div className="space-y-4 text-white/80">
              <p>We collect personal information that you voluntarily provide when engaging with TRU Synth Services. This may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Names</li>
                <li>Phone numbers</li>
                <li>Email addresses</li>
                <li>Billing addresses</li>
                <li>Job titles</li>
                <li>Payment data (processed via Stripe)</li>
              </ul>
              <p>We do not process sensitive information and do not receive third-party data.</p>
              <p>Information is also collected automatically (IP address, browser, usage behavior, cookies) to maintain Service performance and security.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
            <div className="space-y-4 text-white/80">
              <p>Your information is processed for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Delivering and facilitating our consulting and digital employee services</li>
                <li>Managing contracts, payments, and project deliverables</li>
                <li>Compliance with legal and tax obligations</li>
                <li>Service security and integrity</li>
              </ul>
              <p>We never use your information for unsolicited contact.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">3. WHAT LEGAL BASES DO WE RELY ON?</h2>
            <div className="space-y-4 text-white/80">
              <p>Processing is based on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consent</li>
                <li>Performance of a contract (consulting agreements, service delivery)</li>
                <li>Legal obligations</li>
                <li>Legitimate interests (e.g., Service improvement, fraud prevention)</li>
              </ul>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">4. WHEN AND WITH WHOM DO WE SHARE INFORMATION?</h2>
            <div className="space-y-4 text-white/80">
              <p>We only share data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To fulfill contractual or legal obligations</li>
                <li>For business transfers (mergers, acquisitions)</li>
                <li>With third parties assisting in Service facilitation (strictly under agreement)</li>
              </ul>
              <p>No data is sold or shared for marketing purposes.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">5. DO WE USE COOKIES AND TRACKING TECHNOLOGIES?</h2>
            <div className="space-y-4 text-white/80">
              <p>Yes, solely to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain security</li>
                <li>Analyze website usage</li>
                <li>Improve Services</li>
              </ul>
              <p>Details are in our Cookie Notice.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
            <div className="space-y-4 text-white/80">
              <p>We retain personal data only as long as necessary for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fulfilling service obligations</li>
                <li>Legal compliance</li>
                <li>Accounting/tax records</li>
              </ul>
              <p>Post-need, data is anonymized or securely deleted.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
            <div className="space-y-4 text-white/80">
              <p>We employ strict technical and organizational measures. However, no method guarantees 100% protection.</p>
              <p>You are responsible for ensuring secure environments when accessing our Services.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
            <div className="space-y-4 text-white/80">
              <p>No. TRU Synth services are not intended for users under 18.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
            <div className="space-y-4 text-white/80">
              <p>Depending on your jurisdiction (EU, UK, Switzerland, US), you have rights to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, modify, or delete your personal data</li>
                <li>Withdraw consent</li>
                <li>Restrict processing</li>
                <li>Data portability</li>
              </ul>
              <p>Requests may be submitted to hello@trusynth.com.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">10. DO-NOT-TRACK FEATURES</h2>
            <div className="space-y-4 text-white/80">
              <p>Currently, we do not respond to DNT browser signals due to lack of standardized protocols.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">11. SPECIFIC PRIVACY RIGHTS FOR US RESIDENTS</h2>
            <div className="space-y-4 text-white/80">
              <p>Rights under CCPA, CPA, CTDPA (California, Colorado, Connecticut) apply. We do not sell or share personal data. Full details are available upon request.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">12. UPDATES TO THIS NOTICE</h2>
            <div className="space-y-4 text-white/80">
              <p>We may update this policy periodically. The revised version will be effective upon publication, marked by the "Last Updated" date.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">13. CONTACT US</h2>
            <div className="space-y-4 text-white/80">
              <p>TRU Synth</p>
              <p>📧 hello@trusynth.com</p>
              <p>📞 +420 777 009 354</p>
              <p>Czech Republic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}