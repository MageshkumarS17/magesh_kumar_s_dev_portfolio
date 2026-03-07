import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Instagram, MessageCircle, Code, Sparkles, Zap, Download, Terminal, Database, Cpu } from 'lucide-react';
import Scene3D from './Scene3D';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const roles = [
    'Full-Stack And Mobile App Developer',
    'AI/ML Engineer',
    'Game Developer',
    '3D Artist',
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Interactive Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          x: -mousePosition.x * 2,
          y: -mousePosition.y * 2,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />

      {/* Floating Tech Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-1/4 left-[10%] hidden lg:flex items-center justify-center w-16 h-16 rounded-2xl bg-card/80 border border-border shadow-xl backdrop-blur-sm"
        whileHover={{ scale: 1.2, rotate: 15 }}
      >
        <Code className="w-8 h-8 text-primary" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 5, 0] }}
        transition={{ repeat: Infinity, duration: 7, delay: 1 }}
        className="absolute top-1/3 right-[8%] hidden lg:flex items-center justify-center w-14 h-14 rounded-2xl bg-card/80 border border-border shadow-xl backdrop-blur-sm"
        whileHover={{ scale: 1.2, rotate: -15 }}
      >
        <Sparkles className="w-7 h-7 text-secondary" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, delay: 2 }}
        className="absolute bottom-1/3 left-[12%] hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-card/80 border border-border shadow-xl backdrop-blur-sm"
        whileHover={{ scale: 1.2, rotate: 10 }}
      >
        <Zap className="w-6 h-6 text-primary" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -8, 8, 0] }}
        transition={{ repeat: Infinity, duration: 8, delay: 0.5 }}
        className="absolute top-[45%] right-[15%] hidden lg:flex items-center justify-center w-14 h-14 rounded-2xl bg-card/80 border border-border shadow-xl backdrop-blur-sm"
        whileHover={{ scale: 1.2, rotate: -10 }}
      >
        <Terminal className="w-7 h-7 text-primary" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 6, -6, 0] }}
        transition={{ repeat: Infinity, duration: 6.5, delay: 1.5 }}
        className="absolute bottom-[25%] right-[10%] hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-card/80 border border-border shadow-xl backdrop-blur-sm"
        whileHover={{ scale: 1.2, rotate: 15 }}
      >
        <Database className="w-6 h-6 text-secondary" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 7.5, delay: 2.5 }}
        className="absolute top-[20%] right-[25%] hidden lg:flex items-center justify-center w-10 h-10 rounded-lg bg-card/80 border border-border shadow-xl backdrop-blur-sm"
        whileHover={{ scale: 1.2, rotate: -15 }}
      >
        <Cpu className="w-5 h-5 text-primary" />
      </motion.div>
      
      {/* 3D Scene */}
      <Scene3D />

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full border border-primary/30 bg-primary/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-primary">Available for Opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
          >
            Hello ! I'm{' '}
            <span className="gradient-text text-glow">Magesh Kumar S</span>
          </motion.h1>

          {/* Animated Role Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            
            className="h-12 md:h-14 mb-6 overflow-hidden"
          >
            <motion.p
              key={currentRole}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              
              className="text-2xl md:text-3xl font-semibold text-primary"
            >
              {roles[currentRole]}
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Transforming complex challenges into elegant solutions through{' '}
            <span className="text-primary font-medium">MERN Stack & Mobile App </span>,{' '}
            <span className="text-secondary font-medium">AI & Machine Learning</span>,{' '}
            <span className="text-primary font-medium">Game Development</span> & {' '}
            <span className="text-secondary font-medium">3D Modeling</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn btn-hero btn-xl group"
            >
              <span>Explore My Work</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </button>
            <a href="/resume.pdf" download className="btn btn-hero-outline btn-xl flex items-center gap-2">
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: 'https://github.com/MageshkumarS17', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/magesh-kumar-s-89187b2a5/', label: 'LinkedIn' },
              { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
              { icon: MessageCircle, href: 'https://wa.me/919940527689', label: 'WhatsApp' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
