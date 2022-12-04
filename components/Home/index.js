import { useNavigation } from "@react-navigation/native";
import { Panel } from "../Panel/Panel";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import { VillasList } from "../Villas/VillasList";
import { data } from "../../api/data";

export const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container} stickyHeaderIndices={[2]}>
      <Text style={styles.header}>Exotic and Luxurious Villas in Georgia</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <VillasList
            item={item}
            openDetails={id => (
              navigation.navigate("DetailsPage", {
                name: "DetailsPage",
                id,
                price: item.price,
                description: item.detailsDescription,
                bedroom: item.bedroom,
                totalArea: item.totalArea,
                image: item.image,
              })
            )}
          />
        )}
        keyExtractor={item => item.id}
      />
      <Panel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 11,
    marginTop: 10,
    marginBottom: 30
  },
  header: { 
    color: "#900D09", 
    fontSize: 25, 
    textAlign: "center" 
  },
});