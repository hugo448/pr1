export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Note {
  id: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

export type FilterType = 'all' | 'active' | 'completed';

export type Language = 'fr' | 'en';

export interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}