import { View, Text, StyleSheet } from 'react-native'

const CircleButton = (): JSX.Element => {
    return (
        <View style={styles.sircleButton}>
            <Text style={styles.sircleButtonLabel}>+</Text>
        </View>
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
    },
})

export default CircleButton;