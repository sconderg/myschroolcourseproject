"use client";

const StudyTimeTablePage = () => {
  return (
    <div className="studytimetable">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl mb-2 text-primary font-bold dontprint">
          Study Time Table
        </h2>
        <div className="flex items-center dontprint">
          <button
            className="bg-primary text-white rounded-md p-2 px-4 mr-2"
            onClick={() => window.print()}
          >
            Print
          </button>
          <button className="bg-primary text-white rounded-md p-2 px-4">
            Export
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4 flex-wrap">
        <div className="flex items-center gap-1">
          <p className="font-medium">Student Name:</p>
          <p className="text-gray-700">امير محمد عبد الرحمن محمد</p>
        </div>
        <div className="flex items-center gap-1">
          <p className="font-medium">Student Code:</p>
          <p className="text-gray-700">20220273</p>
        </div>
        <div className="flex items-center gap-1">
          <p className="font-medium">Student Programme:</p>
          <p className="text-gray-700">Computer science</p>
        </div>
        <div className="flex items-center gap-1">
          <p className="font-medium">Student Level:</p>
          <p className="text-gray-700">One</p>
        </div>
      </div>
      <div className="w-full overflow-x-auto print:overflow-visible">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Day</th>
              <th className="border border-gray-300 px-4 py-2">Subject</th>
              <th className="border border-gray-300 px-4 py-2">Time</th>
              <th className="border border-gray-300 px-4 py-2">Teacher</th>
              <th className="border border-gray-300 px-4 py-2">Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Sunday</td>
              <td className="border border-gray-300 px-4 py-2">Math</td>
              <td className="border border-gray-300 px-4 py-2">10:00 AM</td>
              <td className="border border-gray-300 px-4 py-2">Mr. Ahmed</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Monday</td>
              <td className="border border-gray-300 px-4 py-2">English</td>
              <td className="border border-gray-300 px-4 py-2">10:00 AM</td>
              <td className="border border-gray-300 px-4 py-2">Mr. Ahmed</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Tuesday</td>
              <td className="border border-gray-300 px-4 py-2">Science</td>
              <td className="border border-gray-300 px-4 py-2">10:00 AM</td>
              <td className="border border-gray-300 px-4 py-2">Mr. Ahmed</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Wednesday</td>
              <td className="border border-gray-300 px-4 py-2">Arabic</td>
              <td className="border border-gray-300 px-4 py-2">10:00 AM</td>
              <td className="border border-gray-300 px-4 py-2">Mr. Ahmed</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Thursday</td>
              <td className="border border-gray-300 px-4 py-2">History</td>
              <td className="border border-gray-300 px-4 py-2">10:00 AM</td>
              <td className="border border-gray-300 px-4 py-2">Mr. Ahmed</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudyTimeTablePage;
