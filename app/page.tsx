import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex w-full flex-1 flex-col">
        {/* Hero Section */} 
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black font-bold mb-6 text-6xl">
              A better way to track your job applications
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Capture, organize, and manage your job applications with ease.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/sign-up">
                <Button size="lg" className="h-12 px-8 text-lg font-medium">
                  Start for free <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <p className="text-muted-foreground text-sm">
                Free forever. No credit card required.
              </p>
            </div>
          </div>        
        </section>
      </main>
    </div>
  );
}
