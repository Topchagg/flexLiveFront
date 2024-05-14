import handleOnChange from "./handleOnChangeForm";
import {validOnlyNumb } from "../../sharedApi";


describe('handleOnChange', () => {
    const setFuncMock = jest.fn();
    let isValid:boolean = true; // valid of input field was created for changing styles of input (Like example if invalid making input red)

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('handler work without valid func', () => {
        const e = {target: {name:'username',value:'123'}}

        handleOnChange(e,0,10,setFuncMock,isValid);

        expect(setFuncMock).toHaveBeenCalledTimes(1);
    })

    test('handler work with valid func',() => {
        const e = {target: {name:'username',value:'123'}}

        handleOnChange(e,0,10,setFuncMock,isValid,validOnlyNumb);

        expect(setFuncMock).toHaveBeenCalledTimes(1);
    })
});