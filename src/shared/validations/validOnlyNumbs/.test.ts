import validOnlyNumb from "./validOnlyNumb"

describe('validOnlyNumb valid func', () => {
    let isValid:boolean = true; // valid of input field was created for changing styles of input (Like example if invalid making input red)

    test('ValidOnlyNumb is work', () => {
        const value:string = "123";

        const result = validOnlyNumb(value,isValid,0,10)

        expect(result).toBeTruthy();
    })

    test('validOnlyNumb get`s letters', () => {
        const value:string = "something";

        const result = validOnlyNumb(value,isValid,0,10);

        expect(result).toBeFalsy();
    })

    test('entered more symbols than needed validOnlyNumb', () => {
        const value:string = "12345";

        const result = validOnlyNumb(value,isValid,1,4)

        expect(result).toBeFalsy();
    })

    test('Entered min amount of elements', () => {
        const value:string = "123456789";
        
        const result = validOnlyNumb(value,isValid,9,15);

        expect(result).toBeTruthy();
    })

    test('Entered max amount of elements', () => {
        const value:string = "123456789";
        
        const result = validOnlyNumb(value,isValid,0,9);

        expect(result).toBeTruthy();
    })
})