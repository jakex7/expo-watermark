# Expo Watermark

A hidden view that only appears in screenshots and screen recordings.

## Showcase

| What users see                            | What is captured                                    |
| ----------------------------------------- | --------------------------------------------------- |
| ![User view](example/assets/readme/1.png) | ![Captured screenshot](example/assets/readme/2.png) |

## Installation

```bash
yarn add expo-watermark
```

## Usage

```tsx
import { WatermarkView } from "expo-watermark";
import { Image } from "react-native";

export default function App() {
  return (
    <WatermarkView
      backgroundColor="#fff"
      preview={true}
      style={{ marginLeft: "auto" }}
    >
      <Image
        source={require("./assets/logo.png")}
        resizeMode="contain"
        style={{ width: 30, height: 30 }}
      />
    </WatermarkView>
  );
}
```

The watermark will be invisible during normal use but will appear on screenshots and screen recordings.

## API

### Props

`WatermarkView` accepts all `View` props, plus:

- **`backgroundColor`** (string, optional): Color of the cover view. Should match the background of the parent view. Can ve set via prop or style.
- **`preview`** (boolean, optional): When `true`, shows the watermark content (with reduced opacity) in the app for preview purposes. Default is `false`.

## Platform-Specific Notes

### Android

- **Screenshot**: Not available. There is no API available to detect when a screenshot occurs before it's taken.
- **Screen Recording**: Only available on Android 15 and above. See [Android 15 Screen Recording Detection](https://developer.android.com/about/versions/15/features#screen-recording-detection) for more details.

## License

[MIT](https://github.com/jakex7/expo-screenshot/blob/main/LICENSE)

### Made with ♥️ by Jakub Grzywacz
