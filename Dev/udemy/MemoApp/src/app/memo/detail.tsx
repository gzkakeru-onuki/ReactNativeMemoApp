import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router, } from 'expo-router'

const handlePress = (): void => {
    router.push("/memo/edit")
}

const Detail = (): JSX.Element => {
    return (
        <View style={styles.container}>
            
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>メモ</Text>
                <Text style={styles.memoDate}>2025/02/27</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                </Text>
            </ScrollView>

            <CircleButton style={{ top: 60, bottom: "auto" }} onPress={handlePress}>
                <Icon name="edit-2" size={25} color="white" />
            </CircleButton>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoTitle: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    memoDate: {
        color: '#fff',
        fontSize: 12,
        lineHeight: 16,
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        backgroundColor: '#fff',
        flex: 1,
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000',
    },
})

export default Detail