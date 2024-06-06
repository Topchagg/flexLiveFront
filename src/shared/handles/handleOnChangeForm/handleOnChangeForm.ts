import { SetStateFunction, handleOnChangeFunction, validFuncType, formValue } from "../../sharedApi"; 

// This function handles input changes, validates, and updates the form state accordingly.
// For creating new forms, use inputField/textAreaField with the required props.
// Refer to src/shared/types/handleOnChangeType.ts for more details.

const handleOnChange: handleOnChangeFunction = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  min: number,
  max: number,
  setFunc: SetStateFunction<formValue>,
  validFunc?: validFuncType
) => {
  const value = e.target.value;
  const targetLength = value.length;
  const isValid = targetLength >= min && targetLength <= max && (!validFunc || validFunc(value));

  setFunc(prev => ({
    ...prev,
    [e.target.name]: {
      ...prev[e.target.name],
      value,
      isValid
    }
  }));
};

export default handleOnChange;