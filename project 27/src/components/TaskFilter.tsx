import React from 'react';
import { FilterType } from '../types';
import { useTranslation } from '../hooks/useTranslation';

interface TaskFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  taskCounts: {
    all: number;
    active: number;
    completed: number;
  };
}

export function TaskFilter({ currentFilter, onFilterChange, taskCounts }: TaskFilterProps) {
  const { t } = useTranslation();

  const filters: { key: FilterType; labelKey: string; count: number }[] = [
    { key: 'all', labelKey: 'allTasks', count: taskCounts.all },
    { key: 'active', labelKey: 'activeTasks', count: taskCounts.active },
    { key: 'completed', labelKey: 'completedTasks', count: taskCounts.completed },
  ];

  return (
    <div className="flex gap-1 p-1 bg-gray-100 rounded-lg mb-6">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            currentFilter === filter.key
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          {t(filter.labelKey)} ({filter.count})
        </button>
      ))}
    </div>
  );
}