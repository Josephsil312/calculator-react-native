import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MyKeyboard from "./src/components/MyKeyboard";
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/styles/Colors";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "black" }]
        }
      >
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "center",
  },
});
