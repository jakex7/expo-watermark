import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoWatermarkViewProps } from './ExpoWatermark.types';

const NativeView: React.ComponentType<ExpoWatermarkViewProps> =
  requireNativeView('ExpoWatermark');

export default function ExpoWatermarkView(props: ExpoWatermarkViewProps) {
  return <NativeView {...props} />;
}
