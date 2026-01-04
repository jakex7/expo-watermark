import { registerWebModule, NativeModule } from 'expo';

import { ExpoWatermarkModuleEvents } from './ExpoWatermark.types';

class ExpoWatermarkModule extends NativeModule<ExpoWatermarkModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoWatermarkModule, 'ExpoWatermarkModule');
