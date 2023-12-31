import {configureStore} from "@reduxjs/toolkit"
import { loginReducer, updateUserReducer, userReducer } from "./reducers/user";


const store = configureStore({
    reducer:{
        user:userReducer,
        login:loginReducer,
        update:updateUserReducer
    }
})

export default store;