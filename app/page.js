import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
          />
          <div className="text-gray-500 max-w-3xl mx-auto mt-4 flex flex-col gap-4">
            <p>
              Welcome to Pizza Haven, your ultimate destination for authentic, mouth-watering pizza crafted with passion and perfection. At Pizza Haven, we believe that great pizza starts with high-quality ingredients and a commitment to tradition. Our skilled chefs use only the freshest produce, hand-tossed dough, and premium cheeses to create pizzas that are both delicious and memorable.
            </p>
            <p>
              Whether you’re craving a classic Margherita, a loaded Meat Lover’s, or a unique gourmet creation, our menu has something to satisfy every palate. We pride ourselves on providing a warm, inviting atmosphere where friends and family can come together to enjoy great food and good company.
            </p>
            <p>
            At Pizza Haven, our mission is simple: to serve you the best pizza experience possible. Join us for a slice or two, and discover why we’re the neighborhood’s favorite pizzeria.
            </p>
          </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders 
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
          />
          <div className="mt-8">
            <a className="text-4xl underline text-gray-500" href="tel:+37444300400">
              +374 44 300 400
            </a>
          </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2024 All right reserved
      </footer>
    </>
  );
}
