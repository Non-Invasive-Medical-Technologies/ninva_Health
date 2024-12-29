import React from 'react';
import { Heart, Calendar, MessageSquare, User } from 'lucide-react';

interface BottomNavigationProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
}

export const BottomNavigation = ({ activeScreen, setActiveScreen }: BottomNavigationProps) => {
  const navItems = [
    { icon: Heart, label: 'Health' },
    { icon: Calendar, label: 'Schedule' },
    { icon: MessageSquare, label: 'Chat' },
    { icon: User, label: 'Profile' }
  ];

  return (
    <div className="absolute bottom-0 inset-x-0 bg-white border-t p-4">
      <div className="flex justify-around">
        {navItems.map((item, idx) => (
          <button 
            key={idx}
            className="flex flex-col items-center"
            onClick={() => setActiveScreen(item.label.toLowerCase())}
          >
            <item.icon className={`w-6 h-6 ${
              activeScreen === item.label.toLowerCase() 
                ? 'text-[#26652C]' 
                : 'text-gray-400'
            }`} />
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};