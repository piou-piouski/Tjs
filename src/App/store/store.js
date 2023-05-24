import { configureStore, combineReducers } from "@reduxjs/toolkit";
import listesReducers, {fetchAllListesValues} from './memes'
import currentReducers from './current'
export const store=configureStore({
    reducer:combineReducers({listes:listesReducers, current:currentReducers}),
    devTools:true
})

store.dispatch(fetchAllListesValues())