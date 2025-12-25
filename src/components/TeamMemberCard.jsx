import React from 'react';
import { getTeamImage } from './img/team';

const TeamMemberCard = ({ member, size = 'medium', category = 'default' }) => {
  const sizeClasses = {
    large: 'w-32 h-32',
    medium: 'w-24 h-24',
    small: 'w-16 h-16',
  };

  const cardClasses = {
    large: 'p-6 rounded-2xl',
    medium: 'p-4 rounded-xl',
    small: 'p-3 rounded-lg',
  };

  const textSizeClasses = {
    large: 'text-lg',
    medium: 'text-md',
    small: 'text-sm',
  };

  const image = member.image || getTeamImage(member.role, category);

  return (
    <div className={`bg-white text-center shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 ${cardClasses[size]}`}>
      <div className={`${sizeClasses[size]} bg-gray-100 rounded-full mx-auto mb-4 overflow-hidden border-2 border-gray-50 relative group`}>
        <img 
          src={image} 
          alt={member.name || member.role} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" 
          loading="lazy"
        />
      </div>
      {member.name && (
        <h4 className={`font-bold text-gbc-black mb-1 leading-tight ${textSizeClasses[size]}`}>
          {member.name}
        </h4>
      )}
      <p className={`text-gbc-green font-medium uppercase tracking-wide ${size === 'small' ? 'text-xs' : 'text-sm'}`}>
        {member.role}
      </p>
    </div>
  );
};

export default TeamMemberCard;

