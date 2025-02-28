import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import Icon from './Icon'
import {Link,router } from 'expo-router'
const MemoListItem = (): JSX.Element => {
    return (
        <Link href="/memo/detail" asChild>
            <TouchableOpacity style={styles.memoListItem}>
                <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                <Text style={styles.memoListItemDate}>2025/02/22</Text>
            </View>
            <TouchableOpacity>
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