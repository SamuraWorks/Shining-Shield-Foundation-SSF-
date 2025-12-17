import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function SupportProducts() {
    const products = [
        {
            name: "Official Foundation Cap",
            price: "$25.00",
            image: "bg-slate-200", // Placeholder class
        },
        {
            name: "Supporter T-Shirt",
            price: "$30.00",
            image: "bg-slate-300",
        },
        {
            name: "Lapel Pin - Gold Edition",
            price: "$15.00",
            image: "bg-slate-200",
        },
    ];

    return (
        <section id="support-products" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Support The Cause</h2>
                    <h3 className="text-3xl md:text-3xl font-heading font-bold text-primary mb-4">
                        Wear Your Support
                    </h3>
                    <p className="text-slate-600">
                        Proceeds from every purchase go directly to our emergency response fund.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className={`aspect-square w-full rounded-lg ${product.image} mb-4 relative overflow-hidden`}>
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                    <ShoppingBag size={48} className="opacity-20" />
                                </div>
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                                <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <span className="bg-white text-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg">Enquire Now</span>
                                </div>
                            </div>
                            <h4 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">{product.name}</h4>
                            <p className="text-slate-500 text-sm italic">Contact for availability</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-slate-500 mb-4 text-sm">
                        * All proceeds support our educational activities. Products subject to availability.
                    </p>
                    <Link href="#contact" className="text-primary font-semibold hover:text-accent transition-colors border-b border-primary hover:border-accent pb-0.5">
                        Contact for Details
                    </Link>
                </div>
            </div>
        </section>
    );
}
