import * as Yup from "yup";

export const validateForm = Yup.object().shape({
  name: Yup.string()
    .min(6, "El campo nombre y apellido debe contener al menos 6 caracteres.")
    .max(40, "El campo nombre y apellido tiene un límite de 40 caracteres.")
    .required("El campo es obligatorio."),
  dni: Yup.string()
    .matches(/^[0-9]+$/, "El campo DNI no contiene un formato válido.")
    .max(8, "El campo DNI debe tener 8 dígitos.")
    .required("El campo es obligatorio."),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "El campo teléfono no contiene un formato válido.")
    .max(11, "El campo teléfono no puede tener más de 11 dígitos.")
    .required("El campo es obligatorio."),
  email: Yup.string()
    .email("El campo debe ser un correo electrónico válido.")
    .required("El campo es obligatorio."),
  emailRepeat: Yup.string()
    .email("El campo debe ser un correo electrónico válido.")
    .required("El campo es obligatorio."),
  address: Yup.string()
    .min(6, "El campo domicilio debe contener al menos 6 caracteres.")
    .max(50, "El domicilio tiene un límite de 50 caracteres."),
  sending: Yup.string().required("Este campo es obligatorio"),
});

export let sameEmailValue;
export let valueErrorEmail;
export const sameEmail = () => {
  if (emailRepeat.value !== email.value) {
    sameEmailValue = "Los correos electrónicos no coinciden.";
    valueErrorEmail = true;
  } else {
    sameEmailValue = "";
    valueErrorEmail = false;
  }
};
