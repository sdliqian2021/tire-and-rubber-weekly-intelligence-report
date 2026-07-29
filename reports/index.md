---
layout: default
title: Weekly Reports
description: Browse Tire & Rubber Intelligence weekly reports by reporting period.
nav: reports
permalink: /reports/
---

{% assign reports = site.pages | where: "content_type", "weekly_report" | sort: "period_end" | reverse %}

<header class="page-intro page-intro-split">
  <div>
    <p class="eyebrow">Recurring signals</p>
    <h1>Weekly reports</h1>
  </div>
  <p class="page-lede">
    Concise reviews of material tire-industry developments, with original
    source links, immediate implications, and the next observable signals.
  </p>
</header>

<section aria-labelledby="weekly-archive-title">
  <div class="archive-toolbar">
    <div>
      <p class="eyebrow">Archive by reporting period</p>
      <h2 id="weekly-archive-title">{{ reports | size }} published report{% if reports.size != 1 %}s{% endif %}</h2>
    </div>
    <a class="text-link" href="{{ site.baseurl }}/categories.html">Browse individual stories by category <span aria-hidden="true">→</span></a>
  </div>

  <div class="issue-list">
    {% for report in reports %}
      <article class="issue-card{% if forloop.first %} issue-card-latest{% endif %}">
        <div class="issue-date">
          {% if forloop.first %}<span class="latest-label">Latest</span>{% endif %}
          <time datetime="{{ report.period_start }}">{{ report.period_start | date: "%b %-d" }}</time>
          <span aria-hidden="true">—</span>
          <time datetime="{{ report.period_end }}">{{ report.period_end | date: "%b %-d, %Y" }}</time>
        </div>
        <div>
          <p class="issue-scope">{{ report.geographic_scope }}</p>
          <h3><a href="{{ report.url | relative_url }}">{{ report.title }}</a></h3>
          <p>{{ report.description }}</p>
          <p class="card-footnote">{{ report.story_count }} stories · Published {{ report.publication_date | date: "%B %-d, %Y" }}</p>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

