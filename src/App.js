import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Book, Gamepad, Award, BarChart2, Download, ArrowRight } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('apprendre');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 text-gray-800 font-sans">
      {/* Header/Navigation */}
      <header className={`w-full px-6 py-4 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} fixed top-0 z-50`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-purple-400 flex items-center justify-center text-white font-bold mr-2">LD</div>
            <span className="text-xl font-bold text-purple-600">Le Petit DaVinci</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#fonctionnalites" className="text-gray-700 hover:text-purple-600 transition-colors">Fonctionnalités</a>
            <a href="#avantages" className="text-gray-700 hover:text-purple-600 transition-colors">Avantages</a>
            <a href="#avis" className="text-gray-700 hover:text-purple-600 transition-colors">Témoignages</a>
            <a href="#faq" className="text-gray-700 hover:text-purple-600 transition-colors">FAQ</a>
          </nav>
          <div>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors shadow-md">Télécharger</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-800">
              Le Petit DaVinci, <br />
              <span className="text-orange-500">Apprendre en s'amusant !</span>
            </h1>
            <p className="text-lg mb-8 text-gray-600">
              Une application éducative complète qui transforme l'apprentissage en aventure ludique. 
              Explorez le français, l'anglais et les mathématiques à travers des jeux interactifs et des leçons captivantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors shadow-lg flex items-center justify-center">
                <Download size={20} className="mr-2" />
                Télécharger l'application
              </button>
              <button className="bg-white text-purple-600 border border-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-colors shadow-md flex items-center justify-center">
                En savoir plus
                <ChevronRight size={20} className="ml-1" />
              </button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#FBBF24" color="#FBBF24" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">Plus de 500 téléchargements</span>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-64 h-96">
              {/* Phone frame with app screenshot */}
              <div className="absolute inset-0 bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-800">
                <img src="/Capture d'écran 2025-05-11 202942.png" alt="Le Petit DaVinci App" className="w-full h-full object-cover" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-purple-100 rounded-lg p-2 shadow-md rotate-6">
                <Book size={24} className="text-purple-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-orange-100 rounded-lg p-2 shadow-md -rotate-6">
                <Gamepad size={24} className="text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fonctionnalites" className="w-full py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Une approche complète de l'apprentissage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Le Petit DaVinci propose quatre piliers pédagogiques pour un apprentissage efficace et engageant
            </p>
          </div>

          {/* Feature tabs */}
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button 
                onClick={() => setActiveTab('apprendre')} 
                className={`px-6 py-3 rounded-full ${activeTab === 'apprendre' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Apprendre
              </button>
              <button 
                onClick={() => setActiveTab('pratiquer')} 
                className={`px-6 py-3 rounded-full ${activeTab === 'pratiquer' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Pratiquer
              </button>
              <button 
                onClick={() => setActiveTab('evaluer')} 
                className={`px-6 py-3 rounded-full ${activeTab === 'evaluer' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Évaluer
              </button>
              <button 
                onClick={() => setActiveTab('jouer')} 
                className={`px-6 py-3 rounded-full ${activeTab === 'jouer' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Jouer
              </button>
            </div>

            {/* Feature content */}
            <div className="bg-purple-50 p-6 md:p-10 rounded-3xl max-w-5xl mx-auto">
              {activeTab === 'apprendre' && (
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">Modules d'apprentissage interactifs</h3>
                    <p className="text-gray-600 mb-4">
                      Des leçons structurées pour acquérir des connaissances fondamentales en:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-purple-200 flex items-center justify-center mt-0.5 mr-2">
                          <span className="text-purple-800 font-bold">A</span>
                        </div>
                        <div>
                          <span className="font-medium">Alphabet et prononciation</span>
                          <p className="text-sm text-gray-500">Apprentissage des lettres avec sons et animations</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mt-0.5 mr-2">
                          <span className="text-orange-800 font-bold">V</span>
                        </div>
                        <div>
                          <span className="font-medium">Vocabulaire thématique</span>
                          <p className="text-sm text-gray-500">Acquisition de vocabulaire par thèmes</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-green-200 flex items-center justify-center mt-0.5 mr-2">
                          <span className="text-green-800 font-bold">M</span>
                        </div>
                        <div>
                          <span className="font-medium">Mathématiques</span>
                          <p className="text-sm text-gray-500">Opérations de base, comptage et reconnaissance des formes</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-56 h-80 border-8 border-gray-800 rounded-3xl shadow-xl overflow-hidden">
                      <img src="/Capture d'écran 2025-05-11 202956.png" alt="Module d'apprentissage" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'pratiquer' && (
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">Exercices interactifs</h3>
                    <p className="text-gray-600 mb-4">
                      Renforcez les connaissances avec des exercices engageants:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center mt-0.5 mr-2">
                          <span className="text-blue-800 font-bold">D</span>
                        </div>
                        <div>
                          <span className="font-medium">Dictées interactives</span>
                          <p className="text-sm text-gray-500">Exercices audio de dictée avec assistance</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-red-200 flex items-center justify-center mt-0.5 mr-2">
                          <span className="text-red-800 font-bold">A</span>
                        </div>
                        <div>
                          <span className="font-medium">Association d'images</span>
                          <p className="text-sm text-gray-500">Association d'images avec mots ou concepts</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-yellow-200 flex items-center justify-center mt-0.5 mr-2">
                          <span className="text-yellow-800 font-bold">E</span>
                        </div>
                        <div>
                          <span className="font-medium">Exercices d'écriture</span>
                          <p className="text-sm text-gray-500">Pratique de l'écriture et du vocabulaire</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-56 h-80 border-8 border-gray-800 rounded-3xl shadow-xl overflow-hidden">
                      <img src="/Capture d'écran 2025-05-11 203034.png" alt="Exercices interactifs" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'evaluer' && (
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">Suivi des progrès</h3>
                    <p className="text-gray-600 mb-4">
                      Des outils complets pour mesurer et visualiser l'évolution:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-purple-200 flex items-center justify-center mt-0.5 mr-2">
                          <span className="text-purple-800 font-bold">P</span>
                        </div>
                        <div>
                          <span className="font-medium">Profils personnalisés</span>
                          <p className="text-sm text-gray-500">Suivi individuel pour chaque enfant</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-green-200 flex items-center justify-center mt-0.5 mr-2">
                          <span className="text-green-800 font-bold">S</span>
                        </div>
                        <div>
                          <span className="font-medium">Statistiques détaillées</span>
                          <p className="text-sm text-gray-500">Visualisation des forces et des points à améliorer</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-yellow-200 flex items-center justify-center mt-0.5 mr-2">
                          <span className="text-yellow-800 font-bold">R</span>
                        </div>
                        <div>
                          <span className="font-medium">Récompenses et badges</span>
                          <p className="text-sm text-gray-500">Système de motivation et de reconnaissance</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-56 h-80 border-8 border-gray-800 rounded-3xl shadow-xl overflow-hidden">
                      <img src="/Capture d'écran 2025-05-11 203216.png" alt="Suivi des progrès" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'jouer' && (
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">Jeux éducatifs</h3>
                    <p className="text-gray-600 mb-4">
                      Apprendre tout en s'amusant avec des jeux captivants:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center mt-0.5 mr-2">
                          <span className="text-blue-800 font-bold">T</span>
                        </div>
                        <div>
                          <span className="font-medium">Tic-tac-toe</span>
                          <p className="text-sm text-gray-500">Jeu adapté avec différents niveaux de difficulté</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-green-200 flex items-center justify-center mt-0.5 mr-2">
                          <span className="text-green-800 font-bold">S</span>
                        </div>
                        <div>
                          <span className="font-medium">Snake</span>
                          <p className="text-sm text-gray-500">Version éducative du jeu classique</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-purple-200 flex items-center justify-center mt-0.5 mr-2">
                          <span className="text-purple-800 font-bold">E</span>
                        </div>
                        <div>
                          <span className="font-medium">Échecs</span>
                          <p className="text-sm text-gray-500">Introduction aux bases des échecs</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-56 h-80 border-8 border-gray-800 rounded-3xl shadow-xl overflow-hidden">
                      <img src="/Capture d'écran 2025-05-11 203246.png" alt="Jeux éducatifs" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="avantages" className="w-full py-16 px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Pourquoi choisir Le Petit DaVinci ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une approche pédagogique innovante qui transforme l'apprentissage en véritable aventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Book size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Apprentissage multi-sensoriel</h3>
              <p className="text-gray-600">
                Stimule tous les sens de l'enfant pour un apprentissage plus efficace et mémorable
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Gamepad size={24} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Ludification complète</h3>
              <p className="text-gray-600">
                Transforme chaque leçon en jeu pour maintenir la motivation et l'engagement
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Système de récompenses</h3>
              <p className="text-gray-600">
                Des badges, points et récompenses pour célébrer chaque progrès et encourager l'effort
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <BarChart2 size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Progression adaptative</h3>
              <p className="text-gray-600">
                Contenu qui s'adapte au rythme d'apprentissage unique de chaque enfant
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow md:col-span-2">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Star size={24} className="text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Mascottes interactives</h3>
              <p className="text-gray-600">
                Des guides animés (panda, hibou, éléphant) qui accompagnent l'enfant dans son parcours d'apprentissage, offrant encouragement et assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Découvrez l'application</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des interfaces colorées et intuitives conçues pour captiver l'attention des enfants
            </p>
          </div>

          <div className="flex flex-nowrap overflow-x-auto pb-8 gap-6 max-w-5xl mx-auto">
            {[
              "/Capture d'écran 2025-05-11 203355.png",
              "/Capture d'écran 2025-05-11 203526.png",
              "/Capture d'écran 2025-05-11 203635.png",
              "/Capture d'écran 2025-05-11 202942.png",
              "/Capture d'écran 2025-05-11 202956.png"
            ].map((src, index) => (
              <div key={index} className="flex-none w-64">
                <div className="border-8 border-gray-800 rounded-3xl shadow-xl overflow-hidden">
                  <img src={src} alt={`Screenshot ${index+1}`} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="avis" className="w-full py-16 px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Ce que disent les parents</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les expériences des familles qui utilisent déjà Le Petit DaVinci
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-purple-800">S</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Sophie M.</h4>
                    <p className="text-sm text-gray-500">Maman de deux enfants</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FBBF24" color="#FBBF24" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">
                "Mes enfants adorent apprendre avec cette application ! Les jeux sont vraiment amusants et je suis impressionnée par les progrès qu'ils ont faits en si peu de temps."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-blue-800">T</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Thomas R.</h4>
                    <p className="text-sm text-gray-500">Papa d'un enfant de 6 ans</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FBBF24" color="#FBBF24" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">
                "Enfin une application éducative qui maintient l'intérêt de mon fils ! Le suivi des progrès me permet de voir exactement où il excelle et où il a besoin d'aide."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-green-800">I</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Isabelle L.</h4>
                    <p className="text-sm text-gray-500">Enseignante en maternelle</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={16} fill="#FBBF24" color="#FBBF24" />
                  ))}
                  <Star size={16} color="#FBBF24" />
                </div>
              </div>
              <p className="text-gray-600">
                "Je recommande cette application à tous les parents de ma classe. Les activités sont parfaitement alignées avec le programme scolaire et offrent un excellent complément à l'apprentissage en classe."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-16 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Questions fréquentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur Le Petit DaVinci
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-purple-800 mb-2">Pour quelle tranche d'âge est conçue l'application ?</h3>
              <p className="text-gray-600">
                Le Petit DaVinci est conçu principalement pour les enfants de 4 à 8 ans. Cependant, les différents niveaux de difficulté permettent d'adapter l'expérience à chaque enfant.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-purple-800 mb-2">L'application fonctionne-t-elle hors ligne ?</h3>
              <p className="text-gray-600">
                Oui, une fois téléchargée, l'application fonctionne entièrement hors ligne. Ainsi, vos enfants peuvent apprendre n'importe où, même sans connexion internet.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-purple-800 mb-2">Comment suivre les progrès de mon enfant ?</h3>
              <p className="text-gray-600">
                L'application offre un tableau de bord parental détaillé qui vous permet de suivre le temps passé, les activités réalisées, les points forts et les domaines à améliorer pour chaque enfant.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-purple-800 mb-2">Y a-t-il des achats intégrés dans l'application ?</h3>
              <p className="text-gray-600">
                Le Petit DaVinci propose une version gratuite avec un accès limité aux fonctionnalités, et une version premium avec un accès complet à tous les modules. Il n'y a pas de publicités ni d'achats récurrents cachés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-6 bg-gradient-to-r from-purple-500 to-purple-700 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Prêt à transformer l'apprentissage en aventure ?</h2>
          <p className="text-lg mb-8 text-purple-100">
            Téléchargez Le Petit DaVinci dès aujourd'hui et offrez à votre enfant une expérience d'apprentissage unique et captivante.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full hover:bg-purple-50 transition-colors shadow-lg flex items-center justify-center">
              <Download size={20} className="mr-2" />
              Télécharger sur l'App Store
            </button>
            <button className="bg-purple-800 text-white px-8 py-4 rounded-full hover:bg-purple-900 transition-colors border border-purple-400 shadow-lg flex items-center justify-center">
              <Download size={20} className="mr-2" />
              Disponible sur Google Play
            </button>
          </div>

          <div className="mt-12 flex justify-center items-center">
            <div className="bg-purple-600 p-4 rounded-xl max-w-lg">
              <p className="font-medium text-purple-100">
                "Le Petit DaVinci a transformé le temps d'écran de mes enfants en moments d'apprentissage précieux."
              </p>
              <p className="mt-2 text-purple-200 text-sm font-bold">
                — Marie C., maman de trois enfants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold mr-2">LD</div>
                <span className="text-xl font-bold">Le Petit DaVinci</span>
              </div>
              <p className="mt-4 text-gray-400 max-w-md">
                Une application éducative innovante qui combine apprentissage structuré et divertissement pour les enfants francophones.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">Application</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fonctionnalités</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Télécharger</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Témoignages</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Entreprise</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carrières</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Légal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Confidentialité</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Conditions d'utilisation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 Le Petit DaVinci. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
