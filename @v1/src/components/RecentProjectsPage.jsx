import React, { useState } from "react";
import "../styles/RecentPage.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import recentData from "../RecentProject.json";

const RecentProjectsPage = () => {
  const [activeProject, setActiveProject] = useState("Tile Adhesives");
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const showProjectDetails = (projectId) => {
    setActiveProject(projectId);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="rp-bg">
        <img src="/src/assets/images/5.jpg" alt="Recent Background" />
        <h2 className="rp-head">Recent Projects/</h2>
      </div>
      <div className="rp-container">
        {sidebarVisible && (
          <div className="rp-sidebar">
            {/* <button onClick={toggleSidebar}>Toggle Sidebar</button> */}
            <button
              onClick={() => showProjectDetails("Tile Adhesives")}
              className={activeProject === "Tile Adhesives" ? "btn-active" : ""}
            >
              Tile Adhesives
            </button>
            <button
              onClick={() => showProjectDetails("WaterProofing Textures")}
              className={
                activeProject === "WaterProofing Textures" ? "btn-active" : ""
              }
            >
              WaterProofing Textures
            </button>
            <button
              onClick={() => showProjectDetails("Termite Treatment")}
              className={
                activeProject === "Termite Treatment" ? "btn-active" : ""
              }
            >
              Termite Treatment
            </button>
            <button
              onClick={() => showProjectDetails("Composite Plumbing")}
              className={
                activeProject === "Composite Plumbing" ? "btn-active" : ""
              }
            >
              Composite Plumbing
            </button>
          </div>
        )}

        <div className="rp-content">
          <button onClick={toggleSidebar}>
            {sidebarVisible ? <RxCross2 /> : <IoReorderThreeOutline />}
          </button>
          <div className="project-details">
            <h2>{activeProject}</h2>
            <div className="rp-project-details">
              {recentData[activeProject]?.map((item) => (
                <div>
                  <img src={item.img}></img>
                  <p className="rp-pd-title">{item.title}</p>
                  <p className="rp-pd-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentProjectsPage;
