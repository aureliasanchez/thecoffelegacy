'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import GallerySlider1 from '@/components/slider/GallerySlider1'

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Bebidas">
                {/* Milkshake Section */}
                <section className="milkshake-section">
                    <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }} ></div>
                    <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }} ></div>
                    <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/icons/icon-3.png)' }} ></div>
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="big-image">
                                <img src="assets/images/resource/milkshake.jpg" alt="" />
                            </div>
                            <div className="lower-content">
                                <div className="section-text">yummy</div>
                                <div className="text">
                                    <p>Descubre nuestras bebidas artesanales hechas con granos de café de origen único, tostados con precisión para ofrecer la mejor experiencia en cada sorbo. Desde espressos intensos hasta opciones refrescantes, tenemos algo para cada paladar.</p>
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
                            <h2>Beb<span>idas</span></h2>
                            <div className="separate"></div>
                        </div>
                        <div className="row clearfix">
                        
                        {/* Menu Column 1 */}
                        <div className="menu-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Cafés */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <h4>Cafés</h4>
                                        <div className="price-box">
                                            <span className="price">1 oz / 2 oz</span>
                                        </div>
                                        <br/>

                                        <h6>Espresso</h6>
                                        <div className="title">Extracto Concentrado de Café</div>
                                        <div className="price-box">
                                            <span className="price">$34 / $45</span>
                                        </div>
                                        <br/>

                                        <h6>Macchiato</h6>
                                        <div className="title">Espresso manchado con leche</div>
                                        <div className="price-box">
                                            <span className="price">$38 / $48</span>
                                        </div>
                                        <br/>

                                        <h6>Espresso Miel</h6>
                                        <div className="title">Espresso mezclado con miel, crema de leche</div>
                                        <div className="price-box">
                                            <span className="price">$50</span>
                                        </div>
                                        <br/>

                                        <h6>Espresso Cajeta "En Las Rocas"</h6>
                                        <div className="title">Mezclado con Cajeta, Paja y Polvo de Anís</div>
                                        <div className="price-box">
                                            <span className="price">$55</span>
                                        </div>
                                        <br/>

                                        <h6>Espresso Irlandés "En Las Rocas"</h6>
                                        <div className="title">Espresso, Crema de Whiskey, Pan y Cardamomo</div>
                                        <div className="price-box">
                                            <span className="price">$75</span>
                                        </div>
                                        <br/>

                                        <h6>Espresso AA "En Las Rocas"</h6>
                                        <div className="title">Espresso, Licor de Vainilla, Pan y Canela</div>
                                        <div className="price-box">
                                            <span className="price">$90</span>
                                        </div>
                                        <br/>
                                    </div>
                                </div>

                                {/* Calientes */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <h4>Calientes</h4>
                                        <div className="price-box">
                                            <span className="price">6 oz / 12 oz</span>
                                        </div>
                                        <br/>

                                        <h6>Capuccino</h6>
                                        <div className="price-box">
                                            <span className="price">$38 / $46</span>
                                        </div>
                                        <br/>

                                        <h6>Latte</h6>
                                        <div className="price-box">
                                            <span className="price">$40 / $50</span>
                                        </div>
                                        <br/>

                                        <h6>Latte Masala</h6>
                                        <div className="price-box">
                                            <span className="price">$50 / $60</span>
                                        </div>
                                        <br/>

                                        <h6>Latte Taro</h6>
                                        <div className="price-box">
                                            <span className="price">$50 / $60</span>
                                        </div>
                                        <br/>

                                        <h6>Moka </h6>
                                        <div className="price-box">
                                            <span className="price">$45 / $60</span>
                                        </div>
                                        <br/>

                                        <h6>Moka Blanco</h6>
                                        <div className="price-box">
                                            <span className="price">$50 / $60</span>
                                        </div>
                                        <br/>

                                        <h6>Chocolate Blanco</h6>
                                        <div className="price-box">
                                            <span className="price">$45 / $ 55</span>
                                        </div>
                                        <br/>

                                        <h6>Chocolate</h6>
                                        <div className="price-box">
                                            <span className="price">$35 / $ 45</span>
                                        </div>
                                        <br/>

                                        <h6>Chai</h6>
                                        <div className="title">Natural ó Vainilla</div>
                                        <div className="price-box">
                                            <span className="price">$45 / $ 55</span>
                                        </div>
                                        <br/>

                                        <h6>Delirio</h6>
                                        <div className="title">Chocolate con Rompope</div>
                                        <div className="price-box">
                                            <span className="price">$44 / $58</span>
                                        </div>
                                        <br/>

                                        <h6>Afogato</h6>
                                        <div className="title">Helado de Vainilla</div>
                                        <div className="title">Ahogado en Espresso, Crema Chantillí, Galleta Oreo y Nuez Quebrada</div>
                                        <div className="price-box">
                                            <span className="price">$75</span>
                                        </div>
                                        <br/>

                                        <h6>Afogato Carajillo</h6>
                                        <div className="title">Con Licor de Vainilla</div>
                                        <div className="price-box">
                                            <span className="price">$105</span>
                                        </div>
                                        <br/>

                                        <h6>Sabor Extra</h6>
                                        <div className="title">Caramelo, Lechera, Chai, Taro, Coco, Nuez de Macadamia, Crema Irlandesa, Menta.</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                        <br/>
                                        </div>
                                        </div>

                                    {/* Café en grano */}
                                    <div className="menu-block">
                                    <div className="inner-box">
                                        <h4>Café en grano o molido</h4>
                                        <div className="title">.250gr.</div>
                                        <div className="price-box">
                                            <span className="price">$145</span>
                                        </div>
                                        <br/>
                                        <div className="title">.500gr.</div>
                                        <div className="price-box">
                                            <span className="price">$290</span>
                                        </div>
                                        <br/>
                                        <div className="title">1kg.</div>
                                        <div className="price-box">
                                            <span className="price">$580</span>
                                        </div>
                                        <br/>
                                        <div className="title">Guerrero Proceso Natural (Espinal)</div>
                                        <div className="title">Nayarit Proceso Natural (Kalid)</div>
                                        <div className="title">Veracruz Proceso Lavado (Microlote)</div>
                                        <div className="title">Oaxaca Proceso Lavado</div>
                                        </div>
                                        </div>
                                        {/* Concretados */}
                                    <div className="menu-block">
                                        <div className="inner-box">
                                        <h4>Concentrado de Chai</h4>
                                        <div className="title">Botella de 1/2 litro</div>
                                        <div className="price-box">
                                            <span className="price">$280</span>
                                        </div>
                                        <br/>
                                        <div className="title">Botella de 1 litro</div>
                                        <div className="price-box">
                                            <span className="price">$480</span>
                                        </div>
                                
                                        </div>
                                    </div>
                                    
                                        {/* Café americano */}
                                <div className="menu-block">
                                    <div className="inner-box">

                                        <h4>Cafés Americanos</h4> 
                                        <h6>Aeropress 250 ml</h6>
                                        <div className="price-box">
                                            <span className="price">$55</span>
                                        </div>
                                        <br/>
                                        <h6>Chemex 400 ml</h6>
                                        <div className="price-box">
                                            <span className="price">$70</span>
                                        </div>
                                        <br/>
                                        <h6>Dripper 330 ml</h6>
                                        <div className="price-box">
                                            <span className="price">$55</span>
                                        </div>
                                        <br/>
                                        <h6>Kalita 320 ml</h6>
                                        <div className="price-box">
                                            <span className="price">$55</span>
                                        </div>
                                        <br/>
                                        <h6>Prensa 280 ml</h6>
                                        <div className="price-box">
                                            <span className="price">$55</span>
                                        </div>
                                        <br/>
                                        <h6>Prensa 480 ml</h6>
                                        <div className="price-box">
                                            <span className="price">$69</span>
                                        </div>
                                        <br/>
                                        <h6>Americcano 8 oz</h6>
                                        <div className="price-box">
                                            <span className="price">$35</span>
                                        </div>
                                        <br/>
                                        <h6>Americano 16 oz</h6>
                                        <div className="price-box">
                                            <span className="price">$48</span>
                                        </div>
                                        <br/>
                                        <h6>Café de Olla 16 oz</h6>
                                        <div className="price-box">
                                            <span className="price">$49</span>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    

                        {/* Menu Column 2 */}
                        <div className="menu-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Cafés fríos */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <h4>Café Frio</h4>

                                        <h6>Cold Brew 10 oz</h6>
                                        <div className="title">Extracción de café prolongada</div>
                                        <div className="title">En frío por 24 hrs.</div>
                                        <div className="price-box">
                                            <span className="price">$45</span>
                                        </div>
                                        <br/>

                                        <h6>Cold Brew Tonic</h6>
                                        <div className="title">Cold Brew con Agua Tónica</div>
                                        <div className="price-box">
                                            <span className="price">$59</span>
                                        </div>
                                        <br/>

                                        <h6>Cold Brew Tonicol</h6>
                                        <div className="title">Cold Brew con Tonicol</div>
                                        <div className="price-box">
                                            <span className="price">$65</span>
                                        </div>
                                        <br/>

                                        <h6>Cold Brew Baileys</h6>
                                        <div className="title">Cold Brew con 2 oz Baileys</div>
                                        <div className="price-box">
                                            <span className="price">$78</span>
                                        </div>
                                        <br/>

                                        <h6>Carajillo</h6>
                                        <div className="title">2 oz de Espresso con 2 oz de Licor de Vainilla en Shaker</div>
                                        <div className="price-box">
                                            <span className="price">$85</span>
                                        </div>
                                        <br/>
                                        </div>
                                    </div>
                                    
                                        {/* Fríos / Frapes */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <h4>Fríos / Frappes</h4>
                                        <div className="price-box">
                                            <span className="price">16 oz</span>
                                        </div>
                                        <br/>

                                        <h6>Capuccino</h6>
                                        <div className="price-box">
                                            <span className="price">$55</span>
                                        </div>
                                        <br/>

                                        <h6>Moka</h6>
                                        <div className="price-box">
                                            <span className="price">$65</span>
                                        </div>
                                        <br/>

                                        <h6>Moka Blanco</h6>
                                        <div className="price-box">
                                            <span className="price">$69</span>
                                        </div>
                                        <br/>

                                        <h6>Chai</h6>
                                        <div className="price-box">
                                            <span className="price">$65</span>
                                        </div>
                                        <br/>

                                        <h6>Natural o Vainilla</h6>
                                        <h6>Matcha</h6>
                                        <div className="price-box">
                                            <span className="price">$65</span>
                                        </div>
                                        <br/>

                                        <h6>Taro Espresso</h6>
                                        <div className="price-box">
                                            <span className="price">$69</span>
                                        </div>
                                        <br/>

                                        <h6>Latte Masala</h6>
                                        <div className="price-box">
                                            <span className="price">$69</span>
                                        </div>
                                        <br/>

                                        <h6>Brownle Espresso</h6>
                                        <div className="price-box">
                                            <span className="price">$75</span>
                                        </div>
                                        <br/>

                                        <h6>Coco Espresso</h6>
                                        <div className="price-box">
                                            <span className="price">$69</span>
                                        </div>
                                        <br/>
                                    </div>
                                </div>

                                {/* Malteadas */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <h4>Malteadas</h4>

                                        <h6>Oreo</h6>
                                        <div className="title">Helado de chocolate con galleta Oreo</div>
                                        <div className="price-box">
                                            <span className="price">$70</span>
                                        </div>
                                        <br/>

                                        <h6>Frutos Rojos</h6>
                                        <div className="title">Helado de Fresa y Frutos Rojos</div>
                                        <div className="price-box">
                                            <span className="price">$70</span>
                                        </div>
                                        <br/>

                                        <h6>Vainilla</h6>
                                        <div className="title">Helado de Vainilla con Chocolate</div>
                                        <div className="price-box">
                                            <span className="price">$70</span>
                                        </div>
                                        <br/>

                                        <h6>Brownie</h6>
                                        <div className="title">Helado de Chocolate con Brownie</div>
                                        <div className="price-box">
                                            <span className="price">$85</span>
                                        </div>
                                        <br/>
                                    </div>
                                </div>

                                {/* Smoothies */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <h4>Smoothies</h4>

                                        <h6>Freson</h6>
                                        <div className="title">Frutos Rojos, Plátano, Hierba Buena</div>
                                        <div className="price-box">
                                            <span className="price">$70</span>
                                        </div>
                                        <br/>

                                        <h6>Tropical</h6>
                                        <div className="title">Mango y Piña</div>
                                        <div className="price-box">
                                            <span className="price">$70</span>
                                        </div>
                                        <br/>

                                        <h6>Mango Berry</h6>
                                        <div className="title">Mango, Zarzamora y Fresa</div>
                                        <div className="price-box">
                                            <span className="price">$70</span>
                                        </div>
                                        <br/>
                                    </div>
                                </div>

                                {/* Sodas Italianas */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <h4>Sodas Italianas</h4>
                                        <div className="price-box">
                                            <span className="price">$45</span>
                                        </div>
                                        <br/>
                                        <div className="title">Fresa</div>
                                        <div className="title">Mango</div>
                                        <div className="title">Kiwi</div>
                                        <div className="title">Maracuya</div>
                                        <div className="title">Durazno</div>
                                        <div className="title">Limón</div>
                                        <div className="title">Mix Berry</div>

                                       
                                    </div>
                                </div>

                                {/* Copa de Helado */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <h4>Copa de Helado</h4>
                                        <div className="price-box">
                                            <span className="price">$48</span>
                                        </div>
                                        <br/>
                                        <div className="title">Acompañado de Pana y Chocolate</div>
                                        <div className="title">Vainilla</div>
                                        <div className="title">Chocolate</div>
                                        <div className="title">Fresa</div>
                                    </div>
                                </div>
                                
                                {/* Jugo Natural */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <h4>Jugo Natural</h4>
                                        <div className="price-box">
                                            <span className="price">$38</span>
                                        </div>
                                        <br/>
                                        <div className="title">Pregunta a tu mesero por existencia</div>
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