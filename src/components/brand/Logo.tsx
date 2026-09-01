import Link from 'next/link';
import Image from 'next/image';
import {
  FULL_NAME,
  LOGO_LONG_HEIGHT,
  LOGO_LONG_PATH,
  LOGO_LONG_WIDTH,
  LOGO_SHORT_HEIGHT,
  LOGO_SHORT_PATH,
  LOGO_SHORT_WIDTH,
} from '@/lib/site';

type LogoProps = {
  className?: string;
  /** Long wordmark for the nav; short seal for the footer and icons. */
  variant?: 'long' | 'short';
  light?: boolean;
  compact?: boolean;
};

export function Logo({
  className = '',
  variant = 'long',
  light = false,
  compact = false,
}: LogoProps) {
  const isLong = variant === 'long';
  const src = isLong ? LOGO_LONG_PATH : LOGO_SHORT_PATH;
  const sub = light ? 'text-white/75' : 'text-[var(--gp-muted)]';

  return (
    <Link
      href="/"
      className={`inline-flex min-w-0 items-center gap-2.5 no-underline sm:gap-3 ${className}`}
    >
      {isLong ? (
        <Image
          src={src}
          alt={FULL_NAME}
          width={LOGO_LONG_WIDTH}
          height={LOGO_LONG_HEIGHT}
          className={
            compact
              ? 'h-11 w-auto max-w-[min(100%,300px)] sm:h-12 sm:max-w-[360px] lg:h-[3.25rem] lg:max-w-[400px]'
              : 'h-12 w-auto max-w-[min(100%,320px)] sm:h-[3.25rem] sm:max-w-[380px]'
          }
          unoptimized
          priority
        />
      ) : (
        <>
          <span className="inline-flex shrink-0 items-center justify-center rounded-md bg-white p-1.5 sm:p-2">
            <Image
              src={src}
              alt={FULL_NAME}
              width={LOGO_SHORT_WIDTH}
              height={LOGO_SHORT_HEIGHT}
              className="h-20 w-20 object-contain sm:h-24 sm:w-24"
              unoptimized
            />
          </span>
          <span className={`text-base font-semibold tracking-wide sm:text-lg ${sub}`}>Grant Program</span>
        </>
      )}
    </Link>
  );
}
