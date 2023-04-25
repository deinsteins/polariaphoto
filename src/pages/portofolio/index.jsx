import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
import Wrapper from "./wrapper";

const Portofolio = () => {
    return (
        <div className="">
          <NavBar bgnav={"#b7a58d"} />
          <Wrapper title="Dayat dan May - Bekasi" primaryImg="images/p1.jpg" secondaryImg="images/p2.jpg" />
          <Wrapper title="Dayat dan May - Bekasi" primaryImg="images/p1.jpg" secondaryImg="images/p2.jpg" reverse={true} />
          <Wrapper title="Dayat dan May - Bekasi" primaryImg="images/p1.jpg" secondaryImg="images/p2.jpg" />
          <Wrapper title="Dayat dan May - Bekasi" primaryImg="images/p1.jpg" secondaryImg="images/p2.jpg" reverse={true} />
          <Wrapper title="Dayat dan May - Bekasi" primaryImg="images/p1.jpg" secondaryImg="images/p2.jpg" />
          <Wrapper title="Dayat dan May - Bekasi" primaryImg="images/p1.jpg" secondaryImg="images/p2.jpg" reverse={true} />
          <Footer />
        </div>
    )
}

export default Portofolio;