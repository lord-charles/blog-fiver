import Image from "next/image";
import { Inter } from "next/font/google";
import { Hero } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fffefe" }}>
      <Hero />
    </div>
  );
}
