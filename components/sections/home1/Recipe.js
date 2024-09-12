'use client'
import Link from "next/link"
export default function Recipe() {
    return (
        <>

        {/* Recipe Section */}
        <section className="recipe-section">
            <div className="section-text">yummy</div>
            <div className="icon-layer-one" style={{ backgroundImage:'url(assets/images/icons/icon-1.png)'}} ></div>
            <div className="icon-layer-two" style={{ backgroundImage:'url(assets/images/icons/icon-2.png)'}} ></div>
            <div className="icon-layer-three" style={{ backgroundImage:'url(assets/images/icons/icon-3.png)'}} ></div>
            <div className="auto-container">
                {/* Sec Title */}
                <div className="sec-title centered">
                    <div className="title">Ingredientes frescos y responsables en cada taza</div>
                    <h2>Sabores con Origen</h2>
                    <div className="separate"></div>
                </div>
                <div className="inner-container">
                    <div className="circle-layer" style={{ backgroundImage:'url(assets/images/icons/circles.png)'}} ></div>
                    <div className="row clearfix">
                    
                        {/* Left Column */}
                        <div className="left-column col-lg-5 col-md-6 col-sm-12">
                            <div className="inner-column">
                            
                                {/* Recipe Block */}
                                <div className="recipe-block">
                                    <div className="inner-box">
                                        <div className="icon"><img src="assets/images/resource/recipe-1.png" alt=""/></div>
                                        <h6><Link href="menu">Granos de Café Orgánico</Link></h6>
                                        <div className="text">Nuestros baristas los muelen al momento para cada preparación, resaltando los matices y aromas únicos de cada variedad de origen.</div>
                                    </div>
                                </div>
                                
                                {/* Recipe Block */}
                                <div className="recipe-block">
                                    <div className="inner-box">
                                        <div className="icon"><img src="assets/images/resource/recipe-2.png" alt=""/></div>
                                        <h6><Link href="menu">Leche de Granja Fresca</Link></h6>
                                        <div className="text">Utilizamos leche fresca de granja para crear una espuma suave y cremosa que complementa el sabor robusto de nuestro café.</div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        {/* Image Column */}
                        <div className="image-column col-lg-2 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image">
                                    <img src="assets/images/resource/recipe.png" alt="" />
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Column */}
                        <div className="right-column col-lg-5 col-md-6 col-sm-12">
                            <div className="inner-column">
                            
                                {/* Recipe Block / Style Two */}
                                <div className="recipe-block style-two">
                                    <div className="inner-box">
                                        <div className="icon"><img src="assets/images/resource/recipe-3.png" alt=""/></div>
                                        <h6><Link href="menu">Extracto de Vainilla Natural</Link></h6>
                                        <div className="text">Lo incorporamos en nuestras recetas de lattes y cappuccinos, aportando una capa aromática y deliciosa.</div>
                                    </div>
                                </div>
                                
                                {/* Recipe Block / Style Two */}
                                <div className="recipe-block style-two">
                                    <div className="inner-box">
                                        <div className="icon"><img src="assets/images/resource/recipe-4.png" alt=""/></div>
                                        <h6><Link href="menu">Cacao de Comercio Justo</Link></h6>
                                        <div className="text">Añadimos cacao oscuro a nuestras bebidas de chocolate y mochas, logrando un balance perfecto entre el café y el chocolate.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        {/* End Recipe Section */}
            

        </>
    )
}
