import { skillGroups } from '../data/mockData';

// Colour map for badge and progress bar accents
const colorMap: Record<string, { badge: string; bar: string; border: string }> = {
  blue:   { badge: 'bg-blue-100 text-blue-700',   bar: 'bg-blue-500',   border: 'border-blue-200' },
  green:  { badge: 'bg-green-100 text-green-700',  bar: 'bg-green-500',  border: 'border-green-200' },
  orange: { badge: 'bg-orange-100 text-orange-700',bar: 'bg-orange-500', border: 'border-orange-200' },
  teal:   { badge: 'bg-teal-100 text-teal-700',    bar: 'bg-teal-500',   border: 'border-teal-200' },
  cyan:   { badge: 'bg-cyan-100 text-cyan-700',    bar: 'bg-cyan-500',   border: 'border-cyan-200' },
  rose:   { badge: 'bg-rose-100 text-rose-700',    bar: 'bg-rose-500',   border: 'border-rose-200' },
};

interface SkillBarProps {
  name: string;
  level: number;
  description: string;
  barColor: string;
}

function SkillBar({ name, level, description, barColor }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1">
        <p className="text-sm font-semibold text-gray-800">{name}</p>
        <span className="text-xs font-medium text-gray-500">{level}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-1">
        <div
          className={`h-2 rounded-full ${barColor}`}
          style={{ width: `${level}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-t border-blue-100 bg-gradient-to-br from-white via-blue-50/70 to-cyan-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
            Skill Dashboard
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Technical &amp; Operational Skills
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl">
            A snapshot of current skill levels across platform engineering, operations,
            automation, and development — updated as I grow.
          </p>
        </div>

        {/* Skill group grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const colors = colorMap[group.color] ?? colorMap.blue;
            return (
              <div
                key={group.id}
                className={`bg-white rounded-xl border ${colors.border} p-6 shadow-sm`}
              >
                {/* Group label */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5 ${colors.badge}`}>
                  {group.label}
                </span>

                {/* Skills list */}
                <div className="space-y-5">
                  {group.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      description={skill.description}
                      barColor={colors.bar}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
