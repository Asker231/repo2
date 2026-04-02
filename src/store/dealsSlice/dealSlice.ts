import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type InitialDealState = {
    filters: {
        cnum: string
        dealNo: string
          manager: string
        note: string
        product: string[]
    },
    visibleOptionalFilters: {
        manager: boolean
        note: boolean
        product: boolean
    }
}

export type DealFilters = InitialDealState["filters"]
export type VisibleOptionalFilters = InitialDealState["visibleOptionalFilters"]

export const initialState: InitialDealState = {
    filters: {
        cnum: "",
        dealNo: "",
        manager: "",
        note: "",
        product: [],
    },
    visibleOptionalFilters: {
        manager: false,
        note: false,
        product: false,
    }
}

const dealSlice = createSlice({
    name: "dealSlice",
    initialState,
    reducers: {
        changeFillters: (state, action: PayloadAction<Partial<DealFilters>>) => {
            state.filters = {
                ...state.filters,
                ...action.payload,
            }
        },
        clearFilters: () => ({
            filters: {
                cnum: "",
                dealNo: "",
                manager: "",
                note: "",
                product: [],
            },
            visibleOptionalFilters: {
                manager: false,
                note: false,
                product: false,
            },
        }),
        changeVisibleOptionalFilters: (state, action: PayloadAction<Partial<VisibleOptionalFilters>>) => {
            state.visibleOptionalFilters = {
                ...state.visibleOptionalFilters,
                ...action.payload,
            }
        },
    },
})

export const { changeFillters, clearFilters ,changeVisibleOptionalFilters} = dealSlice.actions
export default dealSlice.reducer
