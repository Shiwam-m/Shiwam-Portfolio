import { Code2, Trophy, GitBranch, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { StaggerContainer, StaggerItem } from "./StaggerContainer";

const profiles = [
  {
    name: "LeetCode",
    icon: Code2,
    url: "https://leetcode.com/u/problemNotebook/",
    description: "Problem solving & DSA",
    color: "primary",
  },
  {
    name: "Kaggle",
    icon: Trophy,
    url: "https://www.kaggle.com/shiwammaddhesiya",
    description: "ML competitions & datasets",
    color: "accent",
  },
  {
    name: "GitHub",
    icon: GitBranch,
    url: "https://github.com/Shiwam-m",
    description: "Open source contributions",
    color: "primary",
  },
];

const CodingProfiles = () => {
  return (
    <section id="profiles" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">
              Coding <span className="text-gradient">Profiles</span>
            </h2>
            {/* <p className="section-subtitle">Where I practice and contribute</p> */}
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {profiles.map((profile) => (
            <StaggerItem key={profile.name}>
              <motion.a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 text-center group"
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    profile.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-accent/10 text-accent"
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <profile.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors flex items-center justify-center gap-2">
                  {profile.name}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground">{profile.description}</p>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default CodingProfiles;
