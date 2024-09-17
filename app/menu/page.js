'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import GallerySlider1 from '@/components/slider/GallerySlider1'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Menú">
               
            {/* Menu Page Section */}
            <section className="menu-page-section">
                <div className="auto-container">
                    <div className="row clearfix">
                    
                        {/* Menu Block Two */}
                        <div className="menu-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="side-icon">
                                    <img src="assets/images/icons/menu-icon-1.png" alt="" />
                                </div>
                                <div className="icon">
                                    <img src="assets/images/icons/menu-1.png" alt="" />
                                </div>
                                <h6><Link href="#">Bebidas Especiales</Link></h6>
                                <div className="text">Desde el espresso perfecto hasta nuestras bebidas de temporada, cada sorbo está hecho para deleitar tus sentidos.</div>
                            </div>
                        </div>
                        
                        {/* Menu Block Two */}
                        <div className="menu-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="side-icon">
                                    <img src="assets/images/icons/menu-icon-2.png" alt="" />
                                </div>
                                <div className="icon">
                                    <img src="assets/images/icons/menu-2.png" alt="" />
                                </div>
                                <h6><Link href="#">Desayunos y Comidas</Link></h6>
                                <div className="text">Comienza tu día con nuestros desayunos deliciosos o disfruta de una variedad de comidas frescas, desde hamburguesas hasta pizzas.</div>
                            </div>
                        </div>
                        
                        {/* Menu Block Two */}
                        <div className="menu-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="side-icon">
                                    <img src="assets/images/icons/menu-icon-3.png" alt="" />
                                </div>
                                <div className="icon">
                                    <img src="assets/images/icons/menu-3.png" alt="" />
                                </div>
                                <h6><Link href="#">Cervezas, Vinos y Cócteles</Link></h6>
                                <div className="text">Disfruta de nuestra selecta variedad de cervezas artesanales, vinos exclusivos y cócteles únicos preparados con ingredientes de alta calidad.</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* End Restaurant Section */}
            
            {/* Video Section */}
            <section className="video-section-two">
                <div className="outer-container">
                    {/* Video Box */}
                    <div className="video-box">
                        <figure className="video-image">
                            <img src="assets/images/background/8.jpg" alt=""/>
                        </figure>
                        <a onClick={() => setOpen(true)} className="lightbox-image overlay-box"><span className="flaticon-play-arrow"><i className="ripple"></i></span></a>
                    </div>
                </div>
            </section>
            {/* End Video Section */}
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
            
            {/* Menus Section */}
            <section className="menus-section style-two">
                <figure className="menu-bottom-image">
                    <img src="assets/images/resource/menu-9.jpg" alt=""/>
                </figure>
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title centered">
                        <div className="title">Bebidas y Alimentos</div>
                        <h2>Menú Principal</h2>
                        <div className="separate"></div>
                    </div>
                    <div className="row clearfix">
                    
                        {/* Menu Column */}
                        <div className="menu-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                            
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-1.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="#">Espresso Doble</Link></h6>
                                        <div className="text">Un espresso intenso con doble carga de sabor, perfecto para los amantes del café fuerte.</div>
                                        <div className="price-box">
                                            <span className="price">$40 MXN</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-3.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="#">Latte Vainilla</Link></h6>
                                        <div className="text">Café espresso suave combinado con leche al vapor y un toque de vainilla natural.</div>
                                        <div className="price-box">
                                            <span className="price">$55 MXN</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-5.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="#">Omelette de Vegetales</Link></h6>
                                        <div className="text">Huevos rellenos de espinacas, champiñones y queso cheddar, acompañado de pan tostado.</div>
                                        <div className="price-box">
                                            <span className="price">$75 MXN</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-7.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="#">Panqueques con Fruta</Link></h6>
                                        <div className="text">Esponjosos panqueques servidos con frutas de temporada y miel de maple.</div>
                                        <div className="price-box">
                                            <span className="price">$70 MXN</span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        {/* Menu Column */}
                        <div className="menu-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-2.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="#">Hamburguesa Clásica</Link></h6>
                                        <div className="text">Carne de res jugosa, lechuga fresca, tomate y nuestro aderezo especial en pan artesanal.</div>
                                        <div className="price-box">
                                            <span className="price">$85 MXN</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-4.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="#">Hamburguesa Vegetariana</Link></h6>
                                        <div className="text">Deliciosa opción sin carne con una mezcla de vegetales y garbanzos, servida con guarnición de ensalada.</div>
                                        <div className="price-box">
                                            <span className="price">$80 MXN</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-6.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="#">Pizza Margarita</Link></h6>
                                        <div className="text">Clásica pizza con salsa de tomate, mozzarella fresca y albahaca.</div>
                                        <div className="price-box">
                                            <span className="price">$120 MXN</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-8.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="#">Pizza Cuatro Quesos</Link></h6>
                                        <div className="text">Combinación perfecta de mozzarella, gorgonzola, parmesano y provolone.</div>
                                        <div className="price-box">
                                            <span className="price">$140 MXN</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* End Menus Section */}
            
            {/* Gallery Section */}
            <section className="gallery-section">
                <div className="outer-container">
                    <GallerySlider1/>
                </div>
            </section>
            {/* End Gallery Section */}
            </Layout>
        </>
    )
}