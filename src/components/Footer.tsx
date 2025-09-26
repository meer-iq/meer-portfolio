import { motion } from "framer-motion";
import { Heart, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>Made</span>
            <span>by a passionate developer</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} Full-Stack Developer Portfolio. All rights reserved.
          </div>
          
          <div className="text-xs text-muted-foreground/70">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;