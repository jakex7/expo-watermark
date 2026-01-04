// Reexport the native module. On web, it will be resolved to ExpoWatermarkModule.web.ts
// and on native platforms to ExpoWatermarkModule.ts
export { default } from './ExpoWatermarkModule';
export { default as ExpoWatermarkView } from './ExpoWatermarkView';
export * from  './ExpoWatermark.types';
