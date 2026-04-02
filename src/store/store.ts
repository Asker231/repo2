import { Action, configureStore, ThunkDispatch } from "@reduxjs/toolkit";

import DealSlice, { InitialDealState } from './dealsSlice/dealSlice'
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export interface IState{
    deals:InitialDealState
}

export const store = configureStore({
    reducer:{
        deals:DealSlice
    },
})



export type RootState = ReturnType<typeof store.getState>
export const useAppSelector:TypedUseSelectorHook<IState> = useSelector
export const useDispatchApp = ()=>useDispatch<ThunkDispatch<IState,null,Action>>();

