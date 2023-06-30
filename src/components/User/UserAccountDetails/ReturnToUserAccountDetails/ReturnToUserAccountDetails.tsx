import Link from "next/link";

import {MdKeyboardArrowLeft} from "react-icons/md";

import styles from "./ReturnToUserAccountDetails.module.scss";

const ReturnToUserAccountDetails = () => {
    return (
        <div className={styles.return_to_user_acc_details}>
            <Link href={"/account"}>
                <MdKeyboardArrowLeft className={styles.arrow_icon}/>
                Account Settings
            </Link>
        </div>
    );
};

export default ReturnToUserAccountDetails;