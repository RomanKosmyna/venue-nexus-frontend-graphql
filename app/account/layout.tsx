import UserAccountHeading from "@/src/components/User/UserAccountDetails/UserAccountHeading/UserAccountHeading";
import LineSeparator from "@/src/components/LineSeparator/LineSeparator";

import styles from "./layout.module.scss";

export default function AccountLayout({children}: { children: React.ReactNode }) {

    return (
        <div className={styles.account_layout}>
            <UserAccountHeading/>
            <LineSeparator/>
            {children}
        </div>
    )
}