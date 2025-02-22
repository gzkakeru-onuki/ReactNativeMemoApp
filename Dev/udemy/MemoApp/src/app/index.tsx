import { View, Text, StyleSheet } from 'react-native'

const index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View>
                <Text>MEMO APP</Text>
                <Text>ログアウト</Text>
            </View>

            <View>

                <View>
                    <Text>買い物リスト</Text>
                    <Text>2025/02/22</Text>
                </View>

                <View>
                    <Text>X</Text>
                </View>
            </View>

            <View>

                <View>
                    <Text>買い物リスト</Text>
                    <Text>2025/02/22</Text>
                </View>

                <View>
                    <Text>X</Text>
                </View>
            </View>

            <View>

                <View>
                    <Text>買い物リスト</Text>
                    <Text>2025/02/22</Text>
                </View>

                <View>
                    <Text>X</Text>
                </View>
            </View>

            <View>
                <Text>+</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center"
    }
})

export default index