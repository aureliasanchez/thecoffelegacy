'use client'
import Link from "next/link"
export default function Beverage() {
    return (
        <>

            {/* Beverage Section */}
            <section className="beverage-section">
                <div className="icon-layer" style={{ backgroundImage: 'url(assets/images/resource/beverage.png)' }} ></div>
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title centered">
                        <div className="title">Sabores que Inspiran</div>
                        <h2>Sabores únicos</h2>
                        <div className="separate"></div>
                    </div>
                    <div className="row clearfix">
                    
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="milkshake"><img src="assets/images/resource/beverage-1.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="milkshake">Espresso Tradicional</Link></h6>
                                    {/* <div className="products">3 products</div> */}
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="milkshake"><img src="assets/images/resource/beverage-2.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="milkshake"> Cappuccino Clásico</Link></h6>
                                    {/* <div className="products">3 products</div> */}
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="milkshake"><img src="assets/images/resource/beverage-3.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="milkshake">Cold Brew Refrescante</Link></h6>
                                    {/* <div className="products">3 products</div> */}
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="milkshake"><img src="assets/images/resource/beverage-4.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="milkshake">Latte con Vainilla Naturalo</Link></h6>
                                    {/* <div className="products">3 products</div> */}
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="milkshake"><img src="assets/images/resource/beverage-5.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="milkshake">Mocha con Chocolate Oscuro</Link></h6>
                                    {/* <div className="products">3 products</div> */}
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="milkshake"><img src="assets/images/resource/beverage-6.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="milkshake">Americano Intenso</Link></h6>
                                    {/* <div className="products">3 products</div> */}
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="milkshake"><img src="assets/images/resource/beverage-7.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="milkshake">Frappe de Caramelo</Link></h6>
                                    {/* <div className="products">3 products</div> */}
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="milkshake"><img src="assets/images/resource/beverage-8.jpg" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="milkshake">Té Chai con Especias</Link></h6>
                                    {/* <div className="products">3 products</div> */}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    {/* Button Box */}
                    <div className="button-box text-center">
                        <Link href="menu" className="theme-btn btn-style-two clearfix"><span className="icon"></span>Ver Menú</Link>
                    </div>
                    
                </div>
            </section>
            {/* End Beverage Section */}

        </>
    )
}
