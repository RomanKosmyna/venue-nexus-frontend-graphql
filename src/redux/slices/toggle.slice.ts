import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface IState {
    mobileNavigation: boolean;
    userAccount: boolean;
}

const initialState: IState = {
    mobileNavigation: false,
    userAccount: false
};

const toggleSlice = createSlice({
    name: "toggleSlice",
    initialState,
    reducers: {
        toggleMobileNavigation: (state: IState, action: PayloadAction<boolean>) => {
            state.mobileNavigation = action.payload;
        },
        toggleUserAccount: (state: IState, action: PayloadAction<boolean>) => {
            state.userAccount = action.payload;
        }
    }
});

const {reducer: toggleReducer, actions: {toggleMobileNavigation, toggleUserAccount}} = toggleSlice;

const toggleActions = {
    toggleMobileNavigation,
    toggleUserAccount
};

export {toggleReducer, toggleActions};