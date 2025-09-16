import React from "react";
import {
  HiCheckCircle,
  HiLightningBolt,
  HiDeviceMobile,
  HiShieldCheck,
  HiUsers,
  HiDocumentText,
  HiChartBar,
} from "react-icons/hi";
import "../assets/styles/FreeAudit.css";

const checklist = [
  {
    title: "Website Speed",
    icon: <HiLightningBolt />,
    items: [
      "Site loads under 3 seconds",
      "Images optimized (WebP or compressed)",
      "Unused plugins/scripts removed",
    ],
  },
  {
    title: "Mobile Friendliness",
    icon: <HiDeviceMobile />,
    items: ["Fully responsive", "Fonts and buttons readable & clickable on mobile"],
  },
  {
    title: "SEO Basics",
    icon: <HiDocumentText />,
    items: [
      "Unique page title & meta description for every page",
      "Proper heading structure (H1, H2…)",
      "Alt text for all images",
    ],
  },
  {
    title: "Security",
    icon: <HiShieldCheck />,
    items: [
      "SSL active (HTTPS)",
      "Strong passwords & security plugin",
      "Regular backup system",
    ],
  },
  {
    title: "User Experience (UX)",
    icon: <HiUsers />,
    items: [
      "Easy and clear navigation",
      "Contact form accessible",
      "Visible and attractive CTA buttons",
    ],
  },
  {
    title: "Content",
    icon: <HiDocumentText />,
    items: [
      "Homepage clearly communicates value",
      "Informative service/product pages",
      "Blog for SEO and credibility",
    ],
  },
  {
    title: "Analytics",
    icon: <HiChartBar />,
    items: ["Google Analytics (GA4) installed", "Google Search Console connected"],
  },
];

const FreeAudit = () => {
  return (
    <section className='audit-section'>
      <div className='audit-header'>
        <h2 className='audit-title'>Website Audit & Improvement Checklist</h2>
        <p className='audit-intro'>
          Spot issues, improve performance, and grow your business. Use this checklist to
          optimize your website quickly.
        </p>
      </div>

      <div className='audit-grid'>
        {checklist.map((section, idx) => (
          <div key={idx} className='audit-card'>
            <div className='card-header'>
              <span className='card-icon'>{section.icon}</span>
              <h3 className='card-title'>{section.title}</h3>
            </div>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className='card-item'>
                  <HiCheckCircle className='item-icon' /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className='audit-bonus'>
        <strong>Bonus Tip:</strong> Slow websites cost more than no websites—they silently
        lose potential customers.
      </p>
      <br />

      <div className='audit-cta-wrapper'>
        <a
          href='https://api.whatsapp.com/send/?phone=8801994540932&text=Hi!+I+am+interested+in+your+Free+Website+Audit&type=phone_number&app_absent=0'
          className='btn'
          target='_blank'
          rel='noopener noreferrer'>
          Get Your Free Detailed Website Audit Report
        </a>
      </div>
    </section>
  );
};

export default FreeAudit;
