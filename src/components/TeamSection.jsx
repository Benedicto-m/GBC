import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Users, User, Filter } from 'lucide-react';
import TeamMemberCard from './TeamMemberCard';

const TeamSection = ({ title, icon: Icon, members, defaultCategory = null, size = 'medium' }) => {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Grouper les membres par catégorie/role
  const groupedMembers = useMemo(() => {
    const groups = {};
    members.forEach(member => {
      const category = member.category || member.role || 'Autres';
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(member);
    });
    return groups;
  }, [members]);

  const categories = Object.keys(groupedMembers);
  const hasMultipleCategories = categories.length > 1;

  // Déterminer quelle catégorie afficher
  const currentCategory = selectedCategory || categories[0] || 'Tous';
  const membersToShow = selectedCategory 
    ? groupedMembers[selectedCategory] || []
    : members;

  // Limiter l'affichage initial (afficher seulement les 12 premiers)
  const initialDisplayCount = 12;
  const displayedMembers = showAll 
    ? membersToShow 
    : membersToShow.slice(0, initialDisplayCount);
  const hasMore = membersToShow.length > initialDisplayCount;

  return (
    <div className="mb-16">
      {/* En-tête avec filtre */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gbc-blue/10 rounded-full text-gbc-blue">
            <Icon size={24} />
          </div>
          <h3 className="text-2xl font-bold text-gbc-black">{title}</h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {members.length} {members.length > 1 ? 'membres' : 'membre'}
          </span>
        </div>

        {/* Menu de filtrage par catégorie (menu cascade) */}
        {hasMultipleCategories && (
          <div className="relative">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:border-gbc-green transition-colors shadow-sm"
            >
              <Filter size={18} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                {currentCategory}
              </span>
              {isExpanded ? (
                <ChevronUp size={18} className="text-gray-600" />
              ) : (
                <ChevronDown size={18} className="text-gray-600" />
              )}
            </button>

            {/* Menu déroulant */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 z-10 overflow-hidden"
                >
                  <div className="py-2">
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        setIsExpanded(false);
                        setShowAll(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        selectedCategory === null ? 'bg-gbc-green/10 text-gbc-green font-semibold' : 'text-gray-700'
                      }`}
                    >
                      Tous ({members.length})
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsExpanded(false);
                          setShowAll(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                          selectedCategory === category ? 'bg-gbc-green/10 text-gbc-green font-semibold' : 'text-gray-700'
                        }`}
                      >
                        {category} ({groupedMembers[category].length})
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Grille des membres */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        <AnimatePresence mode="wait">
          {displayedMembers.map((member, idx) => (
            <motion.div
              key={member.id || idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, delay: idx * 0.02 }}
            >
              <TeamMemberCard 
                member={member} 
                size={size}
                category={selectedCategory}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Bouton "Voir plus" / "Voir moins" */}
      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-gbc-green text-white font-bold rounded-xl hover:bg-gbc-black transition-colors shadow-md hover:shadow-lg"
          >
            {showAll ? (
              <>
                <ChevronUp size={18} className="inline mr-2" />
                Voir moins
              </>
            ) : (
              <>
                Voir tous ({membersToShow.length - initialDisplayCount} de plus)
                <ChevronDown size={18} className="inline ml-2" />
              </>
            )}
          </button>
        </div>
      )}

      {/* Badge de catégorie active */}
      {selectedCategory && (
        <div className="mt-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gbc-green/10 text-gbc-green rounded-full text-sm font-medium">
            <Filter size={14} />
            Filtre actif : {selectedCategory}
            <button
              onClick={() => {
                setSelectedCategory(null);
                setShowAll(false);
              }}
              className="ml-2 hover:text-gbc-black transition-colors"
            >
              ✕
            </button>
          </span>
        </div>
      )}
    </div>
  );
};

export default TeamSection;

