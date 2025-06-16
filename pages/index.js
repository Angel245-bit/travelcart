import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Contacto from "@/components/Contacto";
import { createClient } from "@supabase/supabase-js";

export async function getServerSideProps() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data: tours } = await supabase.from("tours").select("*");

  return { props: { tours } };
}

export default function Home({ tours }) {
  return (
    <>
      <Head>
        <title>TravelCart</title>
      </Head>

      <Navbar />

      <section className="hero bg-cover bg-center text-white h-[80vh] flex items-center justify-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="bg-black bg-opacity-60 p-8 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold">Descubrí el mundo con TravelCart</h1>
          <p className="mt-4 text-lg">Reservá tu próximo destino ahora mismo</p>
        </div>
      </section>

      <section id="tours" className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros destinos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} tour={tour} />
          ))}
        </div>
      </section>

      <section id="contacto" className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Completá el formulario</h2>
        <Contacto />
      </section>

      <Footer />
    </>
  );
}
