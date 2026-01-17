const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8 bg-gray-50">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            <div>
              <h6 className="mb-4 font-semibold text-gray-900">Company</h6>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900">Premium Tools</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900">Blog</a></li>
              </ul>
            </div>
            <div>
              <h6 className="mb-4 font-semibold text-gray-900">Pages</h6>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-gray-900">Courses</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h6 className="mb-4 font-semibold text-gray-900">Legal</h6>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-gray-900">Terms</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="text-gray-700 hover:text-gray-900">Team</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h6 className="mb-3 font-semibold text-gray-900">Subscribe</h6>
            <p className="text-gray-600 mb-4">
              Get access to subscriber exclusive deals and be the first who gets
              informed about fresh sales.
            </p>
            <p className="font-medium mb-2 text-gray-900">Your Email</p>
            <div className="flex flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <p className="mt-3 text-sm text-gray-600">
                  I agree the{" "}
                  <a href="#" className="font-bold underline hover:text-gray-900">
                    Terms and Conditions
                  </a>
                </p>
              </div>
              <button className="w-full lg:w-fit bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <p className="text-center mt-16 text-gray-700">
          &copy; {CURRENT_YEAR} Made with Material Tailwind by{" "}
          <a href="https://www.creative-tim.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            Creative Tim
          </a>{" "}
          | Distributed By{" "}
          <a href="https://themewagon.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
            ThemeWagon
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
