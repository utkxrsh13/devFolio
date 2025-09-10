import { skills } from '../data/siteData';

export const Skills = () => {
  return (
  <section id="skills" className="py-24 container-section scroll-mt-28">
      <h2 className="section-title">Skills</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {skills.map(skill => (
          <div key={skill.name} className="group glass rounded-xl p-4 flex flex-col items-center gap-3 text-center border-white/5 card-hover">
            <div className="text-3xl drop-shadow-lg transition group-hover:scale-110">{skill.icon}</div>
            <span className="text-sm font-medium text-white/80">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
