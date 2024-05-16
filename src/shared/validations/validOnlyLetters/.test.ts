import validOnlyLetters from "./validOnlyLetters"

describe('validOnlyLetters valid func',() => {
    let isValid:boolean = true; // valid of input field was created for changing styles of input (Like example if invalid making input red)

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('validOnlyLetters is work', () => {
        const value:string = "John"

        const result = validOnlyLetters(value)

        expect(result).toBeTruthy()
    })

    test('ValidOnlyLetter get`s a numbers', () => {
        const value:string = '123'

        const result = validOnlyLetters(value)

        expect(result).toBeFalsy();
    })
})