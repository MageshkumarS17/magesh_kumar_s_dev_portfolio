import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, ChevronDown, ChevronUp, Database, Lock, Cpu, Layers, Play, Settings } from 'lucide-react';

type ProjectCategory = 'all' | 'web' | 'ai' | 'game' | '3d';

interface CaseStudy {
  problem: string;
  solution: string;
  results: string;
  learnings: string;
  technicalDetails?: {
    architecture?: string;
    authFlow?: string;
    database?: string;
    dataset?: string;
    model?: string;
    mechanics?: string;
    performance?: string;
  };
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  caseStudy: CaseStudy;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Content Platform',
    description: 'An intelligent content generation and management platform leveraging OpenAI GPT APIs for automated blog creation, SEO optimization, and multilingual content support.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    category: ['web', 'ai'],
    technologies: ['React', 'Node.js', 'OpenAI API', 'MongoDB', 'Express', 'JWT'],
    liveUrl: '#',
    githubUrl: 'https://github.com/MageshkumarS17',
    featured: true,
    caseStudy: {
      problem: 'Content creators spend 4-6 hours daily on writing and SEO optimization, limiting scalability and increasing operational costs for businesses.',
      solution: 'Developed an AI-powered platform that generates SEO-optimized content in minutes, featuring tone customization, keyword integration, and multi-language support with real-time editing.',
      results: 'Reduced content creation time by 80%, increased user engagement by 45%, and successfully onboarded 100+ beta users within the first month.',
      learnings: 'Mastered prompt engineering techniques, learned to balance AI automation with human oversight, and understood the importance of rate limiting and caching for API cost optimization.',
      technicalDetails: {
        architecture: 'RESTful API with microservices pattern, Redis caching layer, and webhook integrations for CMS platforms',
        authFlow: 'JWT-based authentication with refresh tokens, OAuth 2.0 social login (Google, GitHub), and role-based access control',
        database: 'MongoDB with Mongoose ODM, indexed queries for performance, and replica sets for high availability',
      },
    },
  },
  {
    id: 2,
    title: 'E-Commerce Marketplace',
    description: 'A comprehensive multi-vendor marketplace with real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop',
    category: ['web'],
    technologies: ['MERN Stack', 'Stripe', 'Redux Toolkit', 'Tailwind CSS', 'Socket.io'],
    liveUrl: '#',
    githubUrl: 'https://github.com/MageshkumarS17',
    caseStudy: {
      problem: 'Small businesses lack affordable, user-friendly platforms to sell products online with integrated inventory and payment solutions.',
      solution: 'Built a scalable marketplace enabling vendors to manage products, process payments, and track orders through an intuitive interface with real-time notifications.',
      results: 'Processed $10,000+ in test transactions, achieved 99.9% uptime, and reduced vendor onboarding time from days to under 30 minutes.',
      learnings: 'Gained expertise in payment gateway integration, learned to handle race conditions in inventory management, and implemented effective state management patterns.',
      technicalDetails: {
        architecture: 'Monolithic Express backend with modular controllers, service layer pattern, and event-driven notifications via Socket.io',
        authFlow: 'Session-based auth with Redis store, Stripe Connect for vendor payouts, and 2FA for admin accounts',
        database: 'MongoDB with aggregation pipelines for analytics, text search indexes for product discovery, and transaction support for order processing',
      },
    },
  },
  {
    id: 3,
    title: 'Space Exploration Game',
    description: 'An immersive 3D space exploration adventure featuring procedurally generated galaxies, resource management, and strategic combat systems.',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&auto=format&fit=crop',
    category: ['game', '3d'],
    technologies: ['Unity 3D', 'C#', 'Blender', 'Photon PUN', 'Shader Graph'],
    liveUrl: '#',
    githubUrl: 'https://github.com/MageshkumarS17',
    featured: true,
    caseStudy: {
      problem: 'Players seek engaging space games with meaningful exploration but find most options either too complex or lacking depth in procedural content.',
      solution: 'Created a procedurally generated universe with balanced gameplay mechanics, intuitive controls, and progressive difficulty that scales with player advancement.',
      results: 'Generated 1,000+ unique planets, achieved 60+ FPS on mid-range hardware, and received positive feedback from 50+ playtesters for gameplay loop engagement.',
      learnings: 'Mastered procedural generation algorithms, learned optimization techniques for real-time 3D rendering, and understood player psychology in game design.',
      technicalDetails: {
        mechanics: 'Noise-based terrain generation, gravity simulation, ship physics with realistic thrust, and AI behavior trees for NPCs',
        performance: 'LOD systems for distant objects, occlusion culling, object pooling for projectiles, and async scene loading for seamless travel',
      },
    },
  },
  {
    id: 4,
    title: 'Sentiment Analysis Dashboard',
    description: 'Real-time social media sentiment analysis platform with interactive visualizations, trend prediction, and automated reporting capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    category: ['web', 'ai'],
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'FastAPI', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/MageshkumarS17',
    caseStudy: {
      problem: 'Brands struggle to monitor and respond to customer sentiment across multiple social platforms in real-time, missing critical feedback opportunities.',
      solution: 'Developed an ML-powered dashboard that aggregates social data, classifies sentiment with 92% accuracy, and provides actionable insights through interactive visualizations.',
      results: 'Analyzed 50,000+ posts in testing, reduced manual monitoring time by 90%, and enabled proactive customer engagement with real-time alerts.',
      learnings: 'Deepened understanding of NLP preprocessing, learned to handle streaming data at scale, and mastered data visualization best practices.',
      technicalDetails: {
        dataset: 'Trained on 100,000+ labeled social media posts, augmented with emoji sentiment mapping and domain-specific vocabulary',
        model: 'Fine-tuned BERT model for sentiment classification, achieving 92% accuracy on test set with F1 score of 0.89',
        architecture: 'FastAPI backend with async processing, WebSocket connections for real-time updates, and Redis pub/sub for event distribution',
      },
    },
  },
  {
    id: 5,
    title: '3D Product Configurator',
    description: 'Interactive real-time product visualization tool enabling customers to customize products with instant 3D preview and AR integration.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop',
    category: ['web', '3d'],
    technologies: ['Three.js', 'React', 'WebGL', 'AR.js', 'GLTF', 'Draco Compression'],
    liveUrl: '#',
    githubUrl: 'https://github.com/MageshkumarS17',
    caseStudy: {
      problem: 'E-commerce conversion rates suffer because customers cannot visualize customized products before purchase, leading to high return rates.',
      solution: 'Built a real-time 3D configurator with material swapping, color customization, and AR preview that works across devices without plugins.',
      results: 'Improved product visualization by 100%, reduced model load times by 70% through optimization, and enabled AR viewing on 90% of modern smartphones.',
      learnings: 'Mastered 3D web optimization techniques, learned PBR material workflows, and gained expertise in cross-platform AR implementation.',
      technicalDetails: {
        performance: 'Draco mesh compression, progressive texture loading, instanced rendering for complex scenes, and aggressive LOD for mobile devices',
        architecture: 'Component-based Three.js integration with React, declarative scene management, and WebWorker-based model processing',
      },
    },
  },
  {
    id: 6,
    title: 'Puzzle Adventure Game',
    description: 'A cerebral puzzle game featuring 50+ handcrafted levels, dynamic difficulty adjustment, and an emotionally engaging narrative.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop',
    category: ['game'],
    technologies: ['Unity 3D', 'C#', 'Shader Graph', 'DOTween', 'Addressables'],
    liveUrl: '#',
    githubUrl: 'https://github.com/MageshkumarS17',
    caseStudy: {
      problem: 'Puzzle games often lack replay value and fail to maintain player engagement beyond initial novelty, resulting in high churn rates.',
      solution: 'Designed a progressive puzzle system with adaptive difficulty, achievement unlocks, and narrative integration that rewards long-term engagement.',
      results: 'Created 50+ unique puzzles, achieved average session time of 25 minutes, and maintained 70% day-7 retention in playtesting.',
      learnings: 'Learned level design principles, understood player flow and difficulty curves, and implemented effective analytics for gameplay optimization.',
      technicalDetails: {
        mechanics: 'State machine-based puzzle logic, undo/redo system with command pattern, and hint system with progressive reveal',
        performance: 'Asset bundling with Addressables, memory-efficient level streaming, and mobile-optimized shaders for broad device support',
      },
    },
  },
];

const categories: { key: ProjectCategory; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Development' },
  { key: 'ai', label: 'AI & Machine Learning' },
  { key: 'game', label: 'Game Development' },
  { key: '3d', label: '3D & Interactive' },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryIcon = (category: ProjectCategory[]) => {
    if (category.includes('ai')) return Cpu;
    if (category.includes('game')) return Play;
    if (category.includes('3d')) return Layers;
    return Database;
  };

  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group gradient-border overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        {project.featured && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium flex items-center gap-1">
            <Sparkles size={12} />
            Featured
          </div>
        )}
        <div className="absolute top-3 left-3 p-2 rounded-lg bg-card/80 backdrop-blur-sm">
          <CategoryIcon className="w-4 h-4 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Case Study Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between py-2 px-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors mb-4 text-sm font-medium"
        >
          <span>View Case Study</span>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {/* Case Study Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="space-y-4 pb-4">
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Challenge
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{project.caseStudy.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-secondary mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Solution
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{project.caseStudy.solution}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-green-500 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Results
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{project.caseStudy.results}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-amber-500 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Key Learnings
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{project.caseStudy.learnings}</p>
                </div>

                {/* Technical Details */}
                {project.caseStudy.technicalDetails && (
                  <div className="pt-3 border-t border-border">
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Settings size={14} />
                      Technical Implementation
                    </h4>
                    <div className="space-y-2">
                      {project.caseStudy.technicalDetails.architecture && (
                        <div className="flex gap-2">
                          <Database className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                          <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground">Architecture:</span> {project.caseStudy.technicalDetails.architecture}</p>
                        </div>
                      )}
                      {project.caseStudy.technicalDetails.authFlow && (
                        <div className="flex gap-2">
                          <Lock className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                          <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground">Auth Flow:</span> {project.caseStudy.technicalDetails.authFlow}</p>
                        </div>
                      )}
                      {project.caseStudy.technicalDetails.database && (
                        <div className="flex gap-2">
                          <Database className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                          <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground">Database:</span> {project.caseStudy.technicalDetails.database}</p>
                        </div>
                      )}
                      {project.caseStudy.technicalDetails.dataset && (
                        <div className="flex gap-2">
                          <Cpu className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                          <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground">Dataset:</span> {project.caseStudy.technicalDetails.dataset}</p>
                        </div>
                      )}
                      {project.caseStudy.technicalDetails.model && (
                        <div className="flex gap-2">
                          <Cpu className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                          <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground">Model:</span> {project.caseStudy.technicalDetails.model}</p>
                        </div>
                      )}
                      {project.caseStudy.technicalDetails.mechanics && (
                        <div className="flex gap-2">
                          <Play className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                          <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground">Mechanics:</span> {project.caseStudy.technicalDetails.mechanics}</p>
                        </div>
                      )}
                      {project.caseStudy.technicalDetails.performance && (
                        <div className="flex gap-2">
                          <Layers className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                          <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground">Performance:</span> {project.caseStudy.technicalDetails.performance}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-glow btn-sm">
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              <Github size={14} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === 'all' || project.category.includes(activeCategory)
  );

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Featured{' '}
            <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore detailed breakdowns of my projects, including challenges faced, solutions implemented, and measurable outcomes achieved.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
