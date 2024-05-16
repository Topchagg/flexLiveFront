import validOnlyNumb from "./validOnlyNumb"

describe('validOnlyNumb valid func', () => {
    let isValid:boolean = true; // valid of input field was created for changing styles of input (Like example if invalid making input red)

    test('ValidOnlyNumb is work', () => {
        const value:string = "123";

        const result = validOnlyNumb(value)

        expect(result).toBeTruthy();
    })

    test('validOnlyNumb get`s letters', () => {
        const value:string = "something";

        const result = validOnlyNumb(value);

        expect(result).toBeFalsy();
    })


})