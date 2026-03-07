import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Award, Rocket, Target, BookOpen } from 'lucide-react';

interface JourneyItem {
  id: number;
  type: 'education' | 'experience' | 'achievement' | 'milestone';
  title: string;
  organization: string;
  date: string;
  description: string;
}

const journeyItems: JourneyItem[] = [
  {
    id: 1,
    type: 'milestone',
    title: 'Began Programming Journey',
    organization: 'Self-Directed Learning',
    date: '2022',
    description: 'Started learning web development through structured online courses and hands-on project building.',
  },
  {
    id: 2,
    type: 'education',
    title: 'Computer Science Studies',
    organization: 'Jaya Engineering College, Chennai',
    date: '2023',
    description: 'Pursuing B.E CSE Degree with focus on software engineering, algorithms, and artificial intelligence.',
  },
  {
    id: 3,
    type: 'achievement',
    title: 'First Professional Project',
    organization: 'Freelance Development',
    date: '2023',
    description: 'Successfully delivered a responsive business website, establishing foundation for professional work.',
  },
  {
    id: 4,
    type: 'experience',
    title: 'Open Source Contributor',
    organization: 'GitHub & MERN Stack Community',
    date: '2023',
    description: 'Active contributor to React and Node.js ecosystems, collaborating with developers worldwide.',
  },
  {
    id: 5,
    type: 'achievement',
    title: 'AI & Machine Learning Certification',
    organization: 'Professional Development',
    date: '2024',
    description: 'Completed comprehensive certification covering deep learning, NLP, and computer vision.',
  },
  {
    id: 6,
    type: 'milestone',
    title: 'Handling Real-World Problems in AI/ML',
    organization: 'Personal Projects',
    date: '2024',
    description: 'Expanded expertise into AI/ML for interactive Reliablity.',
  },
  
  {
    id: 3,
    type: 'achievement',
    title: 'My First Hackathon Win',
    organization: 'R.M.K Engineering College',
    date: '2025',
    description: 'After Lots Of Hardworks And Efforts, I Had Won My First Hackathon For Developing Bus Tracking Mobile Application.',
  },
  {
    id: 4,
    type: 'experience',
    title: 'NMIT2K25 Hacks',
    organization: 'NMIT, Bangalore',
    date: '2025',
    description: 'Selected for NMIT2K25 Hackathon which is held at Bangalore. I had Gained Massive Experience in the Venue And Developed An Mobile & Game Scored 75% In Hackathon Review',
  },
{
    id: 5,
    type: 'achievement',
    title: 'Attended Hackathons & Events In 2k25',
    organization: 'Professional Development',
    date: '2025',
    description: 'Participated in various hackathons and tech events in 2025, gaining hands-on experience in problem-solving, teamwork, and building innovative solutions across different technologies.',
  },
  {
    id: 6,
    type: 'milestone',
    title: 'My First Job as CTO @ Golden Z Vision',
    organization: 'Golden Z Vision - Present',
    date: '2026',
    description: 'Started my professional journey as the Chief Technology Officer at Golden Z Vision, leading technology initiatives, managing development projects, and building innovative digital solutions.',
  }

  
];

const learningRoadmap = [
  { skill: 'Web & Mobile Development', progress: 100, status: 'Completed' },
  { skill: 'AI/ML Development', progress: 80, status: 'Moderate' },
  { skill: 'Game Development', progress: 80, status: 'Practically Experienced' },
  { skill: '3D Artist', progress: 60, status: 'Exploring' },
];

const iconMap = {
  education: GraduationCap,
  experience: Briefcase,
  achievement: Award,
  milestone: Rocket,
};

const colorMap = {
  education: 'from-blue-500 to-cyan-500',
  experience: 'from-purple-500 to-pink-500',
  achievement: 'from-yellow-500 to-orange-500',
  milestone: 'from-green-500 to-emerald-500',
};

function TimelineItem({ item, index }: { item: JourneyItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = iconMap[item.type];
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center gap-8 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <div className="gradient-border p-6 card-hover inline-block w-full md:max-w-md">
          <span className="text-sm text-muted-foreground">{item.date}</span>
          <h3 className="text-lg font-semibold mt-1 mb-1">{item.title}</h3>
          <p className="text-primary text-sm mb-2">{item.organization}</p>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </div>
      </div>

      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colorMap[item.type]} flex items-center justify-center shadow-lg`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}

export default function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container-custom relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Professional Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Growth &{' '}
            <span className="gradient-text">Evolution</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of my professional development, achievements, and continuous learning journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-20">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Learning Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="gradient-border p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Learning Roadmap</h3>
              <p className="text-sm text-muted-foreground">What I'm currently exploring and mastering</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {learningRoadmap.map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm">{item.skill}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{item.status}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.progress}%` } : {}}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-border flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="w-4 h-4" />
            <span>Committed to continuous learning and staying current with emerging technologies</span>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          {Object.entries(iconMap).map(([type, Icon]) => (
            <div key={type} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${colorMap[type as keyof typeof colorMap]} flex items-center justify-center`}>
                <Icon className="w-3 h-3 text-white" />
              </div>
              <span className="capitalize">{type}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
