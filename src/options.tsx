import { createContext, useContext, useState, ReactNode, FC } from 'react';
import { useSet } from 'react-use';

type OptionsContextType = {
  tags: Set<string>;
  toggleTag: (tag: string) => void;
  hasTag: (tag: string) => boolean;
  clearTags: () => void;
};

const OptionsContext = createContext<OptionsContextType | undefined>(undefined);

export function OptionsProvider({ children }: { children: ReactNode }) {
  const [tags, { toggle: toggleTag, clear: clearTags, has: hasTag }] =
    useSet<string>(new Set([]));

  return (
    <OptionsContext.Provider value={{ tags, toggleTag, clearTags, hasTag }}>
      {children}
    </OptionsContext.Provider>
  );
}

export function useOptions() {
  const context = useContext(OptionsContext);
  if (!context) {
    throw new Error('useOptions must be used within a OptionsProvider');
  }
  return context;
}
