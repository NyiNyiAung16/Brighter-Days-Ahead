import { feelingSchema, goalSchema, loginSchema, registerSchema, relaxationSchema } from "./validationSchema";

const loginValidation = ({ email, password }) => {
  const result = loginSchema.safeParse({ email, password });

  return { errors: convertToObject(result?.error?.issues), data: result?.data };
};



const registerValidation = ({ username, email, password, role }) => {
  const result = registerSchema.safeParse({ username, email, password, role });

  return { errors: convertToObject(result?.error?.issues), data: result?.data };
};



const feelingValidation = ({ text }) => {
  const result = feelingSchema.safeParse({ text });

  return { errors: convertToObject(result?.error?.issues), data: result?.data };
}



const goalValidation = ({ body, completed }) => {
  const result = goalSchema.safeParse({ body, completed });

  return { errors: convertToObject(result?.error?.issues), data: result?.data };
}


const relaxationValidation = ({ message, videoUrl }) => {
  const result = relaxationSchema.safeParse({ message, videoUrl });

  return { errors: convertToObject(result?.error?.issues), data: result?.data };
}



const convertToObject = (errors) => {
  if (!errors) return;
  return errors.reduce((acc, issue) => {
    const key = issue.path[0];
    acc[key] = issue;
    return acc;
  }, {});
};

export { loginValidation, registerValidation, feelingValidation, goalValidation, relaxationValidation };
