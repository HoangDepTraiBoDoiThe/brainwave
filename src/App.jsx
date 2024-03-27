import { Benefits, Collaboration, Pricing, Services } from "./components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RoadMap from "./components/RoadMap";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
      <RoadMap />
    </>
  );
}

export default App;
