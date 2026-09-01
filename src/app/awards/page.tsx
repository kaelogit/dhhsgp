import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';
import { AwardsTable } from '@/components/awards/AwardsTable';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Recent DHHS Grants Awarded to Individuals',
  description:
    'See recent DHHS grants for medical bills, housing, business, school, teachers, and seniors. These are grants, not loans. Awards go to individuals every day.',
  path: '/awards',
});

export default function AwardsPage() {
  return (
    <div className="bg-white">
      <PageHero
        label="Awards"
        title="Recent DHHS grants"
        description="Grants are awarded to individuals each and every day. Amounts below are grants — not loans. Names are shortened to protect privacy."
      />
      <section className="py-12">
        <div className="container-page max-w-4xl">
          <AwardsTable />
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/impact" className="btn-outline">
              Read letters
            </Link>
            <Link href="/apply" className="btn-primary">
              Apply for a grant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
