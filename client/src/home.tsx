import Navigation from "./components/navigation";
import Hero from "./components/sections/hero";

export default function Home() {
  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden", border: "none" }} className="w-full !border-0">
      <Navigation />
      <Hero />
      {/* Placeholder sections to match navItems in Navigation.tsx */}
      <section style={{ maxWidth: "100%", overflowX: "hidden", border: "none" }} id="about" className="min-h-screen p-4 !border-0">
        <h2 style={{ border: "none" }} className="!border-0">About Section</h2>
      </section>
      <section style={{ maxWidth: "100%", overflowX: "hidden", border: "none" }} id="programs" className="min-h-screen p-4 !border-0">
        <h2 style={{ border: "none" }} className="!border-0">Programs Section</h2>
      </section>
      <section style={{ maxWidth: "100%", overflowX: "hidden", border: "none" }} id="facilities" className="min-h-screen p-4 !border-0">
        <h2 style={{ border: "none" }} className="!border-0">Facilities Section</h2>
      </section>
      <section style={{ maxWidth: "100%", overflowX: "hidden", border: "none" }} id="gallery" className="min-h-screen p-4 !border-0">
        <h2 style={{ border: "none" }} className="!border-0">Gallery Section</h2>
      </section>
      <section style={{ maxWidth: "100%", overflowX: "hidden", border: "none" }} id="testimonials" className="min-h-screen p-4 !border-0">
        <h2 style={{ border: "none" }} className="!border-0">Testimonials Section</h2>
      </section>
      <section style={{ maxWidth: "100%", overflowX: "hidden", border: "none" }} id="contact" className="min-h-screen p-4 !border-0">
        <h2 style={{ border: "none" }} className="!border-0">Contact Section</h2>
      </section>
    </div>
  );
}