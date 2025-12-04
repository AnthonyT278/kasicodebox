import Header from "./_components/Header";
import Hero from "./_components/Hero";
// import { Button } from "@/components/ui/button"


// Default page  of the application

export default function Home() {
  return (
     <div className="flex flex-col items-center">
       {/* header / Navbar */}
       <Header />

       {/* Hero section */}
       <Hero />
     </div>
  );
}

