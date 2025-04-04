---
title: Projects
excerpt: Sometimes I build things.  Here they are.
layout: single
author_profile: true
header:
  overlay_image: /assets/images/projects/projects_header.jpg
  overlay_filter: 0.5
---

This page contains a randomly sorted collection of things I've built over the years. My interests are eclectic - from data visualization and programming to food, photography, meditation, and game design. Each time you visit, you'll see my projects in a different order. I like it that way - life isn't meant to be too organized.

<div id="all-projects">
  <div id="random-projects-section">
    <div class="project-grid" id="project-container">
      {% assign all_projects = site.data.projects.software | concat: site.data.projects.food | concat: site.data.projects.other %}
      
      {% for project in all_projects %}
      <div class="project-item" style="display: none;">
        <h2>{{ project.title }}</h2>
        <img src="{{project.img}}" alt="{{project.img_alt}}" class="align-center">
        <p>{{project.description}}</p>
        <p><a href="{{project.relative_url}}">Link</a></p>
      </div>
      {% endfor %}
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Get all project items
  const projectItems = Array.from(document.querySelectorAll('.project-item'));
  const container = document.getElementById('project-container');
  
  // Fisher-Yates shuffle algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Shuffle the projects and append to container
  const shuffledProjects = shuffleArray(projectItems);
  
  // Clear the container then add shuffled projects
  shuffledProjects.forEach(project => {
    project.style.display = 'block'; // Make visible
    container.appendChild(project);
  });
});
</script>

<style>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2em;
  margin-top: 2em;
}

.project-item {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding-bottom: 1em;
}

.project-item h2 {
  font-size: 1.4em;
  margin: 0.8em;
  margin-bottom: 0.5em;
}

.project-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.project-item p {
  padding: 0 1em;
  margin-bottom: 0.8em;
}

.project-item a {
  display: inline-block;
  margin: 0 1em;
  color: #3b9cba;
  text-decoration: none;
}

.project-item a:hover {
  color: #2d7a93;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
