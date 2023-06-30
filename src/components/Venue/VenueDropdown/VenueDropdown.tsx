"use client";

import React, {type FC, useState} from "react";

import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";

import styles from "./VenueDropdown.module.scss";

interface IProps {
    children: { children: React.ReactNode };
    dropdownName: string;
}

const VenueDropdown: FC<IProps> = ({children, dropdownName}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpened(prevState => !prevState);
    };

    return (
        <div className={styles.venue_dropdown_container}>
            <div className={styles.venue_dropdown_toggler}>
                <button className={styles.venue_dropdown_btn} onClick={toggleDropdown}>
                    {isOpened ? <MdKeyboardArrowUp className={styles.arrow_icon}/> :
                        <MdKeyboardArrowDown className={styles.arrow_icon}/>
                    }
                    {dropdownName}
                </button>
            </div>
            {isOpened && (
                <>
                    {children}
                </>
            )}
        </div>
    );
};

export default VenueDropdown;