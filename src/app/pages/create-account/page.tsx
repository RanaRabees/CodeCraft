import Image from "next/image";
import Link from "next/link";
import { LogIn, Github, Twitter } from "lucide-react";


export default function Home() {
  return (
    <>
      <div className="flex items-center min-h-screen w-full  p-6 overflow-y-auto bg-[#f9fafb]">
        <div className="flex-1 max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="block md:w-1/2">
              <Image
                className="object-cover w-full h-full"
                src="/create-account-office.jpeg"
                alt="Office"
                width={500}
                height={300}
              />
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center md:p-10 p-7">
              <div className="w-full max-w-md">
                <h1 className="mb-6 text-2xl font-bold text-gray-700">Create account</h1>
                <label className="block mb-4">
                  <span className="text-gray-700">Email</span>
                  <input
                    type="email"
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Jane Doe"
                  />
                </label>
                <label className="block mb-4">
                  <span className="text-gray-700">Password</span>
                  <input
                    type="password"
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="***************"
                  />
                </label>
                <label className="block mb-4">
                  <span className="text-gray-700">Create account</span>
                  <input
                    type="password"
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="***************"
                  />
                </label>

                <div className="flex mt-6 text-sm">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="text-purple-600 border-gray-300 rounded focus:ring focus:ring-purple-200"
                      required
                    />
                    <span className="ml-2">
                      I agree to the <a href="#" className="underline">privacy policy</a>
                    </span>
                  </label>
                </div>
                <button
                  className="block w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-200"
                >
                  Create account
                </button>
                <hr className="my-8" />
                <button
                  className="flex items-center justify-center w-full px-4 py-2 mb-3 border rounded-lg hover:bg-gray-100 transition"
                >
                  <Github size={20} className="mr-2" /> Github
                </button>
                <button
                  className="flex items-center justify-center w-full px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
                >
                  <Twitter size={20} className="mr-2" /> Twitter
                </button>
                <div className="mt-6">
                  <Link href="/pages/login" className="text-purple-600 hover:underline flex items-center justify-start gap-2">
                    <LogIn size={16} /> Already have an account? Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
