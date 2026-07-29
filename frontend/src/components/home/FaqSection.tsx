import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is Transfer Learning and why is it used in this system?',
      a: 'The prototype uses transfer-learning concepts to adapt a pre-trained model for rice leaf disease inspection in a compact academic workflow.'
    },
    {
      q: 'How accurate is the disease prediction in real field conditions?',
      a: 'The system presents a diagnostic result with a confidence indicator and visual explanation so the user can review the output carefully.'
    },
    {
      q: 'Can farmers use this app on low-cost Android smartphones in rural areas?',
      a: 'Yes. The interface is designed to be responsive and easy to use on a range of devices for demonstration and study purposes.'
    },
    {
      q: 'Does the system provide organic or eco-friendly treatment options?',
      a: 'Yes. Every disease diagnosis includes both chemical fungicide/bactericide recommendations (with precise dosages) and natural organic bio-pesticide solutions like fresh cow dung extract, neem oil, and Trichoderma bio-control.'
    },
    {
      q: 'Is the system available in Bangla for Bangladeshi farmers?',
      a: 'Yes! The entire interface features a 1-click language toggle between English and Bangla (বাংলা), as well as an integrated text-to-speech voice assistant to read diagnostic recommendations aloud.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase px-3 py-1 bg-emerald-100 rounded-full border border-emerald-200">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-serif">
            Common Inquiries
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between space-x-4 focus:outline-hidden"
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-base font-bold text-slate-900 font-serif">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
