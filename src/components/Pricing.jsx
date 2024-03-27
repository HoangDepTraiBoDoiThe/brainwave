import { ScrollParallax } from "react-just-parallax";
import { smallSphere, stars } from "../assets";
import { pricing } from "../constants";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className={"overflow-hidden"}>
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <ScrollParallax>
              <img src={stars} width={950} height={400} alt="stars" />
            </ScrollParallax>
          </div>
        </div>
        <Heading
          tag="Get started with Brainwave"
          title={"Pay onece, use forever"}
        />
        <div className="relative">
          <LeftLine />
          <PricingList />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
          <a
            className="font-bold font-code text-xs tracking-wider uppercase border-b"
            href={"/pricing"}
          >
            See the full detail
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
