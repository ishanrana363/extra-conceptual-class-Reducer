export const authReducer = (currentState,action) =>{
    const {key,value} = action;
    return({
        ...currentState,
        [key] : value
    })
}