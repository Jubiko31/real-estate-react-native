import { Alert } from "react-native";

export const confirmBooking = ({ params }) => {
    console.log('CLICKED')
    return (
      Alert.alert("Confirm", "Are you sure want to book this villa?",
      [
        {
          text: "CANCEL",
          style: "cancel"
        },
        { 
          text: "YES", 
          onPress: () => (
            console.log('Villa Booked')
          )
        },
      ])
    );
}
