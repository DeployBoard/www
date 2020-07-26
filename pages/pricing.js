import Head from 'next/head'

export default function Home() {
  return (
    <>
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Pricing</h1>
      <p class="lead">Track 3 Applications for Free. Affordable Plans When You Need More.</p>
    </div>

    <section id="plans">
      <div class="container">
        <div class="card-deck mb-3 text-center">
          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Free</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>3 applications included</li>
                <li>Analytics</li>
                <li>Audit</li>
                <li>API Access</li>
                <li>Notifications</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
            </div>
          </div>
          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Pro</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$50 <small class="text-muted">/ mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>10 applications included</li>
                <li>Analytics</li>
                <li>Audit</li>
                <li>API Access</li>
                <li>Notifications</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
            </div>
          </div>
          <div class="card mb-4 shadow-sm">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Enterprise</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$250 <small class="text-muted">/ mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>50 applications included</li>
                <li>Analytics</li>
                <li>Audit</li>
                <li>API Access</li>
                <li>Notifications</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="faq">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h1>Billing Questions</h1>

            <h2>What payment methods do you accept?</h2>
            <p>We accept Visa, Master Card, and American Express.</p>

            <h2>Will my credit card data be safe?</h2>
            <p>
              We process payments using <a href="https://stripe.com">Stripe</a>. Your credit card is never directly handled by or stored on DeployBoard servers.
            </p>
            <p>
              Stripe has been audited by an independent PCI Qualified Security Assessor (QSA) and is certified as a <a href="https://www.visa.com/splisting/searchGrsp.do?companyNameCriteria=stripe,%20inc">PCI Level 1 Service Provider</a>. This is the most stringent level of certification available in the payments industry. <a href="https://www.braintreepayments.com/products-and-features/data-security">Read more…</a>
            </p>

            <h2>If I cancel my paid plan, do I get a refund?</h2>
            <p>
              You can easily cancel your subscription at any time, but
              no refunds are provided for prorated periods.
              One exception to this is when you set up a paid subscription
              for the wrong account–see the next question.
            </p>

            <h2>I upgraded the wrong account, what should I do?</h2>
            <p>
              If you upgrade the wrong account by mistake (for example, your personal account instead of your company account), please <a href="mailto:contact@healthchecks.io">contact us</a> to issue a refund, so you can avoid getting charged twice.
            </p>

            <h2>Will I receive invoices?</h2>
            <p>
              Yes, each time Healthchecks.io charges your payment method, it will generate and send you and invoice. If you've specified your company details (name, address, VAT ID), they will appear on the invoices.
            </p>

            <h2>Do you offer open-source or non-profit discounts?</h2>
            <p>
              We offer the <strong>Business plan</strong> free of charge for open-source projects and nonprofits. Please <a href="/about/">contact us</a> to get set up!
            </p>
          </div>

          <div class="col-sm-6">
            <h1>Premium Features</h1>

            <h2>What's the difference between "Hobbyist" and "Supporter" plans?</h2>
            <p>
                Both plans are similar. The "Supporter" plan is offered
                in case "Hobbyist" fits your usage but you wish
                to support Healthchecks.io financially.
            </p>

            <h2>What's "3 / 10 / Unlimited Team Members"?</h2>
            <p>
              Invite your colleagues to your account so they can access your checks, logs, and configured integrations. Inviting team members is <strong>more convenient and more secure</strong> than sharing a single login and password.
            </p>

            <h2>What is the "log entries per check" number?</h2>
            <p>
              For each of your checks, Healthchecks.io keeps a historic log of the received pings. The log can be useful for auditing past activity of your cron jobs.
            </p>
            <p>
              There is a per-check limit of how many log entries are kept. When this limit is reached, the oldest log entries start getting removed to make room for new ones. You can increase the limit by upgrading to paid plans.
            </p>

            <h2>When is 100 log entries per check sufficient?</h2>
            <p>
              It depends on how frequently your cron job runs and for what time period you want to keep a log of received pings. For example, if your cron job runs once a week, then the 100 log entries will cover 2 years. On the other hand, if the cron job runs every 5 minutes, then the 100 log entries will only cover 8 hours.
            </p>

            <h2>Can I get a custom plan with more checks?</h2>
            <p>
              Yes, we can customize your plan's limits to fit your needs. Please <a href="mailto:contact@healthchecks.io">contact us</a> and we will make you a quote.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
