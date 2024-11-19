import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup"; // For validation schema
import close from "../asssets/images/close.svg";
import { createProject } from "../app/api/context/projects";
import { showToast } from "./ToastNotifier";
const LabelModal = ({ onClose, setProjects,
  projects,
  setSelectedProject,
  selectedProject }) => {
  const [isVisible, setIsVisible] = useState(false); // Start invisible

  // Open modal animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    });
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Close modal animation
  const handleClose = () => {
    setIsVisible(false); // Start hiding animation
    setTimeout(onClose, 500); // Wait for animation to complete before closing
  };

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Project name is required"),
      // .min(3, "Must be at least 3 characters"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      createProject(values)((response) => {
        // setPending(false);
        if (response && response?.status_code === 201) {
          const curentData = { label: response?.data?.name, value: response?.data?.project_id }
          setProjects((prevstate) => ([...prevstate, { label: response?.data?.name, value: response?.data?.project_id }]))
          setSelectedProject(curentData);
          showToast.success(response?.message);

        } else {
          showToast.error("Failed to save data.");

        }
      })
      handleClose();
    },
  });

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-labelBg bg-opacity-60 backdrop-blur z-50 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      <div
        className={`relative bg-backgroundLight rounded-lg p-16 w-30rem text-primaryFontColor transform transition-transform duration-500 ${isVisible ? "scale-100" : "scale-90"
          }`}
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing on click
      >
        <h2 className="text-center text-lg font-semibold mb-6">Projects</h2>

        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
          {/* Project Name Field */}
          <div
            className={`mb-7 transition-all duration-300 ${formik.errors.name && formik.touched.name
              ? "animate-shake" // Field shake animation on error
              : ""
              }`}
          >
            <label
              className="block text-primaryFontColor text-base font-normal mb-2"
              htmlFor="name"
            >
              Project Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter project name"
              className={`w-full py-2 px-3 rounded-lg bg-primaryBorder border ${formik.errors.name && formik.touched.name
                ? "border-red-500"
                : "border-primaryBorder"
                } text-primaryFontColor placeholder-secondaryFontColor focus:outline-none focus:border-gray-400 transition-colors`}
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.name}
              </p>
            ) : null}
          </div>

          {/* Project Description Field */}
          <div
            className={`mb-7 transition-all duration-300 ${formik.errors.description && formik.touched.description
              ? "animate-shake"
              : ""
              }`}
          >
            <label
              className="block text-primaryFontColor text-base font-normal mb-2"
              htmlFor="description"
            >
              Project Description
            </label>
            <textarea
              id="description"
              placeholder="Enter project description"
              className={`w-full h-24 py-2 px-3 rounded-lg bg-primaryBorder border ${formik.errors.description && formik.touched.description
                ? "border-red-500"
                : "border-primaryBorder"
                } text-primaryFontColor placeholder-secondaryFontColor focus:outline-none focus:border-gray-400 transition-colors`}
              {...formik.getFieldProps("description")}
            />
            {formik.touched.description &&
              formik.errors.description ? (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.description}
              </p>
            ) : null}
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full mt-8 py-1.5 px-2 bg-primaryFontColor text-defaultBlack rounded-lg text-lg font-normal"
          >
            Save
          </button>
        </form>
      </div>

      {/* Close Button */}
      <div className="mt-4">
        <button
          onClick={handleClose}
          className="flex p-2 items-center justify-center border border-defaultBlack bg-defaultBlack rounded-full">
          <div className="w-4 h-4 ">
            <Image src={close} alt="close-icon" width={20} height={20} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default LabelModal;


