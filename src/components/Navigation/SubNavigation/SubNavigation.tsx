import styles from "./SubNavigation.module.scss";
import Link from "next/link";

const SubNavigation = () => {
    return (
        <div className={styles.sub_navigation_wrapper}>
            <nav className={styles.sub_navigation_container}>
                <ul className={styles.sub_navigation_list}>
                    <li>
                        <Link href={"/"}>Overview</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SubNavigation;