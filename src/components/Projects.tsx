import { useState } from "react";
import { ExternalLink, Github, Bot, Calendar, BarChart3, ArrowUpRight, ChevronDown, ChevronUp, MessageSquare, BookOpen, CheckSquare, Users, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "SkillSync AI Next-Gen Recruitment Intelligence System",
    description: "AI-powered Recruitment Intelligence System using LangChain, GPT-4o, and RAG for automated resume auditing & interview prepration.",
    tech: ["LangChain 0.3 (RetrievalQA, Vector Stores, Text Splitters)", "OpenAI GPT-4o", "all-MiniLM-L6-v2", "FAISS", "Streamlit", "LangChain", "Docker & Hugging Face Spaces", "GitHub Actions", "PyPDF2"],
    icon: Users,
    github: "https://github.com/Shiwam-m/SkillSync-AI",
    live: "https://shiwammaddy-skillsync-ai.hf.space/",
    highlights: ["ats-optimizer", "recruitment-tool", "RAG Search", "Docker & Hugging Face Spaces"],
    gradient: "from-cyan-500 to-blue-600",
    accentColor: "primary",
    featured: true,
  },
  {
    title: "Customer Support AI Chatbot",
    description: "Multilingual AI chatbot with RAG document search, voice input/output, and automated deployment pipeline.",
    tech: ["Azure OpenAI", "Whisper", "ElevenLabs", "FAISS", "Streamlit", "LangChain", "Docker", "GitHub Actions"],
    icon: Bot,
    github: "https://github.com/Shiwam-m/Customer-support-boat",
    live: "https://github.com/Shiwam-m/Customer-support-boat",
    highlights: ["Multilingual Support", "Voice I/O", "RAG Search", "CI/CD"],
    gradient: "from-cyan-500 to-blue-600",
    accentColor: "primary",
    featured: true,
  },
  {
    title: "Boston Housing Price Prediction",
    description: "End-to-end ML project with exploratory data analysis, feature engineering, and model deployment using Pickle.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    icon: BarChart3,
    github: "https://github.com/Shiwam-m/BostonHousePricing",
    live: "https://github.com/Shiwam-m/BostonHousePricing",
    highlights: ["EDA", "Linear Regression", "Model Deployment"],
    gradient: "from-emerald-500 to-teal-600",
    accentColor: "primary",
    featured: true,
  },
  {
    title: "AI Chatbot UI",
    description: "Frontend chatbot interface integrated with OpenAI APIs for AI-powered conversational responses.",
    tech: ["React.js", "OpenAI API", "JavaScript", "CSS"],
    icon: MessageSquare,
    github: "https://github.com/shiwam",
    live: "#",
    highlights: ["Real-time AI", "Modern UI", "API Integration"],
    gradient: "from-pink-500 to-rose-600",
    accentColor: "accent",
    featured: false,
  },
  {
    title: "Java-Based E-learning Portal",
    description: "LMS platform with user registration, course management, and admin dashboard using JSP & Servlets.",
    tech: ["Java", "JSP", "Servlets", "MySQL", "HTML/CSS"],
    icon: BookOpen,
    github: "https://github.com/shiwam",
    live: "#",
    highlights: ["User Registration", "Course Management", "Admin Dashboard"],
    gradient: "from-orange-500 to-amber-600",
    accentColor: "primary",
    featured: false,
  },
  {
    title: "Task Manager App",
    description: "Full-stack task management application with backend APIs and MongoDB storage.",
    tech: ["Node.js", "Express", "MongoDB", "JavaScript"],
    icon: CheckSquare,
    github: "https://github.com/shiwam",
    live: "#",
    highlights: ["CRUD Operations", "RESTful APIs", "Database Integration"],
    gradient: "from-blue-500 to-indigo-600",
    accentColor: "accent",
    featured: false,
  },
  {
    title: "Attendance Management System",
    description: "JavaScript-based attendance tracking with file handling capabilities.",
    tech: ["JavaScript", "Node.js", "File System"],
    icon: Users,
    github: "https://github.com/shiwam",
    live: "#",
    highlights: ["Attendance Tracking", "File Handling", "Data Persistence"],
    gradient: "from-teal-500 to-cyan-600",
    accentColor: "primary",
    featured: false,
  },
  {
    title: "E-commerce Backend",
    description: "Complete backend for e-commerce with Product, Cart, Orders, and Reviews APIs with JWT authentication.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    icon: ShoppingCart,
    github: "https://github.com/shiwam",
    live: "#",
    highlights: ["Product APIs", "Cart & Orders", "JWT Auth"],
    gradient: "from-purple-500 to-fuchsia-600",
    accentColor: "accent",
    featured: false,
  },
  // {
  //   title: "SmartMeet – AI Meeting Scheduler",
  //   description: "NLP-based meeting scheduler with natural language understanding, responsive UI, and automated email notifications.",
  //   tech: ["Flask", "React", "Azure OpenAI", "Tailwind CSS", "SMTP"],
  //   icon: Calendar,
  //   github: "https://github.com/Shiwam-m/An-AI-powered-Meeting-Scheduler",
  //   live: "https://github.com/Shiwam-m/An-AI-powered-Meeting-Scheduler",
  //   highlights: ["NLP Scheduling", "React UI", "Email Automation"],
  //   gradient: "from-violet-500 to-purple-600",
  //   accentColor: "accent",
  //   featured: true,
  // },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const additionalProjects = projects.filter((p) => !p.featured);
  const displayedProjects = showAll ? projects : featuredProjects;

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">
              <span className="text-gradient">Projects</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* The Grid Container */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                // Entrance Animation (The smoothness you wanted)
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                // Delay creates the staggered "pop-in" effect on load
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1,
                  layout: { duration: 0.4 } // Smooth movement when grid expands
                }}
                // Hover effect restored
                whileHover={{ y: -12 }}
                className="group relative h-full"
              >
                {/* Hover Glow Effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                />

                <div className="relative h-full glass-card rounded-2xl overflow-hidden border-transparent group-hover:border-primary/30 transition-all duration-500 bg-card shadow-lg">
                  {/* Top color bar */}
                  <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

                  <div className="p-6">
                    {/* Icon & Links */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <project.icon className="w-6 h-6" />
                      </motion.div>
                      <div className="flex gap-2">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Title & Arrow */}
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags/Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className={`px-2 py-1 rounded-md text-xs font-medium ${
                            project.accentColor === "primary"
                              ? "bg-primary/10 text-primary"
                              : "bg-accent/10 text-accent"
                          }`}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                      {project.tech.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground text-xs hover:text-foreground transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground text-xs">
                          +{project.tech.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Buttons Section */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            {additionalProjects.length > 0 && (
              <Button
                variant="heroOutline"
                size="lg"
                onClick={() => setShowAll(!showAll)}
                className="group min-w-[200px]"
              >
                {showAll ? (
                  <>
                    Show Less
                    <ChevronUp className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform" />
                  </>
                ) : (
                  <>
                    View More Projects ({additionalProjects.length})
                    <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            )}

            <motion.a
              href="https://github.com/Shiwam-m?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              All Projects
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;