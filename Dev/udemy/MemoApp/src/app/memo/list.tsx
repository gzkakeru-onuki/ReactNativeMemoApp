import { View, StyleSheet, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router, useNavigation } from 'expo-router'
import LogOutButton from '../../components/LogOutButton'
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import { auth, db } from "../../config"
import { Memo } from '../../types/memo'
const handlePress = (): void => {
    router.push("/memo/create")
}


const list = (): JSX.Element => {
    const [memos, setMemos] = useState<Memo[]>([])
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <LogOutButton /> }
        })
    }, [])
    useEffect(() => {
        if (auth.currentUser === null) {
            return
        }
        const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
        const q = query(ref, orderBy("updatedAt", "desc"))
        const unsubscribe = onSnapshot(q, (snapshot => {
            const remoteMemos: Memo[] = []
            snapshot.forEach(doc => {
                console.log("memo", doc.data().content)
                const { content, updatedAt } = doc.data()
                remoteMemos.push({
                    id: doc.id,
                    content,
                    updatedAt
                })
            })
            setMemos(remoteMemos)
        }))
        return () => {
            unsubscribe()
        }
    }, [])
    return (
        <View style={styles.container}>
            <FlatList
                data={memos}
                renderItem={({ item }) => { return <MemoListItem memo={item}></MemoListItem> }}
            />
            <CircleButton onPress={handlePress}>
                <Icon name="plus" size={28} color="white" />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerRight: {
        color: "rgba(255,255,255,0.7)",
        fontSize: 14,
        fontWeight: "bold",
    }
})

export default list    