import { createSlice } from "@reduxjs/toolkit"

const sharedSlice = createSlice({
    name: "SharedSlice",
    initialState: {
        fullScreenImage: {
            isShow:false,
            imageToShow: ""
        }
    },
    reducers: {
        toggleFullImage (state,action) {
            state.fullScreenImage.imageToShow = action.payload.image
            state.fullScreenImage.isShow = !state.fullScreenImage.isShow
        }
    }
})

export const {toggleFullImage} = sharedSlice.actions

export default sharedSlice.reducer