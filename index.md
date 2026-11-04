---
layout: default
title: 首页
description: 经人工审核、由 AI 辅助收集的全球轮胎与橡胶行业公开来源情报。
lang: zh-CN
nav: intelligence
---

{% assign weekly_reports = site.pages | where: "content_type", "weekly_report" | sort: "period_end" | reverse %}
{% assign chinese_reports = weekly_reports | where: "lang", "zh-CN" %}

<header class="blog-intro">
  <h1>轮胎与橡胶情报</h1>
  <div class="intro-notes">
    <p>本项目每周整理全球轮胎与橡胶行业的公开来源情报，由 AI 辅助收集并经人工审核。报告按照微笑曲线的五个领域组织：研发与产品开发、材料与供应链、制造、营销与分销、销售与客户服务，并特别关注中国轮胎行业。项目动机、框架和来源策略见<a href="{{ '/zh/about.html' | relative_url }}">关于页面</a>。</p>
    <p lang="en">Weekly public-source intelligence on the global tire and rubber industry, collected with AI assistance and reviewed by a human.</p>
  </div>
</header>

<section class="post-section" aria-labelledby="weekly-title">
  <h2 id="weekly-title">每周情报</h2>
  <div class="post-list">
    {% for report in chinese_reports %}
      <article class="post-preview">
        <h3><a href="{{ report.url | relative_url }}">{{ report.title }}</a></h3>
        <p class="report-languages"><a lang="zh-CN" href="{{ report.url | relative_url }}">中文</a><span aria-hidden="true">|</span><a lang="en" href="{{ report.translation_url | relative_url }}">English</a></p>
        <p class="post-meta">{{ report.period_start | date: "%Y-%m-%d" }}–{{ report.period_end | date: "%Y-%m-%d" }} · {{ report.story_count }} 条情报</p>
      </article>
    {% endfor %}
    {% for report in weekly_reports %}
      {% unless report.translation_key %}
        <article class="post-preview" lang="{{ report.lang | default: 'en' }}">
          <h3><a href="{{ report.url | relative_url }}">{{ report.title }}</a></h3>
          <p class="report-languages"><a href="{{ report.url | relative_url }}">English</a></p>
          <p class="post-meta">{{ report.period_start | date: "%Y-%m-%d" }}–{{ report.period_end | date: "%Y-%m-%d" }} · {{ report.story_count }} stories</p>
        </article>
      {% endunless %}
    {% endfor %}
  </div>
</section>
