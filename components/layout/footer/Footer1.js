import Link from "next/link"
export default function Footer1() {
    return (
        <>
        {/* Main Footer */}
    <footer className="main-footer">
		<div className="pattern-layer-one" style={{ backgroundImage: 'url(assets/images/resource/footer-pattern-1.png)' }} ></div>
		<div className="pattern-layer-two" style={{ backgroundImage: 'url(assets/images/resource/footer-pattern-2.png)' }} ></div>
		<div className="pattern-layer-three" style={{ backgroundImage: 'url(assets/images/background/pattern-6.png)' }} ></div>
		<div className="auto-container">
        	{/* Widgets Section */}
            <div className="widgets-section">
            	<div className="row clearfix">
                	
                    {/* Big Column */}
                    <div className="big-column col-lg-8 col-md-12 col-sm-12">
                        <div className="row clearfix">
							
							{/*Footer Column*/}
                            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget contact-widget">
									<h6>Contáctanos</h6>
									<div className="text">En <b>The Coffee Legacy</b>, nos encanta escuchar a nuestros clientes. Ya sea que nos visites en alguna de nuestras sucursales o nos escribas, estamos aquí para atenderte.</div>
									<ul className="contact-list">
										<li><span className="icon fa fa-send"></span>contacto@thecoffeelegacy.com</li>
										<li><span className="icon fa fa-phone"></span><Link href="tel:+123-4567-89000">(+52) 771 123 4567</Link></li>
									</ul>
								</div>
							</div>
							
							{/*Footer Column*/}
                            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget links-widget">
									<h6>Explora Nuestro Sitio</h6>
									<ul className="footer-list">
										<li><Link href="home">Home</Link></li>
										<li><Link href="about">About</Link></li>
										<li><Link href="menu">Menú</Link></li>
										<li><Link href="gallery">Galería</Link></li>
										<li><Link href="blog-classic">Blog</Link></li>
										<li><Link href="contact">Contacto</Link></li>
									</ul>
								</div>
							</div>
							
						</div>
					</div>
					
					{/* Big Column */}
                    <div className="big-column col-lg-4 col-md-12 col-sm-12">
                        <div className="row clearfix">
							
							{/*Footer Column*/}
                            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget social-widget">
									<h6>Conecta con Nosotros</h6>
									<ul className="social-list">
										<li><Link href="https://www.facebook.com/thecoffeelegacy.hgo/"><span className="icon fa fa-facebook"></span>Facebook</Link></li>
										{/* <li><Link href="#"><span className="icon fa fa-twitter"></span>twitter</Link></li> */}
										<li><Link href="https://www.instagram.com/thecoffeelegacy/"><span className="icon fa fa-instagram"></span>Instagram</Link></li>
										{/* <li><Link href="#"><span className="icon fa fa-dribbble"></span>dribbble</Link></li> */}
									</ul>
								</div>
							</div>
							
							{/* Footer Column */}
							{/* <div className="footer-column col-lg-6 col-md-6 col-sm-12">
								<div className="footer-widget newsletter-widget">
									<h6>Subscribe</h6>
									<div className="newsletter-form">
										<form method="post">
											<div className="form-group">
												<input type="email" name="email" placeholder="Your Email"/>
												<button type="submit" className="theme-btn submit-btn">Subscribe Now</button>
											</div>
										</form>
									</div>
								</div>
							</div> */}
							
						</div>
					</div>
					
				</div>
			</div>
			<div className="footer-bottom">
				<div className="copyright">&copy; 2024 Todos Los Derechos Reservados.</div>
			</div>
		</div>
	</footer>

        </>
    )
}
