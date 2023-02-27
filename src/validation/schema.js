import * as yup from 'yup'

const schema = yup.object().shape({
    username: yup.string().max(16),
    name: yup.string().max(16),
    surname: yup.string().max(16),
    email: yup.string().email().required(),
    password: yup.string().min(3).matches(/[a-z]/, "password must contain SMALL letters" ).required(),
    password2: yup.string().oneOf([yup.ref('password'), null]),
    terms: yup.boolean().oneOf([true], "You must check the terms and conditions ")
}); 

export default schema;