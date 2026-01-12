---
title: 일상
layout: archive
permalink: /categories/일상/
author_profile: true
sidebar_name: true
---

{% assign posts = site.categories["일상"]%}
{% for post in posts %}
  {% include archive-single.html %}
{% endfor %}