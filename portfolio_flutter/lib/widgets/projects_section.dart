import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:portfolio_flutter/models/portfolio_data.dart';
import 'package:portfolio_flutter/utils/adaptive_layout.dart';

class ProjectsSection extends StatelessWidget {
  final List<Project> projects;

  const ProjectsSection({super.key, required this.projects});

  Future<void> _launchURL(String url) async {
    if (await canLaunchUrl(Uri.parse(url))) {
      await launchUrl(Uri.parse(url));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: AdaptiveLayout.getSectionPadding(context),
      color: const Color(0xFFF8FAFC),
      child: Column(
        children: [
          // Section Header
          Text(
            'Featured Projects',
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
          
          // Projects Grid
          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: AdaptiveLayout.getGridCrossAxisCount(context),
              crossAxisSpacing: 24,
              mainAxisSpacing: 24,
              childAspectRatio: AdaptiveLayout.isMobile(context) ? 0.8 : 1.2,
            ),
            itemCount: projects.length,
            itemBuilder: (context, index) => _buildProjectCard(context, projects[index]),
          ),
        ],
      ),
    );
  }

  Widget _buildProjectCard(BuildContext context, Project project) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
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
          // Project Image
          Container(
            height: 200,
            decoration: BoxDecoration(
              color: const Color(0xFF2563EB).withOpacity(0.1),
              borderRadius: const BorderRadius.vertical(top: Radius.circular(12)),
              border: Border.all(color: const Color(0xFF2563EB), width: 1),
            ),
            child: const Icon(
              Icons.code,
              size: 60,
              color: Color(0xFF2563EB),
            ),
          ),
          
          // Project Content
          Expanded(
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Project Title
                  Text(
                    project.name,
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
                  
                  const SizedBox(height: 12),
                  
                  // Project Description
                  Expanded(
                    child: Text(
                      project.description,
                      style: TextStyle(
                        fontSize: AdaptiveLayout.getFontSize(
                          context,
                          mobile: 14,
                          tablet: 15,
                          laptop: 16,
                          desktop: 16,
                        ),
                        height: 1.5,
                        color: const Color(0xFF64748B),
                      ),
                      maxLines: 3,
                      overflow: TextOverflow.ellipsis,
                    ),
                  ),
                  
                  const SizedBox(height: 16),
                  
                  // Technologies
                  Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: project.technologies.take(3).map((tech) => 
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                        decoration: BoxDecoration(
                          color: Colors.grey[100],
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: Text(
                          tech,
                          style: TextStyle(
                            fontSize: 12,
                            color: Colors.grey[700],
                          ),
                        ),
                      ),
                    ).toList(),
                  ),
                  
                  const SizedBox(height: 20),
                  
                  // Action Buttons
                  Row(
                    children: [
                      Expanded(
                        child: OutlinedButton(
                          onPressed: () => _launchURL(project.githubUrl),
                          style: OutlinedButton.styleFrom(
                            foregroundColor: const Color(0xFF2563EB),
                            side: const BorderSide(color: Color(0xFF2563EB)),
                            padding: const EdgeInsets.symmetric(vertical: 12),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(8),
                            ),
                          ),
                          child: const Text(
                            'GitHub',
                            style: TextStyle(fontSize: 14, fontWeight: FontWeight.w600),
                          ),
                        ),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: ElevatedButton(
                          onPressed: () => _launchURL(project.liveUrl),
                          style: ElevatedButton.styleFrom(
                            backgroundColor: const Color(0xFF2563EB),
                            foregroundColor: Colors.white,
                            padding: const EdgeInsets.symmetric(vertical: 12),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(8),
                            ),
                          ),
                          child: const Text(
                            'Live Demo',
                            style: TextStyle(fontSize: 14, fontWeight: FontWeight.w600),
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
