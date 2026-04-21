import React, { createContext, useContext, useState } from 'react';

interface AnnotationContextValue {
  isOn: boolean;
  toggle: () => void;
}

const AnnotationContext = createContext<AnnotationContextValue>({ isOn: false, toggle: () => {} });

export const AnnotationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  return (
    <AnnotationContext.Provider value={{ isOn, toggle: () => setIsOn(v => !v) }}>
      {children}
    </AnnotationContext.Provider>
  );
};

export const useAnnotations = () => useContext(AnnotationContext);
