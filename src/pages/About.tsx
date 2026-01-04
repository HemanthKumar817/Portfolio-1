import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24 space-y-24 md:space-y-32">
            {/* Hero Section: Split Layout */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center pt-12 md:pt-20">
                {/* Text Content */}
                <div className="lg:col-span-7 order-2 lg:order-1 space-y-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Available for new projects
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                            Crafting digital experiences that feel <span className="text-primary relative inline-block">
                                human.
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-30" preserveAspectRatio="none" viewBox="0 0 100 10">
                                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                                </svg>
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                            I'm Alex, a multidisciplinary Product Designer with a background in cognitive psychology. I bridge the gap between complex systems and intuitive user interfaces.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link to="/contact" className="px-8 py-3.5 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg shadow-primary/25 flex items-center gap-2">
                            <span>Let's talk</span>
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                        <button className="px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">download</span>
                            Download CV
                        </button>
                    </div>
                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
                        <div>
                            <div className="text-3xl font-bold text-slate-900 dark:text-white">8+</div>
                            <div className="text-sm text-slate-500 dark:text-slate-500 mt-1">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-slate-900 dark:text-white">50+</div>
                            <div className="text-sm text-slate-500 dark:text-slate-500 mt-1">Projects Launched</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-slate-900 dark:text-white">12</div>
                            <div className="text-sm text-slate-500 dark:text-slate-500 mt-1">Design Awards</div>
                        </div>
                    </div>
                </div>
                {/* Image/Visual */}
                <div className="lg:col-span-5 order-1 lg:order-2 relative group">
                    <div className="absolute inset-0 bg-primary rounded-2xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-slate-900 rounded-2xl -rotate-3 opacity-10 dark:opacity-40 group-hover:-rotate-6 transition-transform duration-500"></div>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                        <img alt="Professional portrait of a male designer smiling in a modern office" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2j5Ip2-OrMQrGwVmXe3jox2XM0PDzzGKHE3ZgOS9EaxbzjlI1BZu2va_BTyctO5JFx9N_XF57fe8g_5qIlqBZd6Aig3TPsThW7Y_kVGIKQXAfTkBsTTMgx83P4I4_dXTPF1M9mu-tjxDTktBAn72qvui4gkbOTrz7oDId-m1h_yu_fIObza_KDtt9QVFLzSoNb4WLRnn145ohK8BeC5FAYgvfwSt65nNYgWVQw2jYwJ1M7U-iqRB8UzRpiNS1Pv7UnE3jjuvx8fnk" />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 hidden md:flex items-center gap-3 animate-bounce" style={{ animationDuration: "3s" }}>
                        <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 dark:text-green-400">
                            <span className="material-symbols-outlined">verified</span>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">Current Status</p>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">Designing at Stripe</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Narrative & Philosophy Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                        <span className="w-8 h-1 bg-primary rounded-full"></span>
                        My Journey
                    </h2>
                    <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-400">
                        <p>
                            My career didn't start in design. I began in cognitive psychology, fascinated by how the human brain processes information and makes decisions. This foundation became my secret weapon when I pivoted into UX design in 2015.
                        </p>
                        <p className="mt-4">
                            I realized that good design isn't just about aesthetics—it's about removing friction and respecting the user's cognitive load. Whether I'm wireframing a complex dashboard or polishing a mobile app interaction, I always ask: <span className="text-slate-900 dark:text-white font-semibold">"Does this empower the user?"</span>
                        </p>
                        <p className="mt-4">
                            Over the years, I've had the privilege of working with startups in Fintech, EdTech, and Healthcare, helping them turn ambitious ideas into tangible, user-loved products.
                        </p>
                    </div>
                </div>
                {/* Philosophy Card */}
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full -ml-12 -mb-12 blur-xl"></div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Design Philosophy</h3>
                    <div className="space-y-8 relative z-10">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <span className="material-symbols-outlined">architecture</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white">Clarity over Cleverness</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Design should explain the product, not obscure it with unnecessary decoration.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <span className="material-symbols-outlined">psychology</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white">Data-Informed Empathy</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Decisions are backed by research and validated through rigorous user testing.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <span className="material-symbols-outlined">all_inclusive</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white">Inclusive by Default</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Accessibility isn't an afterthought; it's a constraint that leads to better design for everyone.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience & Skills Section */}
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Timeline */}
                    <div className="lg:col-span-7">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Experience</h2>
                        <div className="space-y-8 relative pl-2">
                            {/* Vertical Line */}
                            <div className="absolute top-2 bottom-2 left-[19px] w-0.5 bg-slate-200 dark:bg-slate-700"></div>
                            {/* Item 1 */}
                            <div className="relative pl-12 group">
                                <div className="absolute left-0 top-1.5 w-10 h-10 bg-white dark:bg-slate-800 border-2 border-primary rounded-full flex items-center justify-center z-10 shadow-sm group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-primary text-sm">work</span>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Senior Product Designer</h3>
                                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">2021 — Present</span>
                                    </div>
                                    <div className="text-primary font-medium mb-3">Stripe</div>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        Leading the design system team for merchant dashboards. improved component reusability by 40% and reduced dev handoff time. Mentoring 2 junior designers.
                                    </p>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="relative pl-12 group">
                                <div className="absolute left-0 top-1.5 w-10 h-10 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center z-10 shadow-sm group-hover:border-primary transition-colors">
                                    <span className="material-symbols-outlined text-slate-400 text-sm group-hover:text-primary">layers</span>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">UX Designer</h3>
                                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">2018 — 2021</span>
                                    </div>
                                    <div className="text-primary font-medium mb-3">TechFlow Agency</div>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        Worked with clients like Spotify and Headspace. Conducted extensive user research and delivered high-fidelity prototypes for mobile applications.
                                    </p>
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div className="relative pl-12 group">
                                <div className="absolute left-0 top-1.5 w-10 h-10 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center z-10 shadow-sm group-hover:border-primary transition-colors">
                                    <span className="material-symbols-outlined text-slate-400 text-sm group-hover:text-primary">school</span>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Junior Designer</h3>
                                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">2016 — 2018</span>
                                    </div>
                                    <div className="text-primary font-medium mb-3">Creative Startups</div>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        Started as an intern and moved to full-time. Focused on marketing websites and basic UI kits. Learned the fundamentals of agile workflow.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Skills & Tools */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Tech Stack */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Tools I Use</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {/* Tool 1 */}
                                <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                                    <div className="w-8 h-8 rounded bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-xs">Fi</div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">Figma</span>
                                </div>
                                {/* Tool 2 */}
                                <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                                    <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">Ad</div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">Adobe XD</span>
                                </div>
                                {/* Tool 3 */}
                                <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                                    <div className="w-8 h-8 rounded bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold text-xs">Js</div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">JavaScript</span>
                                </div>
                                {/* Tool 4 */}
                                <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                                    <div className="w-8 h-8 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">Re</div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">React</span>
                                </div>
                                {/* Tool 5 */}
                                <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                                    <div className="w-8 h-8 rounded bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-xs">Tw</div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">Tailwind</span>
                                </div>
                                {/* Tool 6 */}
                                <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                                    <div className="w-8 h-8 rounded bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">Fr</div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">Framer</span>
                                </div>
                            </div>
                        </div>
                        {/* Soft Skills Tags */}
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Competencies</h2>
                            <div className="flex flex-wrap gap-2">
                                {['User Research', 'Wireframing', 'Design Systems', 'Prototyping', 'Usability Testing', 'Interaction Design', 'A11y'].map(skill => (
                                    <span key={skill} className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium border border-transparent hover:border-primary hover:text-primary transition-colors cursor-default">{skill}</span>
                                ))}
                            </div>
                        </div>
                        {/* Personal Widget */}
                        <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 mt-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="material-symbols-outlined text-primary">headphones</span>
                                <h3 className="font-bold text-slate-900 dark:text-white">Now Listening</h3>
                            </div>
                            <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm">
                                <div className="w-12 h-12 bg-slate-200 rounded-lg overflow-hidden shrink-0">
                                    <img alt="Abstract album art with dark and orange swirls" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_YBBrtmGq2O2GAdSXIBzE2egnlI5WfXFt6_q37NydLGJ0-jeTJ5lOx6-BKifzG0ISewOxSp5idopSj74mmvtqu4n9N7nXpZLZMjVjAsO-XfYwALFi3RNXobMF6TeHz2_ufcnC7zD3_JDAfqWiJBDe2O4pKydVJEIGZt8YXpSyeQm9Aa9BSP4LMDKfz4EG7A-erpsM1L7mQXP0nfvnzBwWoVl-yHBhg9PT01T0R-Qu5_qpsTCOUM0nQOPvvTAe2dF9wy7KaJBQCor3" />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-sm font-bold text-slate-900 dark:text-white truncate">Deep Focus</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 truncate">Ambient Electronics</div>
                                </div>
                                <div className="ml-auto">
                                    <span className="flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20"></div>
                </div>
                <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Have a project in mind?</h2>
                    <p className="text-slate-300 text-lg">
                        I'm currently accepting new freelance projects. Whether it's a website redesign or a full-scale product launch, let's create something amazing together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-primary/30">
                            Start a Project
                        </Link>
                        <button className="px-8 py-4 bg-transparent border border-slate-600 text-white rounded-lg font-bold hover:bg-white/10 transition-colors">
                            Copy Email
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
