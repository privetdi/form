import { createSlice } from "@reduxjs/toolkit";
import { access } from "fs";


export interface InputMap1 {
    phone: string,
    email: string,
}
export interface InputMap3 {
    phone: string,
    email: string,
    advantages: Advantages
    chekbox: Chekbox
    radio: { value: number }
}
export interface InputMap4 {
    successfully: boolean
    modalIsOpen: boolean
}
interface Advantages {
    [key: string]: { value: string }
}
interface Chekbox {
    [value: string]: { value: boolean }
}


export interface State {
    tab1: InputMap1,
    tab2: InputMap1,
    tab3: InputMap3,
    tab4: InputMap4,
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
        advantages: {
            input_1: { value: '' },
            input_2: { value: '' },
            input_3: { value: '' },
        },
        chekbox: {
            checkbox_1: { value: false },
            checkbox_2: { value: false },
            checkbox_3: { value: false },
        },
        radio: {
            value: 0
        }
    },
    tab4: {
        successfully: true,
        modalIsOpen: true
    }
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
        addAdvantages: (state, actions) => {
            let lastItemIndex = `input_${Object.keys(state.tab3.advantages).length === 0 ? 1 : Object.keys(state.tab3.advantages).length + 1}`;
            state.tab3 = {
                ...state.tab3,
                advantages: {
                    ...state.tab3.advantages,
                    [lastItemIndex]: { value: '' }
                }
            }
        },
        setAdvantages: (state, actions) => {
            let obj = { ...state.tab3.advantages }
            obj[`input_${actions.payload.idItem}`].value = actions.payload.value
            let newObj = { ...obj }
            state.tab3 = {
                ...state.tab3,
                advantages: {
                    ...newObj
                }
            };
        },
        dispatchRemoveAdvantages: (state, actions) => {
            let obj = { ...state.tab3.advantages }
            delete obj[`input_${actions.payload.id}`]
            let newObj = { ...obj }
            state.tab3 = {
                ...state.tab3,
                advantages: {
                    ...newObj
                }
            }
        },
        setCheckBox: (state, actions) => {
            let obj = { ...state.tab3.chekbox }
            obj[`checkbox_${actions.payload.idItem}`].value = obj[`checkbox_${actions.payload.idItem}`].value ? false : true;
            let newObj = { ...obj }
            state.tab3 = {
                ...state.tab3,
                chekbox: {
                    ...newObj
                }

            }
        },
        setRadio: (state, actions) => {
            state.tab3 = {
                ...state.tab3,
                radio: {
                    value: actions.payload.idItem
                }
            }
        },
        switchModalIsOpen: (state) => {
            state.tab4 = {
                ...state.tab4,
                modalIsOpen: !state.tab4.modalIsOpen
            }

        }
    },
})

export const { setPhone, setEmail, addAdvantages, dispatchRemoveAdvantages, setAdvantages, setCheckBox, setRadio, switchModalIsOpen } = store.actions
export default store.reducer