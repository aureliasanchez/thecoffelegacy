
import Layout from "@/components/layout/Layout"
import GallerySlider1 from '@/components/slider/GallerySlider1'
export default function Home() {

    return (
        <>
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contáctanos">
        {/* Contact Page Section */}
        <section className="contact-page-section">
            <div className="auto-container">
                {/* Sec Title */}
                <div className="sec-title centered">
                    <div className="title">Estamos aquí para escucharte</div>
                    <h2>¡Conecta con <span className="theme_color">Nosotros!</span></h2>
                    <div className="separate"></div>
                    <div className="text">En The Coffee Legacy, valoramos cada opinión y nos encanta saber de ti.<br/> Si tienes alguna pregunta, sugerencia o simplemente quieres saludarnos, no dudes en escribirnos.<br/> Estaremos encantados de responderte lo más pronto posible.</div>
                </div>
                <div className="row clearfix">
                
                    {/* Form Column */}
                    <div className="form-column col-lg-8 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="title-box">
                                <h4>Formulario de Contacto</h4>
                            </div>
                            
                            {/* Contact Form */}
                            <div className="contact-form">
                                <form method="post"  id="contact-form">
                                    <div className="row clearfix">
                                    
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <textarea name="message" placeholder="¿Cómo podemos ayudarte?"></textarea>
                                        </div>
                                    
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input type="text" name="username" placeholder="Escribe tu nombre completo"/>
                                        </div>
                                        
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input type="email" name="email" placeholder="Introduce tu dirección de correo electrónico"/>
                                        </div>
                                        
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <button type="submit" className="theme-btn btn-style-four clearfix"><span className="icon flaticon-arrow-pointing-to-right"></span>Enviar Mensaje</button>
                                        </div>
                                        
                                    </div>
                                </form>
                                {/* Contact Form */}
                            </div>
                            
                        </div>
                    </div>
                    
                    {/* Info Column */}
                    <div className="info-column col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <ul className="info-list">
                                <li>
                                    <strong>Visítanos</strong>
                                    Estamos ubicados en el corazón de varios puntos clave de la ciudad.<br/><b>Sucursales:</b><br/>
                                    Huasca de Ocampo:<br/>
                                    Pachuca Centro:<br/>
                                    Mineral del Monte:<br/>
                                    Carretera México-Pachuca:<br/>
                                </li>
                                <li>
                                    <strong>Nuestros Horarios:</strong>
                                    Lunes – Viernes 08 AM – 08 PM <br/> Fines de Semana 09 AM – 10 PM
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* End Contact Page Section */}
        
        {/* Map Section */}
        <section className="contact-map-section">
            <div className="auto-container">
                {/* Map Boxed */}
                <div className="map-boxed">
                    {/*Map Outer*/}
                    <div className="map-outer">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12506.748774592113!2d-98.7326587!3d20.1269024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d109daa07cdc29%3A0xa2d44d59b8a7142!2sThe%20Coffee%20Legacy%20Reloj!5e1!3m2!1sen!2smx!4v1726177272471!5m2!1sen!2smx" ></iframe>
                    </div>
                </div>
            </div>
        </section>
        {/* End Map Section */}
        
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