---
layout: default
title: Categories
description: Browse Tire & Rubber Intelligence stories by smile-curve category, company, or cross-cutting tag.
nav: categories
permalink: /categories.html
---

<header class="page-intro page-intro-split">
  <div>
    <p class="eyebrow">Browse the archive</p>
    <h1>Five categories, one evidence stream</h1>
  </div>
  <p class="page-lede">
    Use the fixed smile-curve categories for structure, then narrow published
    stories by company or cross-cutting theme.
  </p>
</header>

<section class="category-directory" aria-labelledby="category-directory-title">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Primary categories</p>
      <h2 id="category-directory-title">Choose a part of the value chain</h2>
    </div>
    <p>Counts reflect the current structured weekly archive, not company or category strength.</p>
  </div>

  <div class="category-card-grid">
    <a id="rd-product-development" class="category-card" href="#story-explorer" data-category-jump="R&amp;D &amp; Product Development">
      <span class="category-card-number">01</span>
      <span class="category-card-count">3 stories</span>
      <strong>R&amp;D &amp; Product Development</strong>
      <span>Tire architecture, compounds, simulation, testing, patents, sensors, and technical product innovation.</span>
    </a>
    <a id="materials-supply-chain" class="category-card" href="#story-explorer" data-category-jump="Materials &amp; Supply Chain">
      <span class="category-card-number">02</span>
      <span class="category-card-count">3 stories</span>
      <strong>Materials &amp; Supply Chain</strong>
      <span>Rubber, reinforcement, chemicals, equipment sourcing, suppliers, logistics, trade flows, and circular feedstocks.</span>
    </a>
    <a id="manufacturing" class="category-card" href="#story-explorer" data-category-jump="Manufacturing">
      <span class="category-card-number">03</span>
      <span class="category-card-count">1 story</span>
      <strong>Manufacturing</strong>
      <span>Plants, industrialization, process control, automation, capacity, quality, productivity, and production milestones.</span>
    </a>
    <a id="marketing-distribution" class="category-card" href="#story-explorer" data-category-jump="Marketing &amp; Distribution">
      <span class="category-card-number">04</span>
      <span class="category-card-count">2 stories</span>
      <strong>Marketing &amp; Distribution</strong>
      <span>Brand positioning, launches, channels, dealers, digital commerce, market entry, and distribution agreements.</span>
    </a>
    <a id="sales-customer-services" class="category-card" href="#story-explorer" data-category-jump="Sales &amp; Customer Services">
      <span class="category-card-number">05</span>
      <span class="category-card-count">1 story</span>
      <strong>Sales &amp; Customer Services</strong>
      <span>OE fitments, fleet and replacement wins, pricing, contracts, sales performance, maintenance, and after-sales service.</span>
    </a>
  </div>
</section>

<section id="story-explorer" class="content-section story-explorer" data-story-explorer data-source="{{ '/data/stories.json' | relative_url }}" aria-labelledby="story-explorer-title">
  <div class="section-heading">
    <div>
      <p class="eyebrow">Structured story archive</p>
      <h2 id="story-explorer-title">Filter published stories</h2>
    </div>
    <p>Every result links back to the full weekly report and its original source list.</p>
  </div>

  <form class="filter-panel" data-filter-form>
    <div class="filter-field">
      <label for="category-filter">Primary category</label>
      <select id="category-filter" data-category-filter>
        <option value="">All categories</option>
        <option>R&amp;D &amp; Product Development</option>
        <option>Materials &amp; Supply Chain</option>
        <option>Manufacturing</option>
        <option>Marketing &amp; Distribution</option>
        <option>Sales &amp; Customer Services</option>
      </select>
    </div>
    <div class="filter-field">
      <label for="company-filter">Company or organization</label>
      <input id="company-filter" type="search" placeholder="e.g. ZC Rubber" autocomplete="off" data-company-filter>
    </div>
    <div class="filter-field">
      <label for="tag-filter">Cross-cutting tag</label>
      <select id="tag-filter" data-tag-filter>
        <option value="">All tags</option>
      </select>
    </div>
    <button class="button button-secondary filter-clear" type="reset">Clear filters</button>
  </form>

  <div class="results-toolbar">
    <p data-result-count aria-live="polite">Loading the story archive…</p>
  </div>
  <div class="story-results" data-story-results></div>
  <noscript>
    <p class="method-note">Filtering requires JavaScript. All stories remain available in the <a href="{{ site.baseurl }}/reports/">weekly report archive</a>.</p>
  </noscript>
</section>

