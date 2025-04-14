const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-xs py-8">
      <div className="max-w-[1020px] mx-auto">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Manage Bookings</a>
              </li>
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">Safety Guidelines</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Loyalty Program</a>
              </li>
              <li>
                <a href="#">Special Offers</a>
              </li>
              <li>
                <a href="#">Travel Inspiration</a>
              </li>
              <li>
                <a href="#">Business Travel</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="#">Accessibility Statement</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press & Media</a>
              </li>
              <li>
                <a href="#">Corporate Responsibility</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-500">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
