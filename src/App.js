import Card from "./components/card";
import Footer from "./components/footer";
import Hero from "./components/hero";
import NavBar from "./components/navbar";
import Quote from "./components/quote";
import { AiOutlineLine } from "react-icons/ai";

function App() {
  return (
    <div className="w-full h-full">
      <header className="absolute top-0 z-50 w-full">
        <NavBar bgnav={"#ad9b7900"} />
      </header>
      <Hero />
      <div className="bg-[#EEEBE7] py-28 px-60 text-center font-semibold">
        <Quote/>
        <AiOutlineLine className="mx-auto mt-16" size={40} />
      </div>
      <div className="px-16 py-20">
        <div className="flex flex-wrap gap-6 justify-between">
          <a href=""><Card image={"images/p1.jpg"} title={"Zara dan agus - Jakarta"} imgWidth={"280px"}/></a>
          <Card image={"images/p1.jpg"} title={"Zara dan agus - Jakarta"} imgWidth={"280px"}/>
          <Card image={"images/p1.jpg"} title={"Zara dan agus - Jakarta"} imgWidth={"280px"}/>
          <Card image={"images/p1.jpg"} title={"Zara dan agus - Jakarta"} imgWidth={"280px"}/>    
        </div>
        <div className="mt-16 w-fit mx-auto">
          <a className="text-gray-700 hover:text-black mx-auto" href="portofolio">Lihat Semua Fotograf</a>
          <AiOutlineLine className="mx-auto" size={40} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
