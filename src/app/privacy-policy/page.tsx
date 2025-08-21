'use client'

import React from 'react'
import { motion } from 'framer-motion'

const PrivacyPolicyPage: React.FC = () => {
  const sectionClasses = "bg-bg-secondary border border-border rounded-lg p-10 leading-relaxed";
  const h2Classes = "text-text-primary mb-6 text-2xl border-b-2 border-accent pb-4";
  const h3Classes = "text-text-primary my-10 text-xl";
  const pClasses = "mb-6 text-text-secondary";
  const ulClasses = "my-6 pl-10";
  const liClasses = "mb-4 text-text-secondary";
  const strongClasses = "text-text-primary font-semibold";

  return (
    <div className="space-y-6">
      <motion.section
        className={sectionClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={h2Classes}>Privacy Policy</h2>
        <p className={pClasses}><strong className={strongClasses}>Last updated:</strong> January 2025</p>
        
        <p className={pClasses}>
          This Privacy Policy describes how Jeremy M. Hayes ("I", "me", or "my") collects, uses, and shares your personal information when you visit my portfolio website.
        </p>
      </motion.section>

      <motion.section
        className={sectionClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className={h3Classes}>Information I Collect</h3>
        <p className={pClasses}>When you visit my website, I may collect the following types of information:</p>
        <ul className={ulClasses}>
          <li className={liClasses}><strong className={strongClasses}>Contact Information:</strong> If you use the contact form, I collect your name, email address, and message content.</li>
          <li className={liClasses}><strong className={strongClasses}>Newsletter Subscription:</strong> If you subscribe to my newsletter, I collect your email address.</li>
          <li className={liClasses}><strong className={strongClasses}>Usage Data:</strong> I may collect information about how you interact with my website, including pages visited and time spent on the site.</li>
        </ul>
      </motion.section>

      <motion.section
        className={sectionClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className={h3Classes}>How I Use Your Information</h3>
        <p className={pClasses}>I use the information I collect to:</p>
        <ul className={ulClasses}>
          <li className={liClasses}>Respond to your inquiries and messages</li>
          <li className={liClasses}>Send you updates about my projects and work (if you've subscribed)</li>
          <li className={liClasses}>Improve my website and user experience</li>
          <li className={liClasses}>Analyze website usage and performance</li>
        </ul>
      </motion.section>

      <motion.section
        className={sectionClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className={h3Classes}>Information Sharing</h3>
        <p className={pClasses}>
          I do not sell, trade, or otherwise transfer your personal information to third parties. 
          I may share your information only in the following circumstances:
        </p>
        <ul className={ulClasses}>
          <li className={liClasses}>With your explicit consent</li>
          <li className={liClasses}>To comply with legal obligations</li>
          <li className={liClasses}>To protect my rights and safety</li>
        </ul>
      </motion.section>

      <motion.section
        className={sectionClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className={h3Classes}>Data Security</h3>
        <p className={pClasses}>
          I implement appropriate security measures to protect your personal information against unauthorized access, 
          alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
        </p>
      </motion.section>

      <motion.section
        className={sectionClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <h3 className={h3Classes}>Your Rights</h3>
        <p className={pClasses}>You have the right to:</p>
        <ul className={ulClasses}>
          <li className={liClasses}>Access the personal information I hold about you</li>
          <li className={liClasses}>Request correction of inaccurate information</li>
          <li className={liClasses}>Request deletion of your personal information</li>
          <li className={liClasses}>Unsubscribe from my newsletter at any time</li>
        </ul>
      </motion.section>

      <motion.section
        className={sectionClasses}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <h3 className={h3Classes}>Contact Me</h3>
        <p className={pClasses}>
          If you have any questions about this Privacy Policy or my data practices, 
          please contact me through the contact form on this website.
        </p>
      </motion.section>
    </div>
  )
}

export default PrivacyPolicyPage 