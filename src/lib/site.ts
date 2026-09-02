const DEFAULT_SITE_URL = 'https://www.dhhsgrantprogram.com';
const PRODUCTION_HOST = 'dhhsgrantprogram.com';

function normalizeSiteUrl(raw: string | undefined): string {
  const value = raw?.trim();
  if (value) {
    try {
      const parsed = new URL(value.replace(/\/$/, ''));
      const host = parsed.hostname.toLowerCase();
      if (host.endsWith('.vercel.app')) return DEFAULT_SITE_URL;
      if (host === PRODUCTION_HOST) parsed.hostname = `www.${PRODUCTION_HOST}`;
      return parsed.toString().replace(/\/$/, '');
    } catch {
      return DEFAULT_SITE_URL;
    }
  }
  return DEFAULT_SITE_URL;
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

/** Long wordmark for navigation (cropped source). */
export const LOGO_LONG_PATH = '/longlogo.png';
export const LOGO_LONG_WIDTH = 2172;
export const LOGO_LONG_HEIGHT = 724;

/** Short seal for footer, favicons, Open Graph, and Google (680×712 source). */
export const LOGO_SHORT_PATH = '/shortlogo-white.png';
export const LOGO_SHORT_WIDTH = 512;
export const LOGO_SHORT_HEIGHT = 512;

/** Social / search preview image (generated from short seal). */
export const LOGO_OG_PATH = '/icon-512.png';
export const LOGO_URL = `${SITE_URL}${LOGO_OG_PATH}`;

/** @deprecated Use LOGO_OG_PATH or LOGO_SHORT_PATH */
export const LOGO_PATH = LOGO_OG_PATH;

export const SITE_DOMAIN = (() => {
  try {
    return new URL(SITE_URL).hostname;
  } catch {
    return 'dhhsgrantprogram.com';
  }
})();

/** Short public brand */
export const SHORT_NAME = 'DHHS';
/** Legal / full organization name */
export const FULL_NAME = 'Department of Health and Human Services';
/** Program line used in headlines */
export const PROGRAM_NAME = 'DHHS Grant Program';
export const BRAND_NAME = SHORT_NAME;
export const LEGAL_NAME = FULL_NAME;

export const CONTACT_EMAIL = 'sarahmitchell@dhhsgrantprogram.com';
export const SUPPORT_EMAIL = 'support@dhhsgrantprogram.com';
export const APPLY_FROM_EMAIL = 'apply@dhhsgrantprogram.com';
/** Desk name on application receipts  -  not a person */
export const APPLY_FROM_NAME = 'DHHS Applications';

export const RESPONSE_HOURS = 24;

export const COORDINATOR_NAME = 'Sarah Mitchell';
export const COORDINATOR_TITLE = 'DHHS Grant Coordinator';

export function applicantResponseBadge(hours = RESPONSE_HOURS): string {
  return `A coordinator is assigned to your file within ${hours} hours of applying`;
}

export function applicantContactWithin(hours = RESPONSE_HOURS): string {
  return `After you apply, a DHHS grant coordinator is assigned to your file and contacts you by email within ${hours} hours.`;
}

export const APPLICANT_CONTACT_MONITOR =
  'Check your inbox and spam folder. Reply on the email thread from your assigned coordinator.';

export function absoluteSiteUrl(path = ''): string {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export const ORG_BLURB =
  'The Department of Health and Human Services (DHHS) Grant Program issues billions of dollars in awards to individuals and groups each year. Selected awards are one-time grants with no repayment.';

/** Hero  -  what the program is and who it serves */
export const HERO_INTRO =
  'Billions in DHHS grants are awarded to people, every day. The DHHS Grant Program issues one-time awards to individuals  -  for medical care, housing, business ventures, education, educators, retirees, seniors, and other personal or professional goals. Selected grants require no repayment. Apply here on the official site.';

/** Shown on eligibility sections  -  not the hero */
export const ELIGIBILITY_OPEN =
  'Open to all adults 18 and older. There is no income cap, no means test, and no requirement that you be in financial crisis.';

export const HELP_AREAS_SHORT =
  'Medical care, housing, business ventures, education, educators, retirees, seniors, and other personal or professional goals.';
