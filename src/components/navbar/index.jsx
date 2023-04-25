const NavBar = ({bgnav}) => {
    return (
        <div className="flex justify-between p-6 gap-12" style={{background: bgnav}}>
             <a href="/"><img src="/logo/polarialogo.png" alt="" /></a>
             <div className="w-3/4 h-[10%] bg-[#494949] p-4 text-white rounded-full my-auto">
                <div className="flex justify-around">
                    <a href="pricing">PRICING</a>
                    <a href="portofolio">PORTOFOLIO</a>
                    <a href="login">LOGIN/DAFTAR</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;