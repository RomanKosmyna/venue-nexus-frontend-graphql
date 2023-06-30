import CreateVenueForm from "@/src/components/Venue/CreateVenue/CreateVenueForm/CreateVenueForm";

import styles from "./CreateVenue.module.scss";

const CreateVenue = () => {
    return (
        <div className={styles.create_venue_wrapper}>
            <div className={styles.create_venue_container}>
                <CreateVenueForm/>
            </div>
        </div>
    );
};

export default CreateVenue;