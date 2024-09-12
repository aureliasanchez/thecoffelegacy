'use client'
import Link from "next/link"
export default function Juice() {
    
    return (
        <>


        {/* Juice Section */}
        <section className="juice-section">
            <div className="section-text">yummy</div>
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/1.png)' }} ></div>
            <div className="pattern-layer-two" style={{ backgroundImage: 'url(assets/images/resource/juice-glass.png)' }} ></div>
            <div className="auto-container">
                <div className="row clearfix">
                
                    {/* Image Column */}
                    <div className="image-column col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image">
                                <img src="assets/images/resource/juice.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="content-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* Sec Title */}
                            <div className="sec-title">
                                <div className="title">Café con Historia</div>
                                <h2>Tradición<span className="theme_color"> Cafetera</span></h2>
                                <div className="separate"></div>
                                <div className="text">Desde 2010, nos hemos dedicado a ofrecer café de especialidad con un enfoque en la autenticidad y la conexión directa con los productores. Cada bebida cuenta una historia, y cada grano tiene un origen que respetamos y celebramos. Únete a nosotros en este viaje lleno de sabor y tradición.</div>
                            </div>
                            <Link href="menu" className="theme-btn btn-style-two clearfix"><span className="icon"></span>Compra Ahora</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* End Juice Section */}
        </>
    )
}
