const ExamsTimeTablePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">Exams Time Table</h1>
      <div className="w-full overflow-x-auto">
        <table className="table-auto border border-gray-400 mt-5">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Date</th>
              <th className="border border-gray-400 px-4 py-2">Code</th>
              <th className="border border-gray-400 px-4 py-2">Course</th>
              <th className="border border-gray-400 px-4 py-2">Time</th>
              <th className="border border-gray-400 px-4 py-2">
                Committee Name
              </th>
              <th className="border border-gray-400 px-4 py-2">
                Committee Place
              </th>
              <th className="border border-gray-400 px-4 py-2">Seat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">28/08/2023</td>
              <td className="border border-gray-400 px-4 py-2">H105</td>
              <td className="border border-gray-400 px-4 py-2">
                English Language
              </td>
              <td className="border border-gray-400 px-4 py-2">
                12:15 - 14:15
              </td>
              <td className="border border-gray-400 px-4 py-2">لجنة رقم 8</td>
              <td className="border border-gray-400 px-4 py-2">301</td>
              <td className="border border-gray-400 px-4 py-2">230</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamsTimeTablePage;

// Compare this snippet from modules/studentportal/studytimeTable/StudyTimeTablePage.tsx:
