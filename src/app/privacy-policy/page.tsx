'use client'

import React from 'react'
import { motion } from 'framer-motion'

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <motion.section
        className="privacy-policy"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Privacy Policy</h2>
        <p><strong>Last updated:</strong> January 2025</p>
        
        <p>
          This Privacy Policy describes how Jeremy M. Hayes ("I", "me", or "my") collects, uses, and shares your personal information when you visit my portfolio website.
        </p>
      </motion.section>

      <motion.section
        className="privacy-policy"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3>Information I Collect</h3>
        <p>When you visit my website, I may collect the following types of information:</p>
        <ul>
          <li><strong>Contact Information:</strong> If you use the contact form, I collect your name, email address, and message content.</li>
          <li><strong>Newsletter Subscription:</strong> If you subscribe to my newsletter, I collect your email address.</li>
          <li><strong>Usage Data:</strong> I may collect information about how you interact with my website, including pages visited and time spent on the site.</li>
        </ul>
      </motion.section>

      <motion.section
        className="privacy-policy"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3>How I Use Your Information</h3>
        <p>I use the information I collect to:</p>
        <ul>
          <li>Respond to your inquiries and messages</li>
          <li>Send you updates about my projects and work (if you've subscribed)</li>
          <li>Improve my website and user experience</li>
          <li>Analyze website usage and performance</li>
        </ul>
      </motion.section>

      <motion.section
        className="privacy-policy"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3>Information Sharing</h3>
        <p>
          I do not sell, trade, or otherwise transfer your personal information to third parties. 
          I may share your information only in the following circumstances:
        </p>
        <ul>
          <li>With your explicit consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect my rights and safety</li>
        </ul>
      </motion.section>

      <motion.section
        className="privacy-policy"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3>Data Security</h3>
        <p>
          I implement appropriate security measures to protect your personal information against unauthorized access, 
          alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
        </p>
      </motion.section>

      <motion.section
        className="privacy-policy"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <h3>Your Rights</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal information I hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Unsubscribe from my newsletter at any time</li>
        </ul>
      </motion.section>

      <motion.section
        className="privacy-policy"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <h3>Contact Me</h3>
        <p>
          If you have any questions about this Privacy Policy or my data practices, 
          please contact me through the contact form on this website.
        </p>
      </motion.section>
    </>
  )
}

export default PrivacyPolicyPage 