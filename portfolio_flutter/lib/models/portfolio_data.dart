import 'package:equatable/equatable.dart';

class PortfolioData extends Equatable {
  final PersonalInfo personalInfo;
  final List<Experience> experiences;
  final List<Skill> skills;
  final List<Project> projects;
  final List<Education> education;
  final ContactInfo contactInfo;

  const PortfolioData({
    required this.personalInfo,
    required this.experiences,
    required this.skills,
    required this.projects,
    required this.education,
    required this.contactInfo,
  });

  @override
  List<Object?> get props => [
        personalInfo,
        experiences,
        skills,
        projects,
        education,
        contactInfo,
      ];
}

class PersonalInfo extends Equatable {
  final String name;
  final String title;
  final String subtitle;
  final String description;
  final String aboutText;
  final Map<String, String> highlights;
  final ContactInfo contactInfo;

  const PersonalInfo({
    required this.name,
    required this.title,
    required this.subtitle,
    required this.description,
    required this.aboutText,
    required this.highlights,
    required this.contactInfo,
  });

  @override
  List<Object?> get props => [name, title, subtitle, description, aboutText, highlights, contactInfo];
}

class Experience extends Equatable {
  final String title;
  final String company;
  final String duration;
  final String description;

  const Experience({
    required this.title,
    required this.company,
    required this.duration,
    required this.description,
  });

  @override
  List<Object?> get props => [title, company, duration, description];
}

class Skill extends Equatable {
  final String name;
  final String category;
  final int level;

  const Skill({
    required this.name,
    required this.category,
    required this.level,
  });

  @override
  List<Object?> get props => [name, category, level];
}

class Project extends Equatable {
  final String name;
  final String description;
  final List<String> technologies;
  final String githubUrl;
  final String liveUrl;

  const Project({
    required this.name,
    required this.description,
    required this.technologies,
    required this.githubUrl,
    required this.liveUrl,
  });

  @override
  List<Object?> get props => [name, description, technologies, githubUrl, liveUrl];
}

class Education extends Equatable {
  final String degree;
  final String institution;
  final String duration;
  final String description;

  const Education({
    required this.degree,
    required this.institution,
    required this.duration,
    required this.description,
  });

  @override
  List<Object?> get props => [degree, institution, duration, description];
}

class ContactInfo extends Equatable {
  final String email;
  final String phone;
  final String linkedin;
  final String github;
  final String location;

  const ContactInfo({
    required this.email,
    required this.phone,
    required this.linkedin,
    required this.github,
    required this.location,
  });

  @override
  List<Object?> get props => [email, phone, linkedin, github, location];
}
