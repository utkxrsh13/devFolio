export const About = () => {
  const coreSkills = [
    'React.js','TypeScript','Tailwind CSS','Node.js','Express','MongoDB','REST APIs','Accessibility'
  ];
  const exploring = ['Full MERN Stack','Backend Architecture','Scalable Design Systems','Performance Optimization'];
  const skillStyles: Record<string,string> = {
    'React.js': 'hover:bg-cyan-500/10 hover:border-cyan-400/40 hover:shadow-[0_0_10px_rgba(34,211,238,0.35)]',
    'TypeScript': 'hover:bg-blue-500/10 hover:border-blue-400/40 hover:shadow-[0_0_10px_rgba(59,130,246,0.35)]',
    'Tailwind CSS': 'hover:bg-fuchsia-500/10 hover:border-fuchsia-400/40 hover:shadow-[0_0_10px_rgba(217,70,239,0.35)]',
    'Node.js': 'hover:bg-green-500/10 hover:border-green-400/40 hover:shadow-[0_0_10px_rgba(34,197,94,0.35)]',
    'Express': 'hover:bg-slate-500/10 hover:border-slate-400/40 hover:shadow-[0_0_10px_rgba(148,163,184,0.35)]',
    'MongoDB': 'hover:bg-emerald-500/10 hover:border-emerald-400/40 hover:shadow-[0_0_10px_rgba(16,185,129,0.35)]',
    'REST APIs': 'hover:bg-orange-500/10 hover:border-orange-400/40 hover:shadow-[0_0_10px_rgba(249,115,22,0.4)]',
    'Accessibility': 'hover:bg-rose-500/10 hover:border-rose-400/40 hover:shadow-[0_0_10px_rgba(244,63,94,0.35)]',
  };
  const exploringStyles: Record<string,string> = {
    'Full MERN Stack': 'hover:bg-emerald-500/15 hover:shadow-[0_0_12px_rgba(16,185,129,0.35)]',
    'Backend Architecture': 'hover:bg-indigo-500/15 hover:shadow-[0_0_12px_rgba(99,102,241,0.35)]',
    'Scalable Design Systems': 'hover:bg-teal-500/15 hover:shadow-[0_0_12px_rgba(20,184,166,0.35)]',
    'Performance Optimization': 'hover:bg-amber-500/15 hover:shadow-[0_0_12px_rgba(245,158,11,0.35)]',
  };
  return (
    <section id="about" className="py-24 container-section scroll-mt-28">
      <h2 className="section-title">About Me</h2>
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-7 space-y-6 text-white/70 leading-relaxed">
          <p>
            Hi, I'm <span className="text-white font-medium">Utkarsh</span> — a <span className="text-teal-300">frontend developer</span> obsessed with crafting interactive, responsive, and <span className="text-white">accessible</span> user experiences using <span className="text-teal-300">React.js</span>.
          </p>
          <p>
            I love building smooth, pixel‑perfect interfaces that feel intentional and performant. Clean abstractions, component-driven architecture, and thoughtful micro‑interactions are things I care about a lot.
          </p>
          <p>
            I'm currently expanding into the <span className="text-teal-300">full MERN stack</span> — diving deeper into <span className="text-white">Node.js</span>, <span className="text-white">Express</span>, and <span className="text-white">MongoDB</span> to become a well‑rounded full‑stack engineer.
          </p>
            <p>
            Always curious, always learning — I enjoy collaborating, sharing ideas, and building meaningful web experiences. <span className="text-teal-300">Let's create something awesome together.</span>
          </p>

          <div className="space-y-5">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-teal-300/80 mb-2 font-semibold">Core Stack</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                {coreSkills.map(skill => (
                  <li
                    key={skill}
                    className={[
                      'group relative rounded-md border border-white/10 bg-[#13202d]/60 transition-all duration-300 px-3 py-2 flex items-center gap-2 will-change-transform',
                      'hover:-translate-y-0.5 hover:scale-[1.015] backdrop-blur-[2px]',
                      skillStyles[skill] ?? ''
                    ].join(' ')}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-300 shadow-[0_0_0_3px_rgba(45,212,191,0.15)] group-hover:animate-pulse" />
                    <span className="text-white/75 group-hover:text-white/90">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-teal-300/80 mb-2 font-semibold">Currently Exploring</h3>
              <ul className="flex flex-wrap gap-2 text-[11px]">
                {exploring.map(item => (
                  <li
                    key={item}
                    className={[
                      'px-3 py-1.5 rounded-full border border-teal-300/30 text-teal-200/90 bg-teal-300/10 backdrop-blur-[2px] transition-all duration-300 cursor-default',
                      'hover:-translate-y-0.5 hover:border-white/20 hover:text-white',
                      exploringStyles[item] ?? ''
                    ].join(' ')}
                  >{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 flex justify-center">
          <div className="group relative w-64 h-80">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-300/20 via-teal-300/5 to-transparent opacity-60 group-hover:opacity-90 transition" />
            <div className="absolute -inset-2 rounded-2xl bg-teal-300/10 blur-xl group-hover:blur-2xl transition" />
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#101b27] w-full h-full flex items-center justify-center text-white/40 text-sm tracking-wide">
              Photo / Illustration
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
