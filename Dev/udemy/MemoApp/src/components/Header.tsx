import { View, Text, StyleSheet } from 'react-native'

const Header = (): JSX.Element => {
    return (
        <View style={styles.header}>
            <View style={styles.headerInner}>
                <Text style={styles.headerTitle}>MEMO APP</Text>
                <Text style={styles.headerRight}>ログアウト</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:"#467FD3",
        height:104,
        justifyContent:"flex-end",        
    },
    headerInner:{
        alignItems:"center",        
    },
    headerRight:{
        position:"absolute",
        right:16,
        bottom:16,
        color:"rgba(255,255,255,0.7)",
        fontSize:14,
        fontWeight:"bold",
    },
    headerTitle:{
        color:"#ffffff",
        fontSize:22,
        fontWeight:"bold",
        marginBottom:8,
        lineHeight:32,
    },
})

export default Header;