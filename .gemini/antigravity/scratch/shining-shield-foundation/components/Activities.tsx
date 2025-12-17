import { BookOpen, School, Users } from "lucide-react";
import { Reveal } from "./Reveal";

export default function Activities() {
    const activities = [
        {
            title: "Educational Materials",
            description: "Providing essential learning tools like books, bags, and uniforms to students who cannot afford them.",
            icon: <BookOpen size={32} />,
        },
        {
            title: "Back-to-School Support",
            description: "Annual drives to ensure students are equipped and ready for the new academic year.",
            icon: <School size={32} />,
        },
        {
            title: "Community Outreach",
            description: "Engaging directly with local communities to identify families in need of educational assistance.",
            icon: <Users size={32} />,
        },
    ];

    return (
        <section id="activities" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Our Work</h2>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                        Supporting Education
                    </h3>
                    <p className="text-slate-600 text-lg">
                        Our primary focus is supporting brilliant but less privileged students. We believe education is the key to unlocking potential.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {activities.map((activity, index) => (
                        <div key={index} className="h-full">
                            <Reveal delay={index * 0.1}>
                                <div
                                    className="group h-full p-8 bg-slate-50 hover:bg-white rounded-xl border border-slate-100 hover:border-accent/30 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]"
                                >
                                    <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-accent transition-colors shadow-sm mb-6 border border-slate-100 group-hover:rotate-3 duration-300">
                                        {activity.icon}
                                    </div>
                                    <h4 className="text-xl font-bold font-heading text-primary mb-3">
                                        {activity.title}
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        {activity.description}
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
