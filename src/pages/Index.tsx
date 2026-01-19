import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import CodingProfiles from "@/components/CodingProfiles";
import Blog from "@/components/Blog";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Shiwam Maddhesiya</title>
        <meta
          name="description"
          content="AI/ML Engineer specializing in Machine Learning, Deep Learning, NLP, LLM workflows, and RAG-based applications. View my projects and experience."
        />
        <meta
          name="keywords"
          content="AI Engineer, ML Engineer, Machine Learning, Deep Learning, NLP, LangChain, Python, FastAPI"
        />
        <meta name="author" content="Shiwam Maddheshiya" />
        <link rel="canonical" href="https://shiwam.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certificates />
          <CodingProfiles />
          <Blog />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
