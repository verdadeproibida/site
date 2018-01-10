---
title: Tags
permalink: "/tags/"
layout: archive
excerpt: Artigos agrupados por tags
author_profile: true
header:
  overlay_color: "#6E2F2B"
---

{% include group-by-array collection=site.posts field="tags" %}

{% for tag in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h2>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}
