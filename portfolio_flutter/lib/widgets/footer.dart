import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:portfolio_flutter/models/portfolio_data.dart';
import 'package:portfolio_flutter/utils/adaptive_layout.dart';

class Footer extends StatelessWidget {
  final ContactInfo contactInfo;

  const Footer({super.key, required this.contactInfo});

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
      color: const Color(0xFF1E293B),
      child: Column(
        children: [
          const SizedBox(height: 40),
          
          // Footer Content
          ResponsiveBuilder(
            mobile: _buildMobileLayout(context),
            tablet: _buildTabletLayout(context),
            laptop: _buildDesktopLayout(context),
            desktop: _buildDesktopLayout(context),
          ),
          
          const SizedBox(height: 40),
          
          // Divider
          Container(
            height: 1,
            color: Colors.grey[700],
          ),
          
          const SizedBox(height: 20),
          
          // Copyright
          Text(
            '© ${DateTime.now().year} Abdul Quadir. All rights reserved.',
            style: TextStyle(
              fontSize: 14,
              color: Colors.grey[400],
            ),
            textAlign: TextAlign.center,
          ),
          
          const SizedBox(height: 20),
        ],
      ),
    );
  }

  Widget _buildMobileLayout(BuildContext context) {
    return Column(
      children: [
        _buildFooterSection(context, 'About', [
          'Lead Mobile Developer with 11+ years experience',
          'Specialized in Flutter and Android development',
          'Delivered 10M+ QAR in cost savings',
        ]),
        const SizedBox(height: 30),
        _buildFooterSection(context, 'Quick Links', [
          'Home',
          'About',
          'Experience',
          'Skills',
          'Projects',
          'Contact',
        ]),
        const SizedBox(height: 30),
        _buildSocialLinks(context),
      ],
    );
  }

  Widget _buildTabletLayout(BuildContext context) {
    return Column(
      children: [
        Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              child: _buildFooterSection(context, 'About', [
                'Lead Mobile Developer with 11+ years experience',
                'Specialized in Flutter and Android development',
                'Delivered 10M+ QAR in cost savings',
              ]),
            ),
            const SizedBox(width: 40),
            Expanded(
              child: _buildFooterSection(context, 'Quick Links', [
                'Home',
                'About',
                'Experience',
                'Skills',
                'Projects',
                'Contact',
              ]),
            ),
          ],
        ),
        const SizedBox(height: 30),
        _buildSocialLinks(context),
      ],
    );
  }

  Widget _buildDesktopLayout(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(
          child: _buildFooterSection(context, 'About', [
            'Lead Mobile Developer with 11+ years experience',
            'Specialized in Flutter and Android development',
            'Delivered 10M+ QAR in cost savings',
          ]),
        ),
        const SizedBox(width: 60),
        Expanded(
          child: _buildFooterSection(context, 'Quick Links', [
            'Home',
            'About',
            'Experience',
            'Skills',
            'Projects',
            'Contact',
          ]),
        ),
        const SizedBox(width: 60),
        Expanded(
          child: _buildFooterSection(context, 'Contact', [
            contactInfo.email,
            contactInfo.phone,
            contactInfo.location,
          ]),
        ),
        const SizedBox(width: 60),
        Expanded(
          child: _buildSocialLinks(context),
        ),
      ],
    );
  }

  Widget _buildFooterSection(BuildContext context, String title, List<String> items) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: TextStyle(
            fontSize: AdaptiveLayout.getFontSize(
              context,
              mobile: 18,
              tablet: 20,
              laptop: 22,
              desktop: 22,
            ),
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),
        ),
        
        const SizedBox(height: 20),
        
        ...items.map((item) => 
          Padding(
            padding: const EdgeInsets.only(bottom: 12),
            child: Text(
              item,
              style: TextStyle(
                fontSize: 14,
                color: Colors.grey[400],
                height: 1.5,
              ),
            ),
          ),
        ).toList(),
      ],
    );
  }

  Widget _buildSocialLinks(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Connect With Me',
          style: TextStyle(
            fontSize: AdaptiveLayout.getFontSize(
              context,
              mobile: 18,
              tablet: 20,
              laptop: 22,
              desktop: 22,
            ),
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),
        ),
        
        const SizedBox(height: 20),
        
        Row(
          children: [
            _buildSocialIcon(
              context,
              Icons.link,
              'LinkedIn',
              contactInfo.linkedin,
            ),
            const SizedBox(width: 16),
            _buildSocialIcon(
              context,
              Icons.code,
              'GitHub',
              contactInfo.github,
            ),
            const SizedBox(width: 16),
            _buildSocialIcon(
              context,
              Icons.email,
              'Email',
              'mailto:${contactInfo.email}',
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildSocialIcon(BuildContext context, IconData icon, String label, String url) {
    return InkWell(
      onTap: () => _launchURL(url),
      borderRadius: BorderRadius.circular(8),
      child: Container(
        width: 50,
        height: 50,
        decoration: BoxDecoration(
          color: const Color(0xFF2563EB),
          borderRadius: BorderRadius.circular(8),
        ),
        child: Icon(
          icon,
          color: Colors.white,
          size: 24,
        ),
      ),
    );
  }
}



