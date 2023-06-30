"use client";

import {useAppDispatch, useAppSelector} from "@/src/hooks";
import MobNavMenu from "@/src/components/Navigation/MobileNavigation/MobNavMenu/MobNavMenu";

const MobNavWrapper = () => {
    const dispatch = useAppDispatch();
    const mobileNavigation = useAppSelector(state => state.toggleReducer.mobileNavigation);

    return (
        <>
            {mobileNavigation && <MobNavMenu/>}
        </>
    );
};

export default MobNavWrapper;