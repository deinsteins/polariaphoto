import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
import PriceCard from "./priceCard";

const Pricing = () => {
    return (
        <div className="w-full h-full">
          <NavBar bgnav={"#b7a58d"}/>
          <h1 className="text-3xl font-bold text-center mt-4">Silahkan Pilih Paket yang diinginkan</h1>
          <div className="flex justify-center gap-12 mt-8 py-8">
            <PriceCard price="100.000" title={"Lite"} detail="Yang didapat :">
                <ul  style={{ listStyleType: "disc" }}>
                    <li>CD berisi Foto</li>
                    <li>File Hasil Foto</li>
                    <li>Foto Cetak Ukuran 10R</li>
                </ul>
            </PriceCard>
            <PriceCard price="500.000" title={"Pro"} detail="Yang didapat :">
                <ul  style={{ listStyleType: "disc" }}>
                    <li>CD berisi Foto</li>
                    <li>File Hasil Foto</li>
                    <li>Foto Cetak Ukuran 10R</li>
                </ul>
            </PriceCard>
            <PriceCard price="1.000.000" title={"Ultimate"} detail="Yang didapat :">
                <ul  style={{ listStyleType: "disc" }}>
                    <li>CD berisi Foto</li>
                    <li>File Hasil Foto</li>
                    <li>Foto Cetak Ukuran 10R</li>
                </ul>
            </PriceCard>
          </div>
          <Footer />
        </div>
    )
}

export default Pricing;