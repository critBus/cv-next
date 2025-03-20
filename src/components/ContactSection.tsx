import React from 'react';
import cvData from '@/data/cv.json';

const ContactSection = () => {
  const { contact } = cvData;

  const contactItems = [
    { icon: '📧', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: '📱', label: 'Teléfono', value: contact.phone, href: `tel:${contact.phone}` },
    { icon: '💼', label: 'LinkedIn', value: 'LinkedIn', href: contact.linkedin },
    { icon: '💻', label: 'GitHub', value: 'GitHub', href: contact.github },
    { icon: '🐦', label: 'Twitter', value: 'Twitter', href: contact.twitter },
    { icon: '📍', label: 'Ubicación', value: contact.location },
  ];

  return (
    <section className="w-full max-w-4xl mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {contactItems.map((item, index) => (
          item.value && (
            <div
              key={index}
              className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow w-full md:w-[calc(50%-12px)] max-w-sm"
            >
              <span className="text-2xl mr-4" role="img" aria-label={item.label}>
                {item.icon}
              </span>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-gray-800 dark:text-gray-200">{item.value}</span>
                )}
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
