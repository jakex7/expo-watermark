import { requireNativeView } from "expo";
import * as React from "react";

import { ExpoWatermarkViewProps } from "./ExpoWatermark.types";
import { Platform, View } from "react-native";

let NativeView: React.ComponentType<ExpoWatermarkViewProps>;

if (Platform.OS === "ios") {
  NativeView = requireNativeView("ExpoWatermark");
}

export default function ExpoWatermarkView(props: ExpoWatermarkViewProps) {
  if (!NativeView) return <View {...props} />;
  return <NativeView {...props} />;
}
