"use client";

import {useAppDispatch, useAppSelector} from "@/src/hooks";
import {toggle} from "@/src/functions";
import {toggleActions} from "@/src/redux/slices";

import styles from "./MobNavToggler.module.scss";

const MobNavToggler = () => {
    const dispatch = useAppDispatch();
    const mobileNavigation = useAppSelector(state => state.toggleReducer.mobileNavigation);

    const toggleNav = () => {
        toggle({
            state: mobileNavigation,
            dispatch,
            action: toggleActions.toggleMobileNavigation
        });
    };

    return (
        <div className={styles.mob_nav_toggler_container}>
            <button
                className={`${styles.mob_nav_toggler_btn} ${mobileNavigation ? styles.clicked : ""}`}
                onClick={toggleNav}
            >
            </button>
        </div>
    );
};

export default MobNavToggler;