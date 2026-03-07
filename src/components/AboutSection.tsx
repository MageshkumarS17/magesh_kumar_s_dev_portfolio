import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Gamepad2, Box, Github, Star, GitFork } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Building scalable web & Mobile applications and modern architectures',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Developing intelligent solutions using cutting-edge ML frameworks',
  },
  {
    icon: Gamepad2,
    title: 'Game Development',
    description: 'Creating immersive interactive experiences with Unity and Unreal',
  },
  {
    icon: Box,
    title: '3D Modeling & Graphics',
    description: 'Designing stunning visual assets and real-time 3D environments',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="container-custom relative">

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* PROFILE PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* glowing ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary via-secondary to-primary opacity-20 blur-xl animate-pulse-glow" />

              {/* border ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px]">
                <div className="w-full h-full rounded-full bg-background" />
              </div>

              {/* PHOTO */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30">

                <img
  src="/profile.jpg"
  alt="Magesh Kumar"
  className="w-full h-full object-cover object-top"
/>

              </div>

              {/* floating icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -right-4 top-8 px-3 py-2 rounded-lg bg-card border border-border shadow-lg"
              >
                🚀
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -left-4 bottom-12 px-3 py-2 rounded-lg bg-card border border-border shadow-lg"
              >
                💻
              </motion.div>

            </div>
          </motion.div>

          {/* ABOUT TEXT */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >

            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              About Me
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Passionate Developer &{' '}
              <span className="gradient-text">Problem Solver</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm Magesh Kumar S, a dedicated developer from Chennai, India. "On a Mission to Build
              Meaningful Digital Experiences. With Expertise Spanning Modern Web & Mobile Technologies,
              Artificial Intelligence/Machine Learning, Game Development and 3D Design, I Transform Complex
              Challenges into Elegant, Scalable Solutions"
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              My Approach combines Technical Proficiency with Creative Problem Solving,
              Ensuring Every Project Delivers Both Functional Excellence and Exceptional
              User Experience.
            </p>

            {/* GITHUB BUTTON */}

            <motion.a
              href="https://github.com/MageshkumarS17"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-4 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <Github className="w-6 h-6 text-primary" />

              <div className="text-left">
                <p className="font-semibold group-hover:text-primary transition-colors">
                  View GitHub Profile
                </p>
                <p className="text-sm text-muted-foreground">
                  Explore my open-source contributions
                </p>
              </div>

              <div className="flex items-center gap-3 ml-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4" /> Stars
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-4 h-4" /> Repos
                </span>
              </div>
            </motion.a>

          </motion.div>

        </div>

        {/* HIGHLIGHT CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {highlights.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group gradient-border p-6 card-hover"
            >

              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}