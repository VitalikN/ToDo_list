import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
  numberInput: Yup.number()
    .required("Character length is required!")
    .positive()
    .integer(),
  textInput: Yup.string().required("This field is required!"),
});
