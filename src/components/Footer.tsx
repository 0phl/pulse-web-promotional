import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/pulse_logo.png"
                alt="PULSE Logo"
                className="h-8 w-auto object-contain" />

              <span className="text-xl font-bold text-gray-900">PULSE</span>
            </div>
            <p className="text-gray-600 max-w-sm mb-6">
              Public Updates, Local Services, and Engagement Application.
              Building stronger communities through technology.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) =>
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-teal-500 transition-colors">

                  <Icon className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-teal-500">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  How it Works
                </a>
              </li>
              <li>
                <a href="https://app.appsonair.com/install/TX1FpB0W" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
                  Download
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Release Notes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@pulseapp.com</span>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} PULSE Community App. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>);

}