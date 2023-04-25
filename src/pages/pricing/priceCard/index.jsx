const PriceCard = ({ title, price, children, detail }) => {
    return (
        <div className="flex flex-col gap-6 bg-blue-100 px-4 py-8 shadow-lg cursor-pointer hover:bg-blue-200 hover:shadow-2xl hover:rounded">
            <h3 className="font-bold text-lg">{title}</h3>
            <span className="text-xl font-bold"><span className="mr-1 text-2xl">Rp</span>{price}</span>
            <button className="bg-blue-700 px-3 py-1 text-white rounded">Pilih Paket Ini</button>
            <h4>{detail}</h4>
            {children}
        </div>
    )
}

export default PriceCard;