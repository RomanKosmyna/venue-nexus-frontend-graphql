import Navigation from "@/src/components/Navigation/Navigation/Navigation";
import Logo from "@/src/components/Logo/Logo";

import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo/>
            <Navigation/>
        </header>
    );
};

export default Header;