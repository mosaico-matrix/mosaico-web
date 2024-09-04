import {BookMarkedIcon, FileSpreadsheetIcon, GithubIcon, LayoutGridIcon, LucideSheet, SheetIcon} from "lucide-react";
import {Document} from "postcss";

export default function Header() {
    return (
        <header className="text-white py-4 px-8 flex items-center justify-between shadow-md fixed top-0 left-0 right-0 z-50 backdrop-blur-lg">
            {/* Left section: Project Icon */}
            <div className="flex items-center">
                <img src="/images/icon.png" alt="Project Icon" className="h-10 w-10 mr-3" />
                <span className="text-2xl font-bold">MOSAICO</span>
            </div>

            {/* Right section: Links */}
            <nav className="flex space-x-6">
                <a href="/manager" target="_blank" rel="noopener noreferrer"
                   className="hover:text-gray-300">
                    <LayoutGridIcon size={24}/>
                </a>

                <a href="/docs" className="hover:text-gray-300">
                    <BookMarkedIcon size={24}/>
                </a>

                <a href="https://github.com/mosaico-matrix" target="_blank" rel="noopener noreferrer"
                   className="hover:text-gray-300">
                    <GithubIcon size={24}/>
                </a>
            </nav>
        </header>
    );
}
