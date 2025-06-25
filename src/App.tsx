import Layout from "./components/Layout"
import { Patners } from "./components/sections/Patners";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";

function App() {
  return (
    <>
      <Layout title="CR24">
        <Hero />
        <Patners />
        <Services />
      </Layout>
    </>
  );
}

export default App
