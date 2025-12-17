import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#001f3f] text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="relative w-10 h-10 bg-white rounded-lg p-1">
                                <img
                                    src="/logo.jpg"
                                    alt="Logo"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <span className="text-xl font-bold font-heading tracking-tight">Shining Shield (SSF)</span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                            "Together We Shield, Together We Shine"
                        </p>
                        <div className="flex gap-4">
                            <a href="https://instagram.com/shiningshield.foundation" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                                <Instagram size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-3 text-slate-300 text-sm">
                            <li><Link href="#about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="#founder" className="hover:text-accent transition-colors">Our Founder</Link></li>
                            <li><Link href="#activities" className="hover:text-accent transition-colors">Our Work</Link></li>
                            <li><Link href="#impact" className="hover:text-accent transition-colors">Impact & Media</Link></li>
                            <li><Link href="#donate" className="hover:text-accent transition-colors">Donate</Link></li>
                        </ul>
                    </div>

                    {/* Legal / Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Info</h4>
                        <ul className="space-y-3 text-slate-300 text-sm">
                            <li><span className="opacity-70">Status: Registration Ongoing</span></li>
                            <li><span className="opacity-70">Country: Sierra Leone</span></li>
                            <li><span className="opacity-70">Focus: Education Support</span></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contact Us</h4>
                        <ul className="space-y-4 text-slate-300 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-accent mt-0.5" />
                                <span>
                                    130 British Road, New London,<br />
                                    Kossoh Town, Jui
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-accent" />
                                <span>032 778 016 (WhatsApp) / 078 921 412</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-accent" />
                                <span>shiningshieldfoundation@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                        &copy; {new Date().getFullYear()} Shining Shield Foundation (SSF). All rights reserved.<br />
                        <span className="opacity-80 mt-2 block italic">Shining Shield Foundation (SSF) is an emerging community initiative currently in the process of formal registration.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
