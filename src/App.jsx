import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectsSidebar";

function App() {
  const [projectState, selectedProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    selectedProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
