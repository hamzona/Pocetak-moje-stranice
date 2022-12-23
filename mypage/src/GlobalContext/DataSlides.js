import { createContext,useContext,useState } from "react";
import {v4}from 'uuid'

const DataSlides=createContext();
const UpdateDataSlides=createContext();


export function useDataSlides(){
    return useContext(DataSlides);
}
export function useUpdateDataSlides(){
    return useContext(UpdateDataSlides);
}

export default function SlidesContextProvider({children}){
    const [slides,setSlides]=useState([{
        key:v4(),
        question:"question",
        answers:[
          {key:v4(),correct:true,content:'answer 1'},
          {key:v4(),correct:true,content:'answer 2'},
          {key:v4(),correct:true,content:'answer 3'},
          {key:v4(),correct:true,content:'answer 4'}
        ]
      }]);

    return <DataSlides.Provider value={slides}>
        <UpdateDataSlides.Provider value={setSlides}>
        {children}
        </UpdateDataSlides.Provider>
    </DataSlides.Provider>
}
