import { configureStore, combineReducers } from "@reduxjs/toolkit";
import listesReducers, {fetchAllListesValues} from './memes'
export const store=configureStore({
    reducer:combineReducers({listes:listesReducers}),
    devTools:true
})

store.dispatch(fetchAllListesValues())