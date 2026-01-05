import type { ColorValue, ViewProps } from "react-native";

export type ExpoWatermarkViewProps = ViewProps & {
  backgroundColor?: ColorValue;
  preview?: boolean;
};
