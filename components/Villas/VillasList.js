import { Text, View, StyleSheet, Image, TouchableOpacity  } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const VillasList = ({ item, openDetails }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.img} />
      <Text style={styles.description}>{item.description}</Text>
      <Text style={{ color: "#B2002D", fontSize: 18 }}>${item.price}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.moreBtn}
          onPress={() => openDetails(item.id)}
        >
          <Text style={{ color: "white", fontWeight: 700 }}>MORE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bookBtn}
        >
          <Text style={{ color: "white", fontWeight: 700 }}>Book Villa</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 16 }}>
          {<Icon name="location-sharp" size={18} color="black"/>}
          {item.location}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 4,
  },
  img: {
    height: 200,
    width: "100%",
    borderWidth: 0.8,
    resizeMode: "cover",
  },
  buttonContainer: {
    marginTop: 14,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  moreBtn: {
    alignItems: "center",
    justifyContent: "center",
    height: 25,
    width: 75,
    marginLeft: 100,
    backgroundColor: "#B2002D",
    borderRadius: 50,
  },
  bookBtn: {
    height: 25,
    width: 110,
    backgroundColor: "#B2002D",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    color: "#fff",
  }
});
