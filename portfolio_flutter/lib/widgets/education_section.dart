import 'package:flutter/material.dart';
import 'package:portfolio_flutter/models/portfolio_data.dart';
import 'package:portfolio_flutter/utils/adaptive_layout.dart';

class EducationSection extends StatelessWidget {
  final List<Education> education;

  const EducationSection({super.key, required this.education});

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
            'Education',
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
          
          // Education Cards
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
      children: education.map((edu) => _buildEducationCard(context, edu)).toList(),
    );
  }

  Widget _buildTabletLayout(BuildContext context) {
    return Column(
      children: education.map((edu) => _buildEducationCard(context, edu)).toList(),
    );
  }

  Widget _buildDesktopLayout(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: education.map((edu) => 
        Expanded(child: _buildEducationCard(context, edu))
      ).toList(),
    );
  }

  Widget _buildEducationCard(BuildContext context, Education edu) {
    return Container(
      margin: const EdgeInsets.only(bottom: 24),
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: const Color(0xFFF8FAFC),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.grey[200]!),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.1),
            blurRadius: 20,
            offset: const Offset(0, 10),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Institution Header
          Row(
            children: [
              // Institution Logo
              Container(
                width: 60,
                height: 60,
                decoration: BoxDecoration(
                  color: const Color(0xFF2563EB).withOpacity(0.1),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: const Color(0xFF2563EB), width: 1),
                ),
                child: const Icon(
                  Icons.school,
                  color: Color(0xFF2563EB),
                  size: 30,
                ),
              ),
              const SizedBox(width: 16),
              // Education Details
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      edu.degree,
                      style: TextStyle(
                        fontSize: AdaptiveLayout.getFontSize(
                          context,
                          mobile: 18,
                          tablet: 20,
                          laptop: 22,
                          desktop: 22,
                        ),
                        fontWeight: FontWeight.bold,
                        color: const Color(0xFF1E293B),
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      edu.institution,
                      style: TextStyle(
                        fontSize: AdaptiveLayout.getFontSize(
                          context,
                          mobile: 16,
                          tablet: 18,
                          laptop: 18,
                          desktop: 18,
                        ),
                        fontWeight: FontWeight.w600,
                        color: const Color(0xFF2563EB),
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      edu.duration,
                      style: TextStyle(
                        fontSize: 14,
                        color: Colors.grey[600],
                      ),
                    ),
                    const SizedBox(height: 12),
                    Text(
                      edu.description,
                      style: TextStyle(
                        fontSize: AdaptiveLayout.getFontSize(
                          context,
                          mobile: 14,
                          tablet: 16,
                          laptop: 16,
                          desktop: 16,
                        ),
                        height: 1.5,
                        color: const Color(0xFF475569),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
