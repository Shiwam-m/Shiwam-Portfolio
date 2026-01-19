import { Download, FileText, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const Resume = () => {
  const handleDownload = () => {
    // Create a sample resume download - in production, this would link to actual PDF
    const link = document.createElement("a");
    link.href = "/Shiwam_Maddheshiya_Resume.pdf";
    link.download = "Shiwam_Maddheshiya_Resume.pdf";
    link.click();
  };

  const handleView = () => {
    // Open resume in new tab
    window.open("/Shiwam_Maddheshiya_Resume.pdf", "_blank");
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative section-container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-title">
              My <span className="text-gradient">Resume</span>
            </h2>
            {/* <p className="section-subtitle">Download my resume to learn more about my experience</p> */}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <div className="glass-card rounded-2xl p-8 text-center relative overflow-hidden group">
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[-2px] bg-gradient-to-r from-primary via-accent to-primary rounded-2xl animate-gradient" />
                <div className="absolute inset-[1px] bg-card rounded-2xl" />
              </div>

              <div className="relative z-10">
                {/* Resume icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center glow-primary">
                  <FileText className="w-10 h-10 text-primary-foreground" />
                </div>

                <h3 className="text-2xl font-bold mb-2">Shiwam Maddheshiya</h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Final-Year B.Tech CSE Student with specialization in (AI / ML)
                </p>

                {/* Resume highlights */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-secondary/50">
                    <p className="text-2xl font-bold text-primary">1+</p>
                    <p className="text-xs text-muted-foreground">Years Exp.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50">
                    <p className="text-2xl font-bold text-primary">10+</p>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50">
                    <p className="text-2xl font-bold text-primary">6+</p>
                    <p className="text-xs text-muted-foreground">Certificates</p>
                  </div>
                </div>

                {/* Download buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" onClick={handleDownload}>
                    <Download className="w-5 h-5" />
                    Download Resume
                  </Button>
                  <Button variant="heroOutline" size="lg" onClick={handleView}>
                    <Eye className="w-5 h-5" />
                    View Online
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Resume;
