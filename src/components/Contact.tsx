import { useState } from "react"; 
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState(""); 

  // NEW: handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mrbaggqg", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        e.target.reset(); // clear form
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">
              Get In <span className="text-gradient">Touch</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="space-y-8">
              <motion.div
                className="glass-card rounded-2xl p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:shiwammaddheshiya@gmail.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">shiwammaddheshiya@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+9163886798--"
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">(+91) 6388679819</p>
                    </div>
                  </motion.a>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">Delhi, India</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl overflow-hidden border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112127.76601100845!2d77.1024907!3d28.7040592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02203b6b403b%3A0x9b77493b5581bdea!2sDelhi!5e0!3m2!1sen!2sin!4v1693821562272!5m2!1sen!2sin"
                      width="100%"
                      height="200"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                      allowFullScreen
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass-card rounded-2xl p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  {[
                    { href: "https://www.linkedin.com/in/shiwam-m", icon: Linkedin, label: "LinkedIn" },
                    { href: "https://github.com/Shiwam-m", icon: Github, label: "GitHub" },
                    { href: "https://www.kaggle.com/shiwammaddhesiya", icon: Globe, label: "Kaggle" },
                  ].map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                      whileHover={{ y: -3, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <link.icon className="w-5 h-5" />
                      <span>{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction="right" delay={0.2}>
            <motion.div
              className="glass-card rounded-2xl p-8"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>

              {/* Formspree Form */}
              <form
                className="space-y-6"
                onSubmit={handleSubmit} 
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder=""
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>

                {/* NEW: status message */}
                {status === "SUCCESS" && (
                  <p className="text-blue-500 mt-2">✔ Message sent successfully!</p>
                )}
                {status === "ERROR" && (
                  <p className="text-red-500 mt-2">❌ Something went wrong. Try again.</p>
                )}
              </form>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;