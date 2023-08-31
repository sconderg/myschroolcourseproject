const CoursesGradePage = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Courses Grade</h1>
        <button
          className="bg-primary text-white rounded-md p-2 px-4 mr-2"
          onClick={() => window.print()}
        >
          Print
        </button>
      </div>
      <div className="w-full overflow-x-auto mt-5">
        <table className="table-auto w-full overflow-x-auto">
          <thead className="bg-primary text-white">
            <tr>
              <th className="px-4 py-2">Semester</th>
              <th className="px-4 py-2">Course Code</th>
              <th className="px-4 py-2">Course Name</th>
              <th className="px-4 py-2">Credit Hours</th>
              <th className="px-4 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 font-semibold" rowSpan={5}>
                Fall 2022-2023
              </td>
              <td className="border px-4 py-2">bs101</td>
              <td className="border px-4 py-2">Calculus</td>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">B+</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">CS101</td>
              <td className="border px-4 py-2">
                Introduction to Computer Science
              </td>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">B</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">bs103</td>
              <td className="border px-4 py-2">Discrete Mathematics</td>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">B</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">BS221</td>
              <td className="border px-4 py-2">Physics</td>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">C-</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">H105</td>
              <td className="border px-4 py-2">English Language</td>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">Abs</td>
            </tr>
            <tr>
              <td className="border px-4 py-2" colSpan={2}>
                Attempted Hours: 14
              </td>
              <td className="border px-4 py-2">Total Hours Earned : 12</td>
              <td className="border px-4 py-2">
                Semester GPA :{" "}
                <span className="text-red-500 font-medium">2.44</span>
              </td>
              <td className="border px-4 py-2">
                GPA : <span className="text-red-500 font-medium">2.44</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table-auto w-full overflow-x-auto  mt-5">
          <thead className="bg-primary text-white">
            <tr>
              <th className="px-4 py-2">Semester</th>
              <th className="px-4 py-2">Course Code</th>
              <th className="px-4 py-2">Course Name</th>
              <th className="px-4 py-2">Credit Hours</th>
              <th className="px-4 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 font-semibold" rowSpan={6}>
                Spring 2022-2023
              </td>
              <td className="border px-4 py-2">G101</td>
              <td className="border px-4 py-2">Intro to Ecology</td>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">D+</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">BS102</td>
              <td className="border px-4 py-2">linear algebra</td>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">C+</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">IS123</td>
              <td className="border px-4 py-2">Introduction to databases</td>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">B-</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">CS102</td>
              <td className="border px-4 py-2">Computer programming</td>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">B</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">IS101</td>
              <td className="border px-4 py-2">
                Introduction to information systems
              </td>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">B-</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">BS110</td>
              <td className="border px-4 py-2">Statistics and Probabilities</td>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">D</td>
            </tr>
            <tr>
              <td className="border px-4 py-2" colSpan={2}>
                Attempted Hours: 17
              </td>
              <td className="border px-4 py-2">Total Hours Earned : 17</td>
              <td className="border px-4 py-2">
                Semester GPA :{" "}
                <span className="text-red-500 font-medium">2.47</span>
              </td>
              <td className="border px-4 py-2">
                GPA : <span className="text-red-500 font-medium">2.46</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursesGradePage;
