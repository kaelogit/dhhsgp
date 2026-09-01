'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/eligibility', label: 'Eligibility' },
  { href: '/impact', label: 'Stories' },
  { href: '/awards', label: 'Awards' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/faq', label: 'FAQ' },
  { href: '/verify', label: 'Verify' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const scrollLockY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    scrollLockY.current = window.scrollY;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.scrollTo(0, scrollLockY.current);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);

      const isMobile = window.innerWidth < 1024;
      if (!isMobile || open) {
        setNavHidden(false);
        lastScrollY.current = y;
        return;
      }

      if (y < 72) {
        setNavHidden(false);
      } else if (y > lastScrollY.current + 8) {
        setNavHidden(true);
      } else if (y < lastScrollY.current - 8) {
        setNavHidden(false);
      }

      lastScrollY.current = y;
    };

    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setNavHidden(false);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <div
        className={`top-0 z-50 transition-transform duration-300 ease-in-out max-lg:fixed max-lg:inset-x-0 max-lg:will-change-transform lg:sticky ${
          navHidden ? 'max-lg:-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="gov-topbar" />
        <header
          className={`border-b bg-white/95 backdrop-blur-md transition-shadow ${
            scrolled ? 'border-[var(--gp-line)] shadow-sm' : 'border-transparent'
          }`}
        >
          <div className="container-page flex h-[3.75rem] items-center justify-between gap-3 py-1.5 sm:h-16 sm:py-2">
            <Logo variant="long" compact />
            <nav className="hidden min-w-0 items-center gap-1 lg:flex xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`shrink-0 rounded-md px-2.5 py-2 text-[13px] font-medium whitespace-nowrap transition-colors xl:px-3 xl:text-sm ${
                    isActive(link.href)
                      ? 'bg-[var(--gp-blue-pale)] text-[var(--gp-blue)]'
                      : 'text-[var(--gp-muted)] hover:bg-[var(--gp-paper)] hover:text-[var(--gp-navy)]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/apply" className="btn-accent ml-2 shrink-0 px-4 py-2.5 xl:px-5">
                Apply now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
            <button
              type="button"
              className="rounded-md p-2 hover:bg-[var(--gp-paper)] lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => {
                setNavHidden(false);
                setOpen((v) => !v);
              }}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </header>
      </div>
      <div className="h-[calc(3.75rem+4px)] shrink-0 sm:h-[calc(4rem+4px)] lg:hidden" aria-hidden />
      {open ? (
        <div
          ref={menuRef}
          className="fixed inset-x-0 bottom-0 top-[calc(3.75rem+4px)] z-40 overflow-y-auto overscroll-y-contain bg-white touch-pan-y sm:top-[calc(4rem+4px)] lg:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <nav className="px-5 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-md px-3 py-3.5 text-base font-medium ${
                  isActive(link.href)
                    ? 'bg-[var(--gp-blue-pale)] text-[var(--gp-blue)]'
                    : 'text-[var(--gp-navy)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-[var(--gp-line)] px-5 py-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
            <Link href="/apply" className="btn-accent w-full">
              Apply now
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
