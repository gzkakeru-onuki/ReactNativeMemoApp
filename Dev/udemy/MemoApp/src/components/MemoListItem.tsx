import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from './Icon'
import { Link, router } from 'expo-router'
import { type Memo } from '../types/memo'
import { auth, db } from '../config'
import { doc, deleteDoc } from 'firebase/firestore'
import { Alert } from 'react-native'
interface Props {
    memo: Memo
}

const handlePress = (id: string): void => {
    if (auth.currentUser === null) {
        return
    }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    Alert.alert("メモを削除します", "よろしいですか？", [{
        text: "キャンセル",
        style: "cancel",
    }, {
        text: "削除する",
        style: "destructive",
        onPress: () => {
            deleteDoc(ref)
                .then(() => {
                    Alert.alert("メモを削除しました")
                })
                .catch((error) => {
                    console.log("error", error)
                    Alert.alert("エラーが発生しました")
                })
        }
    }])
}

const MemoListItem = (props: Props): JSX.Element | null => {
    const { memo } = props
    const { content, updatedAt } = memo
    if (content === null || updatedAt === null) {
        return null
    }
    const dateString = updatedAt.toDate().toLocaleDateString("ja-JP")
    return (
        <Link href={{ pathname: "/memo/detail", params: { id: memo.id } }}
            asChild>
            <TouchableOpacity style={styles.memoListItem}>
                <View>
                    <Text numberOfLines={1} style={styles.memoListItemTitle}>{content}</Text>
                    <Text style={styles.memoListItemDate}>{dateString}</Text>
                </View>
                <TouchableOpacity onPress={() => { handlePress(memo.id) }}>
                    <Icon name="delete" size={16} color="#B0B0B0" />
                </TouchableOpacity>
            </TouchableOpacity>
        </Link>
    )
}

const styles = StyleSheet.create({

    memoListItem: {
        backgroundColor: "#ffffff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 16,
        paddingHorizontal: 19,
        borderBottomWidth: 1,
        borderColor: "rgba(0,0,0,0.15)",
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: "#848484",
    },
})

export default MemoListItem;