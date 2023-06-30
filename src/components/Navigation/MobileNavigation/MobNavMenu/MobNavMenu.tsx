import Link from "next/link";

import styles from "./MobNavMenu.module.scss";

const MobNavMenu = () => {
    return (
        <div className={styles.mob_nav_menu_container}>
            <nav className={styles.mob_nav_menu}>
                <ul className={styles.mob_nav_menu_list}>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/top"}>Top</Link></li>
                    <li><Link href={"/puyachok"}>Puyachok</Link></li>
                    <li><Link href={"/account/settings"}>Settings</Link></li>
                    <li><Link href={"/login"}>Log Out</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default MobNavMenu;