import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-10 px-4 sm:px-6 lg:px-8">
            {/* Left Column: Heading & Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-8 pt-4">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                        Let's create something together.
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                        Have a project in mind? Looking to hire? Or just want to say hi? Fill out the form or drop me a direct email.
                    </p>
                </div>
                <div className="mt-4 flex flex-col gap-6">
                    {/* Email Block */}
                    <div className="flex items-start gap-4">
                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-primary">mail</span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Email Me</p>
                            <a className="text-lg font-medium hover:text-primary transition-colors text-slate-900 dark:text-white" href="mailto:hello@alexdesign.com">
                                hello@alexdesign.com
                            </a>
                        </div>
                    </div>
                    {/* Location Block */}
                    <div className="flex items-start gap-4">
                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-primary">location_on</span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Location</p>
                            <p className="text-lg font-medium text-slate-900 dark:text-white">
                                San Francisco, CA
                            </p>
                        </div>
                    </div>
                    {/* Socials Block */}
                    <div className="flex items-start gap-4 mt-2">
                        <div className="size-10 flex items-center justify-center shrink-0"></div> {/* Spacer to align with icons above */}
                        <div className="flex gap-4">
                            <a aria-label="Dribbble" className="size-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group" href="#">
                                <span className="material-symbols-outlined text-xl">palette</span>
                            </a>
                            <a aria-label="LinkedIn" className="size-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group" href="#">
                                <span className="material-symbols-outlined text-xl">work</span>
                            </a>
                            <a aria-label="Twitter" className="size-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group" href="#">
                                <span className="material-symbols-outlined text-xl">flutter_dash</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Decorative Abstract Element */}
                <div className="mt-8 hidden lg:block relative h-48 w-full rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900"></div>
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                    <div className="absolute left-10 top-10 w-20 h-20 bg-primary/30 rounded-full blur-2xl"></div>
                </div>
            </div>
            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white dark:bg-[#151c2b] rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8 lg:p-10">
                <form className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Name</span>
                            <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-primary/20 h-12 px-4 transition-all" placeholder="Your Name" type="text" />
                        </label>
                        {/* Email Field */}
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</span>
                            <input className="form-input w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-primary/20 h-12 px-4 transition-all" placeholder="hello@example.com" type="email" />
                        </label>
                    </div>
                    {/* Subject Field */}
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Subject</span>
                        <div className="relative">
                            <select className="form-select w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:border-primary focus:ring-primary/20 h-12 px-4 pr-10 appearance-none transition-all" defaultValue="">
                                <option disabled value="">Select a subject</option>
                                <option value="project">Project Inquiry</option>
                                <option value="hiring">Hiring / Job Opportunity</option>
                                <option value="collab">Collaboration</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </label>
                    {/* Message Field */}
                    <label className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</span>
                        <textarea className="form-textarea w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-primary/20 min-h-[180px] p-4 resize-y transition-all" placeholder="Tell me about your project, timeline, and budget..."></textarea>
                    </label>
                    {/* Submit Button */}
                    <div className="pt-2">
                        <button className="group relative flex w-full justify-center rounded-lg bg-primary px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200" type="button">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-lg">send</span>
                            </span>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
