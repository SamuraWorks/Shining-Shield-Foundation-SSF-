import Link from "next/link";
import { HandHeart, Users2 } from "lucide-react";

export default function GetInvolved() {
    return (
        <section id="get-involved" className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Join The Movement</h2>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                        Be The Change You Want To See
                    </h3>
                    <p className="text-slate-600 text-lg">
                        We are always looking for passionate individuals and organizations to join our mission. Whether you can volunteer your time or partner with us strategically, your involvement matters.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Volunteer Card */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                            <HandHeart size={32} />
                        </div>
                        <h4 className="text-2xl font-bold font-heading text-primary mb-4">Become a Volunteer</h4>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Join our ground teams for emergency response, community outreach, and event coordination. Gain valuable experience while serving your nation.
                        </p>
                        <a
                            href="https://wa.me/23232778016?text=Hello%20SSF%2C%20I%20am%20interested%20in%20becoming%20a%20volunteer."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto px-8 py-3 bg-white border-2 border-primary text-primary font-bold rounded-md hover:bg-primary hover:text-white transition-colors"
                        >
                            Apply to Volunteer
                        </a>
                    </div>

                    {/* Partner Card */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                            <Users2 size={32} />
                        </div>
                        <h4 className="text-2xl font-bold font-heading text-primary mb-4">Partner With Us</h4>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Corporations, NGOs, and Government agencies can collaborate with us to amplify impact. Let's build sustainable solutions together.
                        </p>
                        <a
                            href="https://wa.me/23232778016?text=Hello%20SSF%2C%20we%20are%20interested%20in%20discussing%20a%20partnership."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto px-8 py-3 bg-white border-2 border-primary text-primary font-bold rounded-md hover:bg-primary hover:text-white transition-colors"
                        >
                            Become a Partner
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
