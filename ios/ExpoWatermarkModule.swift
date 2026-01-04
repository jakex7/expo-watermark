import ExpoModulesCore

public class ExpoWatermarkModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoWatermark")

    View(ExpoWatermarkView.self) {
      Prop("backgroundColor") { (view, color: UIColor) in
        view.setCoverColor(color)
      }
      
      Prop("preview") { (view, value: Bool) in
        view.setPreview(value)
      }
    }
  }
}
