import Link from "next/link";
import { ArrowRight, Calendar, FileText } from "lucide-react";

export default function Media() {
    const newsItems = [
        {
            category: "Activity",
            date: "September 25, 2025",
            title: "Back-to-School Donation at Kossoh Town",
            excerpt: "Shining Shield Foundation provided educational support to students at the Rural Education Committee (REC) school, ensuring a strong start to the academic year.",
            link: "#"
        },
        {
            category: "Upcoming",
            date: "To Be Announced",
            title: "Community Outreach Program",
            excerpt: "We are currently planning our next outreach to identify and support more students in need. Stay tuned for details.",
            link: "#"
        },
        {
            category: "Announcement",
            date: "2025",
            title: "Foundation Establishment",
            excerpt: "Shining Shield Foundation officially commences operations with a focus on education and community empowerment.",
            link: "#"
        }
    ];

    return (
        <section id="media" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Media & Updates</h2>
                        <h3 className="text-3xl md:text-3xl font-heading font-bold text-primary">
                            Latest News
                        </h3>
                    </div>
                    <Link href="#" className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors">
                        View All News <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                            <div className="p-6">
                                <div className="flex items-center gap-3 text-xs text-slate-500 mb-4 font-medium uppercase tracking-wide">
                                    <span className="text-accent">{item.category}</span>
                                    <span>•</span>
                                    <div className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        {item.date}
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold font-heading text-primary mb-3 group-hover:text-primary-light transition-colors">
                                    <Link href={item.link}>{item.title}</Link>
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    {item.excerpt}
                                </p>
                                <Link href={item.link} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors">
                                    Read More <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors">
                        View All News <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
