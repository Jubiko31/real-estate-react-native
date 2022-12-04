import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";

export const WelcomePage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flex: 1.5 }}>
          <Text style={styles.title}>LongStay Villa</Text>
      </View>
      <View style={{ flex: 7 }}>
        <Image 
            style={{ height: "100%", width: "100%",}} 
            source={require('../../assets/images/villas/004_villa.jpg')} 
        />
      </View>
      <View
        style={styles.getStarted}
      >
        <TouchableOpacity
          style={styles.start}
          onPress={() => navigation.navigate("Login", { name: "Login" })}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "#FFF", fontSize: 16, margin: 3 }} >
                GET STARTED
              </Text>
            <Icon name="arrowright" size={25} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "#B2002D",
    fontWeight: 700,
    fontSize: 46,
    textAlign: "center",
    paddingTop: 25,
  },
  getStarted: { 
    display: "flex",
    flex: 1.5, 
    justifyContent: "center", 
    alignItems: "flex-end" 
  },
  start: {
    height: 60,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: "#B2002D",
    color: '#FFF',
  },
});
