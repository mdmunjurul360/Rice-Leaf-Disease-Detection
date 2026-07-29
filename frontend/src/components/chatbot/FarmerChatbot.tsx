import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { Language } from '../../types';

interface FarmerChatbotProps {
  language: Language;
}

export const FarmerChatbot: React.FC<FarmerChatbotProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    {
      sender: 'bot',
      text: language === 'bn' 
        ? 'আসসালামু আলাইকুম! আমি এগ্রিস্ক্যান এআই রাইস কেয়ার অ্যাসিস্ট্যান্ট। ধানের পাতার রোগ, সার প্রয়োগ বা জৈব বালাইনাশক নিয়ে আপনার যেকোনো প্রশ্ন জিজ্ঞেস করুন।'
        : 'Hello! I am your AgriScan AI Rice Care Assistant. Ask me any question regarding rice diseases, fungicide dosages, or organic pest remedies.'
    }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInput('');

    // Simulated Smart Agricultural Advisory responses
    setTimeout(() => {
      let botReply = '';
      const lower = userText.toLowerCase();

      if (lower.includes('blast') || lower.includes('ব্লাস্ট')) {
        botReply = language === 'bn'
          ? 'লিফ ব্লাস্ট দমনে Tricyclazole (75% WP) প্রতি লিটার পানিতে ০.৬ গ্রাম অথবা Isoprothiolane প্রতি লিটার পানিতে ১.৫ মি.লি. স্প্রে করুন। অতিরিক্ত ইউরিয়া দেওয়া বন্ধ রেখে পটাশ সার প্রয়োগ করুন।'
          : 'For Rice Leaf Blast, spray Tricyclazole (75% WP) @ 0.6g/L or Isoprothiolane @ 1.5ml/L. Stop excess urea applications and apply Potash (MOP).';
      } else if (lower.includes('blight') || lower.includes('পোড়া')) {
        botReply = language === 'bn'
          ? 'ব্যাকটেরিয়াল লিফ ব্লাইটের জন্য Copper Oxychloride (২.৫ গ্রাম) এবং Streptocycline (০.১৫ গ্রাম) ১ লিটার পানিতে মিশিয়ে স্প্রে করুন। খেত থেকে সেচের পানি অপসারণ করুন।'
          : 'For Bacterial Leaf Blight, spray Copper Oxychloride (2.5g/L) + Streptocycline (0.15g/L). Drain standing irrigation water for 3 days.';
      } else if (lower.includes('organic') || lower.includes('জৈব')) {
        botReply = language === 'bn'
          ? 'জৈব বালাইনাশক হিসেবে ১ কেজি টাটকা গোবর ১০ লিটার পানিতে গুলিয়ে, ছেঁকে ২০ গ্রাম হলুদ গুঁড়া মিশিয়ে প্রতি ৭ দিন পর পর স্প্রে করলে গাছের রোগ প্রতিরোধ ক্ষমতা বাড়ে।'
          : 'Organic remedy: Mix 1kg fresh cow dung in 10L water, strain through muslin cloth, add 20g turmeric powder and spray weekly to boost plant immunity.';
      } else {
        botReply = language === 'bn'
          ? 'সঠিক সনাক্তকরণের জন্য আপনার ধানের পাতার একটি স্পষ্ট ছবি আমাদের "এআই রোগ শনাক্তকরণ" ট্যাবে আপলোড করুন। সেখানে সম্পূর্ণ রাসায়নিক ও জৈব স্প্রে চার্ট দেওয়া হবে।'
          : 'For exact identification, upload a clear leaf picture in our "AI Detection" tab to get instant Transfer Learning diagnostics and fungicide charts.';
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 border border-emerald-400/50"
        >
          <Sparkles className="w-5 h-5 text-amber-300 animate-spin-slow" />
          <span className="text-xs sm:text-sm font-bold">Ask Farmer AI</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[480px]">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-800 to-green-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center border border-emerald-400">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold">AgriScan Rice AI Assistant</h4>
                <p className="text-[10px] text-emerald-200">24/7 Agronomic Advisory</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-emerald-700/50 text-emerald-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex items-start space-x-2 ${
                  m.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 text-[10px]">
                    AI
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-emerald-600 text-white rounded-tr-none font-medium'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-xs'
                  }`}
                >
                  {m.text}
                </div>
                {m.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 text-[10px]">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={language === 'bn' ? 'ধানের রোগ নিয়ে প্রশ্ন লিখুন...' : 'Ask about leaf blast, fungicides...'}
              className="flex-1 px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
};
