import 'package:flutter/material.dart';
import 'package:portfolio_flutter/models/portfolio_data.dart';
import 'package:portfolio_flutter/utils/adaptive_layout.dart';

class SkillsSection extends StatelessWidget {
  final List<Skill> skills;

  const SkillsSection({super.key, required this.skills});

  @override
  Widget build(BuildContext context) {
    // Group skills by category
    final Map<String, List<Skill>> skillsByCategory = {};
    for (final skill in skills) {
      skillsByCategory.putIfAbsent(skill.category, () => []).add(skill);
    }

    return Container(
      width: double.infinity,
      padding: AdaptiveLayout.getSectionPadding(context),
      color: Colors.white,
      child: Column(
        children: [
          // Section Header
          Text(
            'Skills & Expertise',
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
          
          // Skills by Category
          ...skillsByCategory.entries.map((entry) => 
            _buildSkillCategory(context, entry.key, entry.value)
          ).toList(),
        ],
      ),
    );
  }

  Widget _buildSkillCategory(BuildContext context, String category, List<Skill> categorySkills) {
    return Container(
      margin: const EdgeInsets.only(bottom: 40),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Category Title
          Text(
            category,
            style: TextStyle(
              fontSize: AdaptiveLayout.getFontSize(
                context,
                mobile: 20,
                tablet: 22,
                laptop: 24,
                desktop: 24,
              ),
              fontWeight: FontWeight.bold,
              color: const Color(0xFF1E293B),
            ),
          ),
          
          const SizedBox(height: 20),
          
          // Skills Grid
          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: AdaptiveLayout.getGridCrossAxisCount(context),
              crossAxisSpacing: 20,
              mainAxisSpacing: 20,
              childAspectRatio: AdaptiveLayout.isMobile(context) ? 1.2 : 1.5,
            ),
            itemCount: categorySkills.length,
            itemBuilder: (context, index) => _buildSkillCard(context, categorySkills[index]),
          ),
        ],
      ),
    );
  }

  Widget _buildSkillCard(BuildContext context, Skill skill) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: const Color(0xFFF8FAFC),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.grey[200]!),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.1),
            blurRadius: 10,
            offset: const Offset(0, 5),
          ),
        ],
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          // Skill Icon
          Container(
            width: 40,
            height: 40,
            decoration: BoxDecoration(
              color: const Color(0xFF2563EB).withOpacity(0.1),
              borderRadius: BorderRadius.circular(8),
              border: Border.all(color: const Color(0xFF2563EB), width: 1),
            ),
            child: const Icon(
              Icons.star,
              color: Color(0xFF2563EB),
              size: 20,
            ),
          ),
          
          const SizedBox(height: 16),
          
          // Skill Level Progress Bar
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  skill.name,
                  style: TextStyle(
                    fontSize: AdaptiveLayout.getFontSize(
                      context,
                      mobile: 14,
                      tablet: 16,
                      laptop: 16,
                      desktop: 16,
                    ),
                    fontWeight: FontWeight.w600,
                    color: const Color(0xFF1E293B),
                  ),
                ),
                const SizedBox(height: 8),
                LinearProgressIndicator(
                  value: skill.level / 100,
                  backgroundColor: Colors.grey[200],
                  valueColor: const AlwaysStoppedAnimation<Color>(Color(0xFF2563EB)),
                  minHeight: 8,
                ),
                const SizedBox(height: 4),
                Text(
                  '${skill.level}%',
                  style: TextStyle(
                    fontSize: 12,
                    color: Colors.grey[600],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
