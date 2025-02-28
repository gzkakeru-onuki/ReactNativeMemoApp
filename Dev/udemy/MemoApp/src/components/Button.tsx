import { Text, StyleSheet, TouchableOpacity } from 'react-native'
interface Props {
    label: string
    onPress?: () => void
}
const Button = (props: Props) => {
    const { label, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#467FD3',
        borderRadius: 4,
        height: 48,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
        marginLeft: 24,
        marginBottom: 16,
    },
    buttonLabel: {
        fontSize: 16,
        lineHeight: 32,
        color: '#ffffff',
        textAlign: 'center',
        paddingVertical: 8,
        paddingHorizontal: 24,
    },
})

export default Button