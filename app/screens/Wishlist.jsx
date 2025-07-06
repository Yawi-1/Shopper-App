import { View, Text } from 'react-native'
import React from 'react'
import BackButton from '@/components/BackButton'
import { useProducts } from '@/context/ProductContext'
const Wishlist = ({ navigation }) => {
    const {wishlist,loading} = useProducts();
    return (
        <View>
            <BackButton navigation={navigation} name={'Wishlist'} />
            <Text>Wishlist</Text>
            {
                loading ? <Text>Loading.....</Text>:(
                    <>
                    {
                        wishlist.map(item=> <Text key={item.id}>{item.title}</Text>)
                    }
                    </>
                )
            }
        </View>
    )
}

export default Wishlist