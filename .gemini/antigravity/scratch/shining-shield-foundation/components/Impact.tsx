import { School, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function Impact() {
    return (
        <section id="impact" className="py-20 bg-blue-50 text-slate-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 mix-blend-overlay"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Recent Activity</h2>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                        Impact in Action
                    </h3>
                </div>

                <div className="max-w-5xl mx-auto bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden">
                    <div className="p-8 md:p-12">
                        {/* Header Section */}
                        <div className="flex flex-col md:flex-row gap-6 items-start justify-between mb-8 border-b border-slate-100 pb-8">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full border border-green-200">
                                        <CheckCircle2 size={12} />
                                        Completed
                                    </span>
                                    <span className="text-accent font-semibold text-sm tracking-wide uppercase">First Community Outreach</span>
                                </div>
                                <h4 className="text-3xl font-bold font-heading text-primary mb-4">Back-to-School Donation</h4>
                                <div className="flex flex-col sm:flex-row gap-4 text-slate-500 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-accent" />
                                        25th September 2025
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-accent" />
                                        Rural Education Committee (REC), Kossoh Town
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block flex-shrink-0">
                                <School size={48} className="text-primary/20" />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="text-slate-600 leading-relaxed space-y-4 mb-10">
                            <p>
                                On 25th September 2025, Shining Shield Foundation carried out its first Back-to-School Donation at the Rural Education Committee (REC) in Kossoh Town. The activity focused on supporting brilliant but less privileged students with basic educational materials to help them prepare for the academic year.
                            </p>
                            <p>
                                This initiative marked the foundation’s first community outreach activity and reflects its commitment to supporting education at the grassroots level. Although the foundation is still in the process of registration, its work has already begun through practical support and community engagement.
                            </p>
                        </div>

                        {/* Image Gallery */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="col-span-2 aspect-video relative rounded-lg overflow-hidden group">
                                <img src="/gallery/rec-donation/rec-2.jpg?v=2" alt="Group donation event" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="aspect-square relative rounded-lg overflow-hidden group">
                                <img src="/gallery/rec-donation/rec-1.jpg?v=2" alt="Students with gift bags" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="aspect-square relative rounded-lg overflow-hidden group">
                                <img src="/gallery/rec-donation/rec-4.jpg?v=2" alt="Students lined up" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="aspect-square relative rounded-lg overflow-hidden group">
                                <img src="/gallery/rec-donation/rec-5.jpg?v=2" alt="Foundation team selfie" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="hidden md:block aspect-square relative rounded-lg overflow-hidden group bg-slate-100 flex items-center justify-center border border-slate-200">
                                <span className="text-sm font-medium text-slate-500">More updates soon...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
