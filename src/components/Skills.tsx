import { Code, Database, Brain, Cpu, GitBranch, Layers, Braces } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { StaggerContainer, StaggerItem } from "./StaggerContainer";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "SQL", "C", "HTML/CSS"],
    color: "primary",
  },
  {
    title: "Data Science & Analytics",
    icon: Braces,
    skills: ["Pandas", "Numpy ", "Matplotlib", "Seaborn", "Plotly", "Tableau", "Excel"],
    color: "accent",
  },
  {
    title: "ML/DL",
    icon: Brain,
    skills: ["Scikit-learn", "Pytorch", "CNNs", "RNNs", "Transformers", "NLP", "Computer Vision"],
    color: "primary",
  },
  {
    title: "Generative AI",
    icon: Cpu,
    skills: ["LangChain", "ChromaDB / VectorDBs", "AutoGen", "RAG (LangChain)", "RAG Frameworks", "LLMs (GPT-4/Llama)", "Multi-Agent Systems / Agents"],
    color: "primary",
  },
  {
    title: "Frameworks & Deployment",
    icon: Layers,
    skills: ["FastAPI", "Streamlit", "Docker", "CI/CD/GitHub Actions", "Flask", "Docker",],
    color: "accent",
  },
  {
    title: "Databases & Vector Search",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "FAISS", "Pinecone", "ChromaDB"],
    color: "primary",
  },
  {
    title: "Concepts",
    icon: GitBranch,
    skills: ["REST APIs", "Feature Engineering", "Data Structures & Algorithms (DSA)", "OOP", "EDA (Exploratory Data Analysis)", "System Design"],
    color: "primary",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            {/* <p className="section-subtitle">Technologies and tools I work with</p> */}
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <motion.div
                className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group h-full"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    className={`p-3 rounded-xl ${
                      category.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent"
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <category.icon className="w-5 h-5" />
                  </motion.div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-default ${
                        category.color === "primary"
                          ? "bg-primary/5 text-primary border border-primary/20 hover:bg-primary/10"
                          : "bg-accent/5 text-accent border border-accent/20 hover:bg-accent/10"
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Skills;
