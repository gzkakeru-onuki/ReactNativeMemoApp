import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../config.js"
import { Alert } from 'react-native'
const handlePress = (email: string, password: string): void => {
    //サインアップ
    //メモリスト画面に遷移
    //会員登録
    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user.uid)
            router.replace("/memo/list")
        })
        .catch((error) => {
            const {code,message} =error
            Alert.alert(code,message)
        })
}
const SignUp = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    return (
        <View style={styles.container}>

            <View style={styles.inner}>
                <Text style={styles.title}>Signup</Text>
                <TextInput style={styles.input} placeholder="メールアドレス" value={email} onChangeText={(text) => { setEmail(text) }} autoCapitalize="none" keyboardType="email-address" />
                <TextInput style={styles.input} placeholder="パスワード" value={password} onChangeText={(text) => { setPassword(text) }} />
            </View>
            <Button label="Submit" onPress={() => { handlePress(email, password) }} />
            <View style={styles.footer}>
                <Text style={styles.footerText}>Already registered? </Text>
                <Link href="/auth/log_in" asChild replace>
                    <TouchableOpacity>
                        <Text style={styles.footerLink}>Log in!</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        height: 48,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    footer: {
        flexDirection: 'row',
        marginLeft: 24,
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: "#000000",
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3',
    },
})

export default SignUp    