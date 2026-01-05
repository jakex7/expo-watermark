package expo.modules.watermark

import android.content.Context
import android.os.Build
import android.view.WindowManager
import java.util.function.Consumer

object ScreenRecordingState {
  private val listeners = mutableSetOf<(Boolean) -> Unit>()
  private var windowManager: WindowManager? = null
  private var recordingCallback: Consumer<Int>? = null

  fun initialize(context: Context?) {
    if (context == null) return

    val appContext = context.applicationContext
    windowManager = appContext.getSystemService(Context.WINDOW_SERVICE) as? WindowManager

    if (Build.VERSION.SDK_INT >= 35) {
        val callback = Consumer<Int> { state ->
        val isRecording = state == WindowManager.SCREEN_RECORDING_STATE_VISIBLE
        notifyListeners(isRecording)
      }

      recordingCallback = callback

      windowManager?.addScreenRecordingCallback(appContext.mainExecutor, callback)
    }
  }

  fun cleanup() {
    if (Build.VERSION.SDK_INT >= 35) {
      val callback = recordingCallback
      if (windowManager != null && callback != null) {
        windowManager?.removeScreenRecordingCallback(callback)
      }
    }

    windowManager = null
    recordingCallback = null
    listeners.clear()
  }

  fun addListener(listener: (Boolean) -> Unit) {
    listeners.add(listener)
  }

  fun removeListener(listener: (Boolean) -> Unit) {
    listeners.remove(listener)
  }

  private fun notifyListeners(recording: Boolean) {
    listeners.forEach { it(recording) }
  }
}