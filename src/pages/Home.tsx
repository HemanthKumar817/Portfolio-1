import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl font-black tracking-tight text-[#0d121b] dark:text-white sm:text-6xl mb-6">
                                Crafting Digital <span className="text-primary">Experiences</span> That Matter.
                            </h1>
                            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                                Hi, I'm Alex. A Product Designer based in San Francisco specializing in UI/UX and motion design. I transform complex problems into simple, beautiful, and intuitive designs.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link to="/projects" className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white transition hover:bg-primary/90 shadow-lg shadow-primary/25">
                                    View My Work
                                </Link>
                                <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-6 text-base font-bold text-[#0d121b] dark:text-white transition hover:bg-gray-100 dark:hover:bg-gray-800">
                                    Contact Me
                                </Link>
                            </div>
                            <div className="mt-10 flex items-center gap-6 text-gray-500 dark:text-gray-400">
                                <a className="hover:text-primary transition-colors" href="#"><span className="sr-only">LinkedIn</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                </a>
                                <a className="hover:text-primary transition-colors" href="#"><span className="sr-only">Dribbble</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm6.591-15.556l-3.057-1.321c-.252-.126-.497-.242-.735-.351 1.93-1.63 3.33-3.076 3.792-3.665.394.394 1.564 1.841 1.564 1.841.527 1.801.077 3.511-1.564 3.496zm-1.624 2.012l-1.859-.754c-.183-.075-.363-.146-.54-.214.349-1.378.583-2.822.686-4.316 2.083.738 3.996 2.203 5.485 4.179-.569.497-2.31 1.488-3.772 1.105zm-5.967 1.838c-.851 2.302-2.188 4.394-3.882 6.096-.289-.693-.538-1.422-.74-2.183 1.156-.838 3.256-2.671 4.622-3.913zm-6.126.974c.245 1.164.606 2.279 1.073 3.328-1.996-1.576-3.486-3.816-4.075-6.381 1.05.626 2.128 1.171 3.245 1.634-.142.479-.232.955-.243 1.419zm1.214-4.88c-1.319-.606-2.58-1.328-3.72-2.148 1.259-2.229 3.426-3.896 5.996-4.481-.137 2.019-.395 3.987-.847 5.864-.476.242-.958.498-1.429.765zm6.892-7.37c-.12-.048-.237-.093-.353-.136.216.037.433.072.648.106 1.481.241 2.87.801 4.09 1.606-.632.748-2.28 2.378-4.385 4.197-.107-1.785-.351-3.676-1.025-5.328-.327-.16-.658-.309-.975-.445zm-2.074 8.769c-1.472 1.346-3.751 3.268-5.064 4.098.412-1.84.996-3.593 1.724-5.228 1.085.342 2.204.721 3.34 1.13zm2.396 7.218c1.652-1.554 2.964-3.529 3.805-5.748 1.579.527 3.011 1.405 4.226 2.548-.124.237-.258.468-.399.691-1.783-.178-3.94-.035-5.91 1.164-.537.439-1.125.922-1.722 1.345z"></path></svg>
                                </a>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center lg:justify-end">
                            <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] max-w-md rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-gray-700 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCemm-La2V-EgrkmKm1o6Xor6g62ppP6DMXC8cKrCKXJcNyonujJQJ6SL42qYs7cbjbeP5w24l7g8rt6Q8SQ0fLwrXp1_xIhca6JtgnEkZFR_azknaohlVcYvaGHe9sCAPrpYnQZrDimRXtzZiQ6qA_T9oJ1-XRW-PWJmFWx1ygcVlGqrZjVHHhAnoX0tHROONajb7zg9e1YW6Peg1izG7TjPAgZmYhjynENYsd7RIC2mPuB8KCI8jisf-fiTpWnv9g4h4DCU0JEzci')" }}></div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                            <div className="absolute -z-10 top-10 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 sm:py-20 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-[#0d121b] dark:text-white sm:text-4xl">My Expertise</h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Specializing in building digital products that are not only functional but visually captivating.</p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-8 transition hover:shadow-lg hover:-translate-y-1">
                            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <span className="material-symbols-outlined text-3xl">brush</span>
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-[#0d121b] dark:text-white">UI Design</h3>
                            <p className="text-gray-600 dark:text-gray-400">Creating pixel-perfect interfaces that delight users with clarity, consistency, and style.</p>
                        </div>
                        <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-8 transition hover:shadow-lg hover:-translate-y-1">
                            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <span className="material-symbols-outlined text-3xl">manage_search</span>
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-[#0d121b] dark:text-white">UX Research</h3>
                            <p className="text-gray-600 dark:text-gray-400">Understanding user needs through deep research, interviews, and usability testing to drive decisions.</p>
                        </div>
                        <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark p-8 transition hover:shadow-lg hover:-translate-y-1">
                            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <span className="material-symbols-outlined text-3xl">devices</span>
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-[#0d121b] dark:text-white">Prototyping</h3>
                            <p className="text-gray-600 dark:text-gray-400">Building interactive high-fidelity mockups to test flows and visualize the final product experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Work Section */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-bold tracking-tight text-[#0d121b] dark:text-white sm:text-4xl">Recent Work</h2>
                            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">A selection of my latest projects across mobile and web.</p>
                        </div>
                        <Link to="/projects" className="group flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary/80">
                            View All Projects
                            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Project Card 1 */}
                        <div className="group flex flex-col gap-4">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 relative">
                                <div className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjXNypk0yk-108ItrkseYAi1gj5URTqVpRpFnwwIZmN1M2ePIDTdZZSBwnCbk4L6Y2FkD-mqjIflhf8xZeya5w45QzW0C7of5iFTAr5YbBnPRajQ_i-vOpK-xMytRMH_XyfpqgpXMKeGoBivFpP7dzeFSqIdYD0cISGy_NfFPMdlTtyzTKpE02tQ3Ap1YTHyHYUQIO3CVxsKnOtLDHTZttfWHWhQopZbs6jJKDcaXmhU9wgW66gYvfM0uGs0Z_akhNuExX6GSFx2k4')" }}></div>
                                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10"></div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#0d121b] dark:text-white group-hover:text-primary transition-colors">Fintech App Redesign</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Mobile Application • UI/UX</p>
                            </div>
                        </div>
                        {/* Project Card 2 */}
                        <div className="group flex flex-col gap-4">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 relative">
                                <div className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDneG2gTAKDXfPhBpPBVPOvbBdzwkNyY0gceSoi9G20fty4PsNyBZb1QK6qO9xber1UZ3zqDHurXnJOLiy1ufa_bcNu5Eq1ATwtvuSLmXrtNTBOGJl76GAx-X3JJRVNfgNEs6Mhf3aLGQvXemGrqVU1FwVOUn7Go2r92EvDqmFiHohA4und547rhyCP40TDiPutnqVGdpYsuNzRnM3B8byhoIgCcq_OzqG39LDjyOd2WvTaZjF4GBn4U-guSo6piX8hOOzT1REFlZH4')" }}></div>
                                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10"></div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#0d121b] dark:text-white group-hover:text-primary transition-colors">E-commerce Dashboard</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Web Platform • Dashboard</p>
                            </div>
                        </div>
                        {/* Project Card 3 */}
                        <div className="group flex flex-col gap-4">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 relative">
                                <div className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpD8I6oVARg_xiuYlpt_j5Ci8v8a7HT5xLaZHIeYN7IvLMM7_MIMdd7N98wJL7Pl30juyQnfUvbCtDv4Glp8LLsOxZdoCco6yxCivYo1_laiNR5ofPi0oht-omiFunaJH5VODgdLZRO09mt_o-FTrAnQRoSLH5H_7yl15a9n5SWDotlESS1qgJHieMMQaFRekSBC9as3QcZAcUZeErU77yh0MQj9OBXoyzYoDNCOKzHffAGNDDHOdoRIwpl9pIpNoDSvVuH6Oy5fGW')" }}></div>
                                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10"></div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#0d121b] dark:text-white group-hover:text-primary transition-colors">Travel Booking Platform</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Website • Branding</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-20 text-center shadow-xl sm:px-16 sm:py-24">
                        <h2 className="mx-auto max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
                            Ready to start your next project?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
                            I'm currently available for freelance projects and open to full-time opportunities. Let's create something amazing together.
                        </p>
                        <div className="mt-10 flex justify-center gap-4">
                            <Link to="/contact" className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-bold text-primary transition hover:bg-gray-100">
                                Let's Talk
                            </Link>
                        </div>
                        {/* Background Pattern */}
                        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
                        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
