import MobileUserAccountDetails
    from "@/src/components/User/UserAccountDetails/MobileUserAccountDetails/MobileUserAccountDetails";

import styles from "./UserAccountDetails.module.scss";

const UserAccountDetails = () => {

    return (
        <div className={styles.user_acc_settings}>
            <MobileUserAccountDetails/>
        </div>
    );
};

export default UserAccountDetails;