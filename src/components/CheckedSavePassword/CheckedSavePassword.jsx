import React from "react";

export const CheckedSavePassword = ({
  checked,
  values,
  setEmail,
  setPassword,
  setChecked,
}) => {
  return (
    <>
      <div className="input-group mt-3">
        <input
          type="checkbox"
          name="savePassword"
          id="savePassword"
          className="mx-2 form-check-input"
          defaultChecked={checked}
          onClick={(event) => {
            if (event.target.checked) {
              localStorage.setItem(
                "emailCompucell",
                JSON.stringify(values.email)
              );
              localStorage.setItem(
                "passwordCompucell",
                JSON.stringify(values.password)
              );

              localStorage.setItem(
                "checkedCompucell",
                JSON.stringify(event.target.checked)
              );
              setEmail(values.email);
              setPassword(values.password);
              setChecked(event.target.checked);
            } else {
              localStorage.removeItem("emailCompucell");
              localStorage.removeItem("passwordCompucell");
              localStorage.removeItem("checkedCompucell");
            }
          }}
        />
        <label htmlFor="savePassword" className="form-check-label">
          Recordar contraseña
        </label>
      </div>
    </>
  );
};
