import React, { useState, useEffect } from 'react';
import { submitAIStrategyForm, AIStrategySubmission } from '../lib/supabase';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  message: string;
  countryCode: string;
  customCountryCode: string;
}

interface AIStrategyFormProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const AIStrategyForm: React.FC<AIStrategyFormProps> = ({ 
  title = "Get Your AI Strategy",
  subtitle = "Answer a few quick questions, and we'll craft a tailored AI roadmap for your business.",
  description = "Click 'START' to begin."
}) => {
  const [currentStep, setCurrentStep] = useState<'start' | 'form' | 'success' | 'error'>('start');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    message: '',
    countryCode: '+1',
    customCountryCode: ''
  });
  const [showCustomCountryCode, setShowCustomCountryCode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleStart = () => {
    setCurrentStep('form');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Prepare data for Supabase
      const submissionData: Omit<AIStrategySubmission, 'id' | 'created_at' | 'updated_at'> = {
        first_name: formData.firstName.trim(),
        last_name: formData.lastName.trim(),
        phone: formData.phone.trim(),
        country_code: formData.countryCode,
        custom_country_code: formData.customCountryCode || null,
        email: formData.email.trim().toLowerCase(),
        company: formData.company.trim() || null,
        message: formData.message.trim() || null,
      };

      console.log('Form data prepared:', submissionData);

      // Submit to Supabase
      const result = await submitAIStrategyForm(submissionData);
      
      if (result.success) {
        console.log('Form submitted successfully:', result.data);
        setCurrentStep('success');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'An error occurred while submitting the form');
      setCurrentStep('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCountryCodeChange = (value: string) => {
    handleInputChange('countryCode', value);
    setShowCustomCountryCode(value === 'other');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background with blurred image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-lg -z-10"
        style={{
          backgroundImage: "url('https://i.imgur.com/OYEsdJR.png')"
        }}
      />
      
      <div className="w-full max-w-lg mx-auto relative z-10">
        {/* Logo */}
        <div className={`text-center mb-8 transition-all duration-500 ease-in-out ${
          currentStep === 'form' ? 'mb-0 scale-75 -translate-y-4' : ''
        } ${currentStep === 'success' ? 'hidden' : ''}`}>
          <img 
            src="https://i.imgur.com/p6POhEa.png" 
            alt="TRU SYNTH Logo" 
            className="w-48 mx-auto"
          />
        </div>

        {/* Step 1: Start Screen */}
        {currentStep === 'start' && (
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-thin text-white mb-4 tracking-wide">
              {title}
            </h1>
            <p className="text-lg text-gray-400 font-light mb-8 max-w-md mx-auto">
              {subtitle}
            </p>
            <p className="text-gray-300 font-light mb-10">{description}</p>
            
            <button 
              onClick={handleStart}
              className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border border-primary-gold/60 rounded-lg px-12 py-4 text-white font-medium tracking-wider hover:scale-105 hover:border-primary-gold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              START
            </button>
            
            <p className="text-sm text-gray-500 mt-6 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Takes 2 minutes
            </p>
          </div>
        )}

        {/* Step 2: Form */}
        {currentStep === 'form' && (
          <div className="animate-fade-in-up">
            {/* Header */}
            <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-3xl font-thin text-white mb-2">
                <span className="text-primary-gold">1 →</span> Please Enter Your Information
              </h1>
              <p className="text-base text-gray-400 font-light ml-8">Description (optional)</p>
            </div>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-1">
                    First name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full bg-transparent border-none border-b border-white/20 text-white px-1 py-3 rounded-none focus:border-primary-gold focus:outline-none font-light text-lg transition-all duration-300"
                    placeholder="Jane"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-1">
                    Last name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full bg-transparent border-none border-b border-white/20 text-white px-1 py-3 rounded-none focus:border-primary-gold focus:outline-none font-light text-lg transition-all duration-300"
                    placeholder="Smith"
                    required
                  />
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                  Phone number *
                </label>
                <div className="flex items-end gap-4">
                  <div className="w-1/3">
                    <select
                      id="countryCode"
                      value={formData.countryCode}
                      onChange={(e) => handleCountryCodeChange(e.target.value)}
                      className="w-full bg-transparent border-none border-b border-white/20 text-white px-1 py-3 rounded-none focus:border-primary-gold focus:outline-none font-light text-lg transition-all duration-300 appearance-none bg-no-repeat bg-right bg-contain pr-8"
                      style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")"
                      }}
                    >
                      <option value="+1">🇺🇸 United States (+1)</option>
                      <option value="+44">🇬🇧 United Kingdom (+44)</option>
                      <option value="+61">🇦🇺 Australia (+61)</option>
                      <option value="+1">🇨🇦 Canada (+1)</option>
                      <option disabled>──────────</option>
                      <option value="+33">🇫🇷 France (+33)</option>
                      <option value="+49">🇩🇪 Germany (+49)</option>
                      <option value="+39">🇮🇹 Italy (+39)</option>
                      <option value="+34">🇪🇸 Spain (+34)</option>
                      <option value="+31">🇳🇱 Netherlands (+31)</option>
                      <option value="+46">🇸🇪 Sweden (+46)</option>
                      <option value="+47">🇳🇴 Norway (+47)</option>
                      <option value="+45">🇩🇰 Denmark (+45)</option>
                      <option value="+41">🇨🇭 Switzerland (+41)</option>
                      <option value="+43">🇦🇹 Austria (+43)</option>
                      <option value="+32">🇧🇪 Belgium (+32)</option>
                      <option value="+351">🇵🇹 Portugal (+351)</option>
                      <option value="+30">🇬🇷 Greece (+30)</option>
                      <option value="+353">🇮🇪 Ireland (+353)</option>
                      <option value="+358">🇫🇮 Finland (+358)</option>
                      <option value="+372">🇪🇪 Estonia (+372)</option>
                      <option value="+371">🇱🇻 Latvia (+371)</option>
                      <option value="+370">🇱🇹 Lithuania (+370)</option>
                      <option value="+420">🇨🇿 Czechia (+420)</option>
                      <option value="+421">🇸🇰 Slovakia (+421)</option>
                      <option value="+36">🇭🇺 Hungary (+36)</option>
                      <option value="+48">🇵🇱 Poland (+48)</option>
                      <option value="+40">🇷🇴 Romania (+40)</option>
                      <option value="+359">🇧🇬 Bulgaria (+359)</option>
                      <option value="+385">🇭🇷 Croatia (+385)</option>
                      <option value="+386">🇸🇮 Slovenia (+386)</option>
                      <option value="+81">🇯🇵 Japan (+81)</option>
                      <option value="+82">🇰🇷 South Korea (+82)</option>
                      <option value="+86">🇨🇳 China (+86)</option>
                      <option value="+91">🇮🇳 India (+91)</option>
                      <option value="+65">🇸🇬 Singapore (+65)</option>
                      <option value="+60">🇲🇾 Malaysia (+60)</option>
                      <option value="+66">🇹🇭 Thailand (+66)</option>
                      <option value="+63">🇵🇭 Philippines (+63)</option>
                      <option value="+62">🇮🇩 Indonesia (+62)</option>
                      <option value="+84">🇻🇳 Vietnam (+84)</option>
                      <option value="+852">🇭🇰 Hong Kong (+852)</option>
                      <option value="+886">🇹🇼 Taiwan (+886)</option>
                      <option value="+81">🇯🇵 Japan (+81)</option>
                      <option value="+7">🇷🇺 Russia (+7)</option>
                      <option value="+380">🇺🇦 Ukraine (+380)</option>
                      <option value="+375">🇧🇾 Belarus (+375)</option>
                      <option value="+370">🇱🇹 Lithuania (+370)</option>
                      <option value="+371">🇱🇻 Latvia (+371)</option>
                      <option value="+372">🇪🇪 Estonia (+372)</option>
                      <option value="+90">🇹🇷 Turkey (+90)</option>
                      <option value="+966">🇸🇦 Saudi Arabia (+966)</option>
                      <option value="+971">🇦🇪 UAE (+971)</option>
                      <option value="+965">🇰🇼 Kuwait (+965)</option>
                      <option value="+974">🇶🇦 Qatar (+974)</option>
                      <option value="+973">🇧🇭 Bahrain (+973)</option>
                      <option value="+968">🇴🇲 Oman (+968)</option>
                      <option value="+20">🇪🇬 Egypt (+20)</option>
                      <option value="+212">🇲🇦 Morocco (+212)</option>
                      <option value="+213">🇩🇿 Algeria (+213)</option>
                      <option value="+216">🇹🇳 Tunisia (+216)</option>
                      <option value="+218">🇱🇾 Libya (+218)</option>
                      <option value="+249">🇸🇩 Sudan (+249)</option>
                      <option value="+251">🇪🇹 Ethiopia (+251)</option>
                      <option value="+254">🇰🇪 Kenya (+254)</option>
                      <option value="+234">🇳🇬 Nigeria (+234)</option>
                      <option value="+27">🇿🇦 South Africa (+27)</option>
                      <option value="+52">🇲🇽 Mexico (+52)</option>
                      <option value="+55">🇧🇷 Brazil (+55)</option>
                      <option value="+54">🇦🇷 Argentina (+54)</option>
                      <option value="+56">🇨🇱 Chile (+56)</option>
                      <option value="+57">🇨🇴 Colombia (+57)</option>
                      <option value="+51">🇵🇪 Peru (+51)</option>
                      <option value="+58">🇻🇪 Venezuela (+58)</option>
                      <option value="+593">🇪🇨 Ecuador (+593)</option>
                      <option value="+595">🇵🇾 Paraguay (+595)</option>
                      <option value="+598">🇺🇾 Uruguay (+598)</option>
                      <option value="+592">🇬🇾 Guyana (+592)</option>
                      <option value="+597">🇸🇷 Suriname (+597)</option>
                      <option value="+other">Other</option>
                    </select>
                  </div>
                  {showCustomCountryCode && (
                    <input
                      type="text"
                      value={formData.customCountryCode}
                      onChange={(e) => handleInputChange('customCountryCode', e.target.value)}
                      className="w-1/4 bg-transparent border-none border-b border-white/20 text-white px-1 py-3 rounded-none focus:border-primary-gold focus:outline-none font-light text-lg transition-all duration-300"
                      placeholder="+..."
                    />
                  )}
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="flex-1 bg-transparent border-none border-b border-white/20 text-white px-1 py-3 rounded-none focus:border-primary-gold focus:outline-none font-light text-lg transition-all duration-300"
                    placeholder="(201) 555-0123"
                    required
                  />
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full bg-transparent border-none border-b border-white/20 text-white px-1 py-3 rounded-none focus:border-primary-gold focus:outline-none font-light text-lg transition-all duration-300"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full bg-transparent border-none border-b border-white/20 text-white px-1 py-3 rounded-none focus:border-primary-gold focus:outline-none font-light text-lg transition-all duration-300"
                  placeholder="Acme Corporation"
                />
              </div>
              
              <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full bg-transparent border-none border-b border-white/20 text-white px-1 py-3 rounded-none focus:border-primary-gold focus:outline-none font-light text-lg transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              {/* Submit Button */}
              <div className="text-center pt-6 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border border-primary-gold/60 rounded-lg px-10 py-3 text-white font-medium tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl ${
                    isSubmitting 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:scale-105 hover:border-primary-gold'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Submitting...
                    </div>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Success Message */}
        {currentStep === 'success' && (
          <div className="border border-primary-gold/20 p-10 rounded-lg text-center animate-fade-in-up">
            <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
            <p className="text-gray-300 mb-6">
              Your AI Strategy request has been submitted. We will be in touch shortly.
            </p>
            
            <div className="mt-8">
              <p className="text-gray-400 mb-4 text-sm">Or connect with us directly</p>
              <div className="flex justify-center items-center gap-6 mb-6">
                {/* X Icon */}
                <a href="https://x.com/trusynth" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                {/* LinkedIn Icon */}
                <a href="https://www.linkedin.com/company/tru-synth" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 114.75 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </div>
              <a href="mailto:hello@trusynth.com" className="text-primary-gold hover:underline block mb-8">
                hello@trusynth.com
              </a>
              
              <button 
                onClick={() => window.location.href = '/'}
                className="bg-transparent border border-primary-gold/60 rounded-lg px-6 py-2 text-primary-gold font-normal hover:bg-primary-gold/10 hover:border-primary-gold transition-all duration-300"
              >
                ← Back to TRU SYNTH
              </button>
            </div>
          </div>
        )}

        {/* Error State */}
        {currentStep === 'error' && (
          <div className="border border-red-500/20 p-10 rounded-lg text-center animate-fade-in-up">
            <div className="text-red-400 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Submission Failed</h2>
            <p className="text-gray-300 mb-6">
              {submitError || 'An error occurred while submitting your form. Please try again.'}
            </p>
            
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => setCurrentStep('form')}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border border-primary-gold/60 rounded-lg px-6 py-2 text-white font-medium tracking-wider hover:scale-105 hover:border-primary-gold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Try Again
              </button>
              <button 
                onClick={() => window.location.href = '/'}
                className="bg-transparent border border-primary-gold/60 rounded-lg px-6 py-2 text-primary-gold font-normal hover:bg-primary-gold/10 hover:border-primary-gold transition-all duration-300"
              >
                Back to TRU SYNTH
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIStrategyForm;
