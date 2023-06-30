import Link from "next/link";

import styles from "./MobileUserAccountDetails.module.scss";

const MobileUserAccountDetails = () => {
    return (
        <div className={styles.user_acc_links_container}>
            <ul className={styles.user_acc_settings_list}>
                <li>
                    <Link href={"/account/settings"}>General</Link>
                </li>
                <li>
                    <Link href={"/account/venues"}>Venues</Link>
                </li>
                <li>
                    <Link href={"/account/news"}>News</Link>
                </li>
                <li>
                    <Link href={"/account/favourite"}>Favourite Venues</Link>
                </li>
                <li>
                    <Link href={"/account/comments"}>Comments</Link>
                </li>
                <li>
                    <Link href={"/account/ratings"}>Ratings</Link>
                </li>
            </ul>
        </div>
    );
};

export default MobileUserAccountDetails;