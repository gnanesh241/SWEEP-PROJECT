import Hero from "./section/Hero";
import Service from "./section/service";
import Popularproduct from "./section/Popularproduct";
import SuperQuality from "./section/superQuality";
import Specialoffer from "./section/Specialoffer";
import CustomerReview from "./section/CustomerReview"
import Footer from "./section/Footer";
import Nav from "./components/Nav";
const App = () =>(
  <main className="relative">
   < Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding bg-pale-blue">
     < Popularproduct />
    </section>
    <section className="padding">
     < SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Service/>
    </section>
    <section className="padding">
      <Specialoffer/>
    </section>
    <section className="bg-pale-blue padding-x sm:py-32 py-16 w-full padding">
      <CustomerReview/>
    </section>
    <section className="bg-black padding-x padding-t pb-8 text-white pb-8">
      <Footer />
    </section>

    

  </main>
)
export default App;
 