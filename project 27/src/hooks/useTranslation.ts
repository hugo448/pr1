import { useState } from 'react';
import { Language, Translations } from '../types';
import { useLocalStorage } from './useLocalStorage';

const translations: Translations = {
  // Header
  appTitle: {
    fr: 'Ma Liste de Tâches',
    en: 'My Task List'
  },
  appSubtitle: {
    fr: 'Organisez vos tâches et notes en toute simplicité',
    en: 'Organize your tasks and notes with ease'
  },
  
  // Navigation
  tasks: {
    fr: 'Tâches',
    en: 'Tasks'
  },
  notes: {
    fr: 'Notes',
    en: 'Notes'
  },
  
  // Task Form
  addTaskPlaceholder: {
    fr: 'Ajouter une nouvelle tâche...',
    en: 'Add a new task...'
  },
  addButton: {
    fr: 'Ajouter',
    en: 'Add'
  },
  
  // Task Filter
  allTasks: {
    fr: 'Toutes',
    en: 'All'
  },
  activeTasks: {
    fr: 'Actives',
    en: 'Active'
  },
  completedTasks: {
    fr: 'Terminées',
    en: 'Completed'
  },
  
  // Empty States
  noTasks: {
    fr: 'Aucune tâche',
    en: 'No tasks'
  },
  noActiveTasks: {
    fr: 'Aucune tâche active',
    en: 'No active tasks'
  },
  noCompletedTasks: {
    fr: 'Aucune tâche terminée',
    en: 'No completed tasks'
  },
  addFirstTask: {
    fr: 'Commencez par ajouter votre première tâche',
    en: 'Start by adding your first task'
  },
  allTasksCompleted: {
    fr: 'Toutes vos tâches sont terminées !',
    en: 'All your tasks are completed!'
  },
  noTasksCompleted: {
    fr: 'Vous n\'avez pas encore terminé de tâches',
    en: 'You haven\'t completed any tasks yet'
  },
  
  // Task Counter
  taskRemaining: {
    fr: 'tâche restante',
    en: 'task remaining'
  },
  tasksRemaining: {
    fr: 'tâches restantes',
    en: 'tasks remaining'
  },
  
  // Notes Section
  notesTitle: {
    fr: 'Notes',
    en: 'Notes'
  },
  addNotePlaceholder: {
    fr: 'Écrivez votre note...',
    en: 'Write your note...'
  },
  cancel: {
    fr: 'Annuler',
    en: 'Cancel'
  },
  noNotes: {
    fr: 'Aucune note pour le moment',
    en: 'No notes yet'
  },
  addFirstNote: {
    fr: 'Cliquez sur le + pour ajouter votre première note',
    en: 'Click the + to add your first note'
  }
};

export function useTranslation() {
  const [language, setLanguage] = useLocalStorage<Language>('todo-language', 'fr');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return {
    language,
    setLanguage,
    toggleLanguage,
    t
  };
}