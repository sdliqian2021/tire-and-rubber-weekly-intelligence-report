---
layout: default
title: Home
description: Public-source tire and rubber intelligence collected with AI assistance and reviewed by a human.
nav: intelligence
---

{% assign weekly_reports = site.pages | where: "content_type", "weekly_report" | sort: "period_end" | reverse %}

<header class="blog-intro">
  <h1>Tire &amp; Rubber Intelligence</h1>
  <div class="intro-notes">
    <p>Weekly public-source intelligence on the global tire and rubber industry, collected with AI assistance and reviewed by a human. Each report is organized around a smile-curve framework of five areas—R&amp;D &amp; Product Development, Materials &amp; Supply Chain, Manufacturing, Marketing &amp; Distribution, and Sales &amp; Customer Services—with a special focus on the Chinese tire industry. Read more about the motivation, framework, and source strategy on the <a href="{{ site.intelligence_url }}/about.html">About page</a>.</p>
  </div>
</header>

<section class="post-section" aria-labelledby="weekly-title">
  <h2 id="weekly-title">Weekly intelligence</h2>
  <div class="post-list">
    {% for report in weekly_reports %}
      <article class="post-preview">
        {% assign start_month = report.period_start | date: "%B" %}
        {% assign end_month = report.period_end | date: "%B" %}
        {% assign start_year = report.period_start | date: "%Y" %}
        {% assign end_year = report.period_end | date: "%Y" %}
        <h3><a href="{{ report.url | relative_url }}">{{ report.title }}</a></h3>
        <p class="post-meta">
          {% if start_year != end_year %}
            {{ report.period_start | date: "%B %-d, %Y" }}–{{ report.period_end | date: "%B %-d, %Y" }}
          {% elsif start_month == end_month %}
            {{ report.period_start | date: "%B %-d" }}–{{ report.period_end | date: "%-d, %Y" }}
          {% else %}
            {{ report.period_start | date: "%B %-d" }}–{{ report.period_end | date: "%B %-d, %Y" }}
          {% endif %}
          · {{ report.story_count }} stories
        </p>
      </article>
    {% endfor %}
  </div>
</section>
