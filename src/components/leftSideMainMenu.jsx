"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup"; // For validation schema
import {
  createLabel,
  deleteLabel,
  getLabelList,
} from "../app/api/context/labels/index";
import { showToast } from "./ToastNotifier";
import { Trash } from "./svg/svg";
import { useRouter } from "next/navigation";
export default function LeftSideMainMenu({isCollapsed}) {
  const router = useRouter();
  const [labels, setLabels] = useState([]);
  const [selected, setSelected] = useState("Overview");
  const [isAddingLabel, setIsAddingLabel] = useState(false);
  const [newLabel, setNewLabel] = useState("");
  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Project name is required"),
      // .min(3, "Must be at least 3 characters"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      createLabel(values)((response) => {
        // setPending(false);
        if (response && response?.status_code === 201) {
          setLabels((prevstate) => [response?.data, ...prevstate]);
          formik.resetForm();
          showToast.success(response?.message);
        } else {
          showToast.error("Failed to save data.");
        }
      });
      handleClose();
    },
  });

  const handleNavigate = (link) => {
    if (link) {
      console.log(`Navigating to: ${link}`);
      router.push(link);
      // Use router.push(link) if navigation is required
    }
  };

  const updateLabel = (data) => {
    formik.setValues({ ...data });
  };

  const handleRemoveLabel = (index, item) => {
    deleteLabel({ label_id: item?.label_id })((response) => {
      // setPending(false);
      if (response && response?.status_code === 200) {
        setLabels((prev) => prev.filter((_, i) => i !== index));
        showToast.success(response?.message);
      } else {
        showToast.error("Failed to save data.");
      }
    });
  };
  useEffect(() => {
    getLabelList()((response) => {
      // setPending(false);
      if (response && response?.status_code === 200) {
        setLabels(response?.data);
        showToast.success(response?.message);
      } else {
        showToast.error("Failed to save data.");
      }
    });
  }, []);
  console.log(labels, "------00");
  return (
    <nav className={`space-y-2 text-primaryFontColor bg-backgroundLight py-2 rounded-lg max-w-xs ${
      isCollapsed ? "px-1" : "px-4"
    }`}>
      {[
        { name: "Overview", route: "/dashboard" },
        { name: "Accounts", route: "/" },
        { name: "Secure Notes", route: "/secure-notes" },
        { name: "Labels", route: "" },
      ].map((item) => (
        <div key={item.name}>
          <button
            className={`flex items-center gap-2 text-sm font-normal w-full py-2 px-3 rounded-lg ${
              selected === item.name ? "bg-primaryBorder" : "hover:bg-primaryBorder"
            } relative`}
            onClick={() => {
              setSelected(item.name);
              handleNavigate(item.route);
            }}
          >
            {selected === item.name && (
              <div
                className="absolute left-0 top-0 self-center bottom-0 w-1 bg-primaryFontColor rounded-xl"
                style={{ height: "60%" }}
              ></div>
            )}
            <div className={`flex items-center w-full ${
            isCollapsed ? "justify-center" : ""
          }`}>
              <div className={`w-5 ${
            isCollapsed ? "" : "mr-2"
          } `}>
                <Image
                  src={
                    require(`../asssets/images/${item.name
                      .toLowerCase()
                      .replace(" ", "-")}.svg`).default
                  }
                  alt={item.name.toLowerCase()}
                />
              </div>
              {!isCollapsed&&item.name}
            </div>
            {!isCollapsed && item.name === "Labels" && (
              <button
                className="ml-auto bg-primaryFontColor text-defaultBlack text-xs px-2 py-1 rounded hover:bg-gray-200"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAddingLabel(!isAddingLabel); // Toggle input visibility
                }}
              >
                +
              </button>
            )}
          </button>

          {/* Render Label List and Input for Labels */}
          {item.name === "Labels" && selected === "Labels" && (
            <div className="pt-2">
              {/* Fixed Input Field */}
              {isAddingLabel && (
                <form onSubmit={formik.handleSubmit} className="mb-2">
                  <div className="w-full flex items-center space-x-2 bg-backgroundLight rounded-md">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Label name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full text-secondaryFontColor placeholder-secondaryFontColor py-1 px-2 border ${
                        formik.touched.name && formik.errors.name
                          ? "border-red-500"
                          : "border-primaryBorder border focus:ring-primaryFontColor focus:outline-none focus:ring-1"
                      } bg-backgroundLight text-primaryFontColor text-sm rounded-md`}
                    />
                    <button
                      type="submit"
                      // className="bg-white text-black text-xs px-2 py-1 rounded hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </form>
              )}
              {/* Scrollable Label List */}
              <div className="max-h-20 overflow-y-auto bg-backgroundLight rounded-md">
                {labels?.map((label, index) => (
                  <div
                    onClick={() => {
                      updateLabel(label);
                    }}
                    key={index}
                    className="cursor-pointer text-sm flex justify-between items-center py-1 px-4 bg-backgroundLight rounded-md border border-primaryBorder mb-1"
                  >
                    <span>{label?.name}</span>
                    <button
                      className="text-red-500 text-xs"
                      onClick={() => handleRemoveLabel(index, label)}
                    >
                      <Trash />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
