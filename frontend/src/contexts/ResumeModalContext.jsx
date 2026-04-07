import React, { createContext, useContext, useState } from 'react';

const ResumeModalContext = createContext(null);

export function ResumeModalProvider({ children }) {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  return (
    <ResumeModalContext.Provider value={{ isResumeModalOpen, setIsResumeModalOpen }}>
      {children}
    </ResumeModalContext.Provider>
  );
}

export function useResumeModal() {
  const ctx = useContext(ResumeModalContext);
  return ctx ?? { isResumeModalOpen: false, setIsResumeModalOpen: () => {} };
}