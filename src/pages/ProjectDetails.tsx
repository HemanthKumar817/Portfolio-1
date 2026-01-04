import React from 'react';

const ProjectDetails: React.FC = () => {
    return (
        <div className="flex flex-col items-center pb-20">
            {/* Hero Section */}
            <div className="w-full px-4 sm:px-6 lg:px-8 pt-8 pb-12">
                <div className="max-w-[1000px] mx-auto">
                    {/* Hero Card */}
                    <div className="relative overflow-hidden rounded-2xl md:rounded-[32px] group aspect-[16/9] md:aspect-[21/9] shadow-2xl shadow-slate-200/50 dark:shadow-none">
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6XSwul8clX5lCCJdU9sX7akrlZmHrmv0hP8_xYpCLZP7jPaw85nqPidUd5UsnazjRCMgdw7XZL8vQ4tQpycRI4eG6k04VIV-S8b1xvY-S_cQrjz-vBHlBZ4BSknW2_94NZgX8mPKLQuWBcKs3_z_1u0eQPuD8L9ppErzQSrquucwc4azqotNyRf7b8y23lzCtp0z5mwxgPVCQc1t2GQeW9Z20sGaL8BZH3I69hEP9skIglcMgzxVMhBSyHw6YNWBfa3vXeaW5ku42')" }}>
                        </div>
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-12">
                            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 drop-shadow-sm">
                                Fintech Dashboard Redesign
                            </h1>
                            <p className="text-slate-200 text-base md:text-xl font-medium max-w-2xl mb-8 leading-relaxed opacity-90">
                                Simplifying complex financial data for everyday users through intuitive data visualization.
                            </p>
                            <button className="flex items-center gap-2 h-10 md:h-12 px-6 rounded-lg bg-white text-slate-900 hover:bg-slate-100 text-sm md:text-base font-bold transition-colors shadow-lg">
                                <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                                View Live Site
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Metadata & Content Wrapper */}
            <div className="layout-content-container flex flex-col max-w-[800px] w-full px-4 md:px-6">
                {/* Metadata Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex flex-col gap-1">
                        <span className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold">Client</span>
                        <span className="text-slate-900 dark:text-white text-sm font-medium">FinTech Global</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold">Role</span>
                        <span className="text-slate-900 dark:text-white text-sm font-medium">Lead Product Designer</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold">Timeline</span>
                        <span className="text-slate-900 dark:text-white text-sm font-medium">12 Weeks</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold">Tools</span>
                        <span className="text-slate-900 dark:text-white text-sm font-medium">Figma, React, D3.js</span>
                    </div>
                </div>
                {/* The Challenge */}
                <section className="py-12">
                    <h2 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-bold tracking-tight mb-6">The Challenge</h2>
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                            The existing dashboard suffered from severe information overload. Users, primarily small business owners, struggled to find key performance metrics amidst dense tables and raw data exports. This friction caused a high drop-off rate during the initial onboarding process (approx. 45%).
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mt-4">
                            Our goal was to restructure the information architecture to prioritize actionable insights without removing the granularity that power users needed.
                        </p>
                    </div>
                </section>
            </div>
            {/* Full Width Image Grid / Process */}
            <div className="w-full max-w-[1100px] px-4 md:px-6 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="flex flex-col gap-3">
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden aspect-[4/3] relative group">
                            <img alt="Close up of wireframe sketches on a dotted notebook" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTbPww01gsu-lk-MfCswZ6q_hgeggZ11ZKWuFOi4N_OMZEDMHxF0jW6qFb1CNf5SiTcWq_2PSZzD-Sd-Cz3RiJiQH5vq9HxOyL1NNFNfDx8PHLrquxKLYDzzXrBcB1fQufjtGSRWx8BIIRib4p0tvB0IkUyZALgqlsXmTqS5emigAdovrb0ETGheCZ9RW7DkbAX64czYNS8TINeD0TpsKXTM7_QUqJ3A95KMO7XIxZtxwPQjyc9JzWqT3-4RDu1C7ZBu196IOubjbm" />
                            <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Sketches</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden aspect-[4/3] relative group">
                            <img alt="Digital low fidelity wireframes on a computer screen" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOu57R_L7sbXieood_05dCXPw0r7DwU_hq7MAbpvkpGOdHhMMmpwIMxFZMeMG0jK9mkBGKcEt39sK1E3F7cb4QcY0G8XXQwPXLO9dRyx4pi9lA8PZr30CbWt1DLCyyLEihY0Ig3c597ar2trN-zwQX2bKeeKDDhmjHN90hi-5XrRehx6OhrGclOUMPpO_fEeoC053700rNWh2I9orYjJVxZtB6TudPAPSFaFJqLseVbNcSfa3YxObha_kr-13VOke_Bt06XBuTBmEW" />
                            <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">Wireframes</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="layout-content-container flex flex-col max-w-[800px] w-full px-4 md:px-6">
                {/* The Solution */}
                <section className="py-8 md:py-12">
                    <h2 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-bold tracking-tight mb-6">The Solution</h2>
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                        We introduced a modular widget system. Users can now customize their home view, dragging and dropping the metrics that matter most to their business. We also implemented a "Focus Mode" that hides secondary navigation when viewing complex reports.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white">Customizable Widgets</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">Drag-and-drop interface for personalized dashboards.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white">Smart Defaults</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">Pre-configured views based on industry type (Retail, SaaS, Service).</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white">Dark Mode Native</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">Designed from the ground up to support low-light environments.</p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
            {/* Big Feature Showcase */}
            <div className="w-full max-w-[1000px] px-4 md:px-6 mb-16">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200 dark:border-slate-800 bg-slate-900">
                    <div className="w-full aspect-video relative group">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDKOmXW-aTNKtYE9ck0A8RORWjatWy_cO8th_U6Bznyy5RNVWeA3kUYA0N9xlMl6NEl-udn2L02N6KcCBXudpfj7RaS82Y8tTXbY0SwcJmmh3dpzdcopEMCpU3omGccK_BNvPbCvopVxmEGFS4gRJnyv2rEAjSHekcUd6CO7FNm-X7pn-id7F122rzI9pfBBeI5hFEnD5_Q19EH-ZhFW7wh6OzMTjqbracujn9WPW0k3NCNCZKKyg8J-fAMNIvH_DKRd74XasOkUHe')" }}>
                        </div>
                    </div>
                </div>
                <p className="text-center text-slate-500 text-sm mt-4">Final UI Implementation - Dark Mode</p>
            </div>
            {/* Outcomes */}
            <div className="layout-content-container flex flex-col max-w-[800px] w-full px-4 md:px-6">
                <section className="py-8">
                    <h2 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-bold tracking-tight mb-8">Outcomes</h2>
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                        <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col items-center text-center">
                            <span className="text-4xl font-black text-primary mb-2">24%</span>
                            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Increase in Retention</span>
                        </div>
                        <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col items-center text-center">
                            <span className="text-4xl font-black text-primary mb-2">3x</span>
                            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Faster Reporting Time</span>
                        </div>
                        <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col items-center text-center">
                            <span className="text-4xl font-black text-primary mb-2">4.8</span>
                            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">App Store Rating</span>
                        </div>
                    </div>
                    <div className="p-6 md:p-8 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/10">
                        <div className="flex gap-4">
                            <span className="material-symbols-outlined text-primary text-4xl">format_quote</span>
                            <div>
                                <p className="text-lg md:text-xl font-medium text-slate-800 dark:text-slate-200 italic mb-4">
                                    "The new dashboard completely transformed how our clients interact with their data. It went from a chore to a delight."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                                        <img alt="Portrait of the CTO" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArCMGMXuMAlYTaHJ3RMhNABOU4tLwZ_HQVYVxbZhHPyW_FcilXLUbg69fjiz5ZbVURRsiQa3JjUd6cq-900C_ex-jj1MqGtK9EItBjCN8W084FqQKC3Ns9r_b0dgaOIyLJ0qJjAcSHWrLCKEJCwzN9izORLn83-lrAD56GuuKIhJTDmIRgWdWv-8VM6ET8gL9DofcjhBNXbVbjQG66gWjUvXHt93C2INTcmovl5swngf7ySJ2uZhhA7Q5kJnWSYwq8PIKcSHkce6YQ" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">James Sterling</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">CTO, FinTech Global</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Navigation Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center py-12 border-t border-slate-200 dark:border-slate-800 mt-12 gap-6">
                    <a className="group flex items-center gap-3 text-slate-500 hover:text-primary transition-colors" href="#">
                        <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">arrow_back</span>
                        <div className="flex flex-col items-start">
                            <span className="text-xs font-semibold uppercase tracking-wider">Previous</span>
                            <span className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-primary">E-Commerce App</span>
                        </div>
                    </a>
                    <a className="group flex items-center gap-3 text-slate-500 hover:text-primary transition-colors text-right" href="#">
                        <div className="flex flex-col items-end">
                            <span className="text-xs font-semibold uppercase tracking-wider">Next Project</span>
                            <span className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-primary">Travel Booking UX</span>
                        </div>
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
