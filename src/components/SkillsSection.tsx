import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Html | Css | JavaScript', level:100},
      { name: 'React.js', level: 100 },
      { name: 'TypeScript', level: 100 },
      { name: 'Tailwind CSS', level:100 },
      { name: 'Next.js', level: 95 },
      { name: 'Others', level: 80 }
      
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB', level: 80 },
      { name: 'Firebase', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'others', level: 80 }
    ],
  },
  {
    title: 'AI & ML',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'pyTorch', level: 85 },
      { name: 'Tensorflow', level: 60 },
      { name: 'OpenAI & Gemini APIs', level: 75 },
      { name: 'scikit-learn', level:65},
      { name: 'others', level:60 }
    ],
  },
  {
    title: 'Creative Game development & 3D Design',
    skills: [
      { name: 'Godot', level: 100 },
      { name: 'Unity Game Engine', level: 80 },
      { name: 'UnReal Engine', level: 70 },
      { name: 'Blender', level: 65 },
      { name: 'Three.js', level: 75 },
      { name: 'Others', level: 50 }
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container-custom relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            My Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Technologies I{' '}
            <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A Diverse Toolkit Spanning Web & Mobile Development, Artificial intelligence,
            and Creative Technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="gradient-border p-6"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={categoryIndex * 0.1 + skillIndex * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h4 className="text-lg font-medium mb-4 text-muted-foreground">
            Also familiar with:
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git', 'Github', 'Docker', 'Firebase', 'GraphQL', 'Redux',
              'Figma', 'VS Code', 'Android Studio', 'XCode', 'ChatGpt', 'Gemini'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                className="px-4 py-2 rounded-full text-sm border border-border bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
