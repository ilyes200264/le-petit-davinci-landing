import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  Star,
  Book,
  Gamepad,
  Award,
  BarChart2,
  Download,
  Menu,
  X,
  ChevronDown,
  Moon,
  Sun,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Data for the features slideshow
const featuresSlidesData = [
  {
    id: "apprendre",
    title: "Modules d'apprentissage interactifs",
    description:
      "Des leçons structurées pour acquérir des connaissances fondamentales en:",
    items: [
      {
        icon: "A",
        text: "Alphabet et prononciation",
        subtext: "Apprentissage des lettres avec sons et animations.",
        colorName: "purple",
      },
      {
        icon: "V",
        text: "Vocabulaire thématique",
        subtext:
          "Acquisition de vocabulaire par thèmes (animaux, couleurs, etc.).",
        colorName: "orange",
      },
      {
        icon: "M",
        text: "Mathématiques",
        subtext: "Opérations de base, comptage et reconnaissance des formes.",
        colorName: "green",
      },
    ],
    image: "/feature-learn-module.png",
    alt: "Module d'apprentissage",
  },
  {
    id: "pratiquer",
    title: "Exercices interactifs",
    description: "Renforcez les connaissances avec des exercices engageants:",
    items: [
      {
        icon: "D",
        text: "Dictées interactives",
        subtext: "Exercices audio de dictée avec assistance visuelle.",
        colorName: "blue",
      },
      {
        icon: "A",
        text: "Association d'images",
        subtext: "Association d'images avec mots ou concepts mathématiques.",
        colorName: "red",
      },
      {
        icon: "E",
        text: "Exercices d'écriture",
        subtext: "Pratique du traçage des lettres et des chiffres.",
        colorName: "yellow",
      },
    ],
    image: "/feature-practice-exercise.png",
    alt: "Exercices interactifs",
  },
  {
    id: "evaluer",
    title: "Suivi des progrès",
    description: "Des outils complets pour mesurer et visualiser l'évolution:",
    items: [
      {
        icon: BarChart2,
        text: "Profils personnalisés",
        subtext: "Suivi individuel pour chaque enfant utilisant l'application.",
        colorName: "purple",
      },
      {
        icon: Star,
        text: "Statistiques détaillées",
        subtext:
          "Visualisation des forces et des points à améliorer par matière.",
        colorName: "green",
      },
      {
        icon: Award,
        text: "Récompenses et badges",
        subtext: "Système de motivation pour encourager la persévérance.",
        colorName: "yellow",
      },
    ],
    image: "/feature-progress-tracking.png",
    alt: "Suivi des progrès",
  },
  {
    id: "jouer",
    title: "Jeux éducatifs",
    description: "Apprendre tout en s'amusant avec des jeux captivants:",
    items: [
      {
        icon: "T",
        text: "Tic-tac-toe Éducatif",
        subtext: "Jeu de morpion adapté avec questions éducatives.",
        colorName: "blue",
      },
      {
        icon: "S",
        text: "Snake & Lettres",
        subtext:
          "Version éducative du jeu classique pour apprendre l'alphabet.",
        colorName: "green",
      },
      {
        icon: "P",
        text: "Puzzles de Mots",
        subtext: "Reconstituer des mots à partir de lettres mélangées.",
        colorName: "red",
      },
    ],
    image: "/feature-game-example.png",
    alt: "Jeux éducatifs",
  },
];

// Helper component to render feature icons consistently
const FeatureIcon = ({ icon, colorName }) => {
  // Define base Tailwind classes for icon container background and text color
  const colorStyles = {
    purple: {
      bg: "bg-purple-200 dark:bg-purple-800",
      text: "text-purple-800 dark:text-purple-200",
    },
    orange: {
      bg: "bg-orange-200 dark:bg-orange-800",
      text: "text-orange-800 dark:text-orange-200",
    },
    green: {
      bg: "bg-green-200 dark:bg-green-800",
      text: "text-green-800 dark:text-green-200",
    },
    blue: {
      bg: "bg-blue-200 dark:bg-blue-800",
      text: "text-blue-800 dark:text-blue-200",
    },
    red: {
      bg: "bg-red-200 dark:bg-red-800",
      text: "text-red-800 dark:text-red-200",
    },
    yellow: {
      bg: "bg-yellow-200 dark:bg-yellow-800",
      text: "text-yellow-800 dark:text-yellow-200",
    },
  };

  const currentStyle = colorStyles[colorName] || {
    bg: "bg-gray-200 dark:bg-gray-800",
    text: "text-gray-800 dark:text-gray-200",
  };
  const iconContainerClass = `flex-shrink-0 h-6 w-6 rounded-full ${currentStyle.bg} flex items-center justify-center mt-0.5 mr-3`;

  // If icon is a string (letter)
  if (typeof icon === "string") {
    return (
      <div className={iconContainerClass}>
        <span className={`text-xs font-bold ${currentStyle.text}`}>{icon}</span>
      </div>
    );
  }

  // If icon is a React component type (e.g., BarChart2 for Evaluer)
  if (typeof icon === "function") {
    const IconComponent = icon;
    return (
      <div className={iconContainerClass}>
        <IconComponent size={12} className={currentStyle.text} />
      </div>
    );
  }

  return null; // Fallback if icon prop is not as expected
};

// Component for the Phone Mockup
const PhoneMockup = ({ src, alt, onErrorSrc }) => {
  return (
    // Outer frame container
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[450px] w-[220px] shadow-xl">
      {/* Top notch */}
      <div className="w-[100px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      {/* Side button (optional decoration) */}
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      {/* Power button (optional decoration) */}
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      {/* Screen content area */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-black">
        <img
          src={src}
          className="w-full h-full object-cover"
          alt={alt}
          onError={(e) => {
            e.target.onerror = null;
            // Use the function if provided, otherwise generate a default placeholder
            const placeholderSrc =
              typeof onErrorSrc === "function" ? onErrorSrc() : onErrorSrc;
            e.target.src =
              placeholderSrc ||
              `https://placehold.co/220x450/1F2937/E9D5FF?text=${alt.replace(
                /\s/g,
                "+"
              )}`;
          }}
        />
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  // State variables
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const carouselRef = useRef(null);
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const totalTestimonialSlides = 3;
  const [currentFeatureSlideIndex, setCurrentFeatureSlideIndex] = useState(0);

  // Effect to handle header background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect for auto-scrolling the testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialSlide((prev) => (prev + 1) % totalTestimonialSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalTestimonialSlides]);

  // Effect for auto-scrolling the features slideshow
  useEffect(() => {
    const featureInterval = setInterval(() => {
      setCurrentFeatureSlideIndex(
        (prevIndex) => (prevIndex + 1) % featuresSlidesData.length
      );
    }, 5000); // Change feature slide every 5 seconds
    return () => clearInterval(featureInterval);
  }, []);

  // Effect to toggle dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Function to smoothly scroll to a section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  // Function to toggle FAQ item
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ data
  const faqData = [
    {
      question: "Qu'est-ce que Le Petit DaVinci ?",
      answer:
        "C'est une application éducative conçue pour aider les enfants à apprendre le français, l'anglais et les mathématiques de manière ludique et interactive.",
    },
    {
      question: "Pour quelle tranche d'âge l'application est-elle adaptée ?",
      answer:
        "L'application est principalement destinée aux enfants en âge préscolaire et primaire (environ 3 à 8 ans).",
    },
    {
      question: "L'application est-elle disponible sur iOS et Android ?",
      answer:
        "Oui, Le Petit DaVinci est disponible au téléchargement sur l'App Store et le Google Play Store.",
    },
    {
      question: "Comment puis-je suivre les progrès de mon enfant ?",
      answer:
        "L'application comprend une section dédiée aux parents où vous pouvez consulter des statistiques détaillées sur les activités et les progrès de votre enfant.",
    },
  ];

  // Testimonial data
  const testimonials = [
    {
      name: "Sophie Dubois",
      role: "Maman de Léo (6 ans)",
      text: "Mon fils adore apprendre avec Le Petit DaVinci ! Les jeux sont amusants et il progresse vite en lecture.",
      image: "/testimonial-avatar-1.png",
      alt: "Avatar Sophie Dubois",
    },
    {
      name: "Ahmed Khan",
      role: "Papa de Yasmin (4 ans)",
      text: "Une application fantastique pour introduire les chiffres et les lettres. Très intuitive pour les petits.",
      image: "/testimonial-avatar-2.png",
      alt: "Avatar Ahmed Khan",
    },
    {
      name: "Claire Moreau",
      role: "Enseignante en maternelle",
      text: "J'utilise Le Petit DaVinci en classe. C'est un excellent outil complémentaire, coloré et pédagogique.",
      image: "/testimonial-avatar-3.png",
      alt: "Avatar Claire Moreau",
    },
  ];

  // Current feature slide based on index
  const currentFeature = featuresSlidesData[currentFeatureSlideIndex];

  return (
    <div
      className={`flex flex-col items-center min-h-screen ${
        darkMode
          ? "dark bg-gray-900 text-gray-100"
          : "bg-gradient-to-b from-purple-50 to-purple-100 text-gray-800" // Base text color for light mode
      } font-sans transition-colors duration-300 overflow-x-hidden`}
    >
      {/* Header/Navigation */}
      <header
        className={`w-full px-4 sm:px-6 py-4 transition-all duration-300 ${
          isScrolled
            ? darkMode
              ? "bg-gray-800 shadow-md"
              : "bg-white shadow-md"
            : "bg-transparent"
        } fixed top-0 z-50`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: 0 }}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-purple-400 flex items-center justify-center text-white font-bold mr-2 text-sm sm:text-base"
            >
              LD
            </motion.div>
            <span className="text-lg sm:text-xl font-bold text-purple-600 dark:text-purple-400">
              Le Petit DaVinci
            </span>
          </div>

          {/* Desktop Navigation - UPDATED TEXT COLOR */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection("fonctionnalites")}
              className="text-gray-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Fonctionnalités
            </button>
            <button
              onClick={() => scrollToSection("avantages")}
              className="text-gray-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Avantages
            </button>
            <button
              onClick={() => scrollToSection("avis")}
              className="text-gray-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Témoignages
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Action Buttons & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="hidden md:block bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition-colors shadow-md text-sm">
              Télécharger
            </button>
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - UPDATED TEXT COLOR */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-40 p-4 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("fonctionnalites")}
                className="text-gray-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2 text-left"
              >
                Fonctionnalités
              </button>
              <button
                onClick={() => scrollToSection("avantages")}
                className="text-gray-900 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2 text-left"
              >
                Avantages
              </button>
              <button
                onClick={() => scrollToSection("avis")}
                className="text-gray-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2 text-left"
              >
                Témoignages
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-800 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2 text-left"
              >
                FAQ
              </button>
              <button className="w-full bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors shadow-md mt-2">
                Télécharger
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="w-full pt-28 sm:pt-32 pb-16 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 md:pr-12 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-purple-800 dark:text-purple-400">
              Le Petit DaVinci, <br />
              <span className="text-orange-500">Apprendre en s'amusant !</span>
            </h1>
            {/* UPDATED PARAGRAPH TEXT COLOR */}
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              {" "}
              Une application éducative complète qui transforme l'apprentissage
              en aventure ludique. Explorez le français, l'anglais et les
              mathématiques à travers des jeux interactifs et des leçons
              captivantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full hover:bg-purple-700 transition-colors shadow-lg flex items-center justify-center text-sm sm:text-base"
              >
                <Download size={20} className="mr-2" />
                Télécharger l'application
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("fonctionnalites")}
                className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 border border-purple-600 dark:border-purple-400 px-6 py-3 sm:px-8 sm:py-3 rounded-full hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors shadow-md flex items-center justify-center text-sm sm:text-base"
              >
                En savoir plus
                <ChevronRight size={20} className="ml-1" />
              </motion.button>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                  >
                    <Star size={20} fill="#FBBF24" color="#FBBF24" />
                  </motion.div>
                ))}
              </div>
              <span className="ml-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {" "}
                {/* Kept gray-600 here as it's less prominent */}
                Plus de 500 téléchargements
              </span>
            </div>
          </motion.div>

          {/* Hero Image/Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                <PhoneMockup
                  src="/hero-app-screenshot.png"
                  alt="Le Petit DaVinci App"
                  onErrorSrc="https://placehold.co/220x450/1F2937/E9D5FF?text=App+Screenshot"
                />
              </motion.div>
              <motion.div
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 bg-purple-100 dark:bg-purple-900 rounded-lg p-2 shadow-md rotate-6 z-10"
              >
                <Book
                  size={24}
                  className="text-purple-600 dark:text-purple-400"
                />
              </motion.div>
              <motion.div
                animate={{ rotate: [0, -10, 0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-4 -left-4 bg-orange-100 dark:bg-orange-900 rounded-lg p-2 shadow-md -rotate-6 z-10"
              >
                <Gamepad size={24} className="text-orange-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="fonctionnalites"
        className="w-full py-16 px-4 sm:px-6 bg-white dark:bg-gray-800 scroll-mt-16"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-400 mb-4">
              Une approche complète de l'apprentissage
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Le Petit DaVinci propose quatre piliers pédagogiques pour un
              apprentissage efficace et engageant. Découvrez-les !
            </p>
          </motion.div>

          {/* Slideshow Content Area */}
          <div className="bg-purple-50 dark:bg-gray-700 p-6 md:p-10 rounded-3xl max-w-5xl mx-auto shadow-inner min-h-[550px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-8 w-full"
              >
                {/* Textual Content */}
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-400 mb-4">
                    {currentFeature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {currentFeature.description}
                  </p>
                  <ul className="space-y-3">
                    {currentFeature.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FeatureIcon
                          icon={item.icon}
                          colorName={item.colorName}
                        />
                        <div>
                          <span className="font-medium text-gray-800 dark:text-gray-100">
                            {item.text}
                          </span>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item.subtext}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Image Content - USING PhoneMockup Component */}
                <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <PhoneMockup
                      src={currentFeature.image}
                      alt={currentFeature.alt}
                      onErrorSrc={() => {
                        // Function to generate dynamic placeholder URL
                        const placeholderText = currentFeature.alt.replace(
                          /\s/g,
                          "+"
                        );
                        let bgColor = "E9D5FF"; // default purple-ish
                        if (currentFeature.id === "pratiquer")
                          bgColor = "DBEAFE"; // blue-ish
                        else if (currentFeature.id === "evaluer")
                          bgColor = "D1FAE5"; // green-ish
                        else if (currentFeature.id === "jouer")
                          bgColor = "FEE2E2"; // red-ish
                        return `https://placehold.co/220x450/${bgColor}/4C1D95?text=${placeholderText}`;
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="avantages"
        className="w-full py-16 px-4 sm:px-6 bg-purple-50 dark:bg-gray-900 scroll-mt-16"
      >
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-400 mb-4">
              Pourquoi choisir Le Petit DaVinci ?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Découvrez les avantages uniques qui font de notre application le
              choix idéal pour l'éducation de votre enfant.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            >
              <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900">
                <Book
                  size={24}
                  className="text-purple-600 dark:text-purple-400"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Apprentissage Ludique
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transforme les leçons en jeux captivants pour maintenir
                l'engagement.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            >
              <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900">
                <BarChart2 size={24} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Suivi Personnalisé
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Adapte le parcours d'apprentissage au rythme et aux besoins de
                chaque enfant.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            >
              <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900">
                <Award
                  size={24}
                  className="text-green-600 dark:text-green-400"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Contenu Sécurisé
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Environnement sans publicité et adapté aux enfants, approuvé par
                les parents.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="avis"
        className="w-full py-16 px-4 sm:px-6 bg-white dark:bg-gray-800 scroll-mt-16"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-400 mb-4">
              Ce que disent nos utilisateurs
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Découvrez pourquoi les parents et les enfants adorent Le Petit
              DaVinci.
            </p>
          </motion.div>
          <div
            ref={carouselRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-purple-50 dark:bg-gray-700 p-6 rounded-xl shadow-md flex flex-col items-center text-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.alt || testimonial.name}
                  className="w-20 h-20 rounded-full mb-4 border-4 border-white dark:border-gray-800 shadow-sm object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/80x80/E9D5FF/4C1D95?text=${testimonial.name.charAt(
                      0
                    )}`;
                  }}
                />
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                  "{testimonial.text}"
                </p>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  {testimonial.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="w-full py-16 px-4 sm:px-6 bg-purple-50 dark:bg-gray-900 scroll-mt-16"
      >
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-400 mb-4">
              Questions Fréquemment Posées
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Trouvez des réponses aux questions courantes sur Le Petit DaVinci.
            </p>
          </motion.div>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-4 sm:p-5 text-left text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="font-medium">{item.question}</span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      size={20}
                      className="text-purple-600 dark:text-purple-400"
                    />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="p-4 sm:p-5 pt-0 text-gray-600 dark:text-gray-300">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action (Footer) Section */}
      <section className="w-full py-16 px-4 sm:px-6 bg-purple-600 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Prêt à commencer l'aventure ?
            </h2>
            <p className="text-purple-100 mb-8 max-w-xl mx-auto">
              Téléchargez Le Petit DaVinci dès aujourd'hui et offrez à votre
              enfant le cadeau de l'apprentissage amusant !
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#7C3AED", // This is purple-600
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg flex items-center justify-center mx-auto"
            >
              <Download size={20} className="mr-2" />
              Télécharger Maintenant
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-4 sm:px-6 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
        <div className="container mx-auto text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Le Petit DaVinci. Tous droits
            réservés.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="#"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Politique de confidentialité
            </a>
            <a
              href="#"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
