import React from 'react';
import { Languages } from 'lucide-react';
import { Language } from '../types';

interface LanguageToggleProps {
  currentLanguage: Language;
  onToggle: () => void;
}

export function LanguageToggle({ currentLanguage, onToggle }: LanguageToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 text-gray-700 hover:text-gray-900"
      title={currentLanguage === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      <Languages size={18} />
      <span className="text-sm font-medium">
        {currentLanguage === 'fr' ? 'FR' : 'EN'}
      </span>
    </button>
  );
}