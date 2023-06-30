import {type Dispatch} from "redux";

interface IProps<T> {
    state: boolean;
    dispatch: Dispatch<T>;
    action: (payload: boolean) => T;
}

export const toggle = <T>({state, dispatch, action}: IProps<T>) => {
    dispatch(action(!state));
};