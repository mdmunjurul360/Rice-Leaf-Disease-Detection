import React, { useState } from 'react';
import { Mail, GraduationCap, Building2, Send, CheckCircle2, User, BookOpen } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Researcher',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Academic Thesis & Advisor Information */}
          <div className="space-y-6">
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase px-3 py-1 bg-emerald-100 rounded-full border border-emerald-200">
              BSc Thesis Metadata & Academic Contacts
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
              Project Advisory & Research Lab
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              This system was designed and benchmarked as a final year BSc Software Engineering Capstone Thesis Project, investigating Transfer Learning applications in smart agriculture.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start space-x-3">
                <GraduationCap className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Thesis Author</h4>
                  <p className="text-xs text-slate-600 font-medium">Software Engineering Student / Lead Researcher</p>
                  <p className="text-xs text-slate-500 mt-1">Department of Computer Science & Software Engineering</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start space-x-3">
                <User className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Research Advisory Panel</h4>
                  <p className="text-xs text-slate-600 font-medium">Assistant Professor, Machine Learning & Vision Lab</p>
                  <p className="text-xs text-slate-500 mt-1">Agri-Tech & Applied AI Research Group</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start space-x-3">
                <Building2 className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Dataset Collaboration</h4>
                  <p className="text-xs text-slate-600">Annotated images verified by Bangladesh Rice Research Institute (BRRI) & Department of Agricultural Extension (DAE).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact / Feedback Form */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-md">
            <div className="flex items-center space-x-2 mb-6">
              <Mail className="w-5 h-5 text-emerald-600" />
              <h3 className="text-xl font-bold text-slate-900 font-serif">
                Academic Inquiry & Collaboration
              </h3>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-100 rounded-2xl border border-emerald-300 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto" />
                <h4 className="text-base font-bold text-emerald-900">
                  Inquiry Received
                </h4>
                <p className="text-xs text-emerald-800">
                  Thank you for reaching out. The thesis research team will review your message shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-emerald-700 underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Mahfuzur Rahman"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. researcher@university.edu"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">User Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  >
                    <option value="Farmer">Farmer / Agriculture Field Worker</option>
                    <option value="Officer">Agricultural Officer (DAE)</option>
                    <option value="Researcher">Academic Researcher / Student</option>
                    <option value="Admin">System Administrator</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Message / Feedback</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Inquire about model weights, dataset access, or thesis citations..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
