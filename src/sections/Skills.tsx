import { skills } from '../data/siteData';
import { motion } from 'framer-motion';

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 container-section scroll-mt-28">
      {/* subtle background matching the theme */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-0 w-[640px] h-[640px] rounded-full bg-gradient-to-tr from-teal-500/10 via-cyan-400/5 to-transparent blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_20%_20%,#2dd4bf_0,transparent_60%)]" />
      </div>

      <div className="flex items-center gap-6 mb-10">
        <h2 className="flex items-center gap-3 text-xl md:text-2xl font-semibold tracking-tight">
          <span className="text-teal-300 font-mono text-sm">02.</span>
          <span className="text-white">Skills</span>
          <span className="hidden md:inline-block h-px flex-1 bg-white/10" />
        </h2>
      </div>

      <motion.ul
        role="list"
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-20% 0px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
      >
        {skills.map((skill) => (
          <motion.li
            key={skill.name}
            role="listitem"
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            className="group relative glass rounded-xl p-4 flex flex-col items-center gap-3 text-center border-white/5 card-hover overflow-hidden"
            tabIndex={0}
          >
            {/* sheen */}
            <span aria-hidden className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-teal-300/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
            <div className="text-3xl drop-shadow-lg transition group-hover:scale-110">{skill.icon}</div>
            <span className="text-sm font-medium text-white/80">{skill.name}</span>
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-teal-300/0 group-hover:ring-1 group-hover:ring-teal-300/30 transition" />
            <span className="sr-only">Skill: {skill.name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};
