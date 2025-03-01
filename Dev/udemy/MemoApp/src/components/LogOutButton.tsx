import {TouchableOpacity,Text,StyleSheet} from 'react-native'
import { router } from 'expo-router'
import {signOut} from 'firebase/auth'
import { auth } from '../config'
import { Alert } from 'react-native'

const handlePress =():void =>{
    signOut(auth)
    .then(()=>{
        router.replace("/auth/log_in")
    })
    .catch(()=>{
        
        Alert.alert("ログアウトに失敗しました")
    })
}

const LogOutButton = ():JSX.Element => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.headerRight}>ログアウト</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headerRight:{
        color:"rgba(255,255,255,0.7)",
        fontSize:14,
        fontWeight:"bold",
    }
})

export default LogOutButton