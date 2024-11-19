"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Testproject from "../asssets/images/test-project.svg";
import Downarrow from "../asssets/images/down-arrow.svg";
import plus from "../asssets/images/plus-black.svg";
import { getProjectList } from "../app/api/context/projects";

export default function CustomSelect({
  openModal,
  setProjects,
  projects,
  setSelectedProject,
  selectedProject,
  isCollapsed
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Controls dropdown state
  const [isAnimating, setIsAnimating] = useState(false); // Handles animation state
  const [isCreatingProject, setIsCreatingProject] = useState(false); // Tracks create project state
  const [newProject, setNewProject] = useState(""); // Tracks new project name

  const dropdownRef = useRef(null);

  // Fetch initial project list and set the first project as selected
  useEffect(() => {
    getProjectList({ page: 1, limit: 10 })((response) => {
      if (response?.status_code === 200) {
        const transformedData = response.data.map((item) => ({
          label: item.name,
          value: item.project_id,
        }));
        setProjects(transformedData);
        setSelectedProject(transformedData[0]);
      }
    });

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsCreatingProject(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setProjects, setSelectedProject]);

  // Open dropdown with animation
  const openDropdown = () => {
    setIsDropdownOpen(true);
    setTimeout(() => setIsAnimating(true), 10); // Start animation
  };

  // Close dropdown with animation
  const closeDropdown = () => {
    setIsAnimating(false); // Trigger animation
    setTimeout(() => setIsDropdownOpen(false), 300); // Wait for animation to finish
  };

  // Handle selecting a project
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    closeDropdown(); // Use animation-friendly close method
  };

  // Handle creating a new project
  const handleCreateProject = () => {
    if (newProject.trim()) {
      const newProjectData = { label: newProject, value: Date.now() }; // Create new project object
      setProjects((prev) => [...prev, newProjectData]); // Update project list
      setSelectedProject(newProjectData); // Set new project as selected
      setNewProject(""); // Reset input
      setIsCreatingProject(false);
      closeDropdown(); // Close dropdown
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Select Box */}
      <button
        onClick={isDropdownOpen ? closeDropdown : openDropdown}
        className="flex justify-between text-base font-medium items-center text-defaultBlack w-full py-1 px-3 rounded-lg mb-4 bg-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
      >
        <div className="w-5">
          <Image src={Testproject} alt="test-project" />
        </div>
        {!isCollapsed&&selectedProject?.label}
        <div>
          <Image src={Downarrow} alt="down-arrow" />
        </div>
      </button>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div
          className={`absolute left-0 mt-1 bg-primaryFontColor text-defaultBlack rounded-lg shadow-lg border z-10 w-full transition-all duration-300 ease-in-out ${
            isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ minWidth: "180px", transformOrigin: "top center" }}
        >
          {/* Scrollable Options */}
          <div className="max-h-48 overflow-y-auto">
            {projects.map((project) => (
              <div
                key={project.value}
                className="p-3 text-sm rounded-lg hover:bg-gray-100 cursor-pointer"
                onClick={() => handleProjectSelect(project)}
              >
                {project.label}
              </div>
            ))}
          </div>

          {/* Create New Project */}
          {
            !isCreatingProject ? (
              <div
                onClick={() => {
                  openModal("Create New Project content goes here"); // Placeholder for modal content
                  setIsCreatingProject(true);
                }}
                className="flex items-center border border-t-projectBorder gap-3 text-base p-3 hover:bg-gray-100 text-defaultBlack font-semibold cursor-pointer w-full rounded-b-md transition-colors duration-200"
              >
                <span className="w-4">
                  <Image src={plus} alt="plus-icon" />
                </span>
                Create New Project
              </div>
            ) : null
            // <div className="flex items-center px-4 py-2 space-x-2">
            //   <input
            //     type="text"
            //     value={newProject}
            //     onChange={(e) => setNewProject(e.target.value)}
            //     placeholder="Enter project name"
            //     className="flex-grow py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   />
            //   <button
            //     onClick={handleCreateProject}
            //     className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            //   >
            //     Add
            //   </button>
            // </div>
          }
        </div>
      )}
    </div>
  );
}
