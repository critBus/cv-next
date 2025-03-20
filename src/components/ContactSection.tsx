import React from 'react';
import cvData from '@/data/cv.json';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
  const { contact } = cvData;

  const contactItems = [
    { icon: <MdEmail className="text-2xl" />, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: <MdPhone className="text-2xl" />, label: 'Teléfono', value: contact.phone, href: `tel:${contact.phone}` },
    { icon: <FaLinkedin className="text-2xl" />, label: 'LinkedIn', value: '@rene-lazaro-collado-arteaga-447335245', href: contact.linkedin },
    { icon: <FaGithub className="text-2xl" />, label: 'GitHub', value: '@critBus', href: contact.github },
    { icon: <MdLocationOn className="text-2xl" />, label: 'Ubicación', value: contact.location },
  ];

  return (
    <section className="w-full max-w-4xl mb-16 mt-5">
      <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {contactItems.map((item, index) => (
          item.value && (
            <div key={index} className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-600 dark:text-blue-400 mb-2">
                {item.icon}
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">{item.label}</span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-gray-900 dark:text-white">{item.value}</span>
              )}
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
