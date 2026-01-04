import ExpoModulesCore
import WebKit

class ExpoWatermarkView: ExpoView {
  private let secureField = UITextField()
  private let coverView = UIView()
  
  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
    setupMask()
  }
  
  private func setupMask() {
    secureField.isSecureTextEntry = true
    secureField.isUserInteractionEnabled = false
    secureField.translatesAutoresizingMaskIntoConstraints = false
    
    if let textLayoutView = secureField.subviews.first {
      coverView.translatesAutoresizingMaskIntoConstraints = false
      textLayoutView.addSubview(coverView)
      
      NSLayoutConstraint.activate([
        coverView.topAnchor.constraint(equalTo: textLayoutView.topAnchor),
        coverView.bottomAnchor.constraint(equalTo: textLayoutView.bottomAnchor),
        coverView.leadingAnchor.constraint(equalTo: textLayoutView.leadingAnchor),
        coverView.trailingAnchor.constraint(equalTo: textLayoutView.trailingAnchor)
      ])
    }
    
    addSubview(secureField)
  }
  
  override func layoutSubviews() {
    super.layoutSubviews()
    
    secureField.frame = bounds
    bringSubviewToFront(secureField)
  }
  
  func setCoverColor(_ color: UIColor) {
    coverView.backgroundColor = color
  }
  
  func setPreview(_ preview: Bool) {
    coverView.alpha = preview ? 0.5 : 1.0
  }
}
