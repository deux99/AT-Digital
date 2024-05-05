import Header from "./components/header";
import Button from "./components/button";
import Accordion from "./components/accordian";
import Footer from "./components/footer";
import Image from "next/image";

export default function Home() {
  return (

    <div className="flex-col">

      {/* Header & Hero Section */}

      <div>
        <Header />
      </div>

      <div className="flex bg-hero-pattern bg-cover bg-center h-218.75 sm:h-448 md:h-763">

        <div className="flex-col bg-gradient-to-r from-gradient1 to-gradient2 hidden md:flex align-bottom w-622 h-306 sm:mt-354 sm:ml-14  ">
          <p className="font-bold text-5xl text-white px-6 py-5">We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</p>
          <div className="px-6">
            <Button route="" text="GET FREE CONSULTATION" />
          </div>
        </div>

      </div>
      <div className="bg-gradient-to-r from-gradient1 to-gradient2 md:hidden h-294">
        <p className="font-bold text-4xl text-white px-6 py-5">We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</p>
        <div className="px-6"><Button route="" text="GET FREE CONSULTATION" /></div>
      </div>

      {/* Info Section 1 */}

      <div className="flex flex-col mx-5 md:mx-0 md:flex-row ailgn-middle items-center justify-center">

        <div className="">
          <Image src="/section1.png" alt="Section-1" width={414} height={414} />
        </div>
        <div className="md:ml-20 md:w-740 md:pl-12 md:text-left text-center">
          <h1 className="font-semibold text-3xl text-atpurple pb-3 font-poppins">Web & Mobile App Development </h1>
          <p className="pb-3">Your web and mobile Apps are pieces of the puzzle to grow your business.We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online</p>
          <Button route="" text="LEARN MORE" />
        </div>

      </div>

      {/* Info Section 2 */}

      <div className="flex flex-col my-5 mx-5 md:mx-0 md:flex-row ailgn-middle items-center justify-center">

        <div className="order-last md:order-first md:ml-20 md:w-740 md:pr-14 md:text-left text-center">
          <h1 className="font-semibold text-3xl text-atpurple pb-3 font-poppins">Digital Strategy Consulting</h1>
          <p className="pb-3">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
          <Button route="" text="LEARN MORE" />
        </div>

        <div className="order-first md:order-last">
          <Image src="/section2.png" alt="Section-2" width={414} height={414} />
        </div>


      </div>

      {/* FAQ Section */}
      <div className="mt-16 md:mt-11 ">
        <h1 className="font-semibold text-3xl text-atpurple pb-5 font-poppins text-center mx-11">Frequently Asked Questions</h1>

        <div className="flex flex-col items-center">
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?" text="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer." />
          <Accordion title="Lorem ipsum dolor sit amet consectetur.  Tortor scelerisque integer?" text="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer." />
          <Accordion title="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?" text="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer." />

        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-11">
        <Footer />
      </div>

    </div>
  );
}
