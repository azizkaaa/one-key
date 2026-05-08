"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8 2xl:pt-24 2xl:pb-10">
      <div className="max-w-7xl 2xl:max-w-[1600px] w-full mx-auto px-5 md:px-8 2xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-5 2xl:gap-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/no_bg_white.png"
                alt="One Key Technologies"
                width={200}
                height={50}
                className="h-10 2xl:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-[14px] 2xl:text-[16px] text-[#94a3b8] leading-relaxed max-w-[280px] 2xl:max-w-[320px]">
              {t.footer.tagline}
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-5 2xl:gap-7">
            <h4 className="text-[13px] 2xl:text-[14px] font-semibold text-white uppercase tracking-widest">
              {t.footer.services}
            </h4>
            <ul className="flex flex-col gap-3.5 2xl:gap-4">
              {t.footer.serviceLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-[15px] 2xl:text-[16px] text-[#94a3b8] hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company (Mirrored from Navbar) */}
          <div className="flex flex-col gap-5 2xl:gap-7">
            <h4 className="text-[13px] 2xl:text-[14px] font-semibold text-white uppercase tracking-widest">
              {t.footer.company}
            </h4>
            <ul className="flex flex-col gap-3.5 2xl:gap-4">
              <li>
                <Link href="/services" className="text-[15px] 2xl:text-[16px] text-[#94a3b8] hover:text-white transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-[15px] 2xl:text-[16px] text-[#94a3b8] hover:text-white transition-colors">
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[15px] 2xl:text-[16px] text-[#94a3b8] hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-[15px] 2xl:text-[16px] text-[#94a3b8] hover:text-white transition-colors">
                  {t.nav.contacts}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-5 2xl:gap-7">
            <h4 className="text-[13px] 2xl:text-[14px] font-semibold text-white uppercase tracking-widest">
              {t.footer.contacts}
            </h4>
            <ul className="flex flex-col gap-3.5 2xl:gap-4">
              {/* Адрес */}
              <li className="text-[15px] 2xl:text-[16px] text-[#94a3b8]">
                {t.contacts.info.address}
              </li>
              
              {/* Телефон (шрифт Helvetica) */}
              <li>
                <a
                  href="tel:+998998283136"
                  className="text-[15px] 2xl:text-[16px] text-[#94a3b8] hover:text-white transition-colors"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                >
                  +998 99 828 31 36
                </a>
              </li>
              
              {/* Email */}
              <li>
                <a
                  href="mailto:info@onekeytech.uz"
                  className="text-[15px] 2xl:text-[16px] text-[#3b82f6] hover:text-blue-400 transition-colors"
                >
                  info@onekeytech.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights & Privacy */}
        <div className="border-t border-[#1e293b] mt-16 2xl:mt-20 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[13px] 2xl:text-[14px] text-[#64748b]">
            {t.footer.rights}
          </p>
          <Link
            href="/privacy"
            className="text-[13px] 2xl:text-[14px] text-[#64748b] hover:text-[#94a3b8] transition-colors"
          >
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}