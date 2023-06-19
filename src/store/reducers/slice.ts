import { createSlice } from "@reduxjs/toolkit";

export interface Input {
    phone: string,
    email: string
}

export interface State {
    tab1: Input,
    tab2: Input,
    tab3: Input,
}
const initialState: State = {
    tab1: {
        phone: '',
        email: '',
    },
    tab2: {
        phone: '',
        email: '',
    },
    tab3: {
        phone: '',
        email: '',
    },
}

export const store = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setPhone: (state, actions) => {
            state.tab1 = {
                ...state.tab1,
                phone: actions.payload.phone
            };
        },
        setEmail: (state, actions) => {
            state.tab1 = {
                ...state.tab1,
                email: actions.payload.email
            };
        },

    },
})

export const { setPhone, setEmail } = store.actions
export default store.reducer