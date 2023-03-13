import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Services from "./components/Services/Services";
import Page from "./components/Pages/Page";
import Article from "./components/Article/Article";
import Footer from "./components/Footer/Footer";
import Display from "./components/Display/Display";

function App() {
  return (
    <div className="App">
     <Navigation />
     <Hero />
     <Services />
     <Page />
     <Display />
     <Article />
     <Footer />
    </div>
  );
}

export default App;
