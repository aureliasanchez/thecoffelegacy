'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import GallerySlider1 from '@/components/slider/GallerySlider1'


export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Vinos & Más">
                <div>
                    {/* Milkshake Section */}
                    <section className="milkshake-section">
                        <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }} ></div>
                        <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }} ></div>
                        <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/icons/icon-3.png)' }} ></div>
                        <div className="auto-container">
                            <div className="inner-container">
                                <div className="big-image">
                                    <img src="assets/images/resource/slushy.jpg" alt="" />
                                </div>
                                <div className="lower-content">
                                    <div className="section-text">yummy</div>
                                    <div className="text">
                                        <p>Relájate y disfruta de nuestra exclusiva selección de cervezas artesanales, vinos de alta calidad y cócteles creativos. Ya sea para acompañar tu comida o simplemente disfrutar de una bebida refrescante, tenemos la opción perfecta para cada ocasión.</p>
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
                                <h2>Vinos <span>& Más</span></h2>
                                <div className="separate"></div>
                            </div>
                            <div className="row clearfix">
                            
                                {/* Menu Column */}
                                <div className="menu-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                    
                                        {/* Menu Block */}
                                        <div className="menu-block">
                                            <div className="inner-box">
                                               <h4>Vinos de Francia</h4>
                                                <div className="price-box">
                                                    <span className="price">Copa / Botella </span><br/>
                                                    <span className="price">5 oz / 750 ml </span>
                                                </div><br/>

                                                <h6>Chatean Montgaillard</h6>
                                                <div className="title">Sauvignon 2018</div>
                                                <div className="price-box">
                                                    <span className="price">$80 / $395</span><br/>
                                                </div><br/>

                                                <h6>Les Taurelles</h6>
                                                <div className="title">Syrah y Merlot 2016</div>
                                                <div className="price-box">
                                                    <span className="price">$75 / $375</span><br/>
                                                </div><br/>

                                                <h6>Mas del Tourelles</h6>
                                                <div className="title">Uva Merlot 2016</div>
                                                <div className="price-box">
                                                    <span className="price">$95 / $495</span><br/>
                                                </div><br/>

                                                <h6>Cuveede Galets</h6>
                                                <div className="title">Uva Grenache, Carignan, Syrah 2018</div>
                                                <div className="price-box">
                                                    <span className="price">$110 / $550</span><br/>
                                                </div><br/>
                                            </div>
                                        </div>
                                        
                                        {/* Menu Block */}
                                        <div className="menu-block">
                                            <div className="inner-box">
                                                <h4>Cerveza Artesanal</h4>
                                                <div className="title">Pinta con 464 ml</div>
                                                <h6>Cerveceria Pachuca</h6>
                                                <h6>Brown Porter</h6>
                                                <div className="title">Café y Cacao</div>
                                                <div className="price-box">
                                                    <span className="price">$85</span>
                                                </div><br/><br/>

                                                <h6>Cerveceria Reyna</h6>
                                                <h6>Reyna Negra Stout</h6>
                                                <div className="price-box">
                                                    <span className="price">$69</span>
                                                </div><br/>

                                                <h6>IPA "Macho"</h6>
                                                <div className="price-box">
                                                    <span className="price">$69</span>
                                                </div><br/><br/>

                                                <h6>Cerveceria Lola</h6>
                                                <h6>White Stout "Paxarete"</h6>
                                                <div className="title">Cacao y Café</div>
                                                <div className="price-box">
                                                    <span className="price">$75</span>
                                                </div><br/>
                                            </div>
                                        </div>
                                        
                                        {/* Menu Block */}
                                        <div className="menu-block">
                                            <div className="inner-box">
                                                <h4>Cerveza Artesanal En Botella</h4>
                                                <h6>Colimita</h6>
                                                <div className="title">Lager</div>
                                                <h6>Ticus</h6>
                                                <div className="title">Porter</div>
                                                <h6>Piedra Lisa</h6>
                                                <div className="title">IPA</div>
                                                <div className="price-box">
                                                    <span className="price">$65</span>
                                                </div><br/><br/>

                                                <h6>Modelo Especial o Negra Modelo</h6>
                                                <div className="price-box">
                                                    <span className="price">$42</span>
                                                </div><br/>

                                                <h6>Corona</h6>
                                                <div className="price-box">
                                                    <span className="price">$42</span>
                                                </div><br/><br/>

                                                <h6>Refrescos Coca, Sprite, Agua Mineral</h6>
                                                <div className="price-box">
                                                    <span className="price">$20</span>
                                                </div><br/>

                                                <h6>Agua Perrier</h6>
                                                <div className="price-box">
                                                    <span className="price">$48</span>
                                                </div><br/>

                                                <h6>S. Pellegrino</h6>
                                                <div className="price-box">
                                                    <span className="price">$38</span>
                                                </div><br/>
                                            </div>
                                        </div>
                                        
                                        {/* Menu Block */}
                                        {/* <div className="menu-block">
                                            <div className="inner-box">
                                                <div className="menu-image">
                                                    <Link href="menu"><img src="assets/images/resource/menu-30.jpg" alt="" /></Link>
                                                </div>
                                                <h6><Link href="menu">Blue Raspberry</Link></h6>
                                                <div className="title">Crispy black garlic</div>
                                                <div className="price-box">
                                                    <span className="price">$15</span>
                                                </div>
                                            </div>
                                        </div> */}
                                        
                                    </div>
                                </div>
                                
                                {/* Menu Column */}
                                <div className="menu-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        {/* Menu Block */}
                                        <div className="menu-block">
                                            <div className="inner-box">
                                                <h4>Cócteles </h4>
                                                <h6>Margarita</h6>
                                                <div className="title">1 oz 1/2 de Tequila</div>
                                                <div className="title">*Mango Chamoi *Frutos Rojos *Kiwi *Maracuya *Chai</div>
                                                <div className="price-box">
                                                    <span className="price">$69</span>
                                                </div><br/>

                                                <h6>Mojito</h6>
                                                <div className="title">1 oz 1/2 de Ron</div>
                                                <div className="title">Hierba Buena, Limón y Jarabe</div>
                                                <div className="price-box">
                                                    <span className="price">$69</span>
                                                </div><br/>

                                                <h6>Olé Chai</h6>
                                                <div className="title">1 oz de Mezcal</div>
                                                <div className="title">Shekeado con Chai de la Casa</div>
                                                <div className="price-box">
                                                    <span className="price">$69</span>
                                                </div><br/>

                                                <h6>Fresón</h6>
                                                <div className="title">1 oz 1/2 de Mezcal</div>
                                                <div className="title">Mezclado con Frutos Rojos</div>
                                                <div className="price-box">
                                                    <span className="price">$69</span>
                                                </div><br/>

                                                <h6>Maracuya</h6>
                                                <div className="title">1 oz 1/2 de Mezcal</div>
                                                <div className="title">Mezclado con Maracuya y Mineral</div>
                                                <div className="price-box">
                                                    <span className="price">$69</span>
                                                </div><br/>
                                            </div>
                                        </div>
                                        
                                        {/* Menu Block */}
                                        <div className="menu-block">
                                            <div className="inner-box">
                                                <h4>Tragos</h4>
                                                <h6>Tequila 1519</h6>
                                                <div className="title">2 oz *Blanco *Reposado *Anejo</div>
                                                <div className="price-box">
                                                    <span className="price">$65</span>
                                                </div><br/>

                                                <h6>Wisky Red Label</h6>
                                                <div className="title">2 oz de Wiskie</div>
                                                <div className="price-box">
                                                    <span className="price">$69</span>
                                                </div><br/>

                                                <h6>Ron Torres 10</h6>
                                                <div className="title">2 oz de Ron</div>
                                                <div className="price-box">
                                                    <span className="price">$60</span>
                                                </div><br/>

                                                <h6>Mezcal</h6>
                                                <div className="title">2 oz</div>
                                                <div className="price-box">
                                                    <span className="price">$75</span>
                                                </div><br/>
                                            </div>
                                        </div>
                                        
                                        {/* Menu Block */}
                                        <div className="menu-block">
                                            <div className="inner-box">
                                                <h4>Promociones</h4>
                                                <h6>Hamburguesa</h6>
                                                <div className="title">Chiken Cronch + Pinta de Cerveza Artesanal Reyna</div>
                                                <div className="price-box">
                                                    <span className="price">$135</span>
                                                </div><br/>

                                                <h6>Papas Chicago</h6>
                                                <div className="title">+ 2 Pintas Cerveza Artesanal Reyna</div>
                                                <div className="price-box">
                                                    <span className="price">$180</span>
                                                </div><br/>

                                                <h6>Pizza Margarita</h6>
                                                <div className="title">+ 2 Pintas Cerveza Reyna</div>
                                                <div className="price-box">
                                                    <span className="price">$240</span>
                                                </div><br/>

                                                <h6>Nachos</h6>
                                                <div className="title">+ 2 Pintas Cerveza Artesanal Reyna</div>
                                                <div className="price-box">
                                                    <span className="price">$180</span>
                                                </div><br/>

                                                <h6>Pizza + Fetussini</h6>
                                                <div className="title">De Pollo + 1 Botella de Tinto</div>
                                                <div className="price-box">
                                                    <span className="price">$490</span>
                                                </div><br/><br/><br/>

                                                <h6>Nota:</h6>
                                                <div className="title">Las promociones aplican de Lunes a Jueves de 14:00 hrs a 23:00 hrs</div>
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
                </div>

            </Layout>
        </>
    )
}