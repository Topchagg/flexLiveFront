type formValue = { // type for setFunction that give to know about prev values if u need deeper object please, rename this type and create another one with uniq name
    [key:string]: {
        value:string,
        isValid:boolean,
    }
}

export type {formValue}