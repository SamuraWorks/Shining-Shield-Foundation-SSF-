import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Get In Touch</h2>
                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                            Contact Our Office
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            We welcome inquiries from the public, media, and potential partners. Please allow 24-48 hours for a response from our communications team.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary mb-1">Location</h4>
                                    <p className="text-slate-600">
                                        130 British Road, New London<br />
                                        Kossoh Town, Jui
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary mb-1">Phone</h4>
                                    <p className="text-slate-600">
                                        032 778 016 (WhatsApp)<br />
                                        078 921 412 (Call)
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary mb-1">Email</h4>
                                    <p className="text-slate-600">
                                        shiningshieldfoundation@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Integration */}
                        <div className="mt-8 h-64 bg-slate-200 rounded-lg overflow-hidden relative shadow-md border border-slate-200">
                            <iframe
                                width="100%"
                                height="100%"
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=130%20British%20Road%2C%20New%20London%2C%20Kossoh%20Town%2C%20Jui%2C%20Sierra%20Leone&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                title="Shining Shield Foundation Location"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                        <h4 className="text-2xl font-bold font-heading text-primary mb-6">Send a Message</h4>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white" placeholder="Your Name" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white" placeholder="email@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white" placeholder="+232..." />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                                <select className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white">
                                    <option>General Inquiry</option>
                                    <option>Volunteering</option>
                                    <option>Partnership Proposal</option>
                                    <option>Media Request</option>
                                    <option>Report an Issue</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea rows={5} className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white" placeholder="How can we help?"></textarea>
                            </div>

                            <button type="button" className="w-full py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-md shadow-lg transition-colors flex items-center justify-center gap-2">
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
