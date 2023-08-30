import Image from "next/image";

export default function LoginPortal() {
  return (
    <div className="w-screen flex flex-col justify-center items-center min-h-screen bg-primary px-2 md:px-0">
      <div className="flex flex-col md:flex-row bg-white px-6 py-8 rounded-lg relative w-full md:w-2/3 md:gap-7 drop-shadow-md border border-gray-300">
        <div className="flex flex-col items-center text-center w-full md:w-1/2 ">
          <h1 className="text-2xl">Student Login</h1>
          <p className="font-light">make sure your account is secure</p>
          <Image
            className="hidden md:block"
            src="/images/login.svg"
            width={400}
            height={400}
            alt={"login"}
            sizes={"50"}
            style={{ minHeight: "100%" }}
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center md:w-1/2">
          <Image
            src="/images/thebesacademy.jpg"
            width={150}
            height={150}
            alt={"logo"}
          />
          <form className="flex flex-col space-y-4">
            <input
              className="border-b border-gray-700 p-2 placeholder:text-gray-700 outline-none"
              type="text"
              placeholder="Student ID"
            />
            <input
              className="border-b border-gray-700 p-2 placeholder:text-gray-700 outline-none"
              type="password"
              placeholder="Password"
            />
            <button className="bg-primary text-white rounded-md p-2">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
