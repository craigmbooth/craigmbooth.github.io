---
title: Projects
excerpt: Sometimes I build things.  Here they are.
layout: single
author_profile: true
header:
  overlay_image: /assets/images/projects/projects_header.jpg
  overlay_filter: 0.5
---

<style>
.filter-container {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.filter-group {
  display: flex;
  align-items: center;
}
.filter-dropdown {
  display: inline-block;
  padding: 0.5em 1em;
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;
  font-size: 0.75em;
  font-weight: bold;
  text-align: center;
  color: #494e52;
  background-color: #fff;
  border: 1px solid #bdc1c4;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.125);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  appearance: menulist;
  min-width: 140px;
}
.filter-dropdown:focus {
  border-color: #6f777d;
  outline: 0;
  box-shadow: inset 0 1px 3px rgba(73, 78, 82, 0.06), 0 0 5px rgba(111, 119, 125, 0.7);
}
.filter-dropdown:hover {
  background-color: #f8f9fa;
}
.filter-dropdown option {
  padding: 0.5em;
  text-align: left;
}
.filter-label {
  display: inline-block;
  margin-right: 10px;
  color: #494e52;
  width: 120px;
  font-weight: normal;
}
.project-item {
  margin-bottom: 40px;
  border-bottom: 1px solid #f2f3f3;
  padding-bottom: 20px;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}
.project-tag {
  font-size: 0.75em;
  padding: 3px 8px;
  border-radius: 3px;
  background-color: #f2f3f3;
  color: #6f777d;
}
</style>

<p>This is where I try things out.</p>

<p>Sometimes it's code. Sometimes it's art. Sometimes it's just a question I wanted to follow a little further. I'm interested in what happens when tools get weird, when ideas stretch beyond their shape, when something unexpected shows up.</p>

<p>None of this is polished. That's the point.</p>

<h2>Experiments</h2>

<div class="filter-container">
  <div class="filter-group">
    <span class="filter-label">Tags:</span>
    <select id="tag-filter" class="filter-dropdown">
      <option value="all">All Tags</option>
      {% assign all_projects = site.data.projects.projects %}
      {% assign all_tags = "" | split: "," %}

      {% for project in all_projects %}
        {% assign project_tags = project.tags | split: "," %}
        {% for tag in project_tags %}
          {% assign trimmed_tag = tag | strip %}
          {% assign all_tags = all_tags | push: trimmed_tag %}
        {% endfor %}
      {% endfor %}

      {% assign unique_tags = all_tags | uniq | sort %}

      {% for tag in unique_tags %}
        <option value="{{ tag }}">{{ tag | capitalize }}</option>
      {% endfor %}
    </select>
  </div>

  <div class="filter-group">
    <span class="filter-label">Sort by Date:</span>
    <select id="sort-filter" class="filter-dropdown">
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
    </select>
  </div>
</div>

<div id="projects-container">
{% include projectlist %}
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const tagFilter = document.getElementById('tag-filter');
  const sortFilter = document.getElementById('sort-filter');
  const projectsContainer = document.getElementById('projects-container');

  // Function to filter and sort projects
  function updateProjects() {
    const selectedTag = tagFilter.value;
    const sortOrder = sortFilter.value;
    const projects = Array.from(document.querySelectorAll('.project-item'));

    // Filter projects by tag
    projects.forEach(function(project) {
      const projectTags = project.dataset.tags ? project.dataset.tags.split(',') : [];
      if (selectedTag === 'all' || projectTags.includes(selectedTag)) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });

    // Sort projects by date
    projects.sort(function(a, b) {
      const dateA = parseInt(a.dataset.date) || 0;
      const dateB = parseInt(b.dataset.date) || 0;

      if (sortOrder === 'newest') {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });

    // Reappend projects in the sorted order
    projects.forEach(function(project) {
      projectsContainer.appendChild(project);
    });
  }

  // Add event listeners
  tagFilter.addEventListener('change', updateProjects);
  sortFilter.addEventListener('change', updateProjects);

  // Initial sort
  updateProjects();
});
</script>
