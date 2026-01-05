package expo.modules.watermark

import android.annotation.SuppressLint
import android.content.Context
import android.view.View
import android.widget.FrameLayout
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.views.ExpoView

@SuppressLint("ViewConstructor")
class ExpoWatermarkView(context: Context, appContext: AppContext) : ExpoView(context, appContext) {
  internal val matchParent = LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT)
  internal val coverView = FrameLayout(context)
  internal val layout = FrameLayout(context)
  internal val recordingListener: (Boolean) -> Unit = { isRecording ->
    coverView.visibility = if (isRecording) GONE else VISIBLE
  }

  init {
    layoutParams = matchParent
    layout.apply {
      layoutParams = matchParent
      addView(
        coverView,
        matchParent
      )
    }
    addView(layout, matchParent)
    coverView.bringToFront()
    ScreenRecordingState.addListener(recordingListener)
  }

  fun destroy() {
    ScreenRecordingState.removeListener(recordingListener)
  }

  override fun addView(child: View?) {
    layout.addView(child)
  }

  override fun addView(child: View?, index: Int) {
    layout.addView(child, index)
  }

  override fun addView(child: View?, width: Int, height: Int) {
    layout.addView(child, width, height)
  }
  override fun removeView(view: View?) {
    layout.removeView(view)
  }

  override fun onViewAdded(child: View?) {
    super.onViewAdded(child)
    coverView.bringToFront()
  }

  fun setCoverColor(color: Int) {
    coverView.setBackgroundColor(color)
  }

  fun setPreview(preview: Boolean) {
    coverView.alpha = if (preview) 0.5f else 1.0f
  }
}
