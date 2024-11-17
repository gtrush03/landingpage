import { useEffect, useState } from 'react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, 300);
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className={`relative max-w-2xl w-full max-h-[80vh] overflow-y-auto glassmorphism p-6 transform transition-all duration-300 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="space-y-6" style={{ fontFamily: 'Pangram Sans', fontWeight: 200 }}>
          <h2 className="text-2xl font-light text-[#928466]">Privacy Policy & Terms of Service</h2>
          
          <div className="space-y-4 text-gray-300">
            <p>
              Welcome to TRU SYNTH. By using our service, you agree to these terms and our privacy practices:
            </p>

            <h3 className="text-lg text-[#928466]">Data Collection</h3>
            <p>
              We collect email addresses for the purpose of sending updates about our products and services.
              Your data is stored securely and will never be shared with third parties without your consent.
            </p>

            <h3 className="text-lg text-[#928466]">Communications</h3>
            <p>
              By subscribing, you agree to receive promotional content and updates about TRU SYNTH.
              You can unsubscribe at any time using the link provided in our emails.
            </p>

            <h3 className="text-lg text-[#928466]">Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data
              against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>

            <h3 className="text-lg text-[#928466]">Your Rights</h3>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request transfer of your personal data</li>
            </ul>

            <h3 className="text-lg text-[#928466]">Contact Us</h3>
            <p>
              For any questions about these terms or our privacy practices, please contact us at{' '}
              <a
                href="mailto:hello@trusynth.com"
                className="text-[#928466] hover:text-white underline transition-colors"
              >
                hello@trusynth.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}