"use client"
import { useState } from "react";
import { X } from "lucide-react";
import Bars from "../components/Bars";

export default function ModalsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
    <Bars />
      <main className="pt-20 pl-0 sm:pl-[255px] flex-1 h-full pb-16 overflow-y-auto bg-[#f9fafb]">
        <div className="container grid px-6 mx-auto">
          <h2 className="my-6 text-2xl font-semibold text-gray-700">
            Modals
          </h2>

          {/* CTA */}
          <a
            className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
            href="https://github.com/RanaRabees/CodeCraft"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span>Star this project on GitHub</span>
            </div>
            <span>View more &rarr;</span>
          </a>

          <div className="max-w-2xl px-4 py-3 mb-8 bg-white rounded-lg shadow-md">
            <p className="mb-4 text-gray-600">
              This is possibly <strong>the most accessible a modal can get</strong>, using JavaScript.
              When opened, it uses <code>assets/js/focus-trap.js</code> to create a <em>focus trap</em>,
              which means that if you use your keyboard to navigate around, focus won&apos;t leak to the
              elements behind, staying inside the modal in a loop, until you take any action.
            </p>

            <p className="text-gray-600">
              Also, on small screens it is placed at the bottom of the screen, to account for larger
              devices and make it easier to click the larger buttons.
            </p>
          </div>

          {/* Modal Trigger */}
          <div>
            <button
              className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              onClick={openModal}
            >
              Open Modal
            </button>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
                {/* Modal Header */}
                <div className="flex justify-between items-center pb-3">
                  <h3 className="text-lg font-semibold">Modal header</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close modal"
                    title="Close"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modal Body */}
                <p className="mt-3 text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi
                  repudiandae voluptatem tempore!
                </p>

                {/* Modal Footer */}
                <div className="flex justify-end mt-6 space-x-2">
                  <button
                    className="px-4 py-2 text-gray-700 border rounded-lg hover:bg-gray-100"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button className="ml-8 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    Accept
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
