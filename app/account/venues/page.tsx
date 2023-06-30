import ReturnToUserAccountDetails
    from "@/src/components/User/UserAccountDetails/ReturnToUserAccountDetails/ReturnToUserAccountDetails";

import "../../../src/styles/page.scss";
import VenueDropdown from "@/src/components/Venue/VenueDropdown/VenueDropdown";
import CreateVenue from "@/src/components/Venue/CreateVenue/CreateVenue";

const Page = () => {
    return (
        <div className={"page"}>
            <div className={"content-wrapper"}>
                <ReturnToUserAccountDetails/>

                <VenueDropdown dropdownName={"Create Venue"}>
                    <CreateVenue/>
                </VenueDropdown>

                <VenueDropdown dropdownName={"Edit Venue"}>
                    <div>2</div>
                </VenueDropdown>
            </div>
        </div>
    );
};

export default Page;