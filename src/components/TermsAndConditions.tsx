import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
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
              TRU SYNTH Digital Consulting & AI Development Service Agreement
            </h1>

            <p className="text-white/80">
              This Digital Consulting & AI Development Service Agreement ("Agreement") governs the provision of consulting and AI development services ("Professional Services", "Service") provided by TRU Synth ("TRU Synth", "we", "us", "our") to you ("Client", "Customer", "you", "your"). By engaging us for Services, you agree to be bound by this Agreement.
            </p>

            <h2 className="text-2xl text-[#928466] mt-12">1. DEFINITIONS</h2>
            <div className="space-y-4 text-white/80">
              <p>1.1. "Agreement" refers to the entire contractual arrangement and understanding between TRU Synth and the Client, encompassing all terms, conditions, and appendices outlined herein, as well as any amendments or attachments agreed to.</p>
              <p>1.2. "Professional Services" refers to the suite of consulting and AI development services provided by TRU Synth, including but not limited to business process analysis, AI strategy consulting, development, deployment, and integration of AI solutions, as well as ongoing advisory support.</p>
              <p>1.3. "Service" covers all consulting engagements, digital system implementations, AI development, and any advisory sessions delivered under this Agreement.</p>
              <p>1.4. "TRU Synth" denotes the consulting and AI development entity specializing in designing, deploying, and advising on AI-centric business solutions.</p>
              <p>1.5. The terms "Client" and "Customer" refer to the entity entering this Agreement to receive services from TRU Synth.</p>
              <p>1.6. "Digital Employees" refers to the AI systems, workflows, or automated agents developed, deployed, or configured by TRU Synth. These Digital Employees are tailored to perform specific business functions autonomously, assisting in process automation, data handling, customer interaction, and other operational roles.</p>
              <p>1.7. "OpenAI" refers to third-party AI technologies, APIs, and models used by TRU Synth in delivering services under this Agreement.</p>
              <p>1.8. A "Subscription" refers to the recurring consulting and development engagement model offered by TRU Synth, typically billed monthly.</p>
              <p>1.9. The "Billing Cycle" denotes the interval for recurring subscription charges, typically on a monthly basis.</p>
              <p>1.10. "TRU Synth Materials" includes all proprietary tools, methodologies, consulting frameworks, software, code, and data created by TRU Synth independently of this Agreement.</p>
              <p>1.11. "Deliverables" include all reports, AI systems, strategy documentation, code, workflows, and digital assets produced by TRU Synth for the Client.</p>
              <p>1.12. "Work Product" refers to all custom outputs, insights, strategies, and digital systems developed specifically for the Client, excluding pre-existing TRU Synth Materials.</p>
              <p>1.13. "Arbitration" refers to the binding dispute resolution method outlined in Section 19.</p>
              <p>1.14. "Work Order Form" refers to any document outlining specific consulting tasks, AI projects, or advisory sessions under this Agreement.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">2. ABOUT US</h2>
            <div className="space-y-4 text-white/80">
              <p>2.1. TRU Synth is a consulting-first, subscription-based service tailored for business leaders managing teams and looking to integrate AI-powered systems into their workflows.</p>
              <p>2.2. We specialize in digital strategy consulting, AI implementation, and advisory services that allow businesses to leverage AI without the need to onboard full-time AI personnel.</p>
              <p>2.3. Our core expertise lies in advising, designing, and deploying Digital Employees — AI-driven systems and workflows purpose-built to optimize business operations.</p>
              <p>2.4. We provide a hands-on, consulting-led approach, focusing on one client project at a time to ensure alignment with your strategic goals.</p>
              <p>2.5. Our services include both strategic AI consulting and the development of new AI-powered solutions; however, we do not modify pre-existing codebases but instead focus on designing fresh, scalable systems.</p>
              <p>2.6. While integration with your existing infrastructure is part of the consulting scope, direct modification of legacy systems falls outside our service boundaries unless explicitly agreed.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">3. PROFESSIONAL SERVICES</h2>
            <div className="space-y-4 text-white/80">
              <p>3.1. Our Professional Services include but are not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Business process analysis & AI strategy consulting.</li>
                <li>Development and deployment of Digital Employees tailored to specific business functions.</li>
                <li>User Interface design (when required) to enhance interaction with deployed AI systems.</li>
                <li>Ongoing advisory on scaling, optimizing, and evolving AI workflows.</li>
                <li>Integration consulting to ensure seamless deployment into your existing business environment.</li>
              </ul>
              <p>3.2. Engagement Structure:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>TRU Synth retains control over how the consulting and development services are delivered.</li>
                <li>We reserve full discretion over staffing, ensuring quality and consistency.</li>
                <li>The Client must provide timely access to relevant business data, systems, and personnel as needed for successful delivery.</li>
              </ul>
              <p>3.3. 30-DAY POST-SUBSCRIPTION SUPPORT:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We offer 30 days of post-subscription support via a dedicated Slack channel to address any operational issues related to the Digital Employees we deploy.</li>
                <li>This does not cover changes made by third parties, Client alterations, or external software changes post-deployment.</li>
              </ul>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">4. SUBSCRIPTIONS</h2>
            <div className="space-y-4 text-white/80">
              <p>4.1. Subscription Service: TRU Synth offers a subscription-based service for ongoing consulting and AI solution development. The specifics of the services provided under the subscription will be detailed in individual Work Order Forms.</p>
              <p>4.2. Subscription Term: The Subscription begins on the date specified in the initial Work Order Form and continues until terminated as provided in this Agreement.</p>
              <p>4.3. Subscription Fees: The Client agrees to pay TRU Synth the subscription fees as outlined in the Work Order Form.</p>
              <p>4.4. Billing Cycle: Subscription fees are billed monthly, in advance of the services provided.</p>
              <p>4.5. Payment Terms: All invoices are due and payable within thirty (30) days of the invoice date.</p>
              <p>4.6. Late Payments: A late payment charge of one and a half percent (1.5%) per month, or the highest rate permitted by applicable law, whichever is lower, will be applied to all past due amounts. If any payment is more than thirty (30) days overdue, TRU Synth may suspend services until the account is brought current.</p>
              <p>4.7. Taxes: All fees are exclusive of applicable sales, use, or other taxes, and the Client is responsible for the payment of all such taxes, except for taxes on TRU Synth's net income.</p>
              <p>4.8. Subscription Changes: TRU Synth reserves the right to change its subscription fees or introduce new subscription tiers upon thirty (30) days' prior written notice to the Client.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">5. PURCHASES</h2>
            <div className="space-y-4 text-white/80">
              <p>5.1. Work Order Forms: The Client may request specific services by submitting a Work Order Form detailing the scope of work, deliverables, and fees. Each Work Order Form will be governed by the terms of this Agreement.</p>
              <p>5.2. Acceptance: A Work Order Form is not binding until accepted by TRU Synth in writing. TRU Synth reserves the right to reject any Work Order Form at its sole discretion.</p>
              <p>5.3. Changes to Work Orders: Any changes to an accepted Work Order Form must be agreed upon in writing by both parties.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">6. REFUNDS</h2>
            <div className="space-y-4 text-white/80">
              <p>6.1. No Refunds: All fees paid under this Agreement are non-refundable, except as expressly provided in this Agreement or as required by applicable law.</p>
              <p>6.2. Termination for Cause: If this Agreement is terminated by the Client for cause due to TRU Synth's material breach, the Client may be entitled to a pro-rata refund of any prepaid fees for services not yet performed.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">7. TERMINATION</h2>
            <div className="space-y-4 text-white/80">
              <p>7.1. Termination by Client: The Client may terminate this Agreement or any individual Work Order Form upon thirty (30) days' prior written notice to TRU Synth.</p>
              <p>7.2. Termination by TRU Synth: TRU Synth may terminate this Agreement or any individual Work Order Form upon thirty (30) days' prior written notice to the Client.</p>
              <p>7.3. Termination for Cause: Either party may terminate this Agreement or any individual Work Order Form immediately upon written notice to the other party if the other party:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Commits a material breach of this Agreement and fails to cure such breach within thirty (30) days after receiving written notice of the breach.</li>
                <li>Becomes insolvent, files for bankruptcy, or is the subject of any bankruptcy or insolvency proceedings.</li>
              </ul>
              <p>7.4. Effect of Termination: Upon termination of this Agreement:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Client will pay TRU Synth for all services performed and expenses incurred up to the effective date of termination.</li>
                <li>Each party will return or destroy all Confidential Information of the other party in its possession or control.</li>
                <li>Sections 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 and 25 will survive the termination of this Agreement.</li>
              </ul>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">8. CONFIDENTIALITY</h2>
            <div className="space-y-4 text-white/80">
              <p>8.1. Definition of Confidential Information: "Confidential Information" means any non-public information disclosed by one party (the "Disclosing Party") to the other party (the "Receiving Party"), whether orally or in writing, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure. Confidential Information includes, but is not limited to, trade secrets, business plans, financial information, customer lists, technical data, and Work Product.</p>
              <p>8.2. Obligations of Confidentiality: The Receiving Party agrees:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To hold the Disclosing Party's Confidential Information in strict confidence.</li>
                <li>Not to disclose such Confidential Information to any third party without the Disclosing Party's prior written consent, except as permitted below.</li>
                <li>To use the Confidential Information only for the purpose of performing its obligations under this Agreement.</li>
                <li>To protect the Confidential Information from unauthorized access, use, or disclosure with at least the same degree of care as it uses to protect its own confidential information, but in no event less than reasonable care.</li>
              </ul>
              <p>8.3. Permitted Disclosures: The Receiving Party may disclose Confidential Information to its employees, contractors, and advisors who have a need to know the information for the purpose of performing the Receiving Party's obligations under this Agreement and who are bound by confidentiality obligations no less restrictive than those contained herein.</p>
              <p>8.4. Exclusions: The obligations of confidentiality do not apply to any information that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Is or becomes publicly known through no fault of the Receiving Party.</li>
                <li>Was known to the Receiving Party prior to its disclosure by the Disclosing Party, without breach of any obligation to the Disclosing Party.</li>
                <li>Is independently developed by the Receiving Party without use of or reference to the Disclosing Party's Confidential Information.</li>
                <li>Is rightfully received from a third party without breach of any obligation to the Disclosing Party.</li>
                <li>Is required to be disclosed by law or court order, provided that the Receiving Party gives the Disclosing Party prompt notice of the request and cooperates with the Disclosing Party, at the Disclosing Party's expense, in any effort to resist or limit the disclosure.</li>
              </ul>
              <p>8.5. Return of Confidential Information: Upon the Disclosing Party's request or the termination of this Agreement, the Receiving Party will promptly return or destroy all copies of the Disclosing Party's Confidential Information in its possession or control, and certify in writing that it has done so.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">9. OWNERSHIP</h2>
            <div className="space-y-4 text-white/80">
              <p>9.1. TRU Synth Materials: The Client acknowledges and agrees that all TRU Synth Materials are and will remain the sole and exclusive property of TRU Synth.</p>
              <p>9.2. Work Product: TRU Synth hereby assigns to the Client all right, title, and interest in and to the Work Product, subject to the Client's full payment of all fees due under this Agreement.</p>
              <p>9.3. Client Materials: The Client retains all right, title, and interest in and to any materials or information provided by the Client to TRU Synth.</p>
              <p>9.4. Feedback: Any feedback or suggestions provided by the Client to TRU Synth regarding the Services or Work Product will be owned by TRU Synth.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">10. INTELLECTUAL PROPERTY</h2>
            <div className="space-y-4 text-white/80">
              <p>10.1. No Infringement: TRU Synth represents and warrants that its provision of the Services and Deliverables will not infringe the intellectual property rights of any third party.</p>
              <p>10.2. Client Indemnification: The Client will indemnify, defend, and hold harmless TRU Synth from and against any claims, losses, damages, liabilities, and expenses (including reasonable attorneys' fees) arising out of or related to any claim that TRU Synth's use of Client Materials infringes the intellectual property rights of any third party.</p>
              <p>10.3. TRU Synth Indemnification: TRU Synth will indemnify, defend, and hold harmless the Client from and against any claims, losses, damages, liabilities, and expenses (including reasonable attorneys' fees) arising out of or related to any claim that the Services or Deliverables infringe the intellectual property rights of any third party.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">11. REPRESENTATIONS AND WARRANTIES</h2>
            <div className="space-y-4 text-white/80">
              <p>11.1. Client Representations and Warranties: The Client represents and warrants that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>It has the full power and authority to enter into this Agreement.</li>
                <li>It will provide TRU Synth with all necessary information and cooperation to enable TRU Synth to perform the Services.</li>
                <li>It owns or has the right to use all Client Materials and that such materials do not infringe the intellectual property rights of any third party.</li>
              </ul>
              <p>11.2. TRU Synth Representations and Warranties: TRU Synth represents and warrants that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>It has the full power and authority to enter into this Agreement.</li>
                <li>It will perform the Services in a professional and workmanlike manner, in accordance with generally accepted industry standards.</li>
                <li>The Services and Deliverables will conform to the specifications outlined in the applicable Work Order Form.</li>
              </ul>
              <p>11.3. Warranty Disclaimer: EXCEPT AS EXPRESSLY PROVIDED IN THIS AGREEMENT, TRU SYNTH MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">12. LIMITATION OF LIABILITY</h2>
            <div className="space-y-4 text-white/80">
              <p>12.1. Indirect Damages: NEITHER PARTY WILL BE LIABLE TO THE OTHER PARTY FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO THIS AGREEMENT, WHETHER IN CONTRACT, TORT, OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
              <p>12.2. Cap on Liability: TRU SYNTH'S TOTAL LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT WILL NOT EXCEED THE TOTAL FEES PAID BY THE CLIENT TO TRU SYNTH UNDER THIS AGREEMENT IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.</p>
              <p>12.3. Exceptions: The limitations of liability in this Section 12 will not apply to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Claims for breach of confidentiality under Section 8.</li>
                <li>Claims for indemnification under Section 10.</li>
                <li>Claims arising from gross negligence or willful misconduct.</li>
                <li>Claims for non-payment.</li>
              </ul>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">13. INDEMNIFICATION</h2>
            <div className="space-y-4 text-white/80">
              <p>13.1. Client Indemnification: The Client will indemnify, defend, and hold harmless TRU Synth and its officers, directors, employees, and agents from and against any claims, losses, damages, liabilities, and expenses (including reasonable attorneys' fees) arising out of or related to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Client's breach of this Agreement.</li>
                <li>The Client's use of the Services or Deliverables.</li>
                <li>Any claim that the Client Materials infringe the intellectual property rights of any third party.</li>
              </ul>
              <p>13.2. TRU Synth Indemnification: TRU Synth will indemnify, defend, and hold harmless the Client and its officers, directors, employees, and agents from and against any claims, losses, damages, liabilities, and expenses (including reasonable attorneys' fees) arising out of or related to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>TRU Synth's breach of this Agreement.</li>
                <li>Any claim that the Services or Deliverables infringe the intellectual property rights of any third party.</li>
                <li>TRU Synth's gross negligence or willful misconduct.</li>
              </ul>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">14. FORCE MAJEURE</h2>
            <div className="space-y-4 text-white/80">
              <p>14.1. Force Majeure Event: Neither party will be liable for any failure or delay in the performance of its obligations under this Agreement due to a Force Majeure Event.</p>
              <p>14.2. Definition: "Force Majeure Event" means any event beyond a party's reasonable control, including, but not limited to, acts of God, war, terrorism, riots, fires, floods, earthquakes, strikes, lockouts, epidemics, pandemics, government regulations, or other similar causes beyond the reasonable control of the party.</p>
              <p>14.3. Notice: The affected party will notify the other party of the Force Majeure Event as soon as reasonably practicable and will make reasonable efforts to mitigate the effects of the event.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">15. NON-SOLICITATION</h2>
            <div className="space-y-4 text-white/80">
              <p>15.1. Non-Solicitation: During the term of this Agreement and for a period of one (1) year thereafter, neither party will, directly or indirectly, solicit, recruit, or attempt to solicit or recruit any employee or contractor of the other party without the prior written consent of the other party.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">16. PUBLICITY</h2>
            <div className="space-y-4 text-white/80">
              <p>16.1. Publicity: Neither party will issue any press release or public announcement relating to this Agreement without the prior written consent of the other party. However, TRU Synth may reference the Client as a client in its marketing materials, subject to the Client's right to revoke such consent at any time.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">17. INDEPENDENT CONTRACTOR</h2>
            <div className="space-y-4 text-white/80">
              <p>17.1. Independent Contractor: TRU Synth is an independent contractor, and nothing in this Agreement will be construed to create a partnership, joint venture, agency, or employment relationship between the parties.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">18. ASSIGNMENT</h2>
            <div className="space-y-4 text-white/80">
              <p>18.1. Assignment: Neither party may assign or transfer this Agreement or any of its rights or obligations under this Agreement without the prior written consent of the other party, except that TRU Synth may assign this Agreement to a successor in connection with a merger, acquisition, or sale of all or substantially all of its assets.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">19. DISPUTE RESOLUTION</h2>
            <div className="space-y-4 text-white/80">
              <p>19.1. Governing Law: This Agreement will be governed by and construed in accordance with the laws of [Insert Applicable State/Jurisdiction].</p>
              <p>19.2. Arbitration: Any dispute arising out of or relating to this Agreement will be resolved by binding arbitration in accordance with the rules of the American Arbitration Association (or other mutually agreed upon arbitration organization). The arbitration will be conducted in [Insert City, State/Jurisdiction]. The arbitrator's decision will be final and binding on both parties.</p>
              <p>19.3. Injunctive Relief: Notwithstanding the foregoing, either party may seek injunctive relief in a court of competent jurisdiction to prevent or restrain a breach of this Agreement relating to confidentiality or intellectual property rights.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">20. ENTIRE AGREEMENT</h2>
            <div className="space-y-4 text-white/80">
              <p>20.1. Entire Agreement: This Agreement, including any attached exhibits or schedules, constitutes the entire agreement between the parties and supersedes all prior or contemporaneous communications and proposals, whether oral or written, relating to the subject matter of this Agreement.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">21. AMENDMENTS</h2>
            <div className="space-y-4 text-white/80">
              <p>21.1. Amendments: This Agreement may be amended only by a written instrument signed by both parties.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">22. WAIVER</h2>
            <div className="space-y-4 text-white/80">
              <p>22.1. Waiver: No waiver of any breach of this Agreement will constitute a waiver of any other breach or a continuing waiver.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">23. SEVERABILITY</h2>
            <div className="space-y-4 text-white/80">
              <p>23.1. Severability: If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect.</p>
            </div>

            <h2 className="text-2xl text-[#928466] mt-12">25. COUNTERPARTS</h2>
            <div className="space-y-4 text-white/80">
              <p>25.1. Counterparts: This Agreement may be executed in counterparts, each of which will be deemed an original, and all of which together will constitute one and the same instrument.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}