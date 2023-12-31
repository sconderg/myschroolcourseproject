"use client";

import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import BasicDataPage from "./basicData/BasicDataPage";
import RegisterationFeesPage from "./registerationFees/RegisterationFeesPage";
import StudyTimeTablePage from "./studyTimeTable/StudyTimeTablePage";
import { useEffect, useState } from "react";
import CoursesGradePage from "./CoursesGradePage";
import ExamsTimeTablePage from "./ExamsTimeTablePage";
import { useIsLogin } from "@/hooks/useIsLogin";

const PageToDisplay = ({ page }: { page: string | string[] | undefined }) => {
  // according to the page prop, we need to display the correct page
  switch (page) {
    case "basic-data":
      return <BasicDataPage />;
    case "study-time-table":
      return <StudyTimeTablePage />;
    case "registration-fees":
      return <RegisterationFeesPage />;
    case "courses-grades":
      return <CoursesGradePage />;
    case "exams-time-table":
      return <ExamsTimeTablePage />;
    default:
      return <BasicDataPage />;
  }
};

export default function StudentPortal({
  page,
}: {
  page: string | string[] | undefined;
}) {
  const islogin = useIsLogin();
  if (!islogin) return null;

  return (
    // we need a sidebar to navigate between the different pages
    // we need a header to show the name of the student and the logout button
    // we need a main section to show the content of the page
    // we need a footer to show the name of the university and the year
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        <Sidebar />
        <div className="container mx-auto px-4 py-8">
          <PageToDisplay page={page} />
        </div>
        {/* footer */}
      </div>
      <footer className="w-full bg-primary text-white text-center py-4 border-t border-gray-300">
        <p className="text-sm">
          Thebes Academy © {new Date().getFullYear()}. All rights reserved.
        </p>
      </footer>
    </>
  );
}
