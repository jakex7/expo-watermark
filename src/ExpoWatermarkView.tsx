import { requireNativeView } from "expo";
import * as React from "react";

import { ExpoWatermarkViewProps } from "./ExpoWatermark.types";
import { Platform, View } from "react-native";

const NativeView: React.ComponentType<ExpoWatermarkViewProps> =
  requireNativeView("ExpoWatermark");

export default function ExpoWatermarkView(props: ExpoWatermarkViewProps) {
  if (Platform.OS !== "ios") return <View {...props} />;
  return <NativeView {...props} />;
}
