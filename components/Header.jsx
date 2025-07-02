import { View, StyleSheet, Text } from 'react-native';
import { Image } from 'expo-image';
import COLORS from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styles.container}>

            <Ionicons
                name="menu"
                size={24}
                color={COLORS.primary}
                style={styles.icon} 
                accessibilityLabel="Search"
            />
            <Text>Shopper</Text>
            <Image
                source={{
                    uri: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D',
                }}
                style={styles.avatar}
            />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // backgroundColor: COLORS.background,
        paddingHorizontal: 16,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 4,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
    icon: {
        backgroundColor: 'white',
        padding: 5,
        marginLeft: 5,
        borderRadius: 25
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: COLORS.white,

    },
});
