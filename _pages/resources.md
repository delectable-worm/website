---
title: "Competitions"
layout: "splash"
permalink: /mathsolympics/
header:
  overlay_image: assets/bluebanner.jpg
  excerpt: ???
  overlay_color: "#000"
  overlay_filter: "0.5"
feature_row:
  - image_path: /assets/smo.avif
    alt: "smo"
    title: "SMO and UMO"
    excerpt: "The School Maths Olympics (SMO) is a fast-paced, teamwork-centred annual maths competition for high school students. The UMO is much the same, but open to uni students. If you're curious about joining, check out our archive of past papers below. You can register for the SMO here https://mathscomp.ms.unimelb.edu.au/"
feature_row2:
  - image_path: /assets/intbee.avif
    alt: "intbee"
    title: "Integration bee"
    excerpt: "A long standing tradition in collaboration with the Physics Students Society. Students compete to see who can solve nasty integrals the fastest."

---
If you're the competitive type, you can participate in some competitions that we host. If you're just
curious about what competition maths might be like, we also run biweekly competition maths catchups.

---

{% include feature_row type="left"%}

{% include feature_row id="feature_row2" type="right"%}

# Past papers and solutions
<details>
<summary> UMO </summary>
{% assign files = site.static_files | where_exp: "f", "f.path contains '/downloads/UMO'" %}
{% assign files = files | sort: 'name' %}
<ul>
  {% for file in files %}
    <li>
	{{ file.url }}
      <a href="{{ file.path }}" download>{{ file.name }}</a>
    </li>
  {% endfor %}
</ul>
</details>
<details>
<summary> SMO </summary>
{% assign files = site.static_files | where_exp: "f", "f.path contains '/downloads/SMO'" %}
{% assign files = files | sort: 'name' %}
<ul>
  {% for file in files %}
    <li>
	{{ file.url }}
      <a href="{{ file.path }}" download>{{ file.name }}</a>
    </li>
  {% endfor %}
</ul>
</details>

