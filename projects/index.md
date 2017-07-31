---
layout: single
title: my projects
author_profile: true
projects:
  - title: "Cơ sở dữ liệu"
    description: "GIúp bạn vững bước trên con đường đi đến thành công của mình..."
    img: "https://khanhsaker97.github.io/assets/img/kinangcv/head.jpg"
    buttons:
      - text: "Bắt đầu"
        link: "https://khanhsaker97.github.io/projects/co-so-du-lieu"
  - title: "Cơ sở dữ liệu"
    description: "Khái quát về các hệ cơ sở dữ liệu, Mô hình cơ sở dữ liệu..."
    img: "https://khanhsaker97.github.io/assets/img/csdl/head.jpg"
    buttons:
      - text: "Bắt đầu"
        link: "https://khanhsaker97.github.io/projects/ki-nang-cong-viec"
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