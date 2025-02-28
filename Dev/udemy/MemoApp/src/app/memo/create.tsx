import { View, Text,TextInput,StyleSheet,KeyboardAvoidingView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Icon from '../../components/Icon'
import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import { router } from 'expo-router'
const handlePress = (): void => {
    router.back()
}
const Create = () => {
    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            
            <View style={styles.inputContainer}>
                <TextInput multiline value={""} style={styles.input}/>
            </View>
            <CircleButton onPress={handlePress}>
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