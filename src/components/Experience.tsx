import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    title: "Software Development Intern",
    company: "Nimbusnext",
    period: "2024",
    achievements: [
      "Built multi-agent LLM system with LangChain, GPT-4, ChromaDB",
      "Improved prompt output relevance by 40% using RAG & DAG orchestration",
      "Deployed 5+ RESTful APIs using FastAPI",
      "Designed inter-agent logic for dynamic task decomposition",
    ],
  },
  {
    title: "Java Web Development with AI – Industrial Training",
    company: "HCLTech",
    period: "March 2025",
    achievements: [
      "Contributed to React & Node.js apps with improved UX and performance",
      "Completed hands-on training on full-stack web development with AI integration",
      "AI Chatbot UI – Developed frontend using React.js integrated with OpenAI APIs",
      "Java-Based E-learning Portal – Built LMS platform with JSP & Servlets",
      "Task Manager App – Used Node.js and Express for backend APIs with MongoDB",
    ],
  },
  {
    title: "Backend Development Course",
    company: "Physics Wallah",
    period: "March 2024",
    achievements: [
      "Completed 80+ hours training: JavaScript (ES6+), Node.js, Express.js, MongoDB, JWT auth",
      "Attendance Management System – JavaScript fundamentals & file handling",
      "To-Do App – CRUD operations with Node.js & MongoDB",
      "E-commerce Backend – Product, Cart, Orders, Reviews APIs with JWT auth",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">
              Work <span className="text-gradient">Experience</span>
            </h2>
            {/* <p className="section-subtitle">My professional journey</p> */}
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

                <div className="relative pl-20 pb-12">
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-6 top-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                    animate={{ boxShadow: ["0 0 0 0 hsl(var(--primary) / 0.3)", "0 0 0 10px hsl(var(--primary) / 0)", "0 0 0 0 hsl(var(--primary) / 0.3)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </motion.div>

                  <motion.div
                    className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-primary">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
