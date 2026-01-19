import { User, Brain, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">
              About <span className="text-gradient">Me</span>
            </h2>
            {/* <p className="section-subtitle">Get to know me better</p> */}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile illustration */}

          {/* Floating Geometric Hexagons */}
          <ScrollReveal direction="left">
            <div className="relative flex justify-center items-start md:items-center h-full">
              {/* Background gradient shape */}
              <motion.div
                className="absolute w-72 h-[520px] md:w-80 md:h-[580px] bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-3xl blur-2xl z-0"
                animate={{ y: [0, 8, 0], scale: [1, 1.02, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Hexagon cluster */}
              <div className="relative w-72 h-[520px] md:w-80 md:h-[580px] flex items-center justify-center z-10">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-16 h-16 bg-gradient-to-tr from-blue-500 to-cyan-500/80 rounded-lg rotate-45 shadow-lg"
                    style={{
                      top: `${10 + i * 15}%`,
                      left: `${20 + i * 12}%`,
                    }}
                    animate={{ y: [0, -5 + i, 0], x: [0, 3 - i, 0], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
                  />
                ))}

                {/* Center hexagon */}
                <motion.div
                  className="absolute w-28 h-28 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg shadow-xl flex items-center justify-center"
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <Code2 className="w-12 h-12 text-white" />
                </motion.div>
              
                {/* Decorative lines connecting hexagons */}
                <svg className="absolute w-full h-full">
                  <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="#00ffff" strokeWidth="1" />
                  <line x1="70%" y1="15%" x2="50%" y2="50%" stroke="#00ffff" strokeWidth="1" />
                  <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="#00ffff" strokeWidth="1" />
                  <line x1="75%" y1="70%" x2="50%" y2="50%" stroke="#00ffff" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </ScrollReveal>

          {/* About text */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <motion.div
                className="glass-card rounded-2xl p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Professional Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="block">
                  I am a final-year AI/ML Engineer with experience in building applications using LLMs, RAG-based systems, and agents. I previously implemented applications of AI in a real-life project during my internship, where I developed multi-agent LLM applications, improved RAG pipeline efficiency, and developed scalable APIs with FastAPI and LangChain.</span>
                  <span className="block mt-4"> I am fundamentally interested in the following domains: </span>
                  <ul className="mt-3 ml-6 list-disc text-accent space-y-1">
                    <li>Machine Learning</li>
                    <li>Deep Learning</li>
                    <li>Natural Language Processing</li>
                    <li>Generative AI</li>
                    <li>
                      Building AI that is not only intelligent but efficient and production-quality.
                    </li>
                  </ul>
                </p>
              </motion.div>

              <motion.div
                className="glass-card rounded-2xl p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  What I'm Looking For
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am looking for a position as an 
                  <span className="text-accent"> AI/ML</span> or{" "}
                  <span className="text-accent"> GenAI</span>{" "}
                  Engineer where I would be able to contribute to the development of high-impact applications of AI. I am interested in teams focused on products or research-oriented teams where there is a high focus on experimentation, scaled systems, and the application of LL Ms, RAG pipelines, or automation via AI.
                </p>
              </motion.div>

            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;