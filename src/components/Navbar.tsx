import { useState } from "react";

const Navbar = () => {
    const [navStyle, setNavStyle] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 90){
            setNavStyle(true)
        }else{
            setNavStyle(false)
        }
    }

    window.addEventListener('scroll', changeNav)

    return (
            <div className="font-semibold z-50 max-w-[500px] h-[65px] flex flex-row items-center justify-between md:mr-20 fixed top-0 left-1/2 -translate-x-1/2 lg:mt-0 mt-2">
                <div className={`flex items-center justify-between gap-x-4 w-full h-auto ${navStyle ? 'bg-[#0300145e] backdrop-blur' : 'border border-[rgba(112,66,248,0.38)] bg-transparent'} mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 `}>
                    <a href="#Acerca-de-mi" className="cursor-pointer nav-item">
                        Acerca de mi
                    </a>
                    <a href="#Proyectos" className="cursor-pointer nav-item">
                        Proyectos
                    </a>
                    <a href="#Contacto" className="cursor-pointer nav-item">
                        Contacame
                    </a>
                </div>
            </div>

    );
};

export default Navbar;