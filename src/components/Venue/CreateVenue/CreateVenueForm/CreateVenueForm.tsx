"use client";

import {useForm} from "react-hook-form";
import {createVenueValidator} from "@/src/validator";
import {joiResolver} from "@hookform/resolvers/joi";

import styles from "./CreateVenueForm.module.scss";

const CreateVenueForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({mode: "onBlur", resolver: joiResolver(createVenueValidator)});

    const onFormSubmit = async (data) => {
        console.log(data)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className={styles.input_container}>
                    <h3>Name</h3>
                    <p className={styles.input_description}>Please enter your venue name.</p>
                    <input type="text" name={"name"} {...register("name")}/>
                    {((errors?.name) != null) && <span style={{color: "red"}}>Name is required.</span>}
                </div>
                <div className={styles.input_container}>
                    <h3>Photo</h3>
                    <p className={styles.input_description}>Please add your venue photo.</p>
                    <p className={styles.input_description}>Note: It will be among the first things that other users will see about your venue.</p>
                    <p className={styles.input_description}>Following file types are allowed: JPG, JPEG, PNG.</p>
                    <input
                        type="file"
                        name={"photo"}
                        {...register("photo")}
                        className={styles.file_input}
                        accept={"jpg, jpeg, png"}
                    />
                     {((errors?.photo) != null) && <span style={{color: "red"}}>{errors?.photo.message}</span>}
                </div>
                <div className={styles.input_container}>
                    <h3>Location</h3>
                    <p className={styles.input_description}>Please enter your venue location.</p>
                    <input type="text" name={"location"} {...register("location")}/>
                    {((errors?.location) != null) && <span style={{color: "red"}}>Location is required.</span>}
                </div>
                <div className={styles.input_container}>
                    <h3>Schedule</h3>
                    <p className={styles.input_description}>Please enter your venue schedule.</p>
                    <input type="text" name={"schedule"} {...register("schedule")}/>
                    {((errors?.schedule) != null) && <span style={{color: "red"}}>Schedule is required.</span>}
                </div>
                <div className={styles.input_container}>
                    <h3>Contacts</h3>
                    <p className={styles.input_description}>Please enter your venue contacts.</p>
                    <input type="text" name={"contacts"} {...register("contacts")}/>
                    {((errors?.contacts) != null) && <span style={{color: "red"}}>Contacts are required.</span>}
                </div>
                <div className={styles.input_container}>
                    <h3>Description</h3>
                    <p className={styles.input_description}>Please enter a brief venue description.</p>
                    <input type="text" name={"description"} {...register("description")}/>
                    {((errors?.description) != null) && <span style={{color: "red"}}>Description is required.</span>}
                    {((errors?.description) != null) && <div style={{color: "red"}}>Only 10-300 characters are allowed.</div>}
                </div>
                <div className={styles.input_container}>
                    <h3>Tags</h3>
                    <p className={styles.input_description}>Please choose tags that best represent your type of
                        venue.</p>
                    <input type="text" name={"tags"} {...register("tags")}/>
                    {((errors?.tags) != null) && <span style={{color: "red"}}>Choose at least one tag.</span>}
                </div>
                <div className={styles.create_container}>
                    <p className={styles.create_note}>Please note that before publishing your venue, we verify your information.</p>
                    <button className={styles.create_btn}>Create</button>
                </div>
            </form>
        </div>
    );
};

export default CreateVenueForm;