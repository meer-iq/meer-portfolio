import { motion } from "framer-motion";
import { ExternalLink, Github, Zap, Shield, Smartphone } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Guest Posting Platform",
      description:
        "A professional guest posting marketplace that connects publishers and advertisers seamlessly. Users can buy and sell guest post opportunities, manage campaigns, and monitor results with a modern and intuitive dashboard.",
      image: "/p1.JPG",
      technologies: ["Laravel", "Livewire 3", "Tailwind CSS", "MySQL", "Alpine.js", "REST API"],
      liveUrl: "https://guestpostexperts.com/",
      githubUrl: "#",
      category: "Web",
      icon: Shield,
    },
    {
      title: "Pro QR Generator",
      description:
        "A dynamic QR code generator that lets users create customized QR codes for websites, business profiles, events, and more. Features include real-time previews, downloadable formats, and secure data handling.",
      image: "/p2.JPG",
      technologies: ["Laravel", "JavaScript", "Blade", "SQL", "Tailwind CSS", "AJAX"],
      liveUrl: "https://proqrgenerator.com/",
      githubUrl: "https://github.com/meer-iq/qr-code-generator",
      category: "Full-Stack",
      icon: Zap,
    },
    {
      title: "Digital Agency",
      description:
        "A modern digital agency website showcasing creative services such as branding, UI/UX design, and web development. Built with scalable architecture, responsive layouts, and SEO-friendly content management.",
      image: "/p3.JPG",
      technologies: ["Laravel", "Inertia.js", "Vue.js", "Tailwind CSS", "MySQL", "Redis"],
      liveUrl: "https://nextezone.com/",
      githubUrl: "#",
      category: "Web",
      icon: Shield,
    },
    {
      title: "Free Online Typing Test",
      description:
        "An interactive typing speed test platform where users can practice and measure typing accuracy in real time. Includes leaderboards, user progress tracking, and a clean interface optimized for performance.",
      image: "/p4.JPG",
      technologies: ["Laravel", "Livewire 3", "Tailwind CSS", "JavaScript", "SQLite", "Alpine.js"],
      liveUrl: "https://fingerspeed.com/",
      githubUrl: "#",
      category: "Web",
      icon: Smartphone,
    },
  ];
  

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-secondary bg-clip-text glow-text">
              Featured
            </span>{" "}
            <span className="glow-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work spanning Web applications, full-stack development, 
            and mobile solutions built with modern technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden shadow-card hover:shadow-floating transition-all duration-500 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1">
                    <project.icon size={16} className="text-primary" />
                    <span className="text-sm font-medium">{project.category}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-muted/50 text-muted-foreground rounded-full border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 px-4 py-2 glass border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            className="inline-flex items-center space-x-2 px-8 py-4 glass border border-primary/50 rounded-xl hover:shadow-glow transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;