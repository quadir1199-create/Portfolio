# Portfolio Flutter App

A modern, responsive portfolio application built with Flutter, showcasing Abdul Quadir's mobile development expertise.

## 🚀 Features

- **Modern UI/UX**: Built with Flutter 3.0+ and Material Design 3
- **Responsive Design**: Adapts to different screen sizes and orientations
- **Smooth Animations**: Beautiful transitions and micro-interactions
- **Cross-Platform**: Works on iOS, Android, Web, and Desktop
- **Professional Layout**: Clean, modern design showcasing skills and experience

## 🛠️ Tech Stack

- **Flutter 3.0+** - Modern cross-platform framework
- **Material Design 3** - Latest design system
- **Provider** - State management
- **URL Launcher** - External link handling
- **Custom Widgets** - Reusable UI components
- **Responsive Design** - Mobile-first approach

## 📱 Sections

1. **Hero Section** - Introduction and call-to-action
2. **About Section** - Personal background and highlights
3. **Experience Section** - Work history and achievements
4. **Skills Section** - Technical skills and expertise
5. **Projects Section** - Portfolio of work
6. **Education Section** - Academic background
7. **Contact Section** - Get in touch
8. **Footer** - Additional links and information

## 🚀 Getting Started

### Prerequisites

- Flutter SDK 3.0.0 or higher
- Dart SDK 3.0.0 or higher
- Android Studio / VS Code with Flutter extensions
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio_flutter
   ```

2. **Install dependencies**
   ```bash
   flutter pub get
   ```

3. **Run the app**
   ```bash
   flutter run
   ```

## 📁 Project Structure

```
portfolio_flutter/
├── lib/
│   ├── main.dart              # App entry point
│   ├── screens/               # Screen widgets
│   │   └── home_screen.dart   # Main home screen
│   ├── widgets/               # Reusable UI components
│   │   ├── hero_section.dart
│   │   ├── about_section.dart
│   │   ├── experience_section.dart
│   │   ├── skills_section.dart
│   │   ├── projects_section.dart
│   │   ├── education_section.dart
│   │   ├── contact_section.dart
│   │   └── footer.dart
│   └── models/                # Data models
├── assets/                    # Images, fonts, animations
├── pubspec.yaml              # Dependencies and configuration
└── README.md                 # This file
```

## 🎨 Customization

### Colors
Update the color scheme in `lib/main.dart`:
```dart
theme: ThemeData(
  primarySwatch: Colors.blue,  // Change primary color
  primaryColor: const Color(0xFF2563EB),  // Custom primary color
  // ... other theme properties
),
```

### Content
- Update personal information in each section widget
- Replace images in `assets/images/` directory
- Modify text content in the widget files

### Styling
- Customize fonts in `pubspec.yaml`
- Update spacing and layout in individual widgets
- Modify animations and transitions

## 📱 Building for Production

### Android APK
```bash
flutter build apk --release
```

### iOS App Bundle
```bash
flutter build ios --release
```

### Web
```bash
flutter build web --release
```

### Desktop
```bash
flutter build windows --release  # Windows
flutter build macos --release    # macOS
flutter build linux --release    # Linux
```

## 🔧 Dependencies

- **url_launcher**: Handle external links and email
- **http**: API calls (if needed)
- **provider**: State management
- **shared_preferences**: Local storage
- **cached_network_image**: Optimized image loading
- **lottie**: Beautiful animations
- **fl_chart**: Data visualization
- **font_awesome_flutter**: Icon library

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with Flutter
- Design inspired by modern portfolio websites
- Icons from Font Awesome
- Animations from Lottie

## 📞 Contact

Abdul Quadir - [Your Email/Contact Info]

---

⭐ Star this repository if you found it helpful!



