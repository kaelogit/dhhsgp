import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { FULL_NAME, SHORT_NAME, SUPPORT_EMAIL } from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--gp-navy)] text-white">
      <div className="gov-topbar" />
      <div className="container-page grid gap-10 px-5 pt-14 pb-8 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo variant="short" light />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            {FULL_NAME} ({SHORT_NAME}) issues billions of dollars in DHHS grant money each year.
            Awards are grants, not loans — and they are made to individuals every day.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-bold tracking-wider text-[var(--gp-yellow)] uppercase">
            Explore
          </h4>
          <nav className="flex flex-col gap-2.5">
            {[
              ['/', 'Home'],
              ['/programs', 'Programs'],
              ['/eligibility', 'Eligibility'],
              ['/impact', 'Stories'],
              ['/awards', 'Awards'],
              ['/apply', 'Apply'],
              ['/faq', 'FAQ'],
              ['/verify', 'Verify'],
              ['/contact', 'Contact'],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="text-sm text-white/75 transition-colors hover:text-white">
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-bold tracking-wider text-[var(--gp-yellow)] uppercase">
            Contact
          </h4>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="block text-sm text-white/85 hover:text-white">
            {SUPPORT_EMAIL}
          </a>
          <nav className="mt-5 flex flex-col gap-2">
            <Link href="/security" className="text-sm text-white/75 hover:text-white">
              Security
            </Link>
            <Link href="/privacy" className="text-sm text-white/75 hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-white/75 hover:text-white">
              Terms
            </Link>
          </nav>
        </div>
      </div>
      <p className="container-page border-t border-white/10 px-5 py-6 text-sm text-white/50 sm:px-8">
        © {year} {FULL_NAME}. All rights reserved.
      </p>
    </footer>
  );
}
