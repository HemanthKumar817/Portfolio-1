import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            {/* Navigation */}
            <header className="sticky top-0 z-50 w-full border-b border-[#e7ebf3] dark:border-gray-800 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
                            <span className="material-symbols-outlined">design_services</span>
                        </div>
                        <span className="text-lg font-bold tracking-tight text-[#0d121b] dark:text-white">Alex Smith</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            to="/projects"
                            className={`text-sm font-medium transition-colors ${isActive('/projects') ? 'text-primary' : 'text-[#0d121b] dark:text-gray-300 hover:text-primary'}`}
                        >
                            Work
                        </Link>
                        <Link
                            to="/about"
                            className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'text-[#0d121b] dark:text-gray-300 hover:text-primary'}`}
                        >
                            About
                        </Link>
                        <a href="#" className="text-sm font-medium text-[#0d121b] dark:text-gray-300 hover:text-primary transition-colors">Resume</a>
                        <Link
                            to="/contact"
                            className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-primary' : 'text-[#0d121b] dark:text-gray-300 hover:text-primary'}`}
                        >
                            Contact
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link to="/contact" className="hidden md:flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white transition hover:bg-primary/90">
                            Let's Talk
                        </Link>
                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark px-4 py-4 space-y-4">
                        <Link to="/projects" className="block text-base font-medium text-[#0d121b] dark:text-white" onClick={() => setIsMobileMenuOpen(false)}>Work</Link>
                        <Link to="/about" className="block text-base font-medium text-[#0d121b] dark:text-white" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                        <a href="#" className="block text-base font-medium text-[#0d121b] dark:text-white" onClick={() => setIsMobileMenuOpen(false)}>Resume</a>
                        <Link to="/contact" className="block text-base font-medium text-[#0d121b] dark:text-white" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    </div>
                )}
            </header>

            <main className="flex-1">
                <Outlet />
            </main>

            <footer className="border-t border-[#e7ebf3] dark:border-gray-800 bg-white dark:bg-background-dark py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="flex items-center gap-2">
                        <div className="flex size-6 items-center justify-center rounded bg-primary text-white">
                            <span className="material-symbols-outlined text-sm">design_services</span>
                        </div>
                        <span className="text-base font-bold text-[#0d121b] dark:text-white">Alex Smith</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Alex Smith. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Twitter</a>
                        <a className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">LinkedIn</a>
                        <a className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Dribbble</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
