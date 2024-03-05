import { configureStore } from "@reduxjs/toolkit";
import GlobalDataSet from "../slices/GlobalDataSet";
export const Store = configureStore({
    reducer:GlobalDataSet
})