'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
    return (
        <>  
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu}></div>
                <div className="close-btn" onClick={handleMobileMenu}><span className="icon flaticon-multiply"></span></div>
                
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><img src="assets/images/logo-2.png" alt="" title="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation">
                                <li><Link href="/">Home</Link>
                                    {/* <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="/">Home One</Link></li>
                                        <li><Link href="index-2">Home Two</Link></li>
                                        <li><Link href="index-3">Home Three</Link></li>
                                        <li><Link href="index-4">Home Four</Link></li>
                                    </ul> */}
                                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/about">About</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>                                 
                                        <li><Link href="about">Sobre Nosotros</Link></li>
                                        {/* <li><Link href="team">Team</Link></li> */}
                                        <li><Link href="restaurant">Sucursales</Link></li>
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/menu">Menú</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>                                 
                                        <li><Link href="menu">Menú Principal</Link></li>
                                        <li><Link href="milkshake">Bebidas</Link></li>
                                        <li><Link href="frappe">Desayunos</Link></li>
                                        <li><Link href="boba-tea">Delicias a la Carta</Link></li>
                                        <li><Link href="slushy">Vinos & Más</Link></li>
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/gallery">Galería</Link>
                                    {/* <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>                                 
                                        <li><Link href="gallery">Gallery</Link></li>
                                        <li><Link href="gallery-2">Gallery 02</Link></li>
                                    </ul> */}
                                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/blog-classic">Blog</Link>
                                    {/* <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>                                 
                                        <li><Link href="blog-classic">Blog Classic</Link></li>
                                        <li><Link href="blog-details2">Blog Single 02</Link></li>
                                        <li><Link href="blog-details">Blog Details</Link></li>
                                        <li><Link href="/error">Not Found</Link></li>
                                    </ul> */}
                                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/contact">Contacto</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

          

        </>
    )
}
export default MobileMenu;
