
import Link from "next/link"
export default function Deal() {
    return (
        <>
            {/* Deal Section */}
            <section className="deal-section" style={{ backgroundImage: 'url(assets/images/background/2.jpg)' }} >
                <div className="top-pattern-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-1.png)' }} ></div>
                <div className="bottom-pattern-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-2.png)' }} ></div>
                <div className="auto-container">
                    <div className="content-box" style={{ backgroundImage: 'url(assets/images/resource/deal.png)' }} >
                        <div className="box-inner">
                            {/* Sec Title */}
                            <div className="sec-title light centered">
                                <div className="title">Más sabor, menos precio</div>
                                <h2>Promos de Café</h2>
                                <div className="text">Disfruta nuestras promociones semanales en café y bebidas. Vive la experiencia <b></b>The Coffee Legacy a precios irresistibles. <br/> intellegam. Ansed dictas accumsan. </div>
                            </div>
                            {/* Email Form */}
                            <div className="email-form">
                                <div className="email-title">El mejor café, ahora con descuento.</div>
                            </div>
                            {/* Button Box */}
                    <div className="button-box text-center">
                        <Link href="menu" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Ver Menú</Link>
                    </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Deal Section */}
        </>
    )
}
