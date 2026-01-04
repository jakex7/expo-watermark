import { NativeModule, requireNativeModule } from 'expo';

import { ExpoWatermarkModuleEvents } from './ExpoWatermark.types';

declare class ExpoWatermarkModule extends NativeModule<ExpoWatermarkModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoWatermarkModule>('ExpoWatermark');
