import Joi from "joi";

export const createVenueValidator = Joi.object({
    name: Joi.string()
        .required(),

    photo: Joi.custom((value, helpers) => {
        if (value === undefined || value.length === 0) {
            return helpers.error("required");
        }

        const validateFile = Joi.object({
            name: Joi.string().required(),
            size: Joi.number().required(),
            type: Joi.string().valid("image/jpeg", "image/jpg", "image/png").required(),
        }).validate({
            name: value[0]?.name,
            size: value[0]?.size,
            type: value[0]?.type,
        });

        if (validateFile.error !== undefined) {
            return helpers.error("not validated");
        }

        return value[0];
    }).required().messages({
        "required": "Photo is required.",
        "not validated": "Incorrect file type."
    }),

    location: Joi.string()
        .required(),

    schedule: Joi.string()
        .required(),

    contacts: Joi.string()
        .required(),

    description: Joi.string()
        .min(10)
        .max(300)
        .required(),

    tags: Joi.string()
        .required()
})