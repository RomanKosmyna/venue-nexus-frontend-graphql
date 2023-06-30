import styles from "./UserAccountHeading.module.scss";

const UserAccountHeading = () => {

    return (
        <header className={styles.user_acc_heading_header}>
            <h1 className={styles.user_acc_heading}>Personal Account Settings</h1>
        </header>
    );
};

export default UserAccountHeading;