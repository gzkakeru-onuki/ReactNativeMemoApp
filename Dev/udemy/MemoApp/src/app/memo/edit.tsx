import { View, Text, TextInput, StyleSheet,Alert } from 'react-native'
import Icon from '../../components/Icon'
import CircleButton from '../../components/CircleButton'
import { router } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { auth, db } from '../../config'
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'
const handlePress = (id:string,content:string): void => {
    if(auth.currentUser===null){
        return
    }
    const ref = doc(db,`users/${auth.currentUser.uid}/memos`,id)
    setDoc(ref,{
        content:content,
        updatedAt:Timestamp.fromDate(new Date())
    })
    .then(()=>{
        router.back()
    })
    .catch((error)=>{
        console.log("error",error)
        Alert.alert("エラーが発生しました")
    })
}
const Edit = () => {
    const id = String(useLocalSearchParams().id)
    const [content, setContent] = useState("")
    useEffect(() => {
        if (auth.currentUser === null) {
            return
        }

        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
        getDoc(ref)
            .then((docRef) => {                
                const Remotecontent = docRef?.data()?.content
                setContent(Remotecontent)
            })
            .catch((error) => {
                console.log("error", error)
            })
    }, [])

    return (
        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.inputContainer}>
                <TextInput multiline autoFocus value={content} style={styles.input} onChangeText={(text) => { setContent(text) }} />
            </View>
            <CircleButton onPress={()=>{handlePress(id,content)}}>
                <Icon name="check" size={24} color="#ffffff" />
            </CircleButton>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inputContainer: {
        flex: 1,
    },
    input: {
        paddingHorizontal: 27,
        paddingVertical: 32,
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        textAlignVertical: 'top',
        color: '#000',
    },
})

export default Edit