const initialState = {
    email: "none",
    userId: "none", 
    accessToken: "none",
    refreshToken: "none",
    role : "none"
}
const userInfo = (state = initialState, action) => {   
    switch(action.type){
        case 'userInfo/Update': return {
            // ...state,
            email: action.payload.data.email,
            userId: action.payload.data.userId, 
            accessToken: action.payload.data.accessToken,
            refreshToken: action.payload.data.refreshToken,
            role : action.payload.data.role
        }
        default: {return {...state}}
    }
}
export default userInfo;