import * as yup from 'yup';

const schema = yup.object({
	email:yup.string().required('the email field cannot be empty').email(),
	password:yup.string().required('the password field cannot be empty')
}).required();

export default schema;
