const Login = () => {
    return (
        <div className="w-full h-screen bg-login-pattern absolute top-0">
          <div className="bg-[#fff7ed] flex flex-col mx-auto px-8 py-10 w-[30%] mt-20 text-center gap-8 shadow-lg rounded-md">
            <h2 className="font-bold text-xl">Welcome to Polaria</h2>
            <p className="text-gray-600">Silahkan masukan username dan password anda</p>
            <input className="rounded shadow-sm p-2" type="text" placeholder="Masukan username atau email"/>
            <input className="rounded shadow-sm p-2" type="password" placeholder="Masukan Password"/>
            <button className="bg-[#ffe1a5] px-2 py-3 rounded-lg hover:bg-[#ffc655]">Login</button>
            <span>Belum punya akun? <a href="register" className="text-blue-500 hover:text-blue-700">Daftar</a></span>
          </div>
        </div>
    )
}

export default Login;