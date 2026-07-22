---
title: 컴퓨터공학
layout: archive
permalink: /categories/컴퓨터공학/
author_profile: true
sidebar_name: true
---

{% assign posts = site.categories["컴퓨터공학"]%}
{% for post in posts %}
  {% include archive-single.html %}
{% endfor %}