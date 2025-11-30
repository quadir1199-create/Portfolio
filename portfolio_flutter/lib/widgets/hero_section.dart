import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:portfolio_flutter/models/portfolio_data.dart';
import 'package:portfolio_flutter/utils/adaptive_layout.dart';

class HeroSection extends StatelessWidget {
  final PersonalInfo personalInfo;
  
  const HeroSection({super.key, required this.personalInfo});

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
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            Color(0xFFF8FAFC),
            Color(0xFFE2E8F0),
          ],
        ),
      ),
      child: Column(
        children: [
          const SizedBox(height: 40),
          
          // Profile Image
          Container(
            width: AdaptiveLayout.isMobile(context) ? 120 : 150,
            height: AdaptiveLayout.isMobile(context) ? 120 : 150,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: Colors.blue, width: 4),
              boxShadow: [
                BoxShadow(
                  color: Colors.blue.withOpacity(0.3),
                  blurRadius: 20,
                  offset: const Offset(0, 10),
                ),
              ],
            ),
            child: CircleAvatar(
              radius: AdaptiveLayout.isMobile(context) ? 58 : 73,
              backgroundColor: const Color(0xFF2563EB),
              child: Icon(
                Icons.person,
                size: AdaptiveLayout.isMobile(context) ? 60 : 80,
                color: Colors.white,
              ),
            ),
          ),
          
          const SizedBox(height: 30),
          
          // Name and Title
          Text(
            personalInfo.name,
            style: TextStyle(
              fontSize: AdaptiveLayout.getFontSize(
                context,
                mobile: 36,
                tablet: 42,
                laptop: 48,
                desktop: 48,
              ),
              fontWeight: FontWeight.bold,
              color: const Color(0xFF1E293B),
            ),
          ),
          
          const SizedBox(height: 16),
          
          Text(
            personalInfo.title,
            style: TextStyle(
              fontSize: AdaptiveLayout.getFontSize(
                context,
                mobile: 18,
                tablet: 20,
                laptop: 24,
                desktop: 24,
              ),
              fontWeight: FontWeight.w500,
              color: const Color(0xFF64748B),
            ),
          ),
          
          const SizedBox(height: 8),
          
          Text(
            personalInfo.subtitle,
            style: TextStyle(
              fontSize: AdaptiveLayout.getFontSize(
                context,
                mobile: 14,
                tablet: 16,
                laptop: 18,
                desktop: 18,
              ),
              fontWeight: FontWeight.w400,
              color: const Color(0xFF94A3B8),
            ),
          ),
          
          const SizedBox(height: 40),
          
          // Description
          Text(
            personalInfo.description,
            textAlign: TextAlign.center,
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
          
          const SizedBox(height: 50),
          
          // Action Buttons
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ElevatedButton(
                onPressed: () => _launchURL('mailto:your.email@example.com'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF2563EB),
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8),
                  ),
                ),
                child: const Text(
                  'Get In Touch',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
                ),
              ),
              
              const SizedBox(width: 20),
              
              OutlinedButton(
                onPressed: () => _launchURL('https://github.com/quadir1199-create'),
                style: OutlinedButton.styleFrom(
                  foregroundColor: const Color(0xFF2563EB),
                  side: const BorderSide(color: Color(0xFF2563EB)),
                  padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8),
                  ),
                ),
                child: const Text(
                  'View Projects',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
                ),
              ),
            ],
          ),
          
          const SizedBox(height: 40),
        ],
      ),
    );
  }
}
