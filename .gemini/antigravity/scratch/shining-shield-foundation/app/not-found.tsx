import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-white p-4 text-center">
            <h1 className="text-9xl font-bold font-heading text-accent mb-4">404</h1>
            <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
            <p className="text-lg text-slate-200 mb-10 max-w-lg">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <Link
                href="/"
                className="px-8 py-4 bg-white text-primary font-bold rounded-md hover:bg-accent hover:text-white transition-colors flex items-center gap-2"
            >
                <Home size={20} />
                Return Home
            </Link>
        </div>
    );
}
