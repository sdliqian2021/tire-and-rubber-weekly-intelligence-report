(function () {
  "use strict";

  var explorer = document.querySelector("[data-story-explorer]");
  if (!explorer) {
    return;
  }

  var source = explorer.getAttribute("data-source");
  var categoryFilter = explorer.querySelector("[data-category-filter]");
  var companyFilter = explorer.querySelector("[data-company-filter]");
  var tagFilter = explorer.querySelector("[data-tag-filter]");
  var filterForm = explorer.querySelector("[data-filter-form]");
  var resultCount = explorer.querySelector("[data-result-count]");
  var results = explorer.querySelector("[data-story-results]");
  var categoryJumps = document.querySelectorAll("[data-category-jump]");
  var stories = [];

  function appendText(parent, tagName, className, text) {
    var element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    element.textContent = text;
    parent.appendChild(element);
    return element;
  }

  function appendPill(parent, text) {
    return appendText(parent, "span", "story-pill", text);
  }

  function formatDate(value) {
    var date = new Date(value + "T00:00:00");
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(date);
  }

  function renderStory(story) {
    var article = document.createElement("article");
    article.className = "story-result";

    var meta = document.createElement("div");
    meta.className = "story-result-meta";
    appendText(meta, "span", "format-label", story.primary_category);
    var time = appendText(meta, "time", "", formatDate(story.publication_date));
    time.setAttribute("datetime", story.publication_date);
    article.appendChild(meta);

    var title = document.createElement("h3");
    var link = document.createElement("a");
    link.href = story.story_url;
    link.textContent = story.title;
    title.appendChild(link);
    article.appendChild(title);

    appendText(article, "p", "story-summary", story.what_happened);

    var pills = document.createElement("div");
    pills.className = "story-pills";
    story.companies.slice(0, 3).forEach(function (company) {
      appendPill(pills, company);
    });
    story.tags.slice(0, 2).forEach(function (tag) {
      appendPill(pills, tag);
    });
    article.appendChild(pills);

    return article;
  }

  function render() {
    var selectedCategory = categoryFilter.value;
    var selectedTag = tagFilter.value;
    var searchTerm = companyFilter.value.trim().toLocaleLowerCase();

    var filtered = stories.filter(function (story) {
      var matchesCategory = !selectedCategory || story.primary_category === selectedCategory;
      var matchesTag = !selectedTag || story.tags.indexOf(selectedTag) !== -1;
      var searchableOrganizations = story.companies
        .concat(story.counterparties)
        .join(" ")
        .toLocaleLowerCase();
      var matchesCompany = !searchTerm || searchableOrganizations.indexOf(searchTerm) !== -1;
      return matchesCategory && matchesTag && matchesCompany;
    });

    results.replaceChildren();
    filtered.forEach(function (story) {
      results.appendChild(renderStory(story));
    });

    var label = filtered.length === 1 ? "story" : "stories";
    resultCount.textContent = filtered.length + " published " + label;

    if (!filtered.length) {
      appendText(
        results,
        "p",
        "empty-state",
        "No published stories match these filters. Try a broader category, company, or tag."
      );
    }
  }

  function populateTags() {
    var tags = [];
    stories.forEach(function (story) {
      story.tags.forEach(function (tag) {
        if (tags.indexOf(tag) === -1) {
          tags.push(tag);
        }
      });
    });
    tags.sort().forEach(function (tag) {
      var option = document.createElement("option");
      option.value = tag;
      option.textContent = tag;
      tagFilter.appendChild(option);
    });
  }

  [categoryFilter, companyFilter, tagFilter].forEach(function (control) {
    control.addEventListener(control === companyFilter ? "input" : "change", render);
  });

  filterForm.addEventListener("reset", function () {
    window.setTimeout(render, 0);
  });

  categoryJumps.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      categoryFilter.value = link.getAttribute("data-category-jump");
      render();
      explorer.scrollIntoView({ behavior: "smooth", block: "start" });
      categoryFilter.focus({ preventScroll: true });
    });
  });

  fetch(source, { headers: { Accept: "application/json" } })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Story archive unavailable");
      }
      return response.json();
    })
    .then(function (data) {
      stories = data;
      populateTags();
      render();
    })
    .catch(function () {
      resultCount.textContent = "The interactive archive is temporarily unavailable.";
      appendText(
        results,
        "p",
        "empty-state",
        "All published stories remain available in the weekly report archive."
      );
    });
})();

