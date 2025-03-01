import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router, } from 'expo-router'
import { useLocalSearchParams } from "expo-router"
import { onSnapshot, doc } from "firebase/firestore"
import { auth, db } from "../../config"
import { type Memo } from "../../types/memo"
import { useState, useEffect } from "react"

const handlePress = (id:string): void => {
    router.push({pathname:"/memo/edit",params:{id}})
}

const Detail = (): JSX.Element => {
    const id = String(useLocalSearchParams().id)
    const [memo, setMemo] = useState<Memo | null>(null)


    useEffect(() => {
        if (auth.currentUser === null) { return }
        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
        const unsubscribe = onSnapshot(ref, (memodoc) => {
            const { content, updatedAt } = memodoc.data() as Memo
            setMemo({
                id: memodoc.id,
                content: content,
                updatedAt
            })
        })
        return unsubscribe
    }, [])

    return (
        <View style={styles.container}>

            <View style={styles.memoHeader}>
                <Text numberOfLines={1} style={styles.memoTitle}>{memo?.content}</Text>
                <Text style={styles.memoDate}>{memo?.updatedAt.toDate().toLocaleDateString("ja-JP")}</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    {memo?.content}
                </Text>
            </ScrollView>

            <CircleButton style={{ top: 60, bottom: "auto" }} onPress={()=>{handlePress(id)}}>
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
        paddingHorizontal: 27,
        backgroundColor: '#fff',
        flex: 1,
    },
    memoBodyText: {
        paddingVertical: 32,
        fontSize: 16,
        lineHeight: 24,
        color: '#000',
    },
})

export default Detail