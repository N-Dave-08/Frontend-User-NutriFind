import * as Yup from 'yup';

export const validationSchemas = [

    Yup.object().shape({
        firstName: Yup
            .string()
            .min(3, "first name must at least 3 characters long")
            .required("first name is required"),
        middleName: Yup
            .string()
            .min(3, "middle name must at least 3 characters long")
            .required("middle name is required"),
        lastName: Yup
            .string()
            .min(3, "last name must at least 3 characters long")
            .required("last name is required"),
    }),

    Yup.object().shape({
        occupation: Yup
            .string()
            .min(3, "occupation must at least 3 characters long")
            .required("occupaion is required"),
    }),

    Yup.object().shape({
        username: Yup
            .string()
            .min(3, "username must at least 3 characters long")
            .required("username is required"),
        password: Yup
            .string()
            .min(6, "password must at least 6 characters long")
            .matches(/^(?=.*[A-Z])/, "password must have at least one uppercase letter")
            .matches(/^(?=.*\d)/, "password must have at least one number")
            .matches(/^(?=.*[\W_])/, "password must have at least one special character")
            .required("password is required"),
        confirmPassword: Yup
            .string()
            .oneOf([Yup.ref('password'), null], 'Password do not match')
            .required("confirm you password")
    }),
]