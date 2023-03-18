import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  PixelRatio,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const isTablet = Math.max(windowWidth, windowHeight) > 1000;
const isIOS = Platform.OS === "ios";

export default function App() {
  const image = {
    width: PixelRatio.getPixelSizeForLayoutSize(windowWidth),
    height: PixelRatio.getPixelSizeForLayoutSize(windowHeight),
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {windowWidth} x {windowHeight}
      </Text>
      <Text style={styles.text}>
        {image.width} x {image.height}
      </Text>
      <Text style={styles.text}>PixelRatio = {PixelRatio.get()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: isTablet ? 50 : 30,
  },
});
