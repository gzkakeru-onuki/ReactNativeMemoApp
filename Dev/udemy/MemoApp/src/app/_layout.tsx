import { Stack } from 'expo-router'

const Layout = (): JSX.Element => {
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: "#467FD3",
            },
            headerTintColor: "#ffffff",
            headerTitle: "Memo App",
            headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 20,
            },
            headerBackTitle: "戻る",

        }} />
    )
}

export default Layout