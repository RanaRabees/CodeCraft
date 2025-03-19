import Bars from "../components/Bars";

export default function FormsPage() {
  return (
    <>
    <Bars />
      <main className="pt-20 pl-0 sm:pl-[255px] flex-1 h-full pb-16 overflow-y-auto bg-[#f9fafb]">
        <div className="container px-6 mx-auto grid">
          <h2
            className="my-6 text-2xl font-semibold text-gray-700"
          >
            Forms
          </h2>
          {/* CTA */}
          <a
            className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
            href="https://github.com/RanaRabees/CodeCraft"
          >
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                ></path>
              </svg>
              <span>Star this project on GitHub</span>
            </div>
            <span>View more &rarr;</span>
          </a>

          {/* General elements */}
          <h4
            className="mb-4 text-lg font-semibold text-gray-600"
          >
            Elements
          </h4>
          <div
            className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md"
          >
            <label className="block text-sm">
              <span className="text-gray-700">Name</span>
              <input
                className="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple-gray form-input"
                placeholder="Jane Doe"
              />
            </label>

            <div className="mt-4 text-sm">
              <span className="text-gray-700">
                Account Type
              </span>
              <div className="mt-2">
                <label
                  className="inline-flex items-center text-gray-600"
                >
                  <input
                    type="radio"
                    className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple-gray"
                    name="accountType"
                    value="personal"
                  />
                  <span className="ml-2">Personal</span>
                </label>
                <label
                  className="inline-flex items-center ml-6 text-gray-600"
                >
                  <input
                    type="radio"
                    className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple-gray"
                    name="accountType"
                    value="busines"
                  />
                  <span className="ml-2">Business</span>
                </label>
              </div>
            </div>

            <label className="block mt-4 text-sm">
              <span className="text-gray-700">
                Requested Limit
              </span>
              <select
                className="block w-full mt-1 text-sm form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple-gray"
              >
                <option>$1,000</option>
                <option>$5,000</option>
                <option>$10,000</option>
                <option>$25,000</option>
              </select>
            </label>

            <label className="block mt-4 text-sm">
              <span className="text-gray-700">
                Multiselect
              </span>
              <select
                className="block w-full mt-1 text-sm form-multiselect focus:border-purple-400 focus:outline-none focus:shadow-outline-purple-gray"
                multiple
              >
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </select>
            </label>

            <label className="block mt-4 text-sm">
              <span className="text-gray-700">Message</span>
              <textarea
                className="block w-full mt-1 text-sm form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple-gray"
                rows={3} // Fixed: Pass number instead of string
                placeholder="Enter some long form content."
              ></textarea>
            </label>


            <div className="flex mt-6 text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple-gray"
                />
                <span className="ml-2">
                  I agree to the
                  <span className="ml-2 underline">privacy policy</span>
                </span>
              </label>
            </div>
          </div>

          {/* Validation inputs */}
          <h4
            className="mb-4 text-lg font-semibold text-gray-600"
          >
            Validation
          </h4>
          <div
            className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md"
          >
            {/* Invalid input */}
            <label className="block text-sm">
              <span className="text-gray-700">
                Invalid input
              </span>
              <input
                className="block w-full mt-1 text-sm border-red-600 focus:border-red-400 focus:outline-none focus:shadow-outline-red form-input"
                placeholder="Jane Doe"
              />
              <span className="text-xs text-red-600">
                Your password is too short.
              </span>
            </label>

            {/* Valid input */}
            <label className="block mt-4 text-sm">
              <span className="text-gray-700">
                Valid input
              </span>
              <input
                className="block w-full mt-1 text-sm border-green-600 focus:border-green-400 focus:outline-none focus:shadow-outline-green form-input"
                placeholder="Jane Doe"
              />
              <span className="text-xs text-green-600">
                Your password is strong.
              </span>
            </label>

            {/* Helper text */}
            <label className="block mt-4 text-sm">
              <span className="text-gray-700">
                Helper text
              </span>
              <input
                className="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple-gray form-input"
                placeholder="Jane Doe"
              />
              <span className="text-xs text-gray-600">
                Your password must be at least 6 characters long.
              </span>
            </label>
          </div>

          {/* Inputs with icons */}
          <h4
            className="mb-4 text-lg font-semibold text-gray-600"
          >
            Icons
          </h4>
          <div
            className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md"
          >
            <label className="block text-sm">
              <span className="text-gray-700">Icon left</span>
              {/* focus-within sets the color for the icon when input is focused */}
              <div
                className="relative text-gray-500 focus-within:text-purple-600-purple-400"
              >
                <input
                  className="block w-full pl-10 mt-1 text-sm text-black focus:border-purple-400 focus:outline-none focus:shadow-outline-purple-gray form-input"
                  placeholder="Jane Doe"
                />
                <div
                  className="absolute inset-y-0 flex items-center ml-3 pointer-events-none"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
              </div>
            </label>

            <label className="block mt-4 text-sm">
              <span className="text-gray-700">Icon right</span>
              {/* focus-within sets the color for the icon when input is focused */}
              <div
                className="relative text-gray-500 focus-within:text-purple-600-purple-400"
              >
                <input
                  className="block w-full pr-10 mt-1 text-sm text-black focus:border-purple-400 focus:outline-none focus:shadow-outline-purple-gray form-input"
                  placeholder="Jane Doe"
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
              </div>
            </label>
          </div>

          {/* Inputs with buttons */}
          <h4
            className="mb-4 text-lg font-semibold text-gray-600"
          >
            Buttons
          </h4>
          <div
            className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md"
          >
            <label className="block text-sm">
              <span className="text-gray-700">
                Button left
              </span>
              <div className="relative">
                <input
                  className="block w-full pl-20 mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple-gray form-input"
                  placeholder="Jane Doe"
                />
                <button
                  className="absolute inset-y-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-l-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple-gray"
                >
                  Click
                </button>
              </div>
            </label>

            <label className="block mt-4 text-sm">
              <span className="text-gray-700">
                Button right
              </span>
              <div
                className="relative text-gray-500 focus-within:text-purple-600"
              >
                <input
                  className="block w-full pr-20 mt-1 text-sm text-black focus:border-purple-400 focus:outline-none focus:shadow-outline-purple-gray form-input"
                  placeholder="Jane Doe"
                />
                <button
                  className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                >
                  Click
                </button>
              </div>
            </label>
          </div>
        </div>
      </main>
    </>
  );
}
