import * as yup from 'yup';

const schema = yup.object({
	name: yup.string().required('the name field cannot be empty'),
	email:yup.string().required('the email field cannot be empty').email(),
	password:yup.string().required('the password field cannot be empty').min(6, 'minimum 6 digits'),
}).required();

export default schema;
