import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">
              <span className="text-gradient">Education</span>
            </h2>
            {/* <p className="section-subtitle">My academic background</p> */}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className="p-4 rounded-2xl bg-primary/10 text-primary flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <GraduationCap className="w-8 h-8" />
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    B.Tech in Computer Science Engineering
                  </h3>
                  <p className="text-lg text-primary font-medium mb-4">
                    AI/ML Specialization
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>
                        KCC Institute of Technology and Management, Greater Noida, UP
                        <br/>
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>2022 – Present</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Generative AI", "NLP", "Deep Learning", "Machine Learning",  "AI Engineer"].map(
                      (subject, i) => (
                        <motion.span
                          key={subject}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 rounded-lg bg-secondary/50 text-sm font-medium"
                        >
                          {subject}
                        </motion.span>
                      )
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Education;
