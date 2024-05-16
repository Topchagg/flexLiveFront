type SetStateFunction<T> = (value: T | ((prevValue: T) => T)) => void; // setStateFunction that depends of object that was created in useState hook

export default SetStateFunction