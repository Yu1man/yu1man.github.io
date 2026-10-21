// This file handles website behaviour and displays content from site-content.js.
// Usually, you only need to edit site-content.js, not this file.

const content = window.siteContent || {};

function createElement(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function readField(path) {
  return path.split('.').reduce((obj, field) => obj && obj[field], content);
}

// Update the textual parts of the page using one easy-to-edit file.
document.querySelectorAll('[data-site-text]').forEach(node => {
  const key = node.dataset.siteText;
  const value = readField(key);
  if (typeof value !== 'string') return;
  if (key === 'personal.headline') {
    const parts = value.split('|');
    node.replaceChildren(document.createTextNode(parts[0] + ' '));
    const em = createElement('em', '', parts.slice(1).join('|'));
    node.append(em);
  } else if (key === 'personal.availability') {
    node.replaceChildren(createElement('span', 'status-dot'));
    const text = createElement('span', '', value);
    node.append(text);
  } else if (key === 'personal.bio') {
    node.textContent = value;
  } else {
    node.textContent = value;
  }
});

function renderTimeline(id, entries = []) {
  const root = document.getElementById(id);
  if (!root) return;
  const fragment = document.createDocumentFragment();
  for (const item of entries) {
    const row = createElement('div', 'timeline-item');
    row.append(createElement('div', 'timeline-date', item.date));
    const detail = createElement('div');
    detail.append(createElement('h4', '', item.title));
    detail.append(createElement('p', 'timeline-org', item.organisation));
    detail.append(createElement('p', '', item.description));
    row.append(detail);
    fragment.append(row);
  }
  root.replaceChildren(fragment);
}
renderTimeline('experience-list', content.experience);
renderTimeline('education-list', content.education);

function renderProjects(projects = []) {
  const root = document.getElementById('project-grid');
  if (!root) return;
  const fragment = document.createDocumentFragment();
  for (const item of projects) {
    const card = createElement('article', 'project-card');
    const top = createElement('div', 'project-top');
    top.append(createElement('span', 'project-category', item.category));
    top.append(createElement('span', 'project-year', item.year));
    card.append(top);
    card.append(createElement('h3', '', item.title));
    card.append(createElement('p', '', item.description));
    card.append(createElement('span', 'project-tools', item.tools));
    fragment.append(card);
  }
  root.replaceChildren(fragment);
}
renderProjects(content.projects);

function renderVideos(simulations = []) {
  const root = document.getElementById('simulation-grid');
  const section = document.getElementById('simulations');
  if (!root || !section) return;
  if (!simulations.length) {
    section.hidden = true;
    return;
  }
  const fragment = document.createDocumentFragment();
  for (const item of simulations) {
    const card = createElement('article', 'simulation-card');
    const frame = createElement('div', 'simulation-frame');
    const player = createElement('video', 'simulation-video');
    player.controls = true;
    player.preload = 'none';
    player.playsInline = true;
    player.loop = true;
    player.setAttribute('aria-label', `Simulation: ${item.title}`);
    if (item.poster) player.poster = item.poster;
    const source = createElement('source');
    source.src = item.video;
    source.type = 'video/mp4';
    player.append(source);
    player.append(document.createTextNode('Your browser does not support HTML5 video.'));
    // Keep just one short simulation running at a time.
    player.addEventListener('play', () => {
      root.querySelectorAll('video').forEach(other => {
        if (other !== player) other.pause();
      });
    });
    frame.append(player);
    const detail = createElement('div', 'simulation-detail');
    detail.append(createElement('h4', '', item.title));
    detail.append(createElement('p', '', item.description));
    card.append(frame, detail);
    fragment.append(card);
  }
  root.replaceChildren(fragment);
}
renderVideos(content.simulations);

const menuButton = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-links');
if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    menu.classList.toggle('is-open', open);
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
