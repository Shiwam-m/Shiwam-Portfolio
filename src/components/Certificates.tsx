import { Award } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { StaggerContainer, StaggerItem } from "./StaggerContainer";

const certificates = [
  {
    title: "Software Development Internship",
    issuer: "Nimbusnext",
    type: "Internship Certificate",
  },
  {
    title: "Prompt Engineering",
    issuer: "Online Certification",
    type: "Professional Certificate",
  },
  {
    title: "Technology Fundamentals",
    issuer: "HCLTech",
    type: "Professional Certificate",
  },
  {
    title: "Generative AI Foundations",
    issuer: "PwC",
    type: "Professional Certificate",
  },
  {
    title: "Generative AI with Python",
    issuer: "Udemy",
    type: "Professional Certificate",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Google",
    type: "Professional Certificate",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">
              <span className="text-gradient">Certificates</span>
            </h2>
            {/* <p className="section-subtitle">Professional certifications and achievements</p> */}
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert) => (
            <StaggerItem key={cert.title}>
              <motion.div
                className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group h-full"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-3 rounded-xl bg-accent/10 text-accent"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Award className="w-6 h-6" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-primary mb-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.type}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Certificates;
