import { View, StyleSheet, Text } from 'react-native'
import { useEffect } from 'react'
import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { router, useNavigation } from 'expo-router'
import LogOutButton from '../../components/LogOutButton'
const handlePress = (): void => {
    router.push("/memo/create")
}
const list = (): JSX.Element => {
    const navigation =useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <LogOutButton /> }
        })
    }, [])
    return (
        <View style={styles.container}>

            <MemoListItem />
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
        color:"rgba(255,255,255,0.7)",
        fontSize:14,
        fontWeight:"bold",
    }
})

export default list    