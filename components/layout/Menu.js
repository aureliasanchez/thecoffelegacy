import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>
            <ul className="navigation">
            <li>
                    <Link href="/">Home</Link> 
                </li>
                <li className="dropdown">
                    <Link href="#">About</Link>
                    <ul>
                        <li><Link href="about">Sobre Nosotros</Link></li>
                        {/* <li><Link href="team">Team</Link></li> */}
                        <li><Link href="restaurant">Sucursales</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Menú</Link>
                    <ul>
                        <li><Link href="menu">Menú Principal</Link></li>
                        <li><Link href="milkshake">Bebidas</Link></li>
                        <li><Link href="frappe">Desayunos</Link></li>
                        <li><Link href="boba-tea">Delicias a la Carta</Link></li>
                        <li><Link href="slushy">Vinos & Más</Link></li>
                        
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="gallery">Galería</Link>
                    {/* <ul>
                        <li><Link href="gallery">Gallery</Link></li>
                        <li><Link href="gallery-2">Gallery 02</Link></li>                        
                    </ul> */}
                </li>
                <li><Link href="blog-classic">Blog</Link>
                    {/* <ul>
                        <li><Link href="blog-classic">Blog Classic</Link></li>
                        <li><Link href="blog-details2">Blog Single 02</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                        <li><Link href="/error">Not Found</Link></li>
                    </ul> */}
                </li>
                <li>
                    <Link href="contact">Contacto</Link>
                </li>
            </ul>
        </>
    )
}
