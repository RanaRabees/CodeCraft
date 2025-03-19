import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: './icon.png', type: 'image/png' },
    ],
  },
  title: "CodeCraft",
  description: "CodeCraft is a cutting-edge developer dashboard built with Next.js 15 and the latest Tailwind CSS, designed for efficiency, speed, and customization. It features a sleek and responsive UI, seamless navigation, real-time data visualization, and powerful tools to enhance developer productivity. Whether managing projects, tracking performance, or analyzing insights, CodeCraft provides an intuitive and modern experience for developers. 🚀💻"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./icon.png" type="image/x-icon" />
        <link rel="stylesheet" href="./tailwind.output.css" />
        <script
          src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
          defer
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.css"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"
          defer
        ></script>
        <script src="./charts-lines.js" defer></script>
        <script src="./charts-pie.js" defer></script>
        <script src="./charts-bars.js" defer></script>
        <script src="./focus-trap.js" defer></script>
      </head>
      <body className="flex min-h-screen bg-[#f9fafb]">
        {children}
      </body>
    </html>
  );
}
