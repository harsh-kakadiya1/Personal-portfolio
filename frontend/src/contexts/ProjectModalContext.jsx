import React, { createContext, useContext, useState } from 'react';

const ProjectModalContext = createContext(null);

export function ProjectModalProvider({ children }) {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  return (
    <ProjectModalContext.Provider value={{ isProjectModalOpen, setIsProjectModalOpen }}>
      {children}
    </ProjectModalContext.Provider>
  );
}

export function useProjectModal() {
  const ctx = useContext(ProjectModalContext);
  return ctx ?? { isProjectModalOpen: false, setIsProjectModalOpen: () => {} };
}
