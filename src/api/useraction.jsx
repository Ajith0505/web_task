import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
    loading: false,
    userInfo: null,
    userToken,
    error: null,
    success: false,
    isloggedin:false,
    adCategory:[]
  }
 


export const userLogin = createAsyncThunk(
    'user/login',
    async ({ username, password }, { rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        const config = {
          headers: {
            'Content-Type': 'application/json',
             "Access-Control-Allow-Origin": "*"
          },
        }
       
        const response  = await axios.post(
          'http://10.6.19.51:5000/user/login',
          { username, password },
          config
        )
        const result = await response.data
        
        return result;
      } catch (error) {
        
        // return custom error message from API if any
        if (error.response && error.response.data) {
  
          return rejectWithValue(error.response.data)
        } else {

          return rejectWithValue(error.response)
        }
      }
    }
  )


  export const fetchAdcategory = createAsyncThunk(
    'user/fetchAd',
    async (arg, { getState, rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        const { fetchAd } = getState()
        const config = {
          headers: {
             "Access-Control-Allow-Origin": "*"
          },
        }
       
        const response  = await axios.get(
          'http://10.6.19.51:5000/ad/category',
          config
        )
        const result = await response.data
        
        return result;
      } catch (error) {
        
        // return custom error message from API if any
        if (error.response && error.response.data) {
  
          return rejectWithValue(error.response.data)
        } else {

          return rejectWithValue(error.response)
        }
      }
    }
  )
