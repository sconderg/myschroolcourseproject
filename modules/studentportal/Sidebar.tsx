"use client";

import InstitutionIcon from "@/components/icons/InstitutionIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaUser,
  FaClock,
  FaMoneyBill,
  FaClipboardList,
  FaPoll,
  FaGraduationCap,
  FaChartLine,
  FaFileAlt,
  FaCreditCard,
  FaIdCard,
  FaEnvelope,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter();

  return (
    <>
      {!isOpen && (
        <button
          className="fixed top-0 right-0 mt-2 mr-2 md:hidden text-white text-2xl bg-primary p-2 rounded-md"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
      )}
      <div
        className={`w-full md:w-1/4 xl:w-1/5 bg-primary min-h-screen ${
          isOpen ? "block fixed" : "hidden"
        } md:block md:relative`}
      >
        <div className="flex flex-col justify-center items-center">
          {isOpen && (
            <button
              className="absolute top-0  md:hidden right-0 mt-2 mr-2 text-white text-2xl"
              onClick={toggleSidebar}
            >
              <FaTimes />
            </button>
          )}
          <div className="flex justify-center items-center rounded w-full relative overflow-hidden mt-5">
            <div className="bg-secondary text-white p-2 h-full">
              <InstitutionIcon size="24px" color="#FFF" />
            </div>
            <div className="bg-black bg-opacity-25 text-white h-full p-2 px-3 text-sm">
              Thebes Academy
            </div>
          </div>

          <div className="flex justify-center items-center w-full mt-4">
            <button
              onClick={() => {
                localStorage.removeItem("isLogin");
                router.push("/");
              }}
              className="bg-red-700 w-full hover:bg-blue-700 text-white font-bold py-2 px-4"
            >
              Log out
            </button>
          </div>
          <div className="flex justify-center items-center pl-2 xl:pl-4 mt-4">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center py-2">
                <Link
                  href="student-portal/?page=basic-data"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-300 flex items-center"
                >
                  <FaUser className="mr-2" />
                  Basic Data
                </Link>
              </li>
              <li className="flex items-center py-2">
                <Link
                  href="student-portal/?page=study-time-table"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-300 flex items-center"
                >
                  <FaClock className="mr-2" />
                  Study Time Table
                </Link>
              </li>
              <li className="flex items-center py-2">
                <Link
                  href="student-portal/?page=registration-fees"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-300 flex items-center"
                >
                  <FaMoneyBill className="mr-2" />
                  Registration Fees
                </Link>
              </li>
              <li className="flex items-center py-2">
                <Link
                  href="student-portal/?page=exams-time-table"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-300 flex items-center"
                >
                  <FaClipboardList className="mr-2" />
                  Exams Time Table
                </Link>
              </li>
              <li className="flex items-center py-2">
                <Link
                  href="student-portal/?page=questionnaire"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-300 flex items-center"
                >
                  <FaPoll className="mr-2" />
                  Questionnaire
                </Link>
              </li>
              <li className="flex items-center py-2">
                <Link
                  href="student-portal/?page=courses-grades"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-300 flex items-center"
                >
                  <FaGraduationCap className="mr-2" />
                  Courses Grades
                </Link>
              </li>
              <li className="flex items-center py-2">
                <Link
                  href="student-portal/?page=student-progress"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-300 flex items-center"
                >
                  <FaChartLine className="mr-2" />
                  Student Progress
                </Link>
              </li>
              <li className="flex items-center py-2">
                <Link
                  href="student-portal/?page=documents"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-300 flex items-center"
                >
                  <FaFileAlt className="mr-2" />
                  Documents
                </Link>
              </li>
              <li className="flex items-center py-2">
                <Link
                  href="student-portal/?page=payment"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-300 flex items-center"
                >
                  <FaCreditCard className="mr-2" />
                  Payment
                </Link>
              </li>
              <li className="flex items-center py-2">
                <Link
                  href="student-portal/?page=student-id"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-300 flex items-center"
                >
                  <FaIdCard className="mr-2" />
                  Student ID
                </Link>
              </li>
              <li className="flex items-center py-2">
                <Link
                  href="student-portal/?page=messages"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-300 flex items-center"
                >
                  <FaEnvelope className="mr-2" />
                  Messages
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
