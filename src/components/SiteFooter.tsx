"use client";

const SiteFooter = () => {
  return (
    <footer className="glass-dark mt-12 border-t border-white/6">
      <div className="mx-auto max-w-[1200px] px-4 py-12 flex flex-wrap gap-8 justify-between">
        <div className="min-w-[220px]">
          <img
            src="https://serenityabaco.com/wp-content/uploads/2022/05/SERENITY-LOGO-SM.png"
            alt="Serenity Abaco Logo"
            className="h-10 w-auto mb-4"
            loading="lazy"
          />
          <h4 className="text-sm font-semibold text-gray-200 mb-3">Pages</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#resort" className="hover:text-[#007bff]">The Resort</a></li>
            <li><a href="#about" className="hover:text-[#007bff]">About Us</a></li>
            <li><a href="#activities" className="hover:text-[#007bff]">Activities</a></li>
            <li><a href="#photos" className="hover:text-[#007bff]">Photos</a></li>
            <li><a href="#contact" className="hover:text-[#007bff]">Contact Us</a></li>
          </ul>
        </div>

        <div className="min-w-[220px]">
          <h4 className="text-sm font-semibold text-gray-200 mb-3">Property Related</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#properties" className="hover:text-[#007bff]">Bahamas Property For Sale</a></li>
            <li><a href="#masterplan" className="hover:text-[#007bff]">Master Plan</a></li>
          </ul>
        </div>

        <div className="min-w-[220px]">
          <h4 className="text-sm font-semibold text-gray-200 mb-3">Contact Info</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="https://goo.gl/maps/V8ZmdfWyqCuv6bcYA"
                className="hover:text-[#007bff]"
              >
                Abaco Bahamas
              </a>
            </li>
            <li><a href="tel:4067506135" className="hover:text-[#007bff]">406-750-6135</a></li>
            <li>
              <a
                href="mailto:mhawn@ranchesatbeltcreek.com"
                className="hover:text-[#007bff]"
              >
                mhawn@ranchesatbeltcreek.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto max-w-[1200px] px-4 py-6 text-center text-sm text-gray-400">
          Copyright © 2022 Serenity Beach Abaco Bahamas. All Rights Reserved. Designed and Developed by{" "}
          <strong>
            <a href="https://conceptionmasters.com/" className="text-[#007bff] hover:underline">
              Conception Masters
            </a>
          </strong>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;