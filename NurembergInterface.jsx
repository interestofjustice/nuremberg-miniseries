import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Info, Calendar, ChevronDown, ChevronUp, X } from 'lucide-react';

const NurembergInterface = () => {
  const [activeWeek, setActiveWeek] = useState(1);
  const [showOverview, setShowOverview] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
  const [expandedDay, setExpandedDay] = useState(null);
  
  // Week data from the document
  const weeks = [
    {
      number: 1,
      title: "BREAKING THE SILENCE - COSTA RICA'S CONSTITUTIONAL REBELLION",
      subtitle: "UNMASKING THE 10-DAY LOOPHOLE THAT COULD DESTROY THE WHO",
      date: "March 17-21, 2025",
      episodes: [
        {
          day: "Monday",
          title: "The 10-Day Loophole That Could Destroy the WHO",
          description: "This opening episode exposes a forgotten constitutional weapon in Costa Rican law that provides a powerful legal mechanism to challenge WHO authority through the invocation of Costa Rican Constitutional Articles 27 and 50.",
          points: [
            "Comprehensive analysis of Costa Rican Administrative Silence Doctrine.",
            "Detailed examination of Constitutional Article 27 (right to petition) and Article 50 (right to a healthy environment).",
            "Exploration of the 10-day window that creates administrative acquiescence.",
            "Strategic framework for international challenge to WHO governance."
          ]
        },
        {
          day: "Tuesday",
          title: "Whispers to Roars: How One Nation Can Bring Down a Global Regime",
          description: "This episode provides an in-depth analysis of International Health Regulations nullification through Article 55(2) Dispute Resolution Mechanism, demonstrating how grassroots resistance can effectively challenge institutional power.",
          points: [
            "Strategic application of IHR Article 55(2) dispute mechanisms.",
            "Analysis of WHO Constitution Article 75 referral pathways.",
            "Vienna Convention on Treaties application to procedural irregularities.",
            "Multi-jurisdictional strategy for international challenge."
          ]
        },
        {
          day: "Wednesday",
          title: "Administrative Silence: The Legal Weapon They Never Saw Coming",
          description: "This episode exposes the powerful legal doctrine of Positive Administrative Silence as codified in Law No. 6227, General Law of Public Administration, which creates administrative acquiescence through inaction.",
          points: [
            "Comprehensive analysis of Positive Silence Doctrine under Costa Rican law.",
            "Constitutional Chamber Decision No. 5694-2008 application.",
            "Strategic implementation of Law No. 9097 on Right of Petition.",
            "International implications of administrative acquiescence."
          ]
        },
        {
          day: "Thursday",
          title: "Diplomatic Dominoes: Building the Global Accountability Network",
          description: "This episode outlines coalition formation strategies utilizing diplomatic channels under Vienna Convention on Diplomatic Relations, Article 3(1)(c) to establish a global network of sovereign resistance.",
          points: [
            "Strategic implementation of Vienna Convention on Diplomatic Relations.",
            "UN Charter Article 33 peaceful dispute settlement mechanisms.",
            "Paris Principles on National Human Rights Institutions application.",
            "Global coalition-building methodology and diplomatic framework."
          ]
        },
        {
          day: "Friday",
          title: "SueTheWHO.org: Your Weapon Against Medical Tyranny",
          description: "This episode unveils our comprehensive documentation repository and international legal resource platform, providing citizens and governments the tools needed to challenge global health governance overreach.",
          points: [
            "Platform launch with comprehensive juridical analysis tools.",
            "Document repository for international legal challenges.",
            "Strategic templates for administrative and judicial filings.",
            "Global evidence compilation and crowdsourced documentation."
          ]
        }
      ]
    },
    // Additional weeks would be added here in the same format
    {
      number: 2,
      title: "EXPOSING THE ADMINISTRATIVE DEATH MACHINE",
      subtitle: "ADMINISTRATIVE TYRANNY: THE SECRET GOVERNMENT PANEL THAT SOLD YOUR HEALTH",
      date: "March 24-28, 2025",
      episodes: [
        {
          day: "Monday",
          title: "EXPOSED: The Secret Government Panel That Sold Your Health",
          description: "This explosive episode provides a comprehensive breakdown of the Federal Advisory Committee Act (FACA) and reveals how institutional failures enabled regulatory capture and compromised public health decision-making.",
          points: [
            "Comprehensive analysis of 5 U.S.C. App. 2 §§1-16 requirements.",
            "Detailed examination of \"fairly balanced\" committee membership violations.",
            "Forensic analysis of undue influence by pharmaceutical interests.",
            "Historical pattern of regulatory capture through advisory mechanisms."
          ]
        },
        {
          day: "Tuesday",
          title: "The APA Weapon: Your Legal Nuclear Option Against Corrupt Agencies",
          description: "This strategic episode outlines citizen petition mechanisms under the Administrative Procedure Act, providing a powerful framework for challenging agency actions that are \"arbitrary, capricious, or not in accordance with law.\"",
          points: [
            "Strategic implementation of 5 U.S.C. §553 rulemaking procedures.",
            "Administrative challenge framework under 5 U.S.C. §706(2)(A).",
            "Comprehensive APA petition strategy for emergency authorizations.",
            "Judicial review pathways for administrative challenges."
          ]
        },
        // The rest of week 2 episodes would be added here
      ]
    },
    // Weeks 3-12 would be added similarly
  ];

  // Add more weeks as needed from the document - this is a simplified version
  for (let i = 3; i <= 12; i++) {
    weeks.push({
      number: i,
      title: `WEEK ${i}`,
      subtitle: `Week ${i} Content`,
      date: `May-June 2025`,
      episodes: [
        {
          day: "Monday",
          title: `Week ${i} Monday Episode`,
          description: "Episode description",
          points: ["Point 1", "Point 2", "Point 3", "Point 4"]
        },
        {
          day: "Tuesday",
          title: `Week ${i} Tuesday Episode`,
          description: "Episode description",
          points: ["Point 1", "Point 2", "Point 3", "Point 4"]
        },
        {
          day: "Wednesday",
          title: `Week ${i} Wednesday Episode`,
          description: "Episode description",
          points: ["Point 1", "Point 2", "Point 3", "Point 4"]
        },
        {
          day: "Thursday",
          title: `Week ${i} Thursday Episode`,
          description: "Episode description",
          points: ["Point 1", "Point 2", "Point 3", "Point 4"]
        },
        {
          day: "Friday",
          title: `Week ${i} Friday Episode`,
          description: "Episode description",
          points: ["Point 1", "Point 2", "Point 3", "Point 4"]
        }
      ]
    });
  }

  const handleWeekChange = (week) => {
    setActiveWeek(week);
    setExpandedDay(null);
  };

  const handlePreviousWeek = () => {
    if (activeWeek > 1) {
      setActiveWeek(activeWeek - 1);
      setExpandedDay(null);
    }
  };

  const handleNextWeek = () => {
    if (activeWeek < weeks.length) {
      setActiveWeek(activeWeek + 1);
      setExpandedDay(null);
    }
  };

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleDayExpansion = (day) => {
    if (expandedDay === day) {
      setExpandedDay(null);
    } else {
      setExpandedDay(day);
    }
  };

  // Display emoji for day of the week
  const getDayEmoji = (day) => {
    switch (day) {
      case 'Monday': return '🔍';
      case 'Tuesday': return '⚖️';
      case 'Wednesday': return '🔬';
      case 'Thursday': return '🌐';
      case 'Friday': return '🚀';
      default: return '📅';
    }
  };
  
  // Get appropriate background style for day of week
  const getDayColorClass = (day) => {
    switch (day) {
      case 'Monday': return 'from-blue-500 to-blue-600';
      case 'Tuesday': return 'from-amber-500 to-amber-600';
      case 'Wednesday': return 'from-emerald-500 to-emerald-600';
      case 'Thursday': return 'from-purple-500 to-purple-600';
      case 'Friday': return 'from-red-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-blue-900 text-white p-3 relative">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-xl">Nuremberg Hearing Miniseries</h1>
          <button 
            onClick={() => setShowOverview(!showOverview)}
            className="flex items-center space-x-1 text-xs bg-blue-800 hover:bg-blue-700 px-2 py-1 rounded"
          >
            <Info size={14} />
            <span>{showOverview ? 'Hide' : 'Show'} Overview</span>
          </button>
        </div>
        <p className="text-xs text-blue-200 mt-1">March 17 - June 6, 2025 • "The Greatest Medical Crime in History: How We Take Back Our Freedom"</p>
      </div>

      {/* Collapsible Overview */}
      {showOverview && (
        <div className="bg-blue-50 p-3 text-sm border-b border-blue-100 animated fadeIn">
          <h3 className="font-semibold text-blue-900 mb-2">Series Overview</h3>
          <p className="text-xs text-gray-700">
            A 12-week miniseries exposing medical crimes and providing legal strategies. 
            Key focus areas include constitutional challenges, informed consent violations, 
            regulatory capture, and international health regulation challenges.
          </p>
          
          <h3 className="font-semibold text-blue-900 mt-3 mb-1">Highest Priority Filings</h3>
          <ul className="text-xs text-gray-700 list-disc pl-5">
            <li>Week 4: Minimal Risk Classification Challenge</li>
            <li>Week 5: Emergency Use Authorization Challenge</li>
            <li>Week 7: Congressional Informed Consent Inquiry</li>
            <li>Week 10: International Health Regulations Legal Challenge</li>
            <li>Week 11: WHO Pandemic Treaty Challenge</li>
          </ul>
        </div>
      )}

      {/* Week Navigation */}
      <div className="bg-gray-100 p-3 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <button 
            onClick={handlePreviousWeek}
            disabled={activeWeek === 1}
            className={`flex items-center p-1.5 rounded transition-all duration-200 ${
              activeWeek === 1 
                ? 'text-gray-400 cursor-not-allowed opacity-50' 
                : 'text-blue-600 hover:bg-blue-100 hover:shadow-sm'
            }`}
          >
            <ChevronLeft size={16} />
            <span className="text-xs ml-1 font-medium">Previous</span>
          </button>
          
          <div className="flex items-center text-sm bg-white px-3 py-1 rounded-full shadow-sm border border-gray-200">
            <Calendar size={14} className="mr-2 text-blue-600" />
            <span className="font-medium">{weeks[activeWeek - 1].date}</span>
          </div>
          
          <button 
            onClick={handleNextWeek}
            disabled={activeWeek === weeks.length}
            className={`flex items-center p-1.5 rounded transition-all duration-200 ${
              activeWeek === weeks.length 
                ? 'text-gray-400 cursor-not-allowed opacity-50' 
                : 'text-blue-600 hover:bg-blue-100 hover:shadow-sm'
            }`}
          >
            <span className="text-xs mr-1 font-medium">Next</span>
            <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-6 gap-1.5 mb-1">
          {weeks.slice(0, 6).map((week) => (
            <button
              key={week.number}
              onClick={() => handleWeekChange(week.number)}
              className={`text-xs py-1.5 px-1 rounded transition-all duration-200 ${
                activeWeek === week.number
                  ? 'bg-blue-600 text-white shadow-md transform scale-105'
                  : 'bg-white hover:bg-blue-50 border border-gray-300 hover:border-blue-300 hover:shadow'
              }`}
            >
              Week {week.number}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-6 gap-1.5">
          {weeks.slice(6, 12).map((week) => (
            <button
              key={week.number}
              onClick={() => handleWeekChange(week.number)}
              className={`text-xs py-1.5 px-1 rounded transition-all duration-200 ${
                activeWeek === week.number
                  ? 'bg-blue-600 text-white shadow-md transform scale-105'
                  : 'bg-white hover:bg-blue-50 border border-gray-300 hover:border-blue-300 hover:shadow'
              }`}
            >
              Week {week.number}
            </button>
          ))}
        </div>
      </div>

      {/* Current Week Content */}
      <div className="p-3">
        <h2 className="font-bold text-lg text-gray-800 mb-1">
          Week {activeWeek}: {weeks[activeWeek - 1].title}
        </h2>
        <p className="text-xs text-gray-600 mb-3">{weeks[activeWeek - 1].subtitle}</p>

        {/* Two-row button layout for episodes */}
        <div className="grid grid-cols-5 gap-2 mb-3">
          {weeks[activeWeek - 1].episodes.map((episode, idx) => (
            <button
              key={idx}
              onClick={() => openModal(
                `${episode.day}: ${episode.title}`, 
                <div>
                  <div className={`mb-3 p-2 bg-gradient-to-r ${getDayColorClass(episode.day)} rounded-md text-white text-xs`}>
                    <p className="font-medium">{episode.day}, {weeks[activeWeek - 1].date.split('-')[0]}</p>
                  </div>
                  <p className="text-sm mb-3">{episode.description}</p>
                  <h4 className="font-semibold text-sm mb-1 text-blue-700">Key Points:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {episode.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
              className="bg-white border border-gray-200 rounded-lg p-2 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 flex flex-col items-center text-center shadow-sm hover:shadow transform hover:-translate-y-1"
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 bg-gradient-to-r ${getDayColorClass(episode.day)} text-white`}>
                {getDayEmoji(episode.day)}
              </div>
              <span className="text-xs text-gray-500">{episode.day}</span>
              <span className="text-xs font-medium mt-1 line-clamp-2">{episode.title}</span>
            </button>
          ))}
        </div>
        
        {/* Quick access buttons - two rows */}
        <div className="mt-4">
          <h3 className="text-xs font-semibold text-gray-700 mb-2">STRATEGIC RESOURCES</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-2">
            <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs py-2 px-3 rounded-md flex items-center justify-center" onClick={() => openModal("Legal Filing Templates", "Repository of ready-to-use legal templates for challenging health regulations in multiple jurisdictions.")}>
              <span>📄 Legal Templates</span>
            </button>
            <button className="bg-green-100 hover:bg-green-200 text-green-800 text-xs py-2 px-3 rounded-md flex items-center justify-center" onClick={() => openModal("Evidence Repository", "Centralized database of scientific evidence, whistleblower testimonies, and institutional documentation.")}>
              <span>🔍 Evidence Repository</span>
            </button>
            <button className="bg-purple-100 hover:bg-purple-200 text-purple-800 text-xs py-2 px-3 rounded-md flex items-center justify-center" onClick={() => openModal("Expert Network", "Connect with legal and medical experts who can provide guidance on specific challenges.")}>
              <span>👥 Expert Network</span>
            </button>
            <button className="bg-red-100 hover:bg-red-200 text-red-800 text-xs py-2 px-3 rounded-md flex items-center justify-center" onClick={() => openModal("Urgent Actions", "Time-sensitive legal and advocacy actions requiring immediate attention.")}>
              <span>⚠️ Urgent Actions</span>
            </button>
            <button className="bg-amber-100 hover:bg-amber-200 text-amber-800 text-xs py-2 px-3 rounded-md flex items-center justify-center" onClick={() => openModal("Training Materials", "Educational resources for understanding legal frameworks and preparing challenges.")}>
              <span>📚 Training Materials</span>
            </button>
            <button className="bg-teal-100 hover:bg-teal-200 text-teal-800 text-xs py-2 px-3 rounded-md flex items-center justify-center" onClick={() => openModal("Success Stories", "Case studies of successful legal challenges and their strategic implications.")}>
              <span>🏆 Success Stories</span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Modal with animations */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 animated fadeIn" onClick={closeModal}>
          <div 
            className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto animated popIn m-4" 
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-blue-900 to-indigo-800 text-white rounded-t-lg">
              <h3 className="font-bold">{modalContent.title}</h3>
              <button 
                onClick={closeModal} 
                className="text-white hover:text-blue-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-full"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4 bg-white">
              <div className="text-gray-700">{modalContent.content}</div>
            </div>
            <div className="p-3 bg-gray-50 border-t border-gray-200 flex justify-between rounded-b-lg">
              <button 
                onClick={() => {
                  // Placeholder for future "Add to Calendar" functionality
                  alert("Calendar functionality would be implemented here");
                }}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1.5 rounded text-xs flex items-center transition-colors duration-200"
              >
                <Calendar size={12} className="mr-1" />
                Add to Calendar
              </button>
              <button 
                onClick={closeModal}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded text-xs transition-colors duration-200 shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS for animations */}
      <style jsx>{`
        .animated {
          animation-duration: 300ms;
          animation-fill-mode: both;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .fadeIn {
          animation-name: fadeIn;
        }
        
        .slideIn {
          animation-name: slideIn;
        }
      `}</style>
    </div>
  );
};

export default NurembergInterface;
