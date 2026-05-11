import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
            <Link 
                href="/"
                className="flex items-center gap-2 h-16 font-bold text-primary">
                    <Briefcase />
                    Job Tracker
            </Link>
            <div className="flex items-center gap-2 text-xl text-primary">
                <Link href="/sign-in">
                    <Button variant="outline">Sign In</Button>
                </Link>
                <Link href="/sign-up">
                    <Button>Sign Up</Button>
                </Link>
            </div>
        </div>
    </nav>
  );
}