import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { PopularItems } from "./components/Popular-items";
import { Wrapper } from "./components/Wrapper";

function App() {
  return (
    <Wrapper>
      <Header/>
      <Hero/>
      <Menu/>
      <PopularItems/>
      <Footer/>
    </Wrapper>
  );
}

export default App;
