import {useAppDispatch, useAppSelector} from "@/src/hooks";
import {toggle} from "@/src/functions";
import {toggleActions} from "@/src/redux/slices";

import styles from "./UserAccountToggler.module.scss";

const UserAccountToggler = () => {
    const dispatch = useAppDispatch();
    const userAccount = useAppSelector(state => state.toggleReducer.userAccount);

    const toggleUserAccount = () => {
        toggle({
            state: userAccount,
            dispatch,
            action: toggleActions.toggleUserAccount
        })
    }

    return (
        <div className={styles.user_acc_toggler}>
            <button
                className={styles.user_acc_toggle_btn}
                onClick={toggleUserAccount}
            >
            </button>
        </div>
    );
};

export default UserAccountToggler;