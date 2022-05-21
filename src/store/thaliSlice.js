import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    va: [],
    items:[
        {id:1,price:500},
        {id:2,price:500},
        {id:3,price:500},
        {id:4,price:500},
        {id:5,price:500},
        {id:6,price:500},
        {id:7,price:500},
        {id:8,price:500}   
    ],
    items1:[
        {id:9,price:400},
        {id:10,price:400},
        {id:11,price:400},
        {id:12,price:400},
        {id:13,price:400},
        {id:14,price:400},
        {id:15,price:400},
        {id:16,price:400}   
    ],
    items2:[
        {id:17,price:300},
        {id:18,price:300},
        {id:19,price:300},
        {id:20,price:300},
        {id:21,price:300},
        {id:22,price:300},
        {id:23,price:300},
        {id:24,price:300}   

    ],
    items3:[
        {id:25,price:200},
        {id:26,price:200},
        {id:27,price:200},
        {id:28,price:200},
        {id:29,price:200},
        {id:30,price:200},
        {id:31,price:200},
        {id:32,price:200}   
  
    ],
    nm:"",
    mv:[],
    color:true,
}

const thaliSlice = createSlice({
    name:"thalislice",
    initialState,

    reducers:{
        add: (state,action)=>{
            state.va.push(action.payload);
        },
        remove:(state,action)=>{
         let arr =  state.va.filter((itm)=> itm.id !== action.payload);
         state.va = arr;
        },
        addnm:(state,action)=>{
            state.nm = action.payload;
        },
        addmovi:(state,action)=>{
            state.mv.push(action.payload);
        },
        addcolor:(state,action)=>{
            state.color = action.payload;
        },
    },
})


export const {add,remove,addnm,addmovi,addcolor} = thaliSlice.actions;
export default thaliSlice.reducer;