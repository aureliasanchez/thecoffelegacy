'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import GallerySlider1 from '@/components/slider/GallerySlider1'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Sucursales">
                <div>
                    {/* Restaurant Section */}
                    <section className="restaurant-section">
                        <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/resource/restaurant-icon-1.png)' }} ></div>
                        <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/resource/restaurant-icon-2.png)' }} ></div>
                        <div className="auto-container">
                            <div className="inner-container">
                                <div className="image">
                                    <img src="assets/images/resource/restaurant.jpg" alt="" />
                                </div>
                                <div className="opening-box" style={{ backgroundImage: 'url(assets/images/resource/restaurant-1.jpg)' }} >
                                    <div className="box-inner">
                                        <h3>Nuestros<span>Horarios</span></h3>
                                        <ul className="timing-list">
                                            <span></span><li>Lunes a Viernes<span>8AM - 8PM</span></li>
                                        </ul>
                                        <div className="timing-list">
                                        <span></span><li>Fines de Semana:<span>9AM - 10PM</span></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Restaurant Section */}
                    
                    {/* Gallery Section Two */}
                    <section className="gallery-section-two">
                        <div className="outer-container">
                            <div className="masonry-items-container row clearfix">
                            
                                {/* Gallery Block Two */}
                                <div className="gallery-block-two masonry-item col-lg-3 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/19.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">El Encanto de Huasca</Link></h6>
                                                <div className="title">Nuestra sucursal en Huasca de Ocampo te espera con el mejor café en un ambiente lleno de historia y naturaleza. ¡Disfruta de un café después de explorar el pueblo mágico!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Gallery Block Two */}
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="row">
                                        <div className="gallery-block-two masonry-item col-lg-12 col-md-12 col-sm-12">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <img src="assets/images/gallery/20.jpg" alt="" />
                                                    <div className="overlay-box">
                                                        <h6><Link href="gallery">Café en Pachuca Centro</Link></h6>
                                                        <div className="title">Disfruta de un café de especialidad en nuestra sucursal en el centro de Pachuca. Perfecta para una pausa en tu día.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Gallery Block Two */}
                                        <div className="gallery-block-two masonry-item col-lg-12 col-md-12 col-sm-12">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <img src="assets/images/gallery/23.jpg" alt="" />
                                                    <div className="overlay-box">
                                                        <h6><Link href="gallery">Descanso en la Carretera</Link></h6>
                                                        <div className="title">Nuestra sucursal en la carretera México-Pachuca es el lugar ideal para un café rápido antes de seguir tu camino.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Gallery Block Two */}
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="row">
                                        {/* Gallery Block Two */}
                                        <div className="gallery-block-two masonry-item col-lg-6 col-md-6 col-sm-12">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <img src="assets/images/gallery/21.jpg" alt="" />
                                                    <div className="overlay-box">
                                                        <h6><Link href="gallery">Zona Sur, Café en Movimiento</Link></h6>
                                                        <div className="title">Nuestra sucursal en Pachuca Zona Sur ofrece el ambiente perfecto para relajarte mientras disfrutas de una deliciosa bebida.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Gallery Block Two */}
                                        <div className="gallery-block-two masonry-item col-lg-6 col-md-6 col-sm-12">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <img src="assets/images/gallery/22.jpg" alt="" />
                                                    <div className="overlay-box">
                                                        <h6><Link href="gallery">Plaza Bella Pachuca</Link></h6>
                                                        <div className="title">UEn Plaza Bella, el mejor café te espera para acompañar tus compras y darte un momento de pausa y disfrute.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Gallery Block Two */}
                                        <div className="gallery-block-two masonry-item col-lg-12 col-md-12 col-sm-12">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <img src="assets/images/gallery/24.jpg" alt="" />
                                                    <div className="overlay-box">
                                                        <h6><Link href="gallery">Mineral del Monte, un Café con Tradición</Link></h6>
                                                        <div className="title">En el corazón de Mineral del Monte, nuestra sucursal ofrece un espacio cálido y acogedor para disfrutar del café y la vista de este histórico pueblo minero..</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </section>
                    {/* End Gallery Section Two */}
                    
                    {/* Faq Section */}
                    <section className="faq-section">
                        <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/7.jpg)' }} ></div>
                        <div className="auto-container">
                            {/* Sec Title */}
                            <div className="sec-title centered">
                                <div className="title">El mejor café, cerca de ti</div>
                                <h2>Encuentra tu Sucursal</h2>
                                <div className="separate"></div>
                            </div>
                            <div className="row clearfix">
                                
                                {/* Accordion Column */}
                                <div className="accordion-column col-lg-6 col-md-12 col-sm-12">
                                    {/* Accordian Box */}
                                    <ul className="accordion-box">
                                              
                                        {/*Block*/}
                                        <li className={isActive.key == 1 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(1)}>
                                            <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus flaticon-plus-symbol"></span> <span className="icon icon-minus flaticon-substract"></span></div><span>01.</span> Huasca de Ocampo</div>
                                            <div className="acc-content">
                                                <div className="content">
                                                    <div className="text">
                                                        <p>Calle Ignacio Allende #310, Zaragoza #2, El Calvario, 43500 Huasca de Ocampo, Hgo.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        {/*Block*/}
                                        <li className={isActive.key == 2 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(2)}>
                                            <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus flaticon-plus-symbol"></span> <span className="icon icon-minus flaticon-substract"></span></div><span>02.</span> Pachuca Centro</div>
                                            <div className="acc-content current">
                                                <div className="content">
                                                    <div className="text" onClick={() => handleToggle(2)}>
                                                        <p>Centro, 42000 Pachuca de Soto, Hgo. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        
                                        {/*Block*/}
                                        <li className={isActive.key == 3 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(3)}>
                                            <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus flaticon-plus-symbol"></span> <span className="icon icon-minus flaticon-substract"></span></div><span>03.</span> Mineral del Monte</div>
                                            <div className="acc-content">
                                                <div className="content">
                                                    <div className="text">
                                                        <p>Av. Hidalgo 87-L2, Centro, 42130 Mineral del Monte, Hgo. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                                
                                {/* Accordion Column */}
                                <div className="accordion-column col-lg-6 col-md-12 col-sm-12">
                                    {/* Accordian Box */}
                                    <ul className="accordion-box">
                                                    
                                        {/*Block*/}
                                        <li className={isActive.key == 4 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(4)}>
                                            <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus flaticon-plus-symbol"></span> <span className="icon icon-minus flaticon-substract"></span></div><span>04.</span> Carretera México-Pachuca</div>
                                            <div className="acc-content">
                                                <div className="content">
                                                    <div className="text">
                                                        <p>Km 74 + 760 Local 2, dentro de la gasolinera a un lado del restaurante Los Cochinitos. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        {/*Block*/}
                                        <li className={isActive.key == 5 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(5)}>
                                            <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus flaticon-plus-symbol"></span> <span className="icon icon-minus flaticon-substract"></span></div><span>05.</span> Pachuca Zona Sur</div>
                                            <div className="acc-content current">
                                                <div className="content">
                                                    <div className="text">
                                                        <p>Blvd. Felipe Ángeles 110, Pachuca de Soto, Hgo. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        
                                        {/*Block*/}
                                        <li className={isActive.key == 6 ? "accrodion block active-block" : "accrodion block"} onClick={() => handleToggle(6)}>
                                            <div className="acc-btn"><div className="icon-outer"><span className="icon icon-plus flaticon-plus-symbol"></span> <span className="icon icon-minus flaticon-substract"></span></div><span>06.</span> Plaza Bella Pachuca</div>
                                            <div className="acc-content">
                                                <div className="content">
                                                    <div className="text">
                                                        <p>Blvd. Luis Donaldo Colosio 800, Pachuca de Soto, Hgo.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    {/* End Faq Section */}
                    
                    {/* Gallery Section */}
                    <section className="gallery-section">
                        <div className="outer-container">
                            <GallerySlider1/>
                        </div>
                    </section>
                    {/* End Gallery Section */}
                </div>

            </Layout>
        </>
    )
}