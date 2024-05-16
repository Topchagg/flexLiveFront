import { SetStateFunction, formValue, validFuncType } from "../sharedApi";

type handleOnChangeFunction = (
    // Reusable function handleOnChange, used in every created form.
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, // Default event for input/textarea change
    min: number, // Minimum number of characters in value
    max: number, // Maximum number of characters in value
    setFunc: SetStateFunction<formValue>, // Type is any because the object can vary with different amounts of fields
    validFunc?: validFuncType // Optional validation function to validate the data
) => void;

export type { handleOnChangeFunction };

// More info about SetStateFunction:
// SetStateFunction depends on the value or object being set in the useState hook.
// For example, if we want to get the previous value, we have to initialize this previous value and know its structure.
// Look in src/sections/questionForm/ui/components/form/form.tsx where we created an interface like:

// type questionFormInfo = {
//     userName: formField; // formField is an object that has a value (for setting and sending to the server) and isValid value to control this field
//     userPhoneNumber: formField; // formField is an object that has a value (for setting and sending to the server) and isValid value to control this field
//     userMessage: formField; // formField is an object that has a value (for setting and sending to the server) and isValid value to control this field
// };

// This shows TypeScript that we have this object and can call this object, and if we call the set function of this form,
// we know about the value and can use ...prev, [] to spread previous values. That's why we use ANY TYPE,
// because the form can have more or fewer than three fields.

// You can see more about formField here: src/shared/types/formFieldType.ts

// Also, you can see how to use setStateFunction in inputField. This has all been written before.
// So, if you need to create a new form for a new section, for example, for registration, please use only the
// inputField component. Everything you need has already been written.

// Example of a new form:

// 1. Create a new type for the useState Hook
// type **NameOfForm** = {
//     fieldName1: formField,
//     fieldName2: formField,
//     fieldName3: formField,
//     fieldName4: formField,
//     fieldName5: formField,
// };

// 2. Call useState hook and initialize this object
// const [formInfo, setFormInfo] = useState<**NameOfForm**>({
//     fieldName1: { value: '', isValid: false },
//     fieldName2: { value: '', isValid: false },
//     fieldName3: { value: '', isValid: false },
//     fieldName4: { value: '', isValid: false },
//     fieldName5: { value: '', isValid: false },
// });

// 3. Create fields in the form
// Wrap the form in a form-wrapper, then for each input-field-wrapper create an <InputField> component.
// Information about the required props for <InputField> can be found in src/shared/inputField.