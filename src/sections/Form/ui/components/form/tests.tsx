// // Предположим, что у вас есть import React и render из react-dom для тестирования React-компонентов

// // Импортируем функцию для тестирования
// import { handleOnChange } from './form';

// // Mock функции setFormInfo
// const setFormInfoMock = jest.fn();

// // Mock event
// const mockEvent = {
//   target: {
//     name: 'testFieldName',
//     value: 'testValue',
//   },
// };

// describe('handleOnChange function', () => {
//   beforeEach(() => {
//     // Сбросим мок функции setFormInfo после каждого теста
//     setFormInfoMock.mockClear();
//   });

//   it('should set form info without validation if validFunc is not provided', () => {
//     handleOnChange(mockEvent, undefined, setFormInfoMock);
//     expect(setFormInfoMock).toHaveBeenCalledWith({
//       testFieldName: 'testValue',
//     });
//   });

//   it('should set form info with validation if validFunc is provided and returns true', () => {
//     const validFuncMock = jest.fn().mockReturnValue(true);
//     handleOnChange(mockEvent, validFuncMock, setFormInfoMock);
//     expect(validFuncMock).toHaveBeenCalledWith('testValue');
//     expect(setFormInfoMock).toHaveBeenCalledWith({
//       testFieldName: 'testValue',
//     });
//   });

//   it('should not set form info with validation if validFunc is provided and returns false', () => {
//     const validFuncMock = jest.fn().mockReturnValue(false);
//     handleOnChange(mockEvent, validFuncMock, setFormInfoMock);
//     expect(validFuncMock).toHaveBeenCalledWith('testValue');
//     expect(setFormInfoMock).not.toHaveBeenCalled();
//   });
// });