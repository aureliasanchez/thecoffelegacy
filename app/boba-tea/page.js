'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import GallerySlider1 from '@/components/slider/GallerySlider1'

export default function Home() {

    
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Boba Tea">      
        {/* Milkshake Section */}
        <section className="milkshake-section">
            <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }} ></div>
            <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }} ></div>
            <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/icons/icon-3.png)' }} ></div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="big-image">
                        <img src="assets/images/resource/boba.jpg" alt="" />
                    </div>
                    <div className="lower-content">
                        <div className="section-text">yummy</div>
                        <div className="text">
                            <p>Nuestras hamburguesas artesanales están hechas con carne de primera calidad, acompañadas de ingredientes frescos y salsas hechas en casa. Cada bocado es una explosión de sabor que te dejará con ganas de más. Elige tu favorita y acompáñala con nuestras papas fritas crujientes.</p>
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
                    <h2>Delicias a<span> la Carta</span></h2>
                    <div className="separate"></div>
                </div>
                <div className="row clearfix">
                
                    {/* Menu Column */}
                    <div className="menu-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                        
                            {/* Menu Block */}
                            <div className="menu-block">
                                <div className="inner-box">
                                    <h4>Entradas</h4>
                                    <h6>Sopa de tortilla</h6>
                                    <div className="title">Totopos con Caldillo de Jitomate, Chicharrón de Cerdo y Trozos de Queso Panela</div>
                                    <div className="price-box">
                                        <span className="price">$69</span>
                                    </div><br/>
                
                                    <h6>Nachos</h6>
                                    <div className="title">Totopos, Frijoles Charros, Queso Amarillo, Salsa Mexicana</div>
                                    <h6>Sencillos</h6>
                                    <div className="price-box">
                                        <span className="price">$85</span>
                                    </div><br/>
                                    <h6>Con Chorizo 160 gr</h6>
                                    <div className="price-box">
                                        <span className="price">$115</span>
                                    </div><br/>
                                    <h6>Con Asada 160 gr</h6>
                                    <div className="price-box">
                                        <span className="price">$135</span>
                                    </div><br/>
                                
                                    <h6>Papas Baby 400 gr</h6>
                                    <div className="title">Papas al Limón Salteadas con Chile Quebrado y Cilantro</div>
                                    <div className="price-box">
                                        <span className="price">$75</span>
                                    </div><br/>
           
                                    <h6>Papas A La Francesa</h6>
                                    <div className="price-box">
                                        <span className="price">$65</span>
                                    </div><br/>
                                    <h6>Papas Chicago</h6>
                                    <div className="title">Papas a la Francesa Con Queso Amarillo, Pico de Gallo.</div>
                                    <h6>Sencillas</h6>
                                    <div className="price-box">
                                        <span className="price">$85</span>
                                    </div><br/>
                                    <h6>Con Arrachera 170 gr</h6>
                                    <div className="price-box">
                                        <span className="price">$145</span>
                                    </div><br/>
                                    <h6>Con Cordero 170 gr</h6>
                                    <div className="price-box">
                                        <span className="price">$155</span>
                                    </div><br/>
                                </div>
                            </div>

                            

                             {/* Menu Block */}
                             <div className="menu-block">
                                <div className="inner-box">
                                    <h4>Hamburguesa Con Papas</h4>
                                    <h6>Clásica</h6>
                                    <div className="title">Top sirloin (170 gr), Pan Brioche, Jitomate, Cebolla, Aderezo de Albahaca.</div>
                                    <div className="price-box">
                                        <span className="price">$95</span>
                                    </div><br/>

                                    <h6>Legacy</h6>
                                    <div className="title">Top sirloin (170 gr), Queso Oaxaca Laqueda Sutil de Cafè, Pan Brioche, Aros de Cebolla y BBQ.</div>
                                    <div className="price-box">
                                        <span className="price">$125</span>
                                    </div><br/>

                                    <h6>Chiken Cruch</h6>
                                    <div className="title">Pechuga con Panco (170 gr), Costra de Queso Manchego, Aderezo Chipotle y Queso Amarillo Derretido.</div>
                                    <div className="price-box">
                                        <span className="price">$85</span>
                                    </div><br/>

                                    <h6>Burritos</h6>
                                    <div className="title">Proteína a la Plancha, Frijoles Charros, Queso Gouda, Lechuga, Salsa Martajada, Aderezo Chipotle y Papas.</div>
                                    <div className="price-box">
                                        <span className="price">$</span>
                                    </div><br/>

                                    <h6>Chiken</h6>
                                    <div className="title">Pollo 170 gr.</div>
                                    <div className="price-box">
                                        <span className="price">$75</span>
                                    </div><br/>

                                    <h6>Ranchero</h6>
                                    <div className="title">Arrachera 180 gr, con salsa BBQ.</div>
                                    <div className="price-box">
                                        <span className="price">$115</span>
                                    </div><br/>

                                    <h6>Asada</h6>
                                    <div className="title">Asada de res 180 gr.</div>
                                    <div className="price-box">
                                        <span className="price">$95</span>
                                    </div><br/><br/>
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
                                    <h4>Platillos</h4>
                                    <h6>Arrachera</h6>
                                    <div className="title">250 gr de Arrachera Acompañada de Papas a la Francesa o Ensalada</div>
                                    <div className="price-box">
                                        <span className="price">$165</span>
                                    </div>
                                    <br/>

                                    <h6>Pechuga Empanizada</h6>
                                    <div className="title">250 gr de Pechuga Empanizada con Panko Acompañada de Papas a la Francesa o Ensalada</div>
                                    <div className="price-box">
                                        <span className="price">$115</span>
                                    </div>
                                    <br/>
                                </div>
                            </div>

                             {/* Menu Block */}
                             <div className="menu-block">
                                <div className="inner-box">
                                    <h4>Ensaladas</h4>
                                    <h6>De La Casa</h6>
                                    <div className="title">Lechugas, Jitomate, Pollo a la Plancha 180 gr, Pimiento, Queso Philadelphia y Vinagreta</div>
                                    <div className="price-box">
                                        <span className="price">$120</span>
                                    </div><br/>

                                    <h6>La Fresca</h6>
                                    <div className="title">Lechugas, Queso Panela, Arándanos Deshidratados, Jitomate, Vinagreta de Café con Miel de Agave.</div>
                                    <div className="price-box">
                                        <span className="price">$120</span>
                                    </div><br/>
                                </div>
                            </div>
                            
                            {/* Menu Block */}
                            <div className="menu-block">
                                <div className="inner-box">
                                    <h4>Pizzas</h4>
                                    <h6>Margarita</h6>
                                    <div className="title">Champiñones, Jitomate y Albahaca</div>
                                    <div className="price-box">
                                        <span className="price">$135</span>
                                    </div><br/>
                                    
                                    <h6>Mexicana</h6>
                                    <div className="title">Cebolla, Jitomate, Chile Serrano y 170 gr de Arrachera</div>
                                    <div className="price-box">
                                        <span className="price">$190</span>
                                    </div><br/>

                                    <h6>Hawaina</h6>
                                    <div className="title">Piña y Jamón</div>
                                    <div className="price-box">
                                        <span className="price">$120</span>
                                    </div><br/>
                                </div>
                            </div>
                            
                            {/* Menu Block */}
                            <div className="menu-block">
                                <div className="inner-box">
                                    <h4>Pastas</h4>
                                    <h6>Camarón</h6>
                                    <div className="title">Pasta Fresca, Camarones Salteados, Parmesano y Albahaca</div>
                                    <div className="price-box">
                                        <span className="price">$165</span>
                                    </div><br/>

                                    <h6>Pollo</h6>
                                    <div className="title">Clásico Fetuccini Alfredo Siciliano Pechuga de Pollo a las Finas Hierbas</div>
                                    <div className="price-box">
                                        <span className="price">$115</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Menu Block */}
                            <div className="menu-block">
                                <div className="inner-box">
                                    <h4>Crepas Dulces</h4>
                                    <h6>Sabayon</h6>
                                    <div className="title">Frutos Rojos, Rompope, Acompañado de Helado de Vainilla</div>
                                    <div className="price-box">
                                        <span className="price">$95</span>
                                    </div><br/>

                                    <h6>Banana Crip</h6>
                                    <div className="title">Plátano Macho Flameado con Licor de Naranaja, Cajeta, Nieve de Vainilla y Nuez</div>
                                    <div className="price-box">
                                        <span className="price">$115</span>
                                    </div><br/>

                                    <h6>Chococrepa</h6>
                                    <div className="title">Nutella, Plàtano, Fresa, Hershey's y Helado de Chocolate</div>
                                    <div className="price-box">
                                        <span className="price">$80</span>
                                    </div><br/><br/>

                                    <h6>Nota:</h6>
                                    <div className="title">El horario de este menu es únicamnete de 14:00 hrs a 23:00 hrs</div>
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