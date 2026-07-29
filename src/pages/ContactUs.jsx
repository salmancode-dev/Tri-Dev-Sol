import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', service: 'Custom Web Dev' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '', service: 'Custom Web Dev' });
    }, 3000);
  };

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Let's <span className="bg-gradient-to-r from-brand-indigo to-brand-pink bg-clip-text text-transparent">Connect</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Have an idea or project? Drop us a message, and our engineering team will get back to you within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Info Column */}
        <div className="space-y-8 bg-dark-card border border-white/5 p-8 rounded-3xl h-fit">
          <h3 className="text-xl font-bold text-white">Contact Info</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email Us</p>
                <p className="text-sm text-gray-300">hello@tridevsol.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-brand-indigo/10 flex items-center justify-center text-brand-indigo shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Call Us</p>
                <p className="text-sm text-gray-300">+92 (300) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-brand-pink/10 flex items-center justify-center text-brand-pink shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Office</p>
                <p className="text-sm text-gray-300">Lahore, Punjab, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-2 bg-dark-card border border-white/5 p-8 rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Select Service</label>
              <select 
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-brand-purple transition-colors"
              >
                <option value="Custom Web Dev" className="bg-dark-card">Custom Web Application Development</option>
                <option value="MVP Dev" className="bg-dark-card">MVP Development</option>
                <option value="White-label Frontend" className="bg-dark-card">White-label Frontend Development</option>
                <option value="AI Integration" className="bg-dark-card">AI Feature Integration</option>
                <option value="API Integration" className="bg-dark-card">API Integration</option>
                <option value="E-commerce Dev" className="bg-dark-card">E-commerce Development</option>
                <option value="Landing Pages" className="bg-dark-card">Landing Pages</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
              <textarea 
                rows="5"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors resize-none"
                placeholder="Describe your project, deadlines, and budget considerations..."
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all duration-300 ${
                submitted 
                  ? 'bg-emerald-600 text-white cursor-default' 
                  : 'bg-gradient-to-r from-brand-purple to-brand-indigo hover:from-brand-indigo hover:to-brand-purple text-white shadow-lg shadow-brand-purple/20'
              }`}
            >
              {submitted ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Message Sent Successfully!</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
