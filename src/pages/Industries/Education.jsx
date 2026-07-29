import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, CheckCircle, Book, UserCheck } from 'lucide-react';

const Education = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="border-b border-white/10 pb-12 space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple mb-2">
          <GraduationCap className="w-8 h-8" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
          LMS & Portals for <br />
          <span className="bg-gradient-to-r from-brand-purple to-brand-indigo bg-clip-text text-transparent">
            Education
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          Interactive learning management system layouts, student progress trackers, course listings, and teacher scheduling engines.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white">Engaging Digital Classrooms</h2>
          <p className="text-gray-400 leading-relaxed">
            Online learning platforms need to be highly structured and reliable. We help schools, universities, and private instructors build custom learning directories where students can view lessons, track completed quizzes, and message mentors directly in a clean workspace.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <Book className="w-6 h-6 text-brand-purple" />
              <h4 className="font-bold text-white">Curriculum Layout</h4>
              <p className="text-xs text-gray-400">Organized chapter selectors, text readouts, and video embed modules.</p>
            </div>
            <div className="bg-dark-card border border-white/5 p-6 rounded-2xl space-y-3">
              <UserCheck className="w-6 h-6 text-brand-indigo" />
              <h4 className="font-bold text-white">Student Progress</h4>
              <p className="text-xs text-gray-400">Track finished lessons and present certificates upon curriculum completion.</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-card border border-white/5 p-8 rounded-3xl space-y-6 h-fit">
          <h3 className="text-lg font-bold text-white">Target Solutions</h3>
          <ul className="space-y-4">
            {[
              'Faceted course lists layout',
              'Lesson structure selectors',
              'Teacher booking calendars',
              'Student profile portals',
              'Quiz progress logs widgets',
              'PDF document download hubs'
            ].map((sol, i) => (
              <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{sol}</span>
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-white/5">
            <Link to="/contact" className="w-full inline-flex justify-center items-center py-3 bg-gradient-to-r from-brand-purple to-brand-indigo text-white font-bold rounded-xl text-sm">
              Build Learning Platform
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
