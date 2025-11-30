import 'package:flutter/material.dart';
import 'package:portfolio_flutter/models/portfolio_data.dart';
import 'package:portfolio_flutter/utils/adaptive_layout.dart';

class AboutSection extends StatelessWidget {
  final PersonalInfo personalInfo;
  
  const AboutSection({super.key, required this.personalInfo});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: AdaptiveLayout.getSectionPadding(context),
      color: Colors.white,
      child: Column(
        children: [
          // Section Header
          Text(
            'About Me',
            style: TextStyle(
              fontSize: AdaptiveLayout.getFontSize(
                context,
                mobile: 28,
                tablet: 32,
                laptop: 36,
                desktop: 36,
              ),
              fontWeight: FontWeight.bold,
              color: const Color(0xFF1E293B),
            ),
          ),
          
          const SizedBox(height: 16),
          
          Container(
            width: 80,
            height: 4,
            decoration: BoxDecoration(
              color: const Color(0xFF2563EB),
              borderRadius: BorderRadius.circular(2),
            ),
          ),
          
          const SizedBox(height: 60),
          
          // About Content
          ResponsiveBuilder(
             mobile: _buildMobileLayout(context),
             tablet: _buildTabletLayout(context),
             laptop: _buildDesktopLayout(context),
             desktop: _buildDesktopLayout(context),
           ),
        ],
      ),
    );
  }

  Widget _buildMobileLayout(BuildContext context) {
    return Column(
      children: [
        _buildAboutImage(context),
        const SizedBox(height: 30),
        _buildAboutContent(context),
      ],
    );
  }

  Widget _buildTabletLayout(BuildContext context) {
    return Column(
      children: [
        _buildAboutImage(context),
        const SizedBox(height: 30),
        _buildAboutContent(context),
      ],
    );
  }

  Widget _buildDesktopLayout(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(flex: 1, child: _buildAboutImage(context)),
        const SizedBox(width: 60),
        Expanded(flex: 2, child: _buildAboutContent(context)),
      ],
    );
  }

  Widget _buildAboutImage(BuildContext context) {
    return Container(
      height: AdaptiveLayout.isMobile(context) ? 300 : 400,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        color: const Color(0xFF2563EB).withOpacity(0.1),
        border: Border.all(color: const Color(0xFF2563EB), width: 2),
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: Container(
          color: const Color(0xFF2563EB).withOpacity(0.05),
          child: const Icon(
            Icons.person,
            size: 120,
            color: Color(0xFF2563EB),
          ),
        ),
      ),
    );
  }

  Widget _buildAboutContent(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Passionate Mobile Developer & Team Lead',
          style: TextStyle(
            fontSize: AdaptiveLayout.getFontSize(
              context,
              mobile: 20,
              tablet: 24,
              laptop: 28,
              desktop: 28,
            ),
            fontWeight: FontWeight.bold,
            color: const Color(0xFF1E293B),
          ),
        ),
        
        const SizedBox(height: 24),
        
        Text(
          personalInfo.aboutText,
          style: TextStyle(
            fontSize: AdaptiveLayout.getFontSize(
              context,
              mobile: 14,
              tablet: 16,
              laptop: 18,
              desktop: 18,
            ),
            height: 1.6,
            color: const Color(0xFF475569),
          ),
        ),
        
        const SizedBox(height: 32),
        
        // Key Highlights
        Wrap(
          spacing: 20,
          runSpacing: 20,
          children: personalInfo.highlights.entries.map((entry) => 
            _buildHighlight(entry.value, entry.key)
          ).toList(),
        ),
      ],
    );
  }

  Widget _buildHighlight(String number, String label) {
    return Column(
      children: [
        Text(
          number,
          style: const TextStyle(
            fontSize: 32,
            fontWeight: FontWeight.bold,
            color: Color(0xFF2563EB),
          ),
        ),
        const SizedBox(height: 8),
        Text(
          label,
          style: const TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.w500,
            color: Color(0xFF64748B),
          ),
        ),
      ],
    );
  }
}
