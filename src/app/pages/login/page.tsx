import Image from "next/image";
import Link from "next/link";
import { KeyRound, UserPlus, Github, Twitter } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex items-center min-h-screen w-full  p-6 overflow-y-auto bg-[#f9fafb]">
        <div className="flex-1 max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="block md:w-1/2">
              <Image
                className="object-cover w-full h-full"
                src="/login-office.jpeg"
                alt="Office"
                width={500}
                height={300}
              />
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center md:p-10 p-7">
              <div className="w-full max-w-md">
                <h1 className="mb-6 text-2xl font-bold text-gray-700">Login</h1>
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
                <button
                  className="w-full px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition"
                >
                  Log in
                </button>
                <div className="my-6 text-center text-gray-500">or</div>
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
                  <Link href="/pages/forgot-password" className="text-purple-600 hover:underline flex items-center justify-start gap-2">
                    <KeyRound size={16} />
                    Forgot your password?
                  </Link>
                </div>
                <div className="mt-2">
                  <Link href="/pages/create-account" className="text-purple-600 hover:underline flex items-center justify-start gap-2">
                    <UserPlus size={16} />
                    Create account
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
