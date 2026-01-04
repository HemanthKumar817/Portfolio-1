import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Mobile', 'Web', 'Branding'];

    const projects = [
        {
            title: "Fintech Dashboard Redesign",
            category: "Web App",
            subCategory: "UX/UI",
            description: "A complete visual and functional overhaul of a banking app interface to improve user retention.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF3lkMW8VLUw7CrNMVl8ianRSct7AZ-2oY_hc1v-Y0PeGlRRi5sdv5VeVoQOrJ6k-esuOu3whk5WeEj7qPOyn0QelQsBu0ZbiUNOQnGyS5bykKidHY4EcrBxnHwvX40JKbfw5pip17gQTWqKGXnh82AeJOQyG2VJvOR7_ppgqs8mCRbk9SyaxY8jZ2VVoSdJ6F9phiokVcmLKmIE4FBgRwJmw1vKPRPjAsdIqQXTmJaQs0bweFfHgAM4G_Mti3V3JgGt2Ax6dl4tzB",
            link: "/projects/details"
        },
        {
            title: "E-commerce Mobile App",
            category: "Mobile",
            subCategory: "Research",
            description: "End-to-end UX research and high-fidelity UI design for a sustainable fashion retailer.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG3fZ8OYF3X4kv2xAODvOB_aXquCBt2-PLzZ8az9lxb2PO57PUmiC3KLg7n0FoK4GTohS1kUIrkNdrI6LNs9sYykdbAab8_IPgdVWXq8BSDMNIqCOFbAVLKB4By4n7ve0D5EzlHx8b-oFHAQdPa4Bph10F3vDOpTZ1n3HIr92sd5se5xCBcbkw6SX3hg5vv-sBJq-eYWpmYcLmAFyFoCn0foD3jzmiH6nSbpAYaEY-JuTJtqg6Jz6fTlp-XnDf4_TSpivgODWdlrt1",
            link: "/projects/details"
        },
        {
            title: "SaaS Marketing Site",
            category: "Web",
            subCategory: "Marketing",
            description: "High-conversion landing page design focused on clear value proposition and onboarding.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQkGEy16YEdCtK4XvLU8mq2z3oC5Tg2pTWjn5GFfOfpFuW8n2kS5NbUrEs4cl12NCU2KtvVLIgbGNJDDXpylpbedN816ApY3RvQxuOppCqe2_oqAsB87ey57T4lcrJC3trq91nnyd9RrNNZN7o7yVQ9W3G3H0N59BQxq6vqPuMTBe5Boz8-jo3M51Zg14zpC-t0qwfrE0aA3_KXOuCzN-nzYCPb_WDp1CDC3Igg6_hn91XQWtr7Hc7fFFyjKJHnQfbOJdjV0rdkeR4",
            link: "/projects/details"
        },
        {
            title: "Corporate Branding",
            category: "Branding",
            subCategory: "Identity",
            description: "A comprehensive identity system for an emerging AI tech startup, including logo and guidelines.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoApGfjTvSrvBcb2fBjdP8mvATmRTCL6weiuESRN794OvUTb4fMZZm3CrAIGaTOfyNSksAzP5jLoBq3c6UZY1jGHj8OhIgfoB0lPWJWq_eLi2euVBNMDtgYr7mDPZcg2xMFiwJ5ZlKgahoZX-d22zyZ4Ucrhr-IQ1C-gtD9-FmAs4to4BoHpl3N4WSaiiQk8nnfraqSKEtmFOT3usWyw8yhV75prnKcVNfRs_KQ1fy8JQBPM-pD6N81_-lEPtv61HibDaR7NsmgmC_",
            link: "/projects/details"
        },
        {
            title: "Abstract 3D Series",
            category: "Creative",
            subCategory: "Art Direction",
            description: "Exploration of form and color through a series of daily 3D renders using Blender.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA8D1RfSQ3edHqgrASven9sxXVVhqCGFUZjL121CkwA14ce059VB_uix_ty7nrH-vRZWYr1DX57lQNhSFDInCXbkeUxQqgPAAp66IYkeY4tOngRPYrZlwGMqbi95M0QrSRjCw1Ra8h-521_M6hXHLvWs1UzCqC4x6KR1ky5nPX6Kdx9xsnPA_MAX0XQL8kg0B3Lxui4c5PXHq-jirryCd_TO4AlQbQmMBYLToC2xj8YYlKwPfyKISy3-V6NkZbLfgCpCGZebO9SpAa",
            link: "/projects/details"
        },
        {
            title: "React UI Library",
            category: "Development",
            subCategory: "Open Source",
            description: "An open-source component library focusing on accessibility and developer experience.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoow3iPEaFo47DQFruZN9l1dkAlNf3ezJGy58B5hvFhPOcsD4Ur5ubZEO1We2JwQQphqDDmrWcLbVwEWEWb7vp1kUDrwjeb_PhAzQos3B5Ztc8j95_AFFPnAIzau2GG-0Cl386yIZ2d5S2b5ivVVJ7X5p31gwPD0PcLqoYvMTFAhIasMrWYKcmvG2xg3HGRei6JuHgSOiXd5g8yIAkfbah41Nl5RJm773AaJ_M1ryVOVcmoCNkc-p8SKBieFONbO49M-Us22CD6ifs",
            link: "/projects/details"
        }
    ];

    return (
        <div className="flex justify-center px-4 py-8 md:px-10 lg:px-20 lg:py-12">
            <div className="flex max-w-[1200px] flex-1 flex-col gap-8">
                {/* PageHeading */}
                <div className="flex flex-col gap-4 p-4 md:p-0">
                    <div className="flex flex-col gap-3">
                        <p className="text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl">Selected Works</p>
                        <p className="max-w-2xl text-lg font-normal leading-relaxed text-slate-600 dark:text-slate-400">
                            Crafting digital experiences with a focus on user-centered design. Here is a curated selection of my recent projects across web, mobile, and branding.
                        </p>
                    </div>
                </div>
                {/* Chips (Filters) */}
                <div className="flex flex-wrap gap-3 p-4 md:p-0">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`group flex h-9 items-center justify-center rounded-lg px-5 transition-all ${filter === cat
                                    ? 'bg-primary text-white'
                                    : 'border border-slate-200 bg-white hover:border-primary/50 hover:bg-slate-50 dark:border-slate-700 dark:bg-card-dark dark:hover:bg-slate-800 text-slate-600 group-hover:text-primary dark:text-slate-300'
                                }`}
                        >
                            <span className="text-sm font-medium">{cat}</span>
                        </button>
                    ))}
                </div>
                {/* ImageGrid (Project Gallery) */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4 md:p-0">
                    {projects.map((project, index) => (
                        <Link to={project.link} key={index} className="group flex flex-col overflow-hidden rounded-xl bg-card-light dark:bg-card-dark shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 border border-slate-100 dark:border-slate-800">
                            <div className="relative aspect-video w-full overflow-hidden">
                                <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${project.image}')` }}></div>
                                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10"></div>
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-6">
                                <div>
                                    <div className="mb-3 flex flex-wrap gap-2">
                                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-primary dark:bg-blue-900/30 dark:text-blue-300">{project.subCategory}</span>
                                        <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">{project.category}</span>
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                                    <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-sm font-semibold text-primary hover:text-blue-700 transition-colors">
                                    View Case Study
                                    <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {/* CTA Section */}
                <div className="@container bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
                    <div className="flex flex-col justify-center items-center gap-6 px-4 py-20 @[480px]:gap-8 @[480px]:px-10">
                        <div className="flex flex-col gap-4 text-center max-w-[720px]">
                            <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight @[480px]:text-4xl">
                                Ready to start a project? Let's talk.
                            </h1>
                            <p className="text-slate-600 dark:text-slate-400 text-lg">I'm currently available for freelance projects and open to full-time opportunities.</p>
                        </div>
                        <div className="flex gap-4 flex-wrap justify-center mt-4">
                            <Link to="/contact" className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-700 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40">
                                <span className="truncate">Get in Touch</span>
                            </Link>
                            <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-900 dark:text-white text-base font-bold leading-normal tracking-[0.015em] transition-all hover:bg-slate-50 dark:hover:bg-slate-800">
                                <span className="truncate">Download CV</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
