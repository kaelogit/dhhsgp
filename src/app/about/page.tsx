import { PageHero } from '@/components/layout/PageHero';
import { createMetadata } from '@/lib/metadata';
import {
  ELIGIBILITY_OPEN,
  FULL_NAME,
  HELP_AREAS_SHORT,
  ORG_BLURB,
  RESPONSE_HOURS,
  SHORT_NAME,
  SUPPORT_EMAIL,
} from '@/lib/site';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'About DHHS  -  Department of Health and Human Services',
  description:
    'Department of Health and Human Services (DHHS) Grant Program. Official application site: dhhsgrantprogram.com. Selected awards are one-time grants with no repayment.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="bg-white">
      <PageHero
        label="About"
        title={FULL_NAME}
        description={`${SHORT_NAME} · Grant Program  -  open to all adults. No income cap.`}
      />
      <section className="py-16">
        <div className="container-page max-w-3xl space-y-6 text-sm leading-relaxed text-[var(--gp-muted)]">
          <p>{ORG_BLURB}</p>
          <p>
            People apply to DHHS for one-time grant funding they never have to repay  -  whether they
            are closing a specific gap or funding something new. {ELIGIBILITY_OPEN} {HELP_AREAS_SHORT}
          </p>

          <h2 className="pt-4 text-2xl text-[var(--gp-blue)]">Executive summary</h2>
          <p>
            DHHS exists to move grant money  -  not credit  -  to individuals and groups with a clear
            purpose. We issue billions of dollars in DHHS grant money each year across many kinds of
            files. Awards are made to individuals each and every day. That volume does not mean every
            application is selected. It does mean that asking is allowed, expected, and reviewed.
          </p>

          <h2 className="text-2xl text-[var(--gp-blue)]">Objectives</h2>
          <p>
            Fund medical care and treatment. Support home purchases and housing goals. Back business
            ventures and independent work. Support education and credential programs. Support working
            and retired educators. Serve seniors and retirees. Contact every applicant by email.
            Keep official applications on this website.
          </p>

          <h2 className="text-2xl text-[var(--gp-blue)]">Not a loan</h2>
          <p>
            DHHS grant programs are not loans. If you are selected, you do not repay the award.
            Applying does not create debt. If someone offers you a “DHHS loan,” it is not this
            program. Confirm contact on our Verify page or write {SUPPORT_EMAIL}.
          </p>

          <h2 className="text-2xl text-[var(--gp-blue)]">Who we serve</h2>
          <p>
            {ELIGIBILITY_OPEN} Files come from people at every income level  -  families closing on a
            home, professionals expanding a business, students finishing a credential, educators
            investing in their classrooms, retirees planning the next chapter, and anyone with a
            clear purpose for a one-time grant.
          </p>

          <h2 className="text-2xl text-[var(--gp-blue)]">How a file is handled</h2>
          <p>
            After you apply, a coordinator is assigned to your file. First contact is email within{' '}
            {RESPONSE_HOURS} hours. We may ask for more detail. Selected files receive next steps by
            email. Unselected files are still treated with respect  -  applying is not a waste of
            courage.
          </p>

          <Link href="/apply" className="btn-primary mt-4 inline-flex">
            Apply for a grant
          </Link>
        </div>
      </section>
    </div>
  );
}
