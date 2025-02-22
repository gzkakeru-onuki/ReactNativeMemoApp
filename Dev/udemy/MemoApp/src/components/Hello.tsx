import { Text, View,StyleSheet, type TextStyle } from 'react-native'

interface Props {
    children: string,
    name: string,
    age: number,
    bang?: boolean,
    style?:TextStyle,

}

const Hello =(props:Props):JSX.Element =>{
    const {children,name,age,bang,style} = props
    return (
        <View>
            <Text style={[styles.text,style]}>{children} {name} {age} {bang ? '!' : null}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
  text:{
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
  }
})
export default Hello