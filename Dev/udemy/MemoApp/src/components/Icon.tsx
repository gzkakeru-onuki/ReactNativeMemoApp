import { Feather } from '@expo/vector-icons'
import { View, } from 'react-native'

interface Props {
    name: string,  
    size: number,
    color: string,
}

const Icon = (props: Props) => {
    const { name, size, color } = props
    return (
        <View>
            <Feather name={name} size={size} color={color} />
        </View>
    )
}

export default Icon
