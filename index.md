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
    <p>
      I came across an article,
      <a href="https://asiatimes.com/2025/12/how-us-manufacturing-was-gutted-with-a-smile/">“How US Manufacturing Was Gutted with a Smile”</a>,
      which argues that the “Smile Curve” encouraged Western companies to retain
      high-margin activities—R&amp;D, design, branding, and marketing—while
      outsourcing supposedly low-value manufacturing. Although this approach
      maximized shareholder returns, it confused profitability with technical
      difficulty and strategic importance. This triggered my interest in examining
      how tire companies are performing in these areas and whether this discussion
      also applies to the tire industry.
    </p>
    <p>
      Therefore, I decided to build an app—with the help of AI—to collect and
      organize publicly available information from the internet and investigate
      these questions. For the tire industry, I use the smile curve as a practical
      framework consisting of five areas: R&amp;D &amp; Product Development,
      Materials &amp; Supply Chain, Manufacturing, Marketing &amp; Distribution,
      and Sales &amp; Customer Services. Activities at the two ends are
      traditionally associated with higher value added, while manufacturing
      occupies the lower center.
    </p>
    <p>
      My source strategy is to prioritize original and source-side
      evidence—including government records, company filings, permits, patents,
      technical research, test data, and statements from companies, customers,
      suppliers, and partners—and then use independent analysis and credible media
      for corroboration.
    </p>
    <p>
      As someone with a technical background, I place particular emphasis on new
      trends, models, materials, and technologies. This includes emerging market
      and manufacturing shifts, innovative business and service models, advanced
      and circular tire materials, and technological developments in tire design,
      AI, automation, sensors, smart tires, testing, and digital manufacturing.
    </p>
    <p>
      In addition, I place a special focus on the Chinese tire industry—not only
      because I am Chinese and my home province, Shandong, is home to hundreds of
      tire companies, but also because many Chinese tire companies are especially
      concentrated at the lower center of the curve: manufacturing. This makes
      China a particularly interesting case for studying whether manufacturing is
      truly “low value” or whether the smile curve overlooks its technical
      difficulty and strategic importance.
    </p>
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
