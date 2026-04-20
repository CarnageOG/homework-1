import styles from "./Navbar.module.css"
import Link from "next/link"

const Navbar = (props) => {
    console.log(props)
    return (
        <>
            <div className={styles.div}>
                <nav className={styles.nav}>
                    <ul className={styles.nav_ul}>
                        {props.data.map((item) => (
                            <li key={item.id}>
                                <Link href={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navbar;