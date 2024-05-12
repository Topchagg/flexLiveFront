import Wood from "./wood/wood";
import Product from "./product/product";

// we have layers (shared/pages/sections/lib/enteties) every of this layers must have api file
// Here we are import all needs components (That we`ll use in other layers and components)
// and using this file for IMPORTING THIS COMPONENTS, U can not import ui element from button
// it`s ruining all practive and make code too related.

// EXAMPLE
// In footer we`re using UI components like (ContactLocation/ContactNumber) we are not importing
// it`s like this import {ContactLocation} from src/shared/contactLocation/contactLocation
// we have to import like this {ContactLocation} from src/shared/sharedApi/ContactLocation
// this example u can see in file src/sections/footer/footer.tsx

// REMEMBER
// Layer shared I took only for example, it`s work the same for other layers and api files

export {Wood,Product}