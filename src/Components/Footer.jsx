import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-5">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Top Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">Shivam Pandey</h2>
            <p className="mt-3 text-sm text-gray-400">
              Working at Skill Vertex, building efficient web applications and
              delivering high-quality tech solutions
            </p>
          </div>

          {/* Navigation */}
          <nav>
            <h3 className="text-lg font-semibold text-white ">Quick Links</h3>
            <ul className=" text-gray-400">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/project" className="hover:text-white">
                  Project
                </a>
              </li>
              <li>
                <a href="/service" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/education" className="hover:text-white">
                  Education
                </a>
              </li>
            </ul>
          </nav>

          {/* Social */}
          <section>
            <h3 className="text-lg font-semibold text-white ">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/shivam-pandey-80966b344"
                className="hover:text-white">
                Linkedin
              </a>
              <a
                href="https://github.com/Shivam-75"
                className="hover:text-white">
                Github
              </a>
            </div>
          </section>
        </section>

        <hr className="border-gray-700 my-4" />

        {/* Bottom Section */}
        <section className="flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
