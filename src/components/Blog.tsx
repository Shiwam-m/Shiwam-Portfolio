import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { StaggerContainer } from "./StaggerContainer";

const blogPosts = [
  {
    id: 1,
    title: "Building RAG Applications with LangChain and ChromaDB",
    excerpt:
      "A comprehensive guide to building Retrieval-Augmented Generation systems using LangChain, ChromaDB, and OpenAI for intelligent document Q&A.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    tags: ["LangChain", "RAG", "AI"],
    gradient: "from-violet-500/20 to-purple-500/20",
    link: "https://medium.com/@shiwammaddheshiya",
  },
  {
    id: 2,
    title: "Multi-Agent Systems: Orchestrating LLMs for Complex Tasks",
    excerpt:
      "Exploring how to design and implement multi-agent architectures using AutoGen and LangChain for task decomposition and collaborative AI workflows.",
    date: "Nov 28, 2024",
    readTime: "12 min read",
    tags: ["Multi-Agent", "LLM", "AutoGen"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    link: "https://medium.com/@shiwammaddheshiya",
  },
  {
    id: 3,
    title: "Deploying ML Models with FastAPI and Docker",
    excerpt:
      "Best practices for containerizing and deploying machine learning models as RESTful APIs using FastAPI, Docker, and GitHub Actions CI/CD.",
    date: "Oct 10, 2024",
    readTime: "6 min read",
    tags: ["FastAPI", "Docker", "MLOps"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    link: "https://medium.com/@shiwammaddheshiya",
  },
  {
    id: 4,
    title: "Understanding Transformers: From Attention to GPT",
    excerpt:
      "Deep dive into the transformer architecture, self-attention mechanisms, and how they power modern large language models like GPT and BERT.",
    date: "Sep 5, 2024",
    readTime: "15 min read",
    tags: ["Transformers", "NLP", "Deep Learning"],
    gradient: "from-orange-500/20 to-amber-500/20",
    link: "https://medium.com/@shiwammaddheshiya",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">
              <span className="text-gradient">Articles</span>
            </h2>
            <p className="section-subtitle">
              Sharing insights on AI, Machine Learning, and software development
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${post.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
              />

              <motion.div
                className="relative glass-card rounded-2xl p-6 h-full flex flex-col border border-border/50 group-hover:border-primary/30 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta info */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read more link */}
                <motion.a
                  href={post.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.article>
          ))}
        </StaggerContainer>

        {/* View all articles button */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="group border-primary/30 hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a
                href="https://medium.com/@shiwammaddheshiya"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Articles
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Blog;
