import Image from "next/image";

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center w-full bg-[#f9fafb] p-8">
      <div className="flex w-full max-w-4xl h-[300px] overflow-hidden bg-white rounded-2xl shadow-lg">
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            src="/forgot-password-office.jpeg"
            alt="Office"
            layout="fill"
            objectFit="cover"
            className="rounded-l-2xl"
          />
        </div>

        <div className="w-full p-12 md:w-1/2 flex flex-col justify-center">
          <h1 className="text-xl font-semibold text-gray-900 mb-5">
            Forgot password
          </h1>

          <label className="block text-sm mb-3">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              className="mt-2 block w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Jane Doe"
            />
          </label>

          <button className="w-full px-5 py-2 text-lg text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition">
            Recover password
          </button>
        </div>
      </div>
    </div>
  );
}
