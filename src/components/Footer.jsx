import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 ">
      <div className="max-w-[1440px] mx-auto px-8 py-16 grid gap-12 md:grid-cols-3">

        {/* Brand */}
        <div className="">
          <h2 className="text-2xl font-bold text-white">
            Order<span className="text-amber-500">Eats</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Discover delicious meals crafted with care. Browse our menu and
            enjoy quality food anytime.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Navigation
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-amber-400">Home</Link></li>
            <li><Link to="/menu" className="hover:text-amber-400">Menu</Link></li>
            <li><Link to="/about" className="hover:text-amber-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-amber-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li>Email: support@ordereats.com</li>
            <li>Phone: +234 800 000 0000</li>
            <li>Location: Lagos, Nigeria</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} OrderEats. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
