import '@fortawesome/fontawesome-free/css/all.min.css';

export function Footer() {
    return (
      <footer className=" text-white py-8">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo or Branding */}
            <div className="text-lg font-bold mr-10">My Portfolio</div>
  
            {/* Navigation Links */}
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#home"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gray-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
  
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/developerMark17"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <i className="fab fa-github"></i> {/* Add a GitHub Icon */}
              </a>
              <a
                href="https://linkedin.com/in/developermark17"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <i className="fab fa-linkedin"></i> {/* Add a LinkedIn Icon */}
              </a>
              <a
                href="https://www.instagram.com/markcoder_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <i className="fab fa-instagram"></i> {/* Add a Twitter Icon */}
              </a>
            </div>
          </div>
  
          {/* Divider */}
          <div className="my-6 border-t border-gray-700"></div>
  
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
            <p>
              Made with ❤️ by Airaz Khan
          
            </p>
          </div>
        </div>
      </footer>
    );
  }
  