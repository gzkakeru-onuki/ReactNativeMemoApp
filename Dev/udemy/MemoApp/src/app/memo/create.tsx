import { View, Text, TextInput, StyleSheet, } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Icon from '../../components/Icon'
import CircleButton from '../../components/CircleButton'
import { router } from 'expo-router'
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'

import { collection, addDoc,Timestamp } from 'firebase/firestore'
import { auth, db } from '../../config'
import { useState } from "react"
const handlePress = (content:string): void => {
    if (auth.currentUser === null) {
        return
    }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    addDoc(ref, {
        content: content,
        updatedAt: Timestamp.fromDate(new Date()),
    })  
        .then((docRef) => {
            console.log(docRef.id)
        })
        .catch((error) => {
            console.error(error)
        })
    router.back()
}


const Create = () => {
    const [content, setContent] = useState<string>("")
    return (
        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.inputContainer}>
                <TextInput multiline autoFocus value={content} 
                style={styles.input} onChangeText={(text)=>{setContent(text)}} />
            </View>
            <CircleButton onPress={()=>{handlePress(content)}}>
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
        paddingHorizontal: 27,
        paddingVertical: 32,
        flex: 1,

    },
    input: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        textAlignVertical: 'top',
        color: '#000',
    },
})

export default Create