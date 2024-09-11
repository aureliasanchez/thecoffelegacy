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
                        <li><Link href="about">About</Link></li>
                        {/* <li><Link href="team">Team</Link></li> */}
                        <li><Link href="restaurant">Restaurant</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Menu</Link>
                    <ul>
                        <li><Link href="menu">Menu Principal</Link></li>
                        <li><Link href="milkshake">Milk Shake</Link></li>
                        <li><Link href="frappe">Frappe</Link></li>
                        <li><Link href="boba-tea">Boba Tea</Link></li>
                        <li><Link href="slushy">Slushy</Link></li>
                        
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="gallery">Gallery</Link>
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
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
