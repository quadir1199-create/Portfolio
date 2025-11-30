import '../models/portfolio_data.dart';

abstract class PortfolioRepository {
  Future<PortfolioData> getPortfolioData();
}

class PortfolioRepositoryImpl implements PortfolioRepository {
  @override
  Future<PortfolioData> getPortfolioData() async {
    // Simulate network delay
    await Future.delayed(const Duration(seconds: 1));
    
    return PortfolioData(
      personalInfo: PersonalInfo(
        name: 'Abdul Quadir',
        title: 'Lead Mobile Developer',
        subtitle: '11+ Years Experience | 10M QAR Savings',
        description: 'Innovative Lead Developer with 11+ years expertise in Android & Flutter. '
            'Delivered 10M QAR cost savings, 1M+ app downloads across banking, '
            'fintech & enterprise solutions.',
        aboutText: 'I am a seasoned mobile development professional with over 11 years of experience '
            'in creating innovative solutions for banking, fintech, and enterprise applications. '
            'My expertise spans across Android native development and Flutter cross-platform solutions.\n\n'
            'As a Lead Developer, I have successfully managed teams and delivered projects '
            'that resulted in significant cost savings and user engagement. My passion lies in '
            'creating user-centric applications that solve real-world problems.',
        highlights: {
          'Years Experience': '11+',
          'QAR Savings': '10M+',
          'App Downloads': '1M+',
        },
        contactInfo: ContactInfo(
          email: 'abdul.quadir@example.com',
          phone: '+966-50-123-4567',
          linkedin: 'https://linkedin.com/in/abdulquadir',
          github: 'https://github.com/quadir1199-create',
          location: 'Riyadh, Saudi Arabia',
        ),
      ),
      experiences: [
        Experience(
          title: 'Lead Mobile Developer',
          company: 'TechCorp Solutions',
          duration: '2022 - Present',
          description: 'Leading mobile development team, delivering high-quality Android and Flutter applications.',
        ),
        Experience(
          title: 'Senior Android Developer',
          company: 'InnovateTech',
          duration: '2019 - 2022',
          description: 'Developed and maintained multiple Android applications with focus on performance and user experience.',
        ),
        Experience(
          title: 'Mobile Developer',
          company: 'StartUp Inc',
          duration: '2017 - 2019',
          description: 'Built cross-platform mobile applications using Flutter and React Native.',
        ),
      ],
      skills: [
        Skill(
          name: 'Flutter',
          category: 'Mobile Development',
          level: 95,
        ),
        Skill(
          name: 'Android (Kotlin)',
          category: 'Programming Languages',
          level: 90,
        ),
        Skill(
          name: 'Dart',
          category: 'Programming Languages',
          level: 92,
        ),
        Skill(
          name: 'Java',
          category: 'Programming Languages',
          level: 88,
        ),
        Skill(
          name: 'Firebase',
          category: 'Backend Services',
          level: 85,
        ),
        Skill(
          name: 'Git',
          category: 'Version Control',
          level: 90,
        ),
      ],
      projects: [
        Project(
          name: 'Banking App',
          description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
          technologies: ['Flutter', 'Firebase', 'Biometrics'],
          githubUrl: 'https://github.com/quadir1199-create/banking-app',
          liveUrl: 'https://banking-app-demo.com',
        ),
        Project(
          name: 'E-commerce Platform',
          description: 'Cross-platform e-commerce application with payment integration and inventory management.',
          technologies: ['Flutter', 'Stripe', 'SQLite'],
          githubUrl: 'https://github.com/quadir1199-create/ecommerce-app',
          liveUrl: 'https://ecommerce-app-demo.com',
        ),
        Project(
          name: 'Task Manager',
          description: 'Productivity application for task management with team collaboration features.',
          technologies: ['Flutter', 'Firebase', 'Real-time Sync'],
          githubUrl: 'https://github.com/quadir1199-create/task-manager',
          liveUrl: 'https://task-manager-demo.com',
        ),
      ],
      education: [
        Education(
          degree: 'Bachelor of Computer Science',
          institution: 'University of Technology',
          duration: '2013 - 2017',
          description: 'Specialized in Software Engineering with focus on mobile development.',
        ),
        Education(
          degree: 'Mobile App Development Certification',
          institution: 'Google Developer Training',
          duration: '2018',
          description: 'Advanced certification in Android development and best practices.',
        ),
      ],
      contactInfo: ContactInfo(
        email: 'abdul.quadir@example.com',
        phone: '+974 1234 5678',
        linkedin: 'https://linkedin.com/in/abdulquadir',
        github: 'https://github.com/quadir1199-create',
        location: 'Doha, Qatar',
      ),
    );
  }
}
