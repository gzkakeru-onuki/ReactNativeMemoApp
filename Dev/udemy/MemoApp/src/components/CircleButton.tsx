import { Text, StyleSheet, type ViewStyle, TouchableOpacity } from 'react-native'

interface Props {
    children: JSX.Element,
    style?: ViewStyle,
    onPress?: () => void,
}

const CircleButton = (props: Props): JSX.Element => {
    const { children, style, onPress } = props
    return (
        <TouchableOpacity style={[styles.sircleButton, style]} onPress={onPress}>
            <Text style={[styles.sircleButtonLabel]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    sircleButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: "#467FD3",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 20,
        bottom: 40,
        shadowColor: "#000000",
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 8,

    },
    sircleButtonLabel: {
        color: "#ffffff",
        fontSize: 24,
        lineHeight: 24,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default CircleButton;