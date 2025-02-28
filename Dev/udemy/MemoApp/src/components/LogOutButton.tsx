import {TouchableOpacity,Text,StyleSheet} from 'react-native'
import { router } from 'expo-router'

const handlePress =():void =>{
    router.replace("/auth/log_in")
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