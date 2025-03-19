"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
    X, Search, Bell, User, Settings, LogOut,
    Home, FileText, CreditCard, PieChart, MousePointer,
    Square, Table, Layers, Plus, Menu, ChevronDown, ChevronUp
} from "lucide-react";

export default function Bars() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const pathname = usePathname();
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const handleDropdown = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    useEffect(() => {
        const closeDropdown = (e: MouseEvent) => {
            if (!(e.target as HTMLElement).closest(".dropdown")) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("click", closeDropdown);
        return () => document.removeEventListener("click", closeDropdown);
    }, []);


    const links = [
        { href: "/dashboard", label: "Dashboard", icon: Home },
        { href: "/forms", label: "Forms", icon: FileText },
        { href: "/cards", label: "Cards", icon: CreditCard },
        { href: "/charts", label: "Charts", icon: PieChart },
        { href: "/buttons", label: "Buttons", icon: MousePointer },
        { href: "/modals", label: "Modals", icon: Square },
        { href: "/tables", label: "Tables", icon: Table },
    ];

    const pageLinks = [
        { href: "/pages/login", label: "Login" },
        { href: "/pages/create-account", label: "Create Account" },
        { href: "/pages/forgot-password", label: "Forgot Password" },
        { href: "/pages/404", label: "404" },
        { href: "/pages/blank", label: "Blank" },
    ];
    return (
        <>
            {/* Navbar */}
            <nav className="shadow-md fixed top-0 left-0 w-full bg-white z-50 h-16 flex items-center px-4">
                <button
                    className="p-2 rounded-md text-gray-500 sm:hidden"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-label="Toggle sidebar"
                    title="Toggle sidebar"
                >
                    {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <Link href="/" className="md:flex hidden items-center space-x-2">
                    <Image src="/web.png" alt="Logo" width={40} height={40} />
                    <span className="text-2xl font-semibold">CodeCraft</span>
                    <br />
                </Link>

                <div className="ml-auto w-full flex items-center justify-between">
                    <div className="relative md:w-[600px] w-auto mx-auto">
                        <div className="absolute inset-y-0 left-3 flex items-center text-purple-400">
                            <Search size={14} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for projects"
                            className="md:w-[550px] w-[100px] pl-10 p-2 text-[14px] font-semibold rounded-md border-[1px] focus:border-[3px] bg-[#f4f5f7] border-gray-200 text-gray-900 focus:outline-none focus:border-purple-200"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDropdown("notifications");
                            }}
                            aria-label="View notifications"
                            className="relative p-2 rounded-md text-purple-600 hover:bg-purple-200 dropdown"
                        >
                            <Bell size={22} />
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-1.5 rounded-full">
                                2
                            </span>
                        </button>

                        {activeDropdown === "notifications" && (
                            <div className="absolute top-14 right-16 w-56 bg-white shadow-md rounded-md p-3 border-[2px] border-purple-200 dropdown">
                                <div className="flex justify-between items-center p-2 hover:bg-purple-100 rounded">
                                    <span>Messages</span>
                                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">13</span>
                                </div>
                                <div className="flex justify-between items-center p-2 hover:bg-purple-100 rounded">
                                    <span>Sales</span>
                                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">2</span>
                                </div>
                                <div className="p-2 hover:bg-purple-100 rounded">Alerts</div>
                            </div>
                        )}

                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDropdown("profile");
                            }}
                            className="relative dropdown flex items-center"
                            aria-label="User profile" title="User profile"
                        >
                            <Image
                                src="/avatar.jpg"
                                alt="User"
                                width={36}
                                height={36}
                                className="rounded-full"
                            />
                        </button>

                        {activeDropdown === "profile" && (
                            <div className="absolute top-14 right-6 w-56 bg-white shadow-md rounded-md p-3 border-[2px] border-purple-200 dropdown">
                                <div className="flex items-center gap-2 p-2 hover:bg-purple-100 rounded">
                                    <User size={20} /> <span>Profile</span>
                                </div>
                                <div className="flex items-center gap-2 p-2 hover:bg-purple-100 rounded">
                                    <Settings size={20} /> <span>Settings</span>
                                </div>
                                <div className="flex items-center gap-2 p-2 hover:bg-purple-100 rounded">
                                    <LogOut size={20} /> <span>Log out</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Sidebar */}

            <aside
                className={`shadow-md pt-4 fixed top-16 left-0 h-screen w-64 bg-white p-4 transition-transform duration-300 ease-in-out z-40 ${sidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
                    }`}
            >
                <Link href="/" className="md:hidden flex items-center space-x-2">
                    <Image src="/web.png" alt="Logo" width={40} height={40} />
                    <span className="text-2xl font-semibold">CodeCraft</span>
                    <br />
                </Link>
                <br />

                <ul className="space-y-3">
                    {links.map(({ href, label, icon: Icon }) => {
                        const isActive = pathname === href;
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`flex items-center p-2 rounded hover:bg-gray-200 focus:border-2 focus:border-purple-600 relative ${isActive ? "bg-gray-100 font-semibold text-gray-900" : "text-gray-600"
                                        }`}
                                >
                                    <Icon className="w-5 h-5 mr-4" />
                                    {label}
                                    {isActive && <div className="absolute left-0 top-0 h-full w-1 bg-purple-600 rounded-r-md"></div>}
                                </Link>
                            </li>
                        );
                    })}

                    <li>
                        <button
                            type="button"
                            onClick={() => setIsPagesOpen(!isPagesOpen)}
                            aria-label="Toggle Pages Menu"
                            className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-200 focus:border-2 focus:border-purple-600"
                        >
                            <span className="flex items-center">
                                <Layers className="w-5 h-5 mr-2" /> Pages
                            </span>
                            {isPagesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        {isPagesOpen && (
                            <ul className="ml-6 bg-gray-100 p-2 rounded">
                                {pageLinks.map(({ href, label }) => {
                                    const isActive = pathname === href;
                                    return (
                                        <li key={href}>
                                            <Link
                                                href={href}
                                                className={`block p-2 rounded hover:bg-gray-200 focus:border-2 focus:border-purple-600 relative ${isActive ? "bg-gray-100 font-semibold text-gray-900" : "text-gray-600"
                                                    }`}
                                            >
                                                {label}
                                                {isActive && <div className="absolute left-0 top-0 h-full w-1 bg-purple-600 rounded-r-md"></div>}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </li>
                </ul>

                <button
                    type="button"
                    aria-label="Create Account"
                    className="mt-6 flex items-center justify-between w-full p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:border-2 focus:border-purple-600"
                >
                    Create account <Plus className="w-5 h-5" />
                </button>
            </aside>

        </>
    );
}
