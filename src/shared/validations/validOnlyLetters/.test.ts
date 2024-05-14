import validOnlyLetters from "./validOnlyLetters"

describe('validOnlyLetters valid func',() => {
    let isValid:boolean = true; // valid of input field was created for changing styles of input (Like example if invalid making input red)

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('validOnlyLetters is work', () => {
        const value:string = "John"

        const result = validOnlyLetters(value,isValid,0,10)

        expect(result).toBeTruthy()
    })

    test('ValidOnlyLetter get`s a numbers', () => {
        const value:string = '123'

        const result = validOnlyLetters(value,isValid,0,10)

        expect(result).toBeFalsy();
    })

    test('Entered more symbols than needed validOnlyLetters', () => {
        const value:string = "something"

        const result = validOnlyLetters(value,isValid,0,4)

        expect(result).toBeFalsy();
    })

    test('Entered min amount of elements', () => {
        const value:string = "something";
        
        const result = validOnlyLetters(value,isValid,9,15);

        expect(result).toBeTruthy();
    })

    test('Entered max amount of elements', () => {
        const value:string = "something";
        
        const result = validOnlyLetters(value,isValid,0,9);

        expect(result).toBeTruthy();
    })
})