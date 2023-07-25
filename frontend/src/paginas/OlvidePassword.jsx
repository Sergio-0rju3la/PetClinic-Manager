import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const OlvidePassword = () => {
    useEffect(()=>{AOS.init();},[]);
    return (
        <>
        <div data-aos="zoom-in"data-aos-duration="1000">
            <Link to="/"><img  className= 'w-48 mx-auto' src="/logo.svg" alt="" /></Link>
            <h1 className="text-turquesa font-black text-6xl"> Recupera tu Acceso y no Pierdas 
            <span className="text-marino span"> tus Mascotas</span></h1>
        </div>

        <div data-aos="fade-left"data-aos-duration="1000" className='mt-20 md:mt-5 drop-shadow-2xl px-5 py-10 rounded-xl bg-white'>
            <form action="">
            <div className="my-5">
                    <label className="uppercase- text-gray-600 block text-xl font-bold">
                        Email
                    </label>
                    <input type="email" 
                        placeholder="Email de Registro"
                        className="border w-full p-3  mt-3 bg-gray-50 rounded-xl outline-cyan-500 text-blue-950 font-bold"
                    />
                </div>

                <input
                    type="submit"
                    value= "Enviar Instrucciones"
                    className="bg-cyan-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-cyan-800 md:w-auto " 
                />
            </form>

            <nav className='mt-10 lg:flex lg:justify-between'>
            <Link 
                className='block text-center  my-5 text-gray-500'
                to="/Login">¿Ya tienes una cuenta? Inicia Sesión </Link>

            <Link
                className='block text-center  my-5 text-gray-500'
                to="/registrar"> ¿No tienes una cuenta? Registrate</Link>
            </nav>
        </div>
        </>
    )
}

export default OlvidePassword