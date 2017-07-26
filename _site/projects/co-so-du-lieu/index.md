---
layout: single
title:  "Nhập môn Cơ sở dữ liệu - Những kiến thức căn bản"
date:   2017-07-26
categories: [study]
tags: [Cơ sở dữ liệu, căn bản, nhập môn]
header:
  overlay_image: "/assets/img/csdl/head.jpg"

projects:
	- title: "Khái quát về các hệ cơ sở dữ liệu"
	  description: "Những khái niệm cơ bản nhất về hệ các hệ cơ sở dư liệu"
---

<style media="screen">
  .project {
    width: 50%;
    max-width: 500px;
    float: left;
    padding: 10px;
    box-sizing: border-box;
}
</style>

{% for project in page.projects %}
<div class="project">
  <div class="thumbnail">
    <img src="{{ project.img }}" alt="{{ project.title }}">
  </div>
  <div class="caption">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
      <p>
        {% for button in project.buttons %}
        <a href="{{ button.link }}" class="btn btn-primary" role="button">{{ button.text }}</a>
        {% endfor %}
      </p>
  </div>
</div>
{% endfor %}
