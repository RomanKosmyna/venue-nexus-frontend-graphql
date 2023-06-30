import Image from "next/image";

import styles from "./Logo.module.scss";

const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <Image
                src={"/img/logo(white version).png"}
                alt={"Hexagon"}
                fill={true}
                sizes={"(max-width: 915px) 100vw"}
                priority={true}
            />
        </div>
    );
};

export default Logo;