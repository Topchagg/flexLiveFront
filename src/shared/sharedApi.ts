// handles
import handleOnChange from "./handles/handleOnChangeForm/handleOnChangeForm";

// validFunc
import validOnlyLetters from "./validations/validOnlyLetters/validOnlyLetters";
import validOnlyNumb from "./validations/validOnlyNumbs/validOnlyNumb";
// redux
import sharedReducer from "./slices/sharedSlices";
import { toggleFullImage } from "./slices/sharedSlices";

//custom hooks
import usePost from "./customHooks/usePost";

//tsx elemenets
import { NextArrow,PrevArrow } from "./sliderArrows/arrows";
import IsLoading from "./isLoading/isLoading";
import FullSizePhoto from "./fullSizePhoto/fullSizePhoto";
import TextAreaField from "./textAreaField/textAreaField";
import ContactLocation from "./contactLocation/contactLocation";
import Button from "./button/button";
import ContactNumber from "./contactNumber/contactNumber";
import Carousel from "./carousel/carousel";
import InputField from "./inputField/inputField";


//types
import type SetStateFunction from "./types/setStateFunctionType";
import type { storeType } from "./types/storeType";
import type { formValue } from "./types/formValue";
import type {formField}  from "./types/formFieldType";
import type { validFuncType } from "./types/validFuncType";
import type { handleOnChangeFunction } from "./types/handleOnChangeType";


// we have layers (shared/pages/sections/lib/enteties) every of this layers must have api file
// Here we are import all needs components (That we`ll use in other layers and components)
// and using this file for IMPORTING THIS COMPONENTS, U can not import ui element from button
// it`s ruining all practice and make code too related.

// EXAMPLE
// In footer we`re using UI components like (ContactLocation/ContactNumber) we are not importing
// it`s like this import {ContactLocation} from src/shared/contactLocation/contactLocation
// we have to import like this {ContactLocation} from src/shared/sharedApi
// this example u can see in file src/sections/footer/footer.tsx

// REMEMBER
// Layer shared I took only for example, it`s work the same for other layers and api files


// handles
export {handleOnChange}
// validFunc 
export {validOnlyLetters,validOnlyNumb}
// custom hooks
export {usePost}
// redux
export {sharedReducer,toggleFullImage}
// tsx elements
export {Button,FullSizePhoto,NextArrow,PrevArrow,Carousel,InputField,TextAreaField,ContactLocation,IsLoading,ContactNumber}
// types
export {storeType,handleOnChangeFunction,formValue,validFuncType,formField,SetStateFunction}