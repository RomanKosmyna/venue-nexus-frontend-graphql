import styles from "./UserAccountModule.module.scss";
import Link from "next/link";

const UserAccountModule = () => {
    return (
        <div className={styles.user_acc_module_container}>
            <ul className={styles.user_acc_module_list}>
                <li>Name</li>
                <li><Link href={"/account/dashboard"}>Dashboard</Link></li>
                <li><Link href={"/account/settings"}>Settings</Link></li>
                <div className={styles.user_acc_line}></div>
                <li><Link href={"/login"}>Log Out</Link></li>
                <div className={styles.user_acc_line}></div>
            </ul>
        </div>
    );
};

export default UserAccountModule;