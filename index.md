---
layout: default
title: Home
description: Public-source tire and rubber intelligence collected with AI assistance and reviewed by a human.
nav: intelligence
---

{% assign weekly_reports = site.pages | where: "content_type", "weekly_report" | sort: "period_end" | reverse %}
{% assign analyses = site.pages | where: "content_type", "deep_analysis" | sort: "publication_date" | reverse %}

<header class="blog-intro">
  <h1>Tire &amp; Rubber Intelligence</h1>
  <p>
    I use AI agents to help collect and organize public information about the
    tire and rubber industry. I review the evidence, edit the writing, and
    publish the notes that I want to keep.
  </p>
  <div class="intro-notes">
    <p>
      <strong>How the notes are organized.</strong> Weekly intelligence records
      material public signals and why they may matter. Deep analysis examines a
      technical or strategic question in more detail.
    </p>
    <p>
      Weekly stories use one primary category: R&amp;D &amp; Product Development,
      Materials &amp; Supply Chain, Manufacturing, Marketing &amp; Distribution,
      or Sales &amp; Customer Services. These categories follow the traditional
      smile curve as an organizing framework, not as a company score or
      investment rule. Manufacturing may sit lower on the traditional curve,
      but it remains essential to quality, cost, scale, resilience, and turning
      R&amp;D into products.
    </p>
    <p>
      I prefer original public records and technical sources. Company claims
      remain attributed, and public visibility is incomplete, so the number of
      stories should not be read as a measure of company strength.
    </p>
  </div>
</header>

<section class="post-section" aria-labelledby="weekly-title">
  <h2 id="weekly-title">Weekly intelligence</h2>
  <div class="post-list">
    {% for report in weekly_reports %}
      <article class="post-preview">
        <h3><a href="{{ report.url | relative_url }}">{{ report.title }}</a></h3>
        <p>{{ report.description }}</p>
        <p class="post-meta">
          {{ report.period_start | date: "%B %-d" }}–{{ report.period_end | date: "%-d, %Y" }}
          · {{ report.story_count }} stories
        </p>
      </article>
    {% endfor %}
  </div>
</section>
<section class="post-section" aria-labelledby="analysis-title">
  <h2 id="analysis-title">Deep analysis</h2>
  <div class="post-list">
    {% for analysis in analyses %}
      <article class="post-preview">
        <h3><a href="{{ analysis.url | relative_url }}">{{ analysis.title }}</a></h3>
        <p>{{ analysis.description }}</p>
        <p class="post-meta">Published {{ analysis.publication_date | date: "%B %-d, %Y" }}</p>
      </article>
    {% endfor %}
  </div>
</section>
