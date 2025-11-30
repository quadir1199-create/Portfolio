import 'package:flutter/material.dart';

enum DeviceType {
  mobile,
  tablet,
  laptop,
  desktop,
}

class AdaptiveLayout {
  static DeviceType getDeviceType(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    
    if (width < 600) {
      return DeviceType.mobile;
    } else if (width < 900) {
      return DeviceType.tablet;
    } else if (width < 1200) {
      return DeviceType.laptop;
    } else {
      return DeviceType.desktop;
    }
  }

  static bool isMobile(BuildContext context) => 
      getDeviceType(context) == DeviceType.mobile;
  
  static bool isTablet(BuildContext context) => 
      getDeviceType(context) == DeviceType.tablet;
  
  static bool isLaptop(BuildContext context) => 
      getDeviceType(context) == DeviceType.laptop;
  
  static bool isDesktop(BuildContext context) => 
      getDeviceType(context) == DeviceType.desktop;

  static double getHorizontalPadding(BuildContext context) {
    switch (getDeviceType(context)) {
      case DeviceType.mobile:
        return 20.0;
      case DeviceType.tablet:
        return 40.0;
      case DeviceType.laptop:
        return 60.0;
      case DeviceType.desktop:
        return 80.0;
    }
  }

  static double getVerticalPadding(BuildContext context) {
    switch (getDeviceType(context)) {
      case DeviceType.mobile:
        return 40.0;
      case DeviceType.tablet:
        return 60.0;
      case DeviceType.laptop:
        return 80.0;
      case DeviceType.desktop:
        return 100.0;
    }
  }

  static double getMaxContentWidth(BuildContext context) {
    switch (getDeviceType(context)) {
      case DeviceType.mobile:
        return double.infinity;
      case DeviceType.tablet:
        return 800.0;
      case DeviceType.laptop:
        return 1000.0;
      case DeviceType.desktop:
        return 1200.0;
    }
  }

  static int getGridCrossAxisCount(BuildContext context) {
    switch (getDeviceType(context)) {
      case DeviceType.mobile:
        return 1;
      case DeviceType.tablet:
        return 2;
      case DeviceType.laptop:
        return 3;
      case DeviceType.desktop:
        return 4;
    }
  }

  static double getFontSize(BuildContext context, {
    required double mobile,
    required double tablet,
    required double laptop,
    required double desktop,
  }) {
    switch (getDeviceType(context)) {
      case DeviceType.mobile:
        return mobile;
      case DeviceType.tablet:
        return tablet;
      case DeviceType.laptop:
        return laptop;
      case DeviceType.desktop:
        return desktop;
    }
  }

  static EdgeInsets getSectionPadding(BuildContext context) {
    return EdgeInsets.symmetric(
      horizontal: getHorizontalPadding(context),
      vertical: getVerticalPadding(context),
    );
  }
}

class ResponsiveBuilder extends StatelessWidget {
  final Widget mobile;
  final Widget? tablet;
  final Widget? laptop;
  final Widget? desktop;

  const ResponsiveBuilder({
    super.key,
    required this.mobile,
    this.tablet,
    this.laptop,
    this.desktop,
  });

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        if (constraints.maxWidth >= 1200) {
          return desktop ?? laptop ?? tablet ?? mobile;
        } else if (constraints.maxWidth >= 900) {
          return laptop ?? tablet ?? mobile;
        } else if (constraints.maxWidth >= 600) {
          return tablet ?? mobile;
        } else {
          return mobile;
        }
      },
    );
  }
}



