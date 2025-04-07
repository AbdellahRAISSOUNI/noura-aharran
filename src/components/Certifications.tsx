"use client";

import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
  const certificates = [
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University & DeepLearning.AI",
      date: "May 2023",
      description: "Comprehensive specialization covering supervised learning, neural networks, and practical ML applications.",
      badgeColor: "indigo",
      link: "#",
    },
    {
      title: "Data Science Professional Certificate",
      issuer: "IBM",
      date: "January 2023",
      description: "Professional certificate covering data analysis, visualization, ML, and big data technologies.",
      badgeColor: "pink",
      link: "#",
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "November 2022",
      description: "Advanced certificate validating expertise in building ML models using TensorFlow framework.",
      badgeColor: "indigo",
      link: "#",
    },
    {
      title: "Big Data Analytics Certificate",
      issuer: "Microsoft",
      date: "August 2022",
      description: "Certificate focusing on big data processing, analytics techniques, and cloud-based solutions.",
      badgeColor: "pink",
      link: "#",
    }
  ];

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Animation variants for items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-40 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 right-20 w-88 h-88 bg-indigo-100 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-black">My</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">Certifications</span>
          </h2>
          <div className="h-1.5 w-64 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full shadow-sm"></div>
          <p className="text-indigo-900 max-w-2xl mx-auto text-lg font-medium mt-6">
            Professional credentials that validate my expertise and continuous learning journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group rounded-2xl overflow-hidden"
            >
              {/* Card background effects */}
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl"></div>
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                cert.badgeColor === 'indigo' 
                  ? 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10' 
                  : 'bg-gradient-to-br from-pink-500/10 to-purple-500/10'
              }`}></div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
              
              <div className="p-8 relative">
                <div className="flex items-start mb-4">
                  <div className={`p-3 rounded-lg mr-4 shadow-sm transition-all duration-300 ${
                    cert.badgeColor === 'indigo'
                      ? 'bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-500 group-hover:from-indigo-500 group-hover:to-indigo-600' 
                      : 'bg-gradient-to-br from-pink-50 to-pink-100 text-pink-500 group-hover:from-pink-500 group-hover:to-pink-600'
                  } group-hover:text-white`}>
                    <FiAward size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">{cert.title}</h3>
                    <p className="text-gray-700 flex items-center text-sm mt-1">
                      {cert.issuer} 
                      <span className="mx-2">•</span> 
                      {cert.date}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-5">{cert.description}</p>
                
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-flex items-center font-medium transition-colors duration-300 ${
                    cert.badgeColor === 'indigo' ? 'text-indigo-600 hover:text-indigo-700' : 'text-pink-600 hover:text-pink-700'
                  }`}
                >
                  View Certificate
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FiExternalLink size={16} />
                  </motion.span>
                </a>
              </div>
              
              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-3xl transform origin-top-right group-hover:scale-110 transition-transform duration-300 ${
                cert.badgeColor === 'indigo'
                  ? 'bg-gradient-to-bl from-indigo-500/10 via-indigo-400/5 to-transparent' 
                  : 'bg-gradient-to-bl from-pink-500/10 via-pink-400/5 to-transparent'
              }`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 