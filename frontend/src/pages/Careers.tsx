import React, { useState, useEffect } from 'react';
import { Briefcase, MapPin, Clock, Send, CheckCircle2, X, FileText, Sparkles } from 'lucide-react';
import { CareerService } from '../services/api';
import { Career } from '../types';

export const Careers: React.FC = () => {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedJob, setSelectedJob] = useState<Career | null>(null);

  // Application Modal Form State
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [resumeLink, setResumeLink] = useState('');
  const [coverNote, setCoverNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchCareers = async () => {
      setLoading(true);
      const data = await CareerService.getCareers();
      setCareers(data);
      setLoading(false);
    };

    fetchCareers();
  }, []);

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSelectedJob(null);
        setApplicantName('');
        setApplicantEmail('');
        setApplicantPhone('');
        setResumeLink('');
        setCoverNote('');
      }, 2500);
    }, 1000);
  };

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold">
            Join Our Team
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Careers at Torrance Life Science
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Build your professional legacy with a dynamic, fast-growing pharmaceutical leader dedicated to scientific innovation and employee growth.
          </p>
        </div>

        {/* Culture Strengths */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">Ethical Environment</h3>
            <p className="text-slate-500 text-xs">Integrity, compliance, and transparent merit-based rewards.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mx-auto">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">Career Escalation</h3>
            <p className="text-slate-500 text-xs">Structured training, product mentorship, and fast-track promotions.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">Pan-India Opportunities</h3>
            <p className="text-slate-500 text-xs">Openings across Sales, R&D, Quality Assurance, and Plant Operations.</p>
          </div>
        </div>

        {/* Current Job Openings */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Current Job Openings</h2>

          {loading ? (
            <div className="py-12 text-center">
              <div className="w-10 h-10 border-4 border-sky-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
              <p className="text-slate-500 text-xs">Fetching job opportunities...</p>
            </div>
          ) : careers.length === 0 ? (
            <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center text-slate-500">
              No active job postings at this moment. Please check back later or send your CV to careers@torancelifescience.com.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {careers.map((job) => (
                <div 
                  key={job._id}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                >
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-sky-50 text-sky-700 text-xs font-semibold border border-sky-200">
                        {job.department}
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 text-xs font-medium">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-sky-500" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Posted recently</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">{job.description}</p>
                  </div>

                  <button
                    onClick={() => setSelectedJob(job)}
                    className="w-full md:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-semibold text-xs transition-colors shrink-0"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-fadeIn">
            
            <div className="p-6 bg-slate-900 text-white flex justify-between items-center">
              <div>
                <span className="text-xs text-sky-400 font-semibold uppercase">Job Application</span>
                <h3 className="text-lg font-bold">{selectedJob.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedJob(null)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Application Submitted!</h4>
                <p className="text-slate-600 text-xs">
                  Thank you for applying for <strong className="text-slate-800">{selectedJob.title}</strong>. Our HR recruitment team will review your profile.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Resume / CV Drive Link *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://drive.google.com/your-resume-link"
                    value={resumeLink}
                    onChange={(e) => setResumeLink(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Introduction / Cover Message</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly state your pharmaceutical experience and key strengths..."
                    value={coverNote}
                    onChange={(e) => setCoverNote(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting Profile...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
