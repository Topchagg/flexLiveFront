import { configureStore } from "@reduxjs/toolkit"
import { sharedReducer } from "../../shared/sharedApi"

export default configureStore({
    reducer: {
        shared:sharedReducer
    }
})