
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import GallerySlider1 from '@/components/slider/GallerySlider1'
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Galería">
        
        {/* Gallery Page Section */}
        <section className="gallery-page-section">
            <div className="outer-container">
                <div className="masonry-items-container row no-gutters clearfix">
                    
                
                    {/* Gallery Block Two */}
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="gallery-block-two masonry-item">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/gallery/25.jpg" alt="" />
                                    <div className="overlay-box">
                                        <h6><Link href="gallery">El Ritual del Café</Link></h6>
                                        <div className="title">Cada taza de café en <b>The Coffee Legacy</b> es un ritual, desde la selección de los granos hasta el arte final que llega a tu mesa. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Gallery Block Two */}
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="gallery-block-two masonry-item">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/gallery/26.jpg" alt="" />
                                    <div className="overlay-box">
                                        <h6><Link href="gallery">Café de Especialidad</Link></h6>
                                        <div className="title">Granos seleccionados de los mejores productores, brindando un sabor inigualable y una calidad superior en cada sorbo.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="gallery-block-two masonry-item">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/gallery/29.jpg" alt="" />
                                    <div className="overlay-box">
                                        <h6><Link href="gallery">Artesanía en Cada Detalle</Link></h6>
                                        <div className="title">Desde nuestros postres hasta nuestras bebidas, cada creación está hecha a mano, con amor y dedicación.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    {/* Gallery Block Two */}
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="row no-gutters">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="gallery-block-two masonry-item">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/27.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Ambiente Acogedor</Link></h6>
                                                <div className="title">Disfruta de un espacio diseñado para relajarte, inspirarte y compartir buenos momentos en compañía de una bebida.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="gallery-block-two masonry-item">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/28.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">La Experiencia de Compartir</Link></h6>
                                                <div className="title">En <b>The Coffee Legacy,</b> cada plato está hecho para disfrutarse juntos. Comparte momentos y sabores únicos con los que más quieres.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="gallery-block-two masonry-item">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/30.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Momentos para Recordar</Link></h6>
                                                <div className="title">Nuestras cafeterías no son solo un lugar para disfrutar café, sino para crear recuerdos. Aquí, cada encuentro se convierte en una experiencia especial.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>                    
                    
                </div>
            </div>
        </section>
        {/* End Gallery Page Section */}
        
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