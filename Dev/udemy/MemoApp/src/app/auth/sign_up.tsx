import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { Link, router } from 'expo-router'
const handlePress = (): void => {
    //サインアップ
    //メモリスト画面に遷移
    router.push("/memo/list")
}
const SignUp = () => {
    return (
        <View style={styles.container}>
            
            <View style={styles.inner}>
                <Text style={styles.title}>Signup</Text>
                <TextInput style={styles.input} placeholder="メールアドレス" />
                <TextInput style={styles.input} placeholder="パスワード" />
            </View>
            <Button label="Submit" onPress={handlePress} />
            <View style={styles.footer}>
                <Text style={styles.footerText}>Already registered? </Text>
                <Link href="/auth/log_in" asChild>
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