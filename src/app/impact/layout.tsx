import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'DHHS Grant Stories — People Already Helped',
  description:
    'Letters from people who received a DHHS grant for medical bills, a home, school, business, teaching, or senior support. Grants, not loans.',
  path: '/impact',
});

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
