import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:portfolio_flutter/blocs/portfolio_bloc.dart';
import 'package:portfolio_flutter/widgets/hero_section.dart';
import 'package:portfolio_flutter/widgets/about_section.dart';
import 'package:portfolio_flutter/widgets/experience_section.dart';
import 'package:portfolio_flutter/widgets/skills_section.dart';
import 'package:portfolio_flutter/widgets/projects_section.dart';
import 'package:portfolio_flutter/widgets/education_section.dart';
import 'package:portfolio_flutter/widgets/contact_section.dart';
import 'package:portfolio_flutter/widgets/footer.dart';
import 'package:portfolio_flutter/widgets/loading_screen.dart';
import 'package:portfolio_flutter/widgets/error_screen.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final ScrollController _scrollController = ScrollController();

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: BlocBuilder<PortfolioBloc, PortfolioState>(
        builder: (context, state) {
          if (state is PortfolioLoading) {
            return const LoadingScreen();
          } else if (state is PortfolioError) {
            return ErrorScreen(
              message: state.message,
              onRetry: () {
                context.read<PortfolioBloc>().add(LoadPortfolioData());
              },
            );
          } else if (state is PortfolioLoaded) {
            return CustomScrollView(
              controller: _scrollController,
              slivers: [
                // Hero Section
                SliverToBoxAdapter(
                  child: HeroSection(personalInfo: state.portfolioData.personalInfo),
                ),
                
                // About Section
                SliverToBoxAdapter(
                  child: AboutSection(personalInfo: state.portfolioData.personalInfo),
                ),
                
                // Experience Section
                SliverToBoxAdapter(
                  child: ExperienceSection(experiences: state.portfolioData.experiences),
                ),
                
                // Skills Section
                SliverToBoxAdapter(
                  child: SkillsSection(skills: state.portfolioData.skills),
                ),
                
                // Projects Section
                SliverToBoxAdapter(
                  child: ProjectsSection(projects: state.portfolioData.projects),
                ),
                
                // Education Section
                SliverToBoxAdapter(
                  child: EducationSection(education: state.portfolioData.education),
                ),
                
                // Contact Section
                SliverToBoxAdapter(
                  child: ContactSection(contactInfo: state.portfolioData.contactInfo),
                ),
                
                // Footer
                SliverToBoxAdapter(
                  child: Footer(contactInfo: state.portfolioData.contactInfo),
                ),
              ],
            );
          }
          
          return const LoadingScreen();
        },
      ),
    );
  }
}
