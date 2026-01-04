import WatermarkView from "expo-watermark";
import { useState } from "react";
import { Image, SafeAreaView, Switch, Text, View } from "react-native";

export default function App() {
  const [preview, setPreview] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 24,
        }}
      >
        <Text>Toggle preview:</Text>
        <Switch value={preview} onValueChange={setPreview} />
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: "https://github.com/jakex7.png" }}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
        <View>
          <Text style={{ fontWeight: "bold" }}>Jakub Grzywacz</Text>
          <Text style={{ opacity: 0.6 }}>@k7grzywacz</Text>
        </View>
        <WatermarkView
          backgroundColor={styles.container.backgroundColor}
          preview={preview}
          style={{ marginLeft: "auto" }}
        >
          <Image
            source={require("./assets/logo.png")}
            resizeMode="contain"
            style={{ width: 30, height: 30 }}
          />
        </WatermarkView>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 24,
  },
};
