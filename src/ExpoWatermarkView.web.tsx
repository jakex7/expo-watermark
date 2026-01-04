import * as React from 'react';

import { ExpoWatermarkViewProps } from './ExpoWatermark.types';

export default function ExpoWatermarkView(props: ExpoWatermarkViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
