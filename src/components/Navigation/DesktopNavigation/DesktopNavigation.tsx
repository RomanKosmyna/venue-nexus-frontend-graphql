import Link from "next/link";
import {useAppDispatch} from "@/src/hooks";
import {useEffect} from "react";
import {toggleActions} from "@/src/redux/slices";

import styles from "./DesktopNavigation.module.scss";
import UserAccountToggler from "@/src/components/User/UserAccountToggler/UserAccountToggler";

const DesktopNavigation = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(toggleActions.toggleMobileNavigation(false));
    }, [])

    return (
        <div className={styles.navigation_wrapper}>
            <nav className={styles.navigation_container}>
                <ul className={styles.navigation_list}>
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/top"}>Top</Link>
                    </li>
                    <li>
                        <Link href={"/puyachok"}>Puyachok</Link>
                    </li>
                    <li>
                        <UserAccountToggler/>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DesktopNavigation;