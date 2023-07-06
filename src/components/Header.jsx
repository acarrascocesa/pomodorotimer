import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const options = ["Pomodoro", "Short Break", "Long Break"];

export default function Header({ setTime, currentTime, setCurrentTime }) {
  const handlePress = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  };
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[styles.itemStyle, currentTime != index && {borderColor: "transparent"}]}
        >
          <Text style={{fontWeight: "bold"}}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  itemStyle: {
    borderWidth: 3,
    padding: 5,
    width: "33%",
    borderRadius: 10,
    borderColor: "white",
    marginVertical: 20,
    alignItems: "center"
  },
});
