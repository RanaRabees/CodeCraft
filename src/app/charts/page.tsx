import Bars from "../components/Bars";

export default function ChartsPage() {
  return (
    <>
      <Bars />
      <main className="pt-20 pl-0 sm:pl-[255px] flex-1 h-full pb-16 overflow-y-auto bg-[#f9fafb]">
        <div className="container px-6 mx-auto grid">
          <h2
            className="my-6 text-2xl font-semibold text-gray-700"
          >
            Charts
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

          <p className="mb-8 text-gray-600">
            Charts are provided by
            <a
              className="text-purple-600 hover:underline ml-2"
              href="https://www.chartjs.org/"
            >
              Chart.js
            </a>
            . Note that the default legends are disabled and you should
            provide a description for your charts in HTML. See source code for
            examples.
          </p>
          {/* Charts */}
          <div className="grid gap-6 mb-8 md:grid-cols-2">
            {/* Doughnut/Pie chart */}
            <div
              className="min-w-0 p-4 bg-white rounded-lg shadow-xs"
            >
              <h4 className="mb-4 font-semibold text-gray-800">
                Doughnut/Pie
              </h4>
              <canvas id="pie"></canvas>
              <div
                className="flex justify-center mt-4 space-x-3 text-sm text-gray-600"
              >
                {/* Chart legend */}
                <div className="flex items-center">
                  <span
                    className="inline-block w-3 h-3 mr-1 bg-blue-600 rounded-full"
                  ></span>
                  <span>Shirts</span>
                </div>
                <div className="flex items-center">
                  <span
                    className="inline-block w-3 h-3 mr-1 bg-teal-500 rounded-full"
                  ></span>
                  <span>Shoes</span>
                </div>
                <div className="flex items-center">
                  <span
                    className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"
                  ></span>
                  <span>Bags</span>
                </div>
              </div>
            </div>
            {/* Lines chart */}
            <div
              className="min-w-0 p-4 bg-white rounded-lg shadow-xs"
            >
              <h4 className="mb-4 font-semibold text-gray-800">
                Lines
              </h4>
              <canvas id="line"></canvas>
              <div
                className="flex justify-center mt-4 space-x-3 text-sm text-gray-600"
              >
                {/* Chart legend */}
                <div className="flex items-center">
                  <span
                    className="inline-block w-3 h-3 mr-1 bg-teal-500 rounded-full"
                  ></span>
                  <span>Organic</span>
                </div>
                <div className="flex items-center">
                  <span
                    className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"
                  ></span>
                  <span>Paid</span>
                </div>
              </div>
            </div>
            {/* Bars chart */}
            <div
              className="min-w-0 p-4 bg-white rounded-lg shadow-xs"
            >
              <h4 className="mb-4 font-semibold text-gray-800">
                Bars
              </h4>
              <canvas id="bars"></canvas>
              <div
                className="flex justify-center mt-4 space-x-3 text-sm text-gray-600"
              >
                {/* Chart legend */}
                <div className="flex items-center">
                  <span
                    className="inline-block w-3 h-3 mr-1 bg-teal-500 rounded-full"
                  ></span>
                  <span>Shoes</span>
                </div>
                <div className="flex items-center">
                  <span
                    className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"
                  ></span>
                  <span>Bags</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
