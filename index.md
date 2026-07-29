---
layout: default
title: Home
description: Human-reviewed weekly reporting and deep analysis across the tire-industry smile curve.
nav: overview
---

{% assign weekly_reports = site.pages | where: "content_type", "weekly_report" | sort: "period_end" | reverse %}
{% assign latest_report = weekly_reports | first %}
{% assign analyses = site.pages | where: "content_type", "deep_analysis" | sort: "publication_date" | reverse %}
{% assign latest_analysis = analyses | first %}

<section class="home-masthead" aria-labelledby="publication-title">
  <div class="masthead-copy">
    <p class="eyebrow">A Qian Li technical publication</p>
    <h1 id="publication-title">Tire &amp; Rubber Intelligence</h1>
    <p class="masthead-lede">
      Human-reviewed public-source intelligence for people following tire
      technology, materials, manufacturing, markets, and customer relationships.
    </p>
    <div class="button-row">
      <a class="button" href="{{ latest_report.url | relative_url }}">Read the latest weekly report</a>
      <a class="button button-secondary" href="{{ site.baseurl }}/smile-curve.html">Explore the framework</a>
    </div>
  </div>

  <aside class="release-card" aria-labelledby="latest-release-title">
    <p class="eyebrow">Latest release</p>
    <p class="release-date">{{ latest_report.period_start | date: "%B %-d" }}–{{ latest_report.period_end | date: "%-d, %Y" }}</p>
    <h2 id="latest-release-title">{{ latest_report.geographic_scope | default: "Weekly intelligence" | capitalize }}</h2>
    <p>
      {{ latest_report.story_count }} material signals organized for fast
      reading, with original source links and immediate implications.
    </p>
    <dl class="release-meta">
      <div>
        <dt>Format</dt>
        <dd>Weekly report</dd>
      </div>
      <div>
        <dt>Coverage</dt>
        <dd>5 categories</dd>
      </div>
      <div>
        <dt>Published</dt>
        <dd>{{ latest_report.publication_date | date: "%b %-d" }}</dd>
      </div>
    </dl>
    <a class="text-link" href="{{ latest_report.url | relative_url }}">Open this report <span aria-hidden="true">→</span></a>
  </aside>
</section>

<section class="content-section" aria-labelledby="latest-intelligence-title">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Current intelligence</p>
      <h2 id="latest-intelligence-title">Start with the newest evidence</h2>
    </div>
    <p>
      Weekly reports surface timely signals. Deep analysis follows one
      decision-relevant question through its evidence, caveats, and next indicators.
    </p>
  </div>

  <div class="feature-grid">
    <article class="feature-card feature-card-weekly">
      <div class="feature-card-topline">
        <span class="format-label">Weekly report</span>
        <time datetime="{{ latest_report.publication_date }}">{{ latest_report.publication_date | date: "%B %-d, %Y" }}</time>
      </div>
      <h3><a href="{{ latest_report.url | relative_url }}">{{ latest_report.title }}</a></h3>
      <p>
        A China tire-industry edition covering product and process innovation,
        material shifts, trade pressure, overseas capacity, and commercial execution.
      </p>
      <p class="card-footnote">{{ latest_report.story_count }} stories · Original sources linked</p>
    </article>

    <article class="feature-card feature-card-analysis">
      <div class="feature-card-topline">
        <span class="format-label">Deep analysis</span>
        <time datetime="{{ latest_analysis.publication_date }}">{{ latest_analysis.publication_date | date: "%B %-d, %Y" }}</time>
      </div>
      <h3><a href="{{ latest_analysis.url | relative_url }}">{{ latest_analysis.title }}</a></h3>
      <p>
        A conditional assessment of when connected-factory evidence can improve
        tire design—and why governance and traceability matter more than radio speed.
      </p>
      <p class="card-footnote">13 key references · Limitations stated</p>
    </article>
  </div>
</section>
<section class="content-section framework-teaser" aria-labelledby="framework-title">
  <div class="section-heading">
    <div>
      <p class="eyebrow">The organizing framework</p>
      <h2 id="framework-title">Five places where industry value is shaped</h2>
    </div>
    <p>
      Every weekly story receives one primary category on the traditional smile
      curve, making very different signals easier to compare over time.
    </p>
  </div>

  <ol class="category-rail" aria-label="The five smile-curve categories">
    <li>
      <span class="category-number">01</span>
      <a href="{{ site.baseurl }}/categories.html#rd-product-development">R&amp;D &amp;<br>Product Development</a>
    </li>
    <li>
      <span class="category-number">02</span>
      <a href="{{ site.baseurl }}/categories.html#materials-supply-chain">Materials &amp;<br>Supply Chain</a>
    </li>
    <li>
      <span class="category-number">03</span>
      <a href="{{ site.baseurl }}/categories.html#manufacturing">Manufacturing</a>
    </li>
    <li>
      <span class="category-number">04</span>
      <a href="{{ site.baseurl }}/categories.html#marketing-distribution">Marketing &amp;<br>Distribution</a>
    </li>
    <li>
      <span class="category-number">05</span>
      <a href="{{ site.baseurl }}/categories.html#sales-customer-services">Sales &amp;<br>Customer Services</a>
    </li>
  </ol>

  <div class="section-action">
    <a class="text-link" href="{{ site.baseurl }}/smile-curve.html">See the curve and category boundaries <span aria-hidden="true">→</span></a>
  </div>
</section>

<section class="content-section" aria-labelledby="archive-title">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Publication archive</p>
      <h2 id="archive-title">Follow the signal at two speeds</h2>
    </div>
    <p>
      Browse recurring reports by date or move into longer analysis when the
      evidence supports a deeper question.
    </p>
  </div>

  <div class="format-grid">
    <article class="format-card">
      <p class="eyebrow">Recurring signals</p>
      <h3>Weekly reports</h3>
      <p>Material developments, source context, immediate implications, and observable next steps.</p>
      <a class="text-link" href="{{ site.baseurl }}/reports/">Browse all weekly reports <span aria-hidden="true">→</span></a>
    </article>
    <article class="format-card">
      <p class="eyebrow">Long-form</p>
      <h3>Deep analysis</h3>
      <p>Claim-led examinations of decision questions, technical interpretation, limitations, and watch indicators.</p>
      <a class="text-link" href="{{ site.baseurl }}/deep-analysis/">Browse all deep analysis <span aria-hidden="true">→</span></a>
    </article>
  </div>
</section>
