---
layout: default
title: Downloads
permalink: /downloads/
---

{% assign files = site.static_files | where_exp: "f", "f.path contains '/downloads/'" %}
{% assign files = files | sort: 'name' %}

<h1>Downloads found: {{ files.size }}</h1>

<ul>
  {% for file in files %}
    <li>
      <a href="{{ file.url }}" download>{{ file.name }}</a>
      ({{ file.size | divided_by: 1024 }} KB)
    </li>
  {% endfor %}
</ul>
