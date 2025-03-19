import Bars from "@/app/components/Bars";

export default function Home() {
    return (
      <>
      <Bars />
      <main className="min-h-screen w-full p-6 overflow-y-auto pt-20 pl-0 sm:pl-[255px] flex-1bg-[#f9fafb]">
          <div className="container px-6 mx-auto grid">
            <h2
              className="my-6 text-2xl font-semibold text-gray-700"
            >
              Blank
            </h2>
          </div>
        </main>
      </>
    );
  }
  