import Link from "next/link"
import Layout from "@/components/layout/Layout"
import GallerySlider1 from '@/components/slider/GallerySlider1'
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Desayunos">
        {/* Milkshake Section */}
        <section className="milkshake-section">
            <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }} ></div>
            <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }} ></div>
            <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/icons/icon-3.png)' }} ></div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="big-image">
                        <img src="assets/images/resource/frappe.jpg" alt="" />
                    </div>
                    <div className="lower-content">
                        <div className="section-text">yummy</div>
                        <div className="text">
                            <p>Comienza tu día con la energía que solo un buen desayuno puede ofrecer. En The Coffee Legacy, nuestros desayunos están diseñados para combinar sabor, nutrición y tradición. Desde opciones ligeras hasta desayunos completos, tenemos algo para cada apetito.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Milkshake Section */}
        
        {/* Menus Section */}
        <section className="menus-section style-two">
                    <figure className="menu-bottom-image">
                        <img src="assets/images/resource/menu-10.png" alt=""/>
                    </figure>
                    <div className="auto-container">
                        {/* Sec Title */}
                        <div className="sec-title centered">
                            <h2>Desay<span>unos</span></h2>
                            <div className="separate"></div>
                        </div>
                        <div className="row clearfix">
                        
                        {/* Menu Column 1 */}
                    <div className="menu-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* Desayunos */}
                            <div className="menu-block">
                                <div className="inner-box">
                                    {/* Fruta de Temporada */}
                                    <h4>Fruta de Temporada</h4>
                                    <div className="title">Con Yogurt Natural, Granola y Miel</div>
                                    <div className="price-box">
                                        <span className="price">$65</span>
                                    </div><br/>

                                    {/* Hotcakes */}
                                    <h4>Hotcakes</h4>
                                    <div className="title">Dos Hotcakes decorados con Fruta de Temporada, Chantillí y Bola de Nieve</div>
                                    <div className="price-box">
                                        <span className="price">$55</span>
                                    </div><br/>

                                    {/* Pan Francés */}
                                    <h4>Pan Francés</h4>
                                    <div className="title">Pan brioche bañado en leche de chai acompañado de Frutos Rojos Flameados y Helado</div>
                                    <div className="price-box">
                                        <span className="price">$75</span>
                                    </div><br/>

                                    {/* Molletes Dulces */}
                                    <h4>Molletes Dulces</h4>
                                    <div className="title">Acompañados con Nata de Rancho y Frutos Rojos Flameados</div>
                                    <div className="price-box">
                                        <span className="price">$55</span>
                                    </div><br/>

                                    {/* Molletes Charros */}
                                    <h4>Molletes Charros</h4>
                                    <div className="title">Frijoles Charros, Pico de Gallo y Queso Fresco</div>
                                    <div className="price-box">
                                        <span className="price">$75</span>
                                    </div><br/>

                                    {/* Bríoche de Espinacas */}
                                    <h4>Bríoche de Espinacas</h4>
                                    <div className="title">Pan Brioche, acompañado de Espinacas, Champiñones, Huevo Estrellado, Tocino y Queso Amarillo</div>
                                    <div className="price-box">
                                        <span className="price">$85</span>
                                    </div><br/>
                                </div>
                            </div>

                            {/* Platos Fuertes */}
                            <div className="menu-block">
                                <div className="inner-box">
                                    <h4>Platos Fuertes</h4>

                                    {/* Huarache CDMX */}
                                    <h6>Huarache CDMX</h6>
                                    <div className="title">Huarache de Maíz Azul, Acompañado de Frijoles, Nopales, Jitomate, Queso Fresco y Carne Asada</div>
                                    <div className="price-box">
                                        <span className="price">$125</span>
                                    </div><br/>

                                    {/* Burrito de Machaca */}
                                    <h6>Burrito de Machaca</h6>
                                    <div className="title">Huevo revuelto con Machaca a la Mexicana, Frijoles Charros y Aderezo de Chipotle</div>
                                    <div className="price-box">
                                        <span className="price">$95</span>
                                    </div><br/>

                                    {/* Lonche de Chilaquiles */}
                                    <h6>Lonche de Chilaquiles</h6>
                                    <div className="price-box">
                                        <span className="price">$68</span>
                                    </div><br/>

                                    {/* Chilaquiles */}
                                    <h6>Chilaquiles</h6>
                                    <div className="title">Acompañado de Frijoles y Pan</div>
                                    <div className="price-box">
                                        <span className="price">$75</span>
                                    </div><br/>

                                    {/* Enchiladas (Pollo, Panela) */}
                                    <h6>Enchiladas (Pollo, Panela)</h6>
                                    <div className="price-box">
                                        <span className="price">$75</span>
                                    </div><br/>
                                </div>
                            </div>

                            {/* Salsas*/}
                            <div className="menu-block">
                                <div className="inner-box">
                                    <h4>Salsas para los Chilaquiles</h4>
                                    <div className="title">Roja, Vqerde, Pasilla
                                       </div>
        
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Menu Column - Paquete Desayunos y Platos */}
                    <div className="menu-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* Paquete Desayunos */}
                            <div className="menu-block">
                                <div className="inner-box">
                                    <h4>PAQUETE DESAYUNES</h4>
                                    <div className="price-box">
                                        <span className="price">$115</span>
                                    </div><br/>
                                    <div className="title">
                                        Incluye:
                                        <ul>
                                            <li>Fruta de Temporada</li>
                                            <li>Jugo</li>
                                            <li>Café de Olla con Refill</li>
                                            <li>Chilaquiles</li>
                                            <li>Acompañados con Frijoles</li>
                                            <li>Pan</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Platos Especiales */}
                            <div className="menu-block">
                                <div className="inner-box">
                                    <h4>Platos Especiales</h4>

                                    {/* Huevos del Rancho */}
                                    <h6>Huevos del Rancho</h6>
                                    <div className="title">Dos huevos estrellados en tortilla de maíz con frijoles, salsa de chile pasilla, plátano macho frito y tocino</div>
                                    <div className="price-box">
                                        <span className="price">$105</span>
                                    </div><br/>

                                    {/* Huevos Motuleños */}
                                    <h6>Huevos Motuleños</h6>
                                    <div className="title">Huevos estrellados en tortillas de maíz con frijoles, chicharro y plátano macho</div>
                                    <div className="price-box">
                                        <span className="price">$95</span>
                                    </div><br/>

                                    {/* Enchiladas Mineras */}
                                    <h6>Enchiladas Mineras</h6>
                                    <div className="title">Enchiladas de pollo con salsa mexicana, bistec de res, queso panela y crema</div>
                                    <div className="price-box">
                                        <span className="price">$135</span>
                                    </div><br/>

                                    {/* Huevos Aztecas */}
                                    <h6>Huevos Aztecas</h6>
                                    <div className="title">Huevos revueltos con todoopas a la mexicana y queso gouda</div>
                                    <div className="price-box">
                                        <span className="price">$90</span>
                                    </div><br/>

                                    {/* Huevos al Gusto */}
                                    <h6>Huevos al Gusto</h6>
                                    <div className="title">Pregúntale a tu mesero</div>
                                    <div className="price-box">
                                        <span className="price">Depende del plato</span>
                                    </div><br/>
                                </div>
                            </div>

                            {/* Extras */}
                            <div className="menu-block">
                                <div className="inner-box">
                                    <h4>Extras</h4>

                                    <h6>Arrachera 150g</h6>
                                    <div className="price-box">
                                        <span className="price">+ $65</span>
                                    </div><br/>

                                    <h6>Pollo 150g</h6>
                                    <div className="price-box">
                                        <span className="price">+ $30</span>
                                    </div><br/>

                                    <h6>Carne Asada 150g</h6>
                                    <div className="price-box">
                                        <span className="price">+ $50</span>
                                    </div><br/>

                                    <h6>1 Pieza de Huevo</h6>
                                    <div className="price-box">
                                        <span className="price">+ $10</span>
                                    </div><br/>
                                </div>
                            </div>

                            {/* Postres */}
                            <div className="menu-block">
                                <div className="inner-box">
                                    <h4>POSTRES</h4>
                                    <div className="title">Pregunta a tu mesero</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Frape Variant Section */}
        
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