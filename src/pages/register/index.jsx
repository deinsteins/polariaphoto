const Register = () => {
    return (
        <div className="w-full h-screen bg-login-pattern absolute top-0">
          <div className="bg-[#fff7ed] flex flex-col mx-auto px-8 py-10 w-[50%] mt-20 text-center gap-8 shadow-lg rounded-md">
            <h2 className="font-bold text-xl">Welcome to Polaria</h2>
            <p className="text-gray-600">Silahkan masukan data data berikut untuk mendaftar akun</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <input className="rounded shadow-sm p-2" type="text" placeholder="Masukan email"/>
              <input className="rounded shadow-sm p-2" type="text" placeholder="Masukan username"/>
              <input className="rounded shadow-sm p-2" type="text" placeholder="Masukan no telepon"/>
              <input className="rounded shadow-sm p-2" type="password" placeholder="Masukan Password"/>
              <input className="rounded shadow-sm p-2" type="password" placeholder="Ulangi Password"/>
            </div>
            <button className="bg-[#ffe1a5] px-2 py-3 rounded-lg hover:bg-[#ffc655]">Daftar</button>
            <span>Sudah punya akun? <a href="login" className="text-blue-500 hover:text-blue-700">Login</a></span>
          </div>
        </div>
    )
}

export default Register;