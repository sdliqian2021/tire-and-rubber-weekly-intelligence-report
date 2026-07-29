---
layout: default
title: Deep Analysis
description: Browse long-form Tire & Rubber Intelligence analysis.
nav: analysis
permalink: /deep-analysis/
---

{% assign analyses = site.pages | where: "content_type", "deep_analysis" | sort: "publication_date" | reverse %}

<header class="page-intro page-intro-split">
  <div>
    <p class="eyebrow">Long-form intelligence</p>
    <h1>Deep analysis</h1>
  </div>
  <p class="page-lede">
    Claim-led examinations of decision-relevant questions, combining technical
    interpretation with evidence limits and observable next indicators.
  </p>
</header>

<section aria-labelledby="analysis-archive-title">
  <div class="archive-toolbar">
    <div>
      <p class="eyebrow">Analysis archive</p>
      <h2 id="analysis-archive-title">{{ analyses | size }} published analysis</h2>
    </div>
    <a class="text-link" href="{{ site.baseurl }}/about.html">How evidence is assessed <span aria-hidden="true">→</span></a>
  </div>

  <div class="analysis-list">
    {% for analysis in analyses %}
      <article class="analysis-card">
        <div class="analysis-card-meta">
          <span>Deep analysis</span>
          <time datetime="{{ analysis.publication_date }}">{{ analysis.publication_date | date: "%B %-d, %Y" }}</time>
        </div>
        <h2><a href="{{ analysis.url | relative_url }}">{{ analysis.title }}</a></h2>
        <p>
          A practical assessment of how connected factory evidence can inform
          tire design, what technical architecture is required, and what the
          public record still cannot establish.
        </p>
        <dl class="analysis-evidence">
          <div>
            <dt>Evidence reviewed</dt>
            <dd>{{ analysis.evidence_reviewed | date: "%B %-d, %Y" }}</dd>
          </div>
          <div>
            <dt>Reading mode</dt>
            <dd>Technical, claim-led</dd>
          </div>
        </dl>
        <a class="text-link" href="{{ analysis.url | relative_url }}">Read the analysis <span aria-hidden="true">→</span></a>
      </article>
    {% endfor %}
  </div>
</section>

