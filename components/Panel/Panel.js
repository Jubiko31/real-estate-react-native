import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/AntDesign';

export const Panel = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const isFocused = useIsFocused();
    const { name } = route;
    const navigate = (router) => {
      navigation.navigate(router);
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.panel} 
                onPress={() => navigate('Home')}
            >
              <Icon name="home" size={30} color={(isFocused && name == "Home") && "#B2002D" } />
              <Text style={{color:(isFocused && name == "Home") && "#B2002D"}}>
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.panel} 
                onPress={() => navigate('Location')}
            >
              <Icon name="search1" size={30} color={(isFocused && name == "Location") && "#B2002D" } />
              <Text style={{color:(isFocused && name == "Location") && "#B2002D"}}>
                Location
            </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.panel} 
            >
              <Icon name="hearto" size={30} color={(isFocused && name == "Bookings") && "#B2002D" } />
              <Text style={{ color:(isFocused && name == "Bookings") && "#B2002D" }}>
                Bookings
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.panel} 
                onPress={() => navigate('Profile')}
            >
              <Icon name="user" size={30} color={(isFocused && name == "Profile") && "#B2002D" } />
              <Text 
                style={{ color:(isFocused && name == "Profile") && "#B2002D" }}
               >
                Profile
               </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.panel} 
                onPress={() => navigate('More')}
              >
              <Icon name="bars" size={30} color={(isFocused && name== "More")  && "#B2002D" } />
              <Text 
                style={{ color:(isFocused && name== "More") && "#B2002D" }}
              >
                More
               </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    position: '-webkit-sticky',
    position: 'sticky',
    width: '100%',
    position: 'absolute',
    right: 4,
    bottom: 8,
    flexDirection:"row",
    paddingTop: 10,
    backgroundColor: '#f2f2f2',
  },
  panel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    width: '20%',
  },
});
