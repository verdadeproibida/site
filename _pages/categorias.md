---
layout: archive
permalink: /categorias/
title: "Categorias"
excerpt: Artigos agrupados por categorias
author_profile: true
header:
  overlay_color: "#6E2F2B"
---

{% include group-by-array collection=site.posts field="categories" %}

{% for category in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ category | slugify }}" class="archive__subtitle">{{ category }}</h2>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}