import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:portfolio_flutter/models/portfolio_data.dart';
import 'package:portfolio_flutter/utils/adaptive_layout.dart';

class ContactSection extends StatelessWidget {
  final ContactInfo contactInfo;

  const ContactSection({super.key, required this.contactInfo});

  Future<void> _launchURL(String url) async {
    if (await canLaunchUrl(Uri.parse(url))) {
      await launchUrl(Uri.parse(url));
    }
  }

  Future<void> _launchEmail() async {
    final emailUrl = 'mailto:${contactInfo.email}';
    if (await canLaunchUrl(Uri.parse(emailUrl))) {
      await launchUrl(Uri.parse(emailUrl));
    }
  }

  Future<void> _launchPhone() async {
    final phoneUrl = 'tel:${contactInfo.phone}';
    if (await canLaunchUrl(Uri.parse(phoneUrl))) {
      await launchUrl(Uri.parse(phoneUrl));
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
            'Get In Touch',
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
          
          // Contact Content
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
        _buildContactForm(context),
        const SizedBox(height: 40),
        _buildContactInfo(context),
      ],
    );
  }

  Widget _buildTabletLayout(BuildContext context) {
    return Column(
      children: [
        _buildContactForm(context),
        const SizedBox(height: 40),
        _buildContactInfo(context),
      ],
    );
  }

  Widget _buildDesktopLayout(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(flex: 2, child: _buildContactForm(context)),
        const SizedBox(width: 60),
        Expanded(flex: 1, child: _buildContactInfo(context)),
      ],
    );
  }

  Widget _buildContactForm(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(32),
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
          Text(
            'Send Message',
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
          
          const SizedBox(height: 24),
          
          // Name Field
          TextFormField(
            decoration: InputDecoration(
              labelText: 'Name',
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
              ),
              prefixIcon: const Icon(Icons.person),
            ),
          ),
          
          const SizedBox(height: 20),
          
          // Email Field
          TextFormField(
            decoration: InputDecoration(
              labelText: 'Email',
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
              ),
              prefixIcon: const Icon(Icons.email),
            ),
          ),
          
          const SizedBox(height: 20),
          
          // Subject Field
          TextFormField(
            decoration: InputDecoration(
              labelText: 'Subject',
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
              ),
              prefixIcon: const Icon(Icons.subject),
            ),
          ),
          
          const SizedBox(height: 20),
          
          // Message Field
          TextFormField(
            maxLines: 4,
            decoration: InputDecoration(
              labelText: 'Message',
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
              ),
              prefixIcon: const Icon(Icons.message),
            ),
          ),
          
          const SizedBox(height: 24),
          
          // Send Button
          SizedBox(
            width: double.infinity,
            child: ElevatedButton(
              onPressed: _launchEmail,
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF2563EB),
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(vertical: 16),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
              ),
              child: const Text(
                'Send Message',
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildContactInfo(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Contact Information',
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
        
        const SizedBox(height: 24),
        
        _buildContactItem(
          context,
          Icons.email,
          'Email',
          contactInfo.email,
          _launchEmail,
        ),
        
        const SizedBox(height: 20),
        
        _buildContactItem(
          context,
          Icons.phone,
          'Phone',
          contactInfo.phone,
          _launchPhone,
        ),
        
        const SizedBox(height: 20),
        
        _buildContactItem(
          context,
          Icons.location_on,
          'Location',
          contactInfo.location,
          null,
        ),
        
        const SizedBox(height: 20),
        
        _buildContactItem(
          context,
          Icons.link,
          'LinkedIn',
          'linkedin.com/in/abdulquadir',
          () => _launchURL(contactInfo.linkedin),
        ),
        
        const SizedBox(height: 20),
        
        _buildContactItem(
          context,
          Icons.code,
          'GitHub',
          'github.com/quadir1199-create',
          () => _launchURL(contactInfo.github),
        ),
      ],
    );
  }

  Widget _buildContactItem(
    BuildContext context,
    IconData icon,
    String label,
    String value,
    VoidCallback? onTap,
  ) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(8),
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: onTap != null ? Colors.white : Colors.grey[50],
          borderRadius: BorderRadius.circular(8),
          border: Border.all(
            color: onTap != null ? Colors.grey[200]! : Colors.transparent,
          ),
        ),
        child: Row(
          children: [
            Icon(
              icon,
              color: const Color(0xFF2563EB),
              size: 24,
            ),
            const SizedBox(width: 16),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    label,
                    style: TextStyle(
                      fontSize: 14,
                      fontWeight: FontWeight.w600,
                      color: Colors.grey[700],
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    value,
                    style: TextStyle(
                      fontSize: 16,
                      color: onTap != null 
                          ? const Color(0xFF2563EB)
                          : const Color(0xFF1E293B),
                    ),
                  ),
                ],
              ),
            ),
            if (onTap != null)
              Icon(
                Icons.arrow_forward_ios,
                size: 16,
                color: Colors.grey[400],
              ),
          ],
        ),
      ),
    );
  }
}



