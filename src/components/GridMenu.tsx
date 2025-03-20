import React from 'react';
import { useNavigate } from 'react-router-dom';

interface GridMenuProps {
  onMenuSelect: (menu: string) => void;
}

const menuItems = [
  { id: 'agents', label: 'AGENTS', type: 'route', path: '/agents' },
  { id: 'tuning', label: 'TUNING', type: 'route', path: '/tuning' },
  { id: 'synthesis', label: 'SYNTH<strong class="font-bold">OS</strong>', type: 'route', path: '/synthos' },
  { id: 'horizon', label: 'HORIZON', type: 'route', path: '/horizon' },
  { id: 'blog', label: 'BLOG', type: 'route', path: '/blog' },
  { id: 'contact', label: 'CONTACT', type: 'overlay' }
];

export default function GridMenu({ onMenuSelect }: GridMenuProps) {
  const navigate = useNavigate();

  const handleItemClick = (item: typeof menuItems[0]) => {
    if (item.type === 'route') {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onMenuSelect(item.id);
    }
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-1 px-2 w-full max-w-[1200px] mx-auto">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleItemClick(item)}
          className="w-[28vw] h-[28vw] md:w-[16vw] md:h-[16vw] max-w-[150px] max-h-[150px] min-w-[100px] min-h-[100px] relative group"
        >
          {/* Dark tinted background with increased blur */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[8px] border border-[#928466]/30 group-hover:border-[#928466] transition-all duration-300" />
          
          {/* Glowing border effect */}
          <div className="absolute inset-[1px] bg-gradient-to-r from-[#928466]/0 via-[#928466]/10 to-[#928466]/0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          
          {/* Inner shadow for depth */}
          <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(146,132,102,0.05)] group-hover:shadow-[inset_0_0_30px_rgba(146,132,102,0.1)] transition-all duration-300" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span 
              className="text-[10px] md:text-xs tracking-[0.2em] font-thin text-white/60 group-hover:text-[#928466] transition-colors duration-300"
              dangerouslySetInnerHTML={{ __html: item.label }}
            />
          </div>
        </button>
      ))}
    </div>
  );
}