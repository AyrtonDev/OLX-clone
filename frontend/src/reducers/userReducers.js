const initialState = {
   email:''
}

const userReducers = (state=initialState, action) =>{

   if(action.type === 'SET_EMAIL'){
      return {...state, email:action.payload.email}
   }

   return state
}

export default userReducers