import {useState} from 'react';

export function UseLocalStorage<T>(key: string, initialValue: T | (()=>T)){
    // return ()
    const [value, setValue] = useState<T>(()=>{
        const jsonValue = localStorage.getItem(key)
        if(jsonValue == null){
            if(typeof initialValue === 'function'){
                return initialValue as ()=>{

                }
            }else{
                return initialValue
            }
        } 
        else{
            return JSON.parse(jsonValue)
        }
    })
    return [key, value]
}