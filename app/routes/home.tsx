import type { Route } from "./+types/home";
import Hero from "~/components/hero-section";
import Feature from "~/components/feature";
import Customer from "~/components/customer";
import Footer from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Show Case | Work" },
    { name: "description", content: "Welcome to Cookie Software Ltd." },
  ];
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <Customer />
      <Footer />
    </div>
  );
}
