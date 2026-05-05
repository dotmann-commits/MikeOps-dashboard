import { Wrench, TrendingUp, Lightbulb, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/mockData';

// Colour map for tag badges
const tagColorMap: Record<string, string> = {
  orange: 'bg-orange-100 text-orange-700',
  cyan:   'bg-cyan-100 text-cyan-700',
  teal:   'bg-teal-100 text-teal-700',
};

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden border-t border-blue-100 bg-gradient-to-br from-white via-sky-50 to-blue-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
            Project Showcase
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Sample Automation Projects
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl">
            Real-world style examples showing the problem, the solution built, the tools
            used, and the measurable impact delivered.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-xl border border-gray-200 bg-slate-50 overflow-hidden shadow-sm"
            >
              {/* Card header */}
              <div className="bg-white border-b border-gray-200 px-6 py-5">
                <span
                  className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full mb-3 ${
                    tagColorMap[project.tagColor] ?? 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {project.tag}
                </span>
                <h3 className="text-base font-bold text-gray-900">{project.title}</h3>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 px-6 py-5 gap-5">
                {/* Problem */}
                <div className="flex gap-3">
                  <Lightbulb size={16} className="text-orange-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Problem
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">{project.problem}</p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex gap-3">
                  <Wrench size={16} className="text-blue-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Solution
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Tools */}
                <div className="flex gap-3">
                  <CheckCircle2 size={16} className="text-teal-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Tools
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Impact */}
                <div className="flex gap-3 bg-green-50 border border-green-100 rounded-lg p-3 mt-auto">
                  <TrendingUp size={16} className="text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1">
                      Business Impact
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">{project.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
