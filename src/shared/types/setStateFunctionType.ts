type SetStateFunction<T> = (value: T | ((prevValue: T) => T)) => void;

export default SetStateFunction