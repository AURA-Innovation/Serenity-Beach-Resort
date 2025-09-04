"use client";

import { CONTACT } from "@/config/contact";

const SiteFooter = () => {
  return (
    <footer className="bg-[#343a40] text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12 flex flex-wrap gap-8 justify-between">
        <div className="min-w-[220px]">
          <img
            src="https://serenityabaco.com/wp-content/uploads/2022/05/SERENITY-LOGO-SM.png"
            alt=""
            aria-hidden="true"
            className="h-10 w-auto mb-4"
            loading="lazy"
          />
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Pages</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#resort" className="hover:text-[#007bff]">The Resort</a></li>
            <li><a href="#about" className="hover:text-[#007bff]">About Us</a></li>
            <li><a href="#activities" className="hover:text-[#007bff]">Activities</a></li>
            <li><a href="#photos" className="hover:text-[#007bff]">Photos</a></li>
            <li><a href="#contact" className="hover:text-[#007bff]">Contact Us</a></li>
          </ul>
        </div>

        <div className="min-w-[220px]">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Property Related</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#properties" className="hover:text-[#007bff]">Bahamas Property For Sale</a></li>
            <li><a href="#masterplan" className="hover:text-[#007bff]">Master Plan</a></li>
          </ul>
        </div>

        <div className="min-w-[220px]">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Contact Info</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href={CONTACT.mapPlaceUrl}
                className="hover:text-[#007bff]"
                target="_blank"
                rel="noreferrer"
              >
                {CONTACT.addressLines[1]} {/* City/Region */}
              </a>
            </li>
            <li><a href={`tel:${CONTACT.phone}`} className="hover:text-[#007bff]">{CONTACT.phonePretty}</a></li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="hover:text-[#007bff]"
              >
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
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