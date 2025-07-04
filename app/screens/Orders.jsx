import { View, Text } from 'react-native'
import BackButton from '@/components/BackButton'
const Orders = ({navigation}) => {
  return (
    <View>
      <BackButton navigation={navigation} name={'Orders'}/>
      <Text>Orders</Text>
    </View>
  )
}

export default Orders