"use client";

import {useWidthTracker} from "@/src/hooks";
import {useEffect, useState} from "react";
import MobNavToggler from "@/src/components/Navigation/MobileNavigation/MobNavToggler/MobNavToggler";
import DesktopNavigation from "@/src/components/Navigation/DesktopNavigation/DesktopNavigation";

const Navigation = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const innerWidth = useWidthTracker();

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <>
            {isLoaded && (
                <>
                    {innerWidth < 680 ? <MobNavToggler/> : <DesktopNavigation/>}
                </>
            )}
        </>
    );
};

export default Navigation;