---
title: "Welcome to the MUMS webarchive"
layout: "splash"
permalink: /archive/
classes: "wide"
header:
  overlay_image: assets/libraryheader.jpg
  excerpt: ???
  overlay_color: "#000"
  overlay_filter: "0.5"
---
# History of MUMS
The Melbourne University Mathematical Society (MUMS) was founded in 1930 primarily for the benefit of tertiary students, mainly undergraduates. The founder and president for the first four years was Sir Thomas Cherry, the Head of the Department of Mathematics from 1929-1963. During his term as president, he aimed to make the society as autonomous as possible, run by students for the benefit of students and mathematics. The first meeting was held on the 13th of May 1930.



# All webpage posts
{% for post in site.posts %}
	{% include post-card.html post=post %} <br />
{% endfor %}
