---
title: "Announcements"
layout: default
permalink: "/announcements/"
---

<div class="announcements">
	{% for post in site.posts %}
	<div class="post">
		<div class="head">
			<div class="post-title">
				<a href="{{ post.url }}">
					{{ post.title }}
				</a>
			</div>
			<div class="post-date">
				{{ post.date | date_to_string }}
			</div>
		</div>
		<div class="post-excerpt">{{ post.content | strip_html | truncatewords: 20 }}</div>
	</div>
	{% endfor %}
</div>
