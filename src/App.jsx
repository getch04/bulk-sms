import {
  CustomerReviews,
  Footer,
  Popular,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

import Nav from "./components/Nav";
import ScrollButton from "./components/ScrollButton";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Popular></Popular>
      </section>
      <section className="padding">
        <SuperQuality></SuperQuality>
      </section>
      <section className="padding-x py-10">
        <Services></Services>
      </section>
      <section className="padding">
        <SpecialOffer></SpecialOffer>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews></CustomerReviews>
      </section>
      <section className="padding-x sm:py-32 py-26 w-full ">
        <Subscribe></Subscribe>
      </section>
      <section className="padding-x bg-black padding-t pb-8">
        <Footer></Footer>
      </section>
      {/* Scroll button to scroll down or up */}
      <ScrollButton />
    </main>
  );
};

export default App;
