import handleOnChange from "./handleOnChangeForm";
import {validOnlyNumb } from "../../sharedApi";


describe('handleOnChange', () => {
    const setFuncMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('handler work (without valid func)', () => {
        const event = {
            target: { value: '123' }
        } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

        handleOnChange(event,0,10,setFuncMock,);

        expect(setFuncMock).toHaveBeenCalledTimes(1);
    })

    test('handler work (with valid func)',() => {
        const event = {
            target: { value: '123' }
        } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

        handleOnChange(event,0,10,setFuncMock,validOnlyNumb);

        expect(setFuncMock).toHaveBeenCalledTimes(1);
    })

    test('handler take min amount of symbols (with valid func)', () => {
        const event = {
            target: { value: '123' }
        } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

        handleOnChange(event,3,10,setFuncMock,validOnlyNumb)

        expect(setFuncMock).toHaveBeenCalledTimes(1);
    })

    test('handler take max amount of symbols (with valid func)', () => {
        const event = {
            target: { value: '123' }
        } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

        handleOnChange(event,0,3,setFuncMock,validOnlyNumb)

        expect(setFuncMock).toHaveBeenCalledTimes(1);
    })

    test('handler take less symbols then need (with valid func)',() => {
        const event = {
            target: { value: '123' }
        } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

        handleOnChange(event,5,10,setFuncMock,validOnlyNumb)

        expect(setFuncMock).toHaveBeenCalledTimes(1);
    }),
    
    test('handler take more symbols then need (with valid Func)',() => {
        const event = {
            target: { value: '123' }
        } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

        handleOnChange(event,0,2,setFuncMock,validOnlyNumb)

        expect(setFuncMock).toHaveBeenCalledTimes(0); 
    })

    test('handler take min amount of symbols (without valid func)', () => {
        const event = {
            target: { value: '123' }
        } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

        handleOnChange(event,3,10,setFuncMock,validOnlyNumb)

        expect(setFuncMock).toHaveBeenCalledTimes(1);
    })

    test('handler take max amount of symbols (without valid func)', () => {
        const event = {
            target: { value: '123' }
        } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

        handleOnChange(event,0,3,setFuncMock,validOnlyNumb)

        expect(setFuncMock).toHaveBeenCalledTimes(1);
    })

    test('handler take less symbols then need (without valid func)',() => {
        const event = {
            target: { value: '123' }
        } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

        handleOnChange(event,5,10,setFuncMock,validOnlyNumb)

        expect(setFuncMock).toHaveBeenCalledTimes(1);
    }),
    
    test('handler take more symbols then need (without valid Func)',() => {
        const event = {
            target: { value: '123' }
        } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

        handleOnChange(event,0,2,setFuncMock,validOnlyNumb)

        expect(setFuncMock).toHaveBeenCalledTimes(0); //////////////////
    })

    

    


});