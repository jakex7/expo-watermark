import { requireNativeView } from "expo";
import * as React from "react";
import {
  Platform,
  processColor,
  ProcessedColorValue,
  View,
} from "react-native";

import { ExpoWatermarkViewProps } from "./ExpoWatermark.types";

const NativeView: React.ComponentType<
  Omit<ExpoWatermarkViewProps, "backgroundColor"> & {
    backgroundColor?: ProcessedColorValue;
  }
> = requireNativeView("ExpoWatermark");

export default function ExpoWatermarkView(props: ExpoWatermarkViewProps) {
  const { style, backgroundColor, ...rest } = props;
  const coverColor = processColor(
    backgroundColor || (style as any)?.backgroundColor || "transparent",
  )!;
  if (Platform.OS === "android") {
    const { children, ...androidRest } = rest;
    return (
      <NativeView style={style} backgroundColor={coverColor} {...androidRest}>
        <View style={style}>{children}</View>
      </NativeView>
    );
  }
  return <NativeView style={style} backgroundColor={coverColor} {...rest} />;
}
