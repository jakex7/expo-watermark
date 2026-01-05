package expo.modules.watermark

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoWatermarkModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoWatermark")

    OnCreate {
      ScreenRecordingState.initialize(appContext.reactContext)
    }

    OnDestroy {
       ScreenRecordingState.cleanup()
    }
    
    View(ExpoWatermarkView::class) {
      OnViewDestroys { view ->
        view.destroy()
      }

      Prop("backgroundColor") { view: ExpoWatermarkView, color: Int ->
        view.setCoverColor(color)
      }

      Prop("preview") { view: ExpoWatermarkView, preview: Boolean ->
        view.setPreview(preview)
      }
    }
  }
}
