import Link from 'next/link';
import { Clock, Shield } from 'lucide-react';
import { RESPONSE_HOURS } from '@/lib/site';

export function CoordinatorSection() {
  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <div className="card-flat overflow-hidden lg:grid lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-[var(--gp-navy)] p-10 text-white lg:p-12">
            <p className="section-label-accent">After you apply</p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              A coordinator is assigned to your file
            </h2>
            <div className="accent-bar mt-6" />
            <p className="mt-6 text-sm leading-relaxed text-white/80 md:text-base">
              Once your application is submitted, DHHS assigns a coordinator to your file and
              contacts you by email. First reply within {RESPONSE_HOURS} hours.
            </p>
            <div className="mt-8 flex items-start gap-3 rounded-lg bg-white/10 p-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gp-yellow)]" />
              <p className="text-sm text-white/85">
                Check your inbox and spam folder after you apply. Reply on the same email thread so
                your file stays together.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center p-10 lg:p-12">
            <p className="text-sm leading-relaxed text-[var(--gp-muted)] md:text-base">
              Every application is read by a person. Your coordinator will ask what they need to
              understand your file  -  medical care, housing, business ventures, school, teaching, or
              senior support. Not a ticket number. Not a chatbot.
            </p>
            <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-[var(--gp-muted)]">
              <Shield className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gp-blue)]" />
              Keep your replies on your coordinator&apos;s email thread so nothing gets lost.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-[var(--gp-muted)]">
              If someone contacts you about a DHHS grant before you have applied, use the Verify
              page first.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/apply" className="btn-primary">
                Apply to open your file
              </Link>
              <Link href="/verify" className="btn-outline">
                Verify a message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
