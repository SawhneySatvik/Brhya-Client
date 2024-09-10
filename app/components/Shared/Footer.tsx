import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-white to-yellow-50 flex items-center justify-between text-gray-800 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Mission */}
          <div>
            <div className="flex items-center space-x-2">
            <img
      alt="Bryha Logistics Logo"
      src="/assets/clean_bryha_logo.png"
      className="h-8 w-auto object-contain"
    />
              <span className="text-xl font-semibold">Bryha Logistics</span>
            </div>
            <p className="mt-4">
              Delivering excellence and efficiency in logistics, ensuring your cargo is always on time.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-yellow-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-yellow-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-yellow-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-yellow-400">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul>
              <li className="mb-2 hover:text-yellow-400">
                <a href="#">Freight Management</a>
              </li>
              <li className="mb-2 hover:text-yellow-400">
                <a href="#">Warehouse Solutions</a>
              </li>
              <li className="mb-2 hover:text-yellow-400">
                <a href="#">Supply Chain Optimization</a>
              </li>
              <li className="mb-2 hover:text-yellow-400">
                <a href="#">Custom Clearance</a>
              </li>
              <li className="mb-2 hover:text-yellow-400">
                <a href="#">Last-Mile Delivery</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul>
              <li className="mb-2 hover:text-yellow-400">
                <a href="#">Help Center</a>
              </li>
              <li className="mb-2 hover:text-yellow-400">
                <a href="#">Shipping FAQs</a>
              </li>
              <li className="mb-2 hover:text-yellow-400">
                <a href="#">Tracking Assistance</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul>
              <li className="mb-2 hover:text-yellow-400">
                <a href="#">About Us</a>
              </li>
              <li className="mb-2 hover:text-yellow-400">
                <a href="#">Careers</a>
              </li>
              <li className="mb-2 hover:text-yellow-400">
                <a href="#">News & Insights</a>
              </li>
              <li className="mb-2 hover:text-yellow-400">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="my-8 border-t border-yellow-400 pt-8 text-center">
          <p>© 2024 Bryha Logistics, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
