//Write the ActionCreator functions here
// fetch watch
// fetch api for login

import axios from "axios"
import { GET_WATCHES_DATA_FAILURE, GET_WATCHES_DATA_REQUEST, GET_WATCHES_DATA_SUCCESS } from "./actionType"
import { type } from "@testing-library/user-event/dist/type"

export const getWatches=(params)=>(dispatch)=>{

    dispatch({type: GET_WATCHES_DATA_REQUEST})

    let data=axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/watches`, params).then((r)=>
           dispatch({type:GET_WATCHES_DATA_SUCCESS, payload:r.data})
    ).catch((e)=>dispatch({type:GET_WATCHES_DATA_FAILURE}))

   
    return data

}