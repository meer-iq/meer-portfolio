import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  Palette,
  Zap,
  Shield
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["React", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
      color: "text-primary",
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Laravel", "PHP", "SQL", "Database Design", "API Development"],
      color: "text-secondary",
    },
    {
      title: "CMS & E-commerce",
      icon: Globe,
      skills: ["WordPress", "Shopify", "Wix", "Content Management", "Online Stores"],
      color: "text-accent",
    },
    {
      title: "Development Tools",
      icon: Zap,
      skills: ["GitHub", "Version Control", "Project Management", "Code Review"],
      color: "text-web3-green",
    },
    {
      title: "Database & Analytics",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "Data Analysis", "Performance Optimization"],
      color: "text-web3-purple",
    },
    {
      title: "Web Design",
      icon: Palette,
      skills: ["Responsive Design", "UI/UX", "Cross-browser", "Mobile-first"],
      color: "text-primary",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text glow-text">
              Technical
            </span>{" "}
            <span className="glow-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-stack developer specializing in modern web technologies, 
            content management systems, and e-commerce solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="glass p-8 rounded-2xl shadow-card hover:shadow-floating transition-all duration-500 group relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"
                initial={false}
              />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className={`p-3 rounded-xl ${category.color} bg-current/10 mr-4 group-hover:bg-current/20 transition-all duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className={`w-6 h-6 ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                  </motion.div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                </div>
              
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="flex items-center cursor-pointer"
                    >
                      <motion.div 
                        className="w-2 h-2 bg-primary rounded-full mr-3 opacity-70 group-hover:opacity-100"
                        animate={{ 
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: skillIndex * 0.2 
                        }}
                      />
                      <span className="text-muted-foreground group-hover:text-foreground transition-all duration-300 hover:text-primary">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-6 h-1 bg-muted rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full relative`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${85 + (index % 3) * 5}%` }}
                    transition={{ duration: 1.5, delay: (index * 0.2) + 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/30 rounded-full"
                      animate={{ x: [-100, 100, -100] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.3 
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;