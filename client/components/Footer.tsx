import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'About Us': '/about',
    'Services': '/services',
    'Success Stories': '/success-stories',
    'Contact Us': '/contact',
  };

  const socialIcons = [
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.895 8.252 7.046 7.762 8.343 7.762s2.448.49 3.323 1.297c.9.9 1.39 2.051 1.39 3.348s-.49 2.448-1.297 3.323c-.9.9-2.051 1.39-3.348 1.39zm7.718-1.297c-.9.9-2.051 1.39-3.348 1.39s-2.448-.49-3.323-1.297C8.598 14.895 8.108 13.744 8.108 12.447s.49-2.448 1.297-3.323C10.295 8.252 11.446 7.762 12.743 7.762s2.448.49 3.323 1.297c.9.9 1.39 2.051 1.39 3.348s-.49 2.448-1.297 3.323z"/>
        </svg>
      ),
      href: '#'
    }
  ];

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Star className="h-6 w-6 text-primary" fill="currentColor" />
              <span className="text-xl font-bold text-foreground">NUF CONSULTANT</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Navigating the complexities of visa applications can be daunting. At Visa Solutions, we simplify the process, 
              providing expert guidance for students and travelers alike.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {Object.entries(footerLinks).map(([label, path]) => (
                <li key={path}>
                  <Link 
                    to={path} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>+92 123456789</p>
              <p>ebadmahar@gmail.com</p>
              <p>F-6, ISLAMABAD</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border/40 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Nuf Consultant. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
