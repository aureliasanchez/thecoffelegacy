'use client'
import Link from "next/link"
export default function Fluid() {
    return (
        <>

            <section className="fluid-section-one">
                <div className="outer-container clearfix">
                    
                    <div className="content-column">
                        <div className="icon-box" style={{ backgroundImage: 'url(assets/images/icons/icon-4.png)' }} ></div>
                        <div className="inner-column">
                            
                            <div className="sec-title">
                                <h2>Experiencia Legacy</h2>
                                <div className="separate"></div>
                                <div className="text">En The Coffee Legacy, cada visita es un viaje sensorial. Desde el aroma de los granos recién tostados hasta la perfección en cada taza, nos esforzamos por ofrecer una experiencia memorable que conecta a nuestros clientes con el verdadero arte del café de especialidad.</div>
                            </div>
                            
                            <div className="button-box">
                                <Link href="menu" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Descubre Más</Link>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="image-column" style={{ backgroundImage: 'url(assets/images/resource/image-1.jpg)' }} >
                        <figure className="image-box"><img src="assets/images/resource/image-1.jpg" alt=""/></figure>
                    </div>
                    
                </div>
            </section>
        </>
    )
}
