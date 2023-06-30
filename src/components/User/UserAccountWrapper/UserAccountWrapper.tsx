"use client";

import UserAccountModule from "@/src/components/User/UserAccountModule/UserAccountModule";
import {useAppSelector} from "@/src/hooks";

const UserAccountWrapper = () => {
    const userAccount = useAppSelector(state => state.toggleReducer.userAccount);

    return (
        <>
            {userAccount && <UserAccountModule/>}
        </>
    );
};

export default UserAccountWrapper;