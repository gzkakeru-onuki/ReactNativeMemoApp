import {Redirect} from 'expo-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config'
import { useEffect } from 'react'
import { router } from 'expo-router'

const index =() =>{
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user!==null){
                router.replace("/memo/list")
            }
        })
        },[])
        return <Redirect href="/auth/sign_up"/>
        
}

export default index