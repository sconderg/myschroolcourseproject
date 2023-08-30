import { useState } from "react";

const PersonalData = () => {
  const [data, setData] = useState({
    arabicName: generateName(),
    englishName: generateName(),
    nationality: generateNationality(),
    gender: generateGender(),
    religion: generateReligion(),
    dateOfBirth: generateDateOfBirth(),
    placeOfBirth: generatePlaceOfBirth(),
    nationalId: generateNationalId(),
    releaseDate: "",
    releasePlace: "",
    guardianName: generateName(),
    job: generateJob(),
    city: generateCity(),
    address: generateAddress(),
    homeTel: generatePhoneNumber(),
    mobile: generatePhoneNumber(),
    fax: generatePhoneNumber(),
  });

  function generateName() {
    const firstNames = [
      "Amir",
      "Mohammed",
      "Ahmed",
      "Fatima",
      "Aisha",
      "Ali",
      "Omar",
      "Sara",
      "Yasmin",
      "Hassan",
    ];
    const lastNames = [
      "Khan",
      "Ali",
      "Hussein",
      "Mohammed",
      "Abdullah",
      "Omar",
      "Saeed",
      "Ahmed",
      "Saleh",
      "Ibrahim",
    ];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
  }

  function generateNationality() {
    const nationalities = [
      "Egyptian",
      "American",
      "British",
      "French",
      "German",
      "Chinese",
      "Japanese",
      "Korean",
      "Russian",
      "Indian",
    ];
    return nationalities[Math.floor(Math.random() * nationalities.length)];
  }

  function generateGender() {
    const genders = ["Male", "Female"];
    return genders[Math.floor(Math.random() * genders.length)];
  }

  function generateReligion() {
    const religions = [
      "Muslim",
      "Christian",
      "Jewish",
      "Buddhist",
      "Hindu",
      "Sikh",
      "Atheist",
      "Agnostic",
      "Other",
    ];
    return religions[Math.floor(Math.random() * religions.length)];
  }

  function generateDateOfBirth() {
    const year = Math.floor(Math.random() * (2003 - 1980 + 1)) + 1980;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    return `${day}/${month}/${year}`;
  }

  function generatePlaceOfBirth() {
    const cities = [
      "Cairo",
      "Alexandria",
      "Giza",
      "Luxor",
      "Aswan",
      "Sharm El Sheikh",
      "Hurghada",
      "Marsa Alam",
      "Dahab",
      "Nuweiba",
    ];
    return cities[Math.floor(Math.random() * cities.length)];
  }

  function generateNationalId() {
    let nationalId = "";
    for (let i = 0; i < 14; i++) {
      nationalId += Math.floor(Math.random() * 10);
    }
    return nationalId;
  }

  function generateJob() {
    const jobs = [
      "Accountant",
      "Engineer",
      "Doctor",
      "Lawyer",
      "Teacher",
      "Programmer",
      "Designer",
      "Writer",
      "Artist",
      "Chef",
    ];
    return jobs[Math.floor(Math.random() * jobs.length)];
  }

  function generateCity() {
    const cities = [
      "Cairo",
      "Alexandria",
      "Giza",
      "Luxor",
      "Aswan",
      "Sharm El Sheikh",
      "Hurghada",
      "Marsa Alam",
      "Dahab",
      "Nuweiba",
    ];
    return cities[Math.floor(Math.random() * cities.length)];
  }

  function generateAddress() {
    const streets = [
      "Mohamed Farid",
      "Tahrir",
      "Abbas El Akkad",
      "Nile Corniche",
      "El Haram",
      "El Nasr",
      "El Thawra",
      "El Marghany",
      "El Nozha",
      "El Maadi",
    ];
    const street = streets[Math.floor(Math.random() * streets.length)];
    const buildingNumber = Math.floor(Math.random() * 100) + 1;
    const apartmentNumber = Math.floor(Math.random() * 50) + 1;
    return `${buildingNumber} ${street}, Apartment ${apartmentNumber}`;
  }

  function generatePhoneNumber() {
    let phoneNumber = "+20";
    for (let i = 0; i < 10; i++) {
      phoneNumber += Math.floor(Math.random() * 10);
    }
    return phoneNumber;
  }

  return (
    <div className="mb-8">
      <div className="border-b-2 border-gray-300 mb-4">
        <h2 className="text-lg mb-2 text-primary font-bold">Personal Data</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-medium">Arabic Name</p>
          <p className="text-gray-700">{data.arabicName}</p>
        </div>
        <div>
          <p className="font-medium">English Name</p>
          <p className="text-gray-700">{data.englishName}</p>
        </div>
        <div>
          <p className="font-medium">Nationality</p>
          <p className="text-gray-700">{data.nationality}</p>
        </div>
        <div>
          <p className="font-medium">Gender</p>
          <p className="text-gray-700">{data.gender}</p>
        </div>
        <div>
          <p className="font-medium">Religion</p>
          <p className="text-gray-700">{data.religion}</p>
        </div>
        <div>
          <p className="font-medium">Date of birth</p>
          <p className="text-gray-700">{data.dateOfBirth}</p>
        </div>
        <div>
          <p className="font-medium">Place of birth</p>
          <p className="text-gray-700">{data.placeOfBirth}</p>
        </div>
        <div>
          <p className="font-medium">National ID \ Passport No.</p>
          <p className="text-gray-700">{data.nationalId}</p>
        </div>
        <div>
          <p className="font-medium">Release Date</p>
          <p className="text-gray-700">{data.releaseDate}</p>
        </div>
        <div>
          <p className="font-medium">Release Place</p>
          <p className="text-gray-700">{data.releasePlace}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="font-medium">Guardian Name</p>
          <p className="text-gray-700">{data.guardianName}</p>
        </div>
        <div>
          <p className="font-medium">Job</p>
          <p className="text-gray-700">{data.job}</p>
        </div>
        <div>
          <p className="font-medium">The City</p>
          <p className="text-gray-700">{data.city}</p>
        </div>
        <div>
          <p className="font-medium">Address</p>
          <p className="text-gray-700">{data.address}</p>
        </div>
        <div>
          <p className="font-medium">Home Tel</p>
          <p className="text-gray-700">{data.homeTel}</p>
        </div>
        <div>
          <p className="font-medium">Mobile</p>
          <p className="text-gray-700">{data.mobile}</p>
        </div>
        <div>
          <p className="font-medium">Email</p>
          <p className="text-gray-700"></p>
        </div>
        <div>
          <p className="font-medium">Fax</p>
          <p className="text-gray-700">{data.fax}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
