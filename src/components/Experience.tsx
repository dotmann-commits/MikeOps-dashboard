import { CheckCircle2, Briefcase } from 'lucide-react';
import { experiences } from '../data/mockData';

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden border-t border-blue-100 bg-gradient-to-br from-slate-50 via-blue-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
            Work Experience
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Current Role &amp; Responsibilities
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="bg-slate-50 rounded-xl border border-gray-200 p-8"
            >
              {/* Role header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <Briefcase size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-sm text-gray-500">{exp.company}</p>
                  </div>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                  {exp.period}
                </span>
              </div>

              {/* Highlights */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {exp.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
