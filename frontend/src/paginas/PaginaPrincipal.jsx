import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
{/*iniciar pocicion inicial de la animacion*/}
const contenido =(texto,imagen)=>{
    const estilo= {backgroundImage:`url(${imagen})`}
   return <div data-aos="zoom-in"data-aos-duration="1000"className="rounded-xl shadow-xl row-span-1 bg-cover bg-center" style={estilo}>
        <div className="transition duration-200 ease-out hover:ease-in hover:text-white w-full h-full text-transparent bg-transparent 
        hover:bg-opacity-70 hover:bg-esmeralda rounded-xl">
            <h1 className="p-16 text-justify text-2xl font-bold">{texto}</h1></div>
        </div>
}
const PaginaPrincipal =()=>{
    useEffect(()=>{AOS.init();},[]);

const [visible,setvisible]= useState(false);

const menu =()=>{
    setvisible(!visible);
}


return(
<>
{/*navbar*/}
<nav data-aos="fade-down"data-aos-duration="1000" className="grid bg-marino mx-auto grid grid-cols-4 lg:grid-cols-6 p-4 gap-4 items-center shadow-xl">
         {/*logo*/}
         <div className="justify-self-center">
            <img src="/logo.svg" className="w-32"/>
         </div>
         {/*titulo de la pagina*/}
         <div className="col-span-2 lg:col-span-3 text-start">
            <h1 className="font-black self-center text-white text-2xl sm:text-4xl lg:text-6xl">PetClinic<span className='text-esmeralda'>-</span>Manager</h1>
         </div>
         {/*boton de menu*/}
         <div className="justify-self-center lg:hidden">
            <button onClick={menu} id="boton"className="transition duration-200 ease-out hover:ease-in border-2 border-transparent hover:border-2 rounded-xl hover:border-turquesa">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="stroke-turquesa w-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button> 
        </div>
              
         {/*opciones del boton de menu*/}
         <div id="menu"className={`lg:block ${visible? 'block':'hidden'} grid grid-cols-2 justify-self-center text-center col-span-4 lg:col-span-2 lg:justify-self-end gap-4 `}>
         <Link to="Login" className="m-2 col-span-2 lg:col-span-1 transition duration-200 ease-out hover:ease-in text-blue-100 p-4 border-2 border-transparent hover:border-2 hover:border-esmeralda rounded-xl hover:text-esmeralda">
            Iniciar Sesión 
            </Link>
            <Link to="/registrar" className="m-2 col-span-2 lg:col-span-1 transition duration-200 ease-out hover:ease-in text-blue-100 p-4 border-2 border-transparent hover:border-2 hover:border-esmeralda rounded-xl hover:text-esmeralda">
                Registrarse
            </Link>
         </div>
    </nav>
        {/*parte principal*/}
    <div className="grid grid-cols-1 lg:grid-cols-8 lg:grid-rows-6 items-center gap-5 text-marino justify-items-center">
        <div data-aos="fade-right" data-aos-duration="1000" className="col-span-1 lg:col-span-4 lg:row-span-4 p-5 sm:p-8 lg:p-10 rounded m-10">
            <h1 className="font-bold bg-turquesa p-4 text-5xl lg:text-4xl rounded-t-xl text-white"><b>Ofrecemos orden y mejor administración a tus pacientes.</b></h1>
            <br/>
            <p className="font-bold text-2xl lg:text-lg p-4 text-justify"><b>PetClinic-Manager</b> ofrece un servicio exclusivo para médicos veterinarios que 
            les permite administrar y organizar de manera ágil y eficiente la información clínica de sus pacientes. 
            Con nuestra plataforma, podrá programar citas de forma sencilla y mantener de manera segura todos los datos 
            relevantes de cada paciente.</p>
        </div>
        {/*imagen principal-corgi*/}
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-once className="col-span-1 lg:col-span-4 lg:row-span-6 m-5 border-l-turquesa lg:border-l-8 rounded">
            <img src="../../img/corgi.png"/>
        </div>
    </div>
    {/*titulo de los contenidos*/}
    <div className="col-span-1 sm:col-span-2 text-center self-center pb-20 border-b-8 border-turquesa">
            <h1 className="text-5xl text-turquesa font-black">¿Que otorga PetClinic<span className='text-esmeralda'>-</span><span className='text-marino'>Manager</span>?</h1>    
        </div>
        {/*informacion sobre petclicni-manager*/}
    <div className="px-4 py-20 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-5 bg-[url('../../img/cachorros.svg')] bg-center bg-cover bg-fixed bg-no-repeat">
        {/*info 1*/}
        {contenido("Organiza y guarda la información de tus pacientes animales de manera sencilla y segura con nuestra plataforma para veterinarios.",'../../img/gato.svg')}
        {/*info 2*/}
        {contenido("Agenda citas con tus pacientes animales y mantén la flexibilidad de editar o eliminar la información cuando lo necesites.",'../../img/perico.svg')}
        {/*info 3*/}
        {contenido("Crea fácilmente archivos PDF con la información clínica de tus pacientes animales y ofrece informes profesionales a sus dueños.",'../../img/conejo.svg')}
        {/*info 4*/}
        {contenido("¡Regístrate ahora y lleva tu práctica veterinaria al siguiente nivel! Organiza la información de tus pacientes, agenda citas con facilidad y crea informes profesionales en PDF. ¡Descubre la eficiencia de nuestros servicios!",'../../img/golden.svg')}
    </div>
    {/*footer*/}
    <div className='gap-4 text-white text-lg bg-marino text-justify p-4 grid sm:grid-cols-3 sm:grid-rows-4 grid-cols-2 justify-items-center items-center'>
        <img src='../../public/logo.svg' data-aos-duration="1000" data-aos="zoom-in-up" data-aos-once className='w-32 col-span-2 sm:col-span-3'></img>
        
        <h1 className='text-2xl font-bold col-span-1 sm:col-span-1 p-8 border-b-4 border-b-turquesa'>PetClinic-Manager</h1>
        <h1 className='text-2xl font-bold col-span-1 sm:col-span-1 p-8 border-b-4 border-b-turquesa text-center'>Política de seguridad</h1>
        <h1 className='text-2xl font-bold col-span-2 sm:col-start-3 row-start-4 sm:row-start-2 sm:col-span-1 p-8 border-b-4 border-b-turquesa'>Contáctanos</h1>
        
        <div data-aos-duration="1000" data-aos-once data-aos="zoom-in-down" className='font-bold text-slate-400 col-span-1'><p>©petclini-manager 2023</p></div>
        <div data-aos-duration="1000" data-aos-once data-aos="zoom-in-down" className='font-bold text-slate-400 col-span-1'><p>Tus datos estarán seguros con nosotros. Garantizamos total confidencialidad y protección en nuestra página.</p></div>
        <div data-aos-duration="1000" data-aos-once data-aos="zoom-in-down" className='font-bold text-slate-400 col-span-2 sm:col-span-1 gap-8 grid grid-cols-3 m-4'>
            <a href=''><img src="../../img/twitter.svg" className='w-8' /></a>
            <a href=''><img src="../../img/github.svg" className='w-8' /></a>
            <a href=''><img src="../../img/whatsapp.svg" className='w-8' /></a>
        </div>
        <h1 className='col-span-2 sm:col-span-3 text-center text-2xl font-black py-10'>PetClinic<span className='text-esmeralda'>-</span>Manager</h1>
    </div>
</>
)
}
export default PaginaPrincipal