---
layout: mainpage
permalink: "/"
---

<div class="carousel">
	<div>
		<img src="/res/img/carousel/team2014.jpg">
	</div>
	<div>
		<img src="/res/img/carousel/bio2013.jpg">
	</div>
	<div>
		<img src="/res/img/carousel/techmedals2014.jpg">
	</div>
	<div>
		<img src="/res/img/carousel/2014.jpg">
	</div>
</div>

<div class="recent-posts">
	<div class="title">Recent Announcements</div>
	<div class="posts">
		<ul>
			{% for post in site.posts offset: 0 limit: 4 %}
				<li>
					<a href="{{ post.url }}">
						<div class="post-title">{{ post.title }}</div>
					</a>
				</li>
			{% endfor %}
		</ul>
	</div>
</div>
