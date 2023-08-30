// RegisterationFees component for registeration fees page
// Path: modules/studentportal/registerationFees/RegisterationFees.tsx

const RegisterationFeesPage = () => {
  return (
    <div>
      <h2 className="text-lg mb-2 text-primary font-bold">
        Registeration fees
      </h2>
      <div className="flex items-center gap-5 flex-wrap">
        <p className="font-medium">Name:</p>
        <p className="text-gray-700">امير محمد عبد الرحمن محمد</p>

        <p className="font-medium">ID:</p>
        <p className="text-gray-700">20220273</p>

        <p className="font-medium">Bank account number:</p>
        <p className="text-gray-700">---</p>
      </div>

      <div className="flex items-center gap-5 flex-wrap">
        <p className="font-medium">Programme:</p>
        <p className="text-gray-700">Computer science</p>

        <p className="font-medium">Level:</p>
        <p className="text-gray-700">One</p>

        <p className="font-medium">Semester:</p>
        <p className="text-gray-700">First</p>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Course Code</th>
              <th className="border border-gray-300 px-4 py-2">Course Name</th>
              <th className="border border-gray-300 px-4 py-2">Credit Hours</th>
              <th className="border border-gray-300 px-4 py-2">
                Number of Credit Hours
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Credit Hour Fee
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Credit Hours Amount
              </th>
              <th className="border border-gray-300 px-4 py-2">Extra Fees</th>
              <th className="border border-gray-300 px-4 py-2">
                Previous balance
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Final Amount to be paid
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">H105</td>
              <td className="border border-gray-300 px-4 py-2">
                English Language
              </td>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">0.00</td>
              <td className="border border-gray-300 px-4 py-2">0.00</td>
              <td className="border border-gray-300 px-4 py-2">600.00</td>
              <td className="border border-gray-300 px-4 py-2">0.00</td>
              <td className="border border-gray-300 px-4 py-2">0</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">H105</td>
              <td className="border border-gray-300 px-4 py-2">
                English Language
              </td>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">0.00</td>
              <td className="border border-gray-300 px-4 py-2">0.00</td>
              <td className="border border-gray-300 px-4 py-2">600.00</td>
              <td className="border border-gray-300 px-4 py-2">0.00</td>
              <td className="border border-gray-300 px-4 py-2">0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisterationFeesPage;
// Compare this snippet from modules/studentportal/registerationFees/RegisterationFeesPage.tsx:
