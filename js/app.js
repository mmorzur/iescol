(() => {
  'use strict';
  const data = window.SITE_DATA || {proyectos: [], recursos: [], demoMode: false};
  const projects = Array.isArray(data.proyectos) ? data.proyectos : [];
  const $ = (id) => document.getElementById(id);
  const state = {kind: 'todos', year: 'todos', course: 'todos', subject: 'todas', query: ''};
  const escapeHTML = (text) => String(text ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const normalized = (text) => String(text ?? '').toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const safeURL = (url) => {
    const value = String(url ?? '').trim();
    if (/^https:\/\//i.test(value)) return value;
    if (value && !/^(\/|\\|\.|#)/.test(value) && !value.includes('..') && /^[\w\-./]+$/.test(value)) return value;
    return '';
  };
  const glyphs = {
    web: '<rect x="4" y="6" width="40" height="33"/><path d="M4 15h40M12 10h1M18 10h1M24 10h1"/><path d="m20 23-7 5 7 5m8-10 7 5-7 5"/>',
    robot: '<rect x="10" y="12" width="28" height="26"/><path d="M24 5v7M20 5h8M5 21h5m28 0h5M17 28h3m8 0h3M17 33h14"/>',
    chart: '<path d="M6 6v35h37M13 33v-9h7v9M24 33V13h7v20M35 33V20h7v13"/>',
    code: '<rect x="4" y="6" width="40" height="36"/><path d="M4 15h40m-26 8-6 5 6 5m12-10 6 5-6 5m-6-12-4 15"/>',
    grid: '<rect x="5" y="5" width="17" height="17"/><rect x="26" y="5" width="17" height="17"/><rect x="5" y="26" width="17" height="17"/><rect x="26" y="26" width="17" height="17"/>',
    spark: '<path d="M24 3 29 19l16 5-16 5-5 16-5-16-16-5 16-5z"/><path d="M4 4h8M8 0v8M38 38h8m-4-4v8"/>'
  };
  const projectIcon = (name) => `<svg class="project-icon" width="72" height="72" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true">${glyphs[name] || glyphs.web}</svg>`;
  const subjectSet = [...new Set(projects.map(p => p.materia).filter(Boolean))].sort((a,b) => a.localeCompare(b,'es'));
  const yearSet = [...new Set(projects.map(p => p.anio).filter(Boolean))].sort((a,b) => b.localeCompare(a,'es'));
  const courseSet = [...new Set(projects.map(p => p.curso).filter(Boolean))].sort((a,b) => a.localeCompare(b,'es'));
  for (const year of yearSet) $('yearSelect').add(new Option(year,year));
  for (const course of courseSet) $('courseSelect').add(new Option(course,course));
  for (const subject of subjectSet) $('subjectSelect').add(new Option(subject,subject));
  $('countTotal').textContent = String(projects.length).padStart(2, '0');
  if (data.demoMode) $('demoNotice').hidden = false;
  else document.querySelector('.section-side-note small').textContent = 'proyectos archivados';

  function matches(p) {
    if (state.kind !== 'todos' && p.tipo !== state.kind) return false;
    if (state.year !== 'todos' && p.anio !== state.year) return false;
    if (state.course !== 'todos' && p.curso !== state.course) return false;
    if (state.subject !== 'todas' && p.materia !== state.subject) return false;
    if (state.query) {
      const haystack = normalized([p.titulo,p.resumen,p.materia,p.curso,p.anio,...(p.etiquetas || [])].join(' '));
      if (!haystack.includes(normalized(state.query))) return false;
    }
    return true;
  }
  function render() {
    const visible = projects.filter(matches);
    $('resultCount').textContent = `${visible.length} ${visible.length === 1 ? 'proyecto' : 'proyectos'}`;
    $('projectGrid').innerHTML = visible.map((p,i) => {
      const tipo = p.tipo === 'docente' ? 'Laboratorio' : 'Alumnado';
      const tags = (p.etiquetas || []).slice(0,3).map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join('');
      const color = ['menta','lila','melocoton','amarillo','azul','rosa'].includes(p.color) ? p.color : 'menta';
      return `<article class="project-card" style="--card-order:${i}">
        <div class="project-preview ${color}"><div class="preview-top"><span>▣ ${escapeHTML(p.anio)}</span><span>+ + +</span></div><div class="preview-icon">${projectIcon(p.icono)}</div><span class="preview-corner" aria-hidden="true">▦</span></div>
        <div class="project-body"><div class="project-type"><span>${escapeHTML(tipo)}</span><span class="project-code">${escapeHTML(p.curso || '')}</span></div>
        <h3>${escapeHTML(p.titulo)}</h3><p>${escapeHTML(p.resumen)}</p><div class="tag-list">${tags}</div><div class="project-bottom"><span>${escapeHTML(p.materia || 'Sin materia')}</span><button type="button" class="card-open" data-project="${escapeHTML(p.id)}" aria-label="Ver ficha de ${escapeHTML(p.titulo)}">↗</button></div></div>
      </article>`;
    }).join('');
    $('emptyState').hidden = visible.length !== 0;
  }
  function setKind(kind) {
    state.kind = kind;
    for (const button of document.querySelectorAll('[data-kind]')) {
      const active = button.dataset.kind === kind;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    }
    render();
  }
  function reset() {
    state.kind = 'todos'; state.year = 'todos'; state.course = 'todos'; state.subject = 'todas'; state.query = '';
    $('searchInput').value = '';
    $('yearSelect').value = 'todos';
    $('courseSelect').value = 'todos';
    $('subjectSelect').value = 'todas';
    setKind('todos');
  }
  document.querySelectorAll('[data-kind]').forEach(b => b.addEventListener('click', () => setKind(b.dataset.kind)));
  document.querySelectorAll('[data-jump-kind]').forEach(b => b.addEventListener('click', () => {
    setKind(b.dataset.jumpKind);
    $('archivo').scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
  }));
  $('searchInput').addEventListener('input', e => {state.query = e.target.value.trim(); render();});
  $('yearSelect').addEventListener('change', e => {state.year = e.target.value; render();});
  $('courseSelect').addEventListener('change', e => {state.course = e.target.value; render();});
  $('subjectSelect').addEventListener('change', e => {state.subject = e.target.value; render();});
  $('resetFilters').addEventListener('click', reset);
  $('emptyReset').addEventListener('click', reset);

  const dialog = $('projectDialog');
  function openProject(id) {
    const p = projects.find(project => project.id === id);
    if (!p) return;
    $('dialogType').textContent = `${p.tipo === 'docente' ? 'LABORATORIO' : 'ALUMNADO'} / ${p.anio || ''}`;
    $('dialogTitle').textContent = p.titulo;
    $('dialogSummary').textContent = p.resumen;
    $('dialogDescription').textContent = p.descripcion || p.resumen;
    $('dialogMeta').innerHTML = `<span>${escapeHTML(p.curso || '—')}</span><span>${escapeHTML(p.materia || '—')}</span>`;
    $('dialogTags').innerHTML = (p.etiquetas || []).map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join('');
    const links = [['Abrir proyecto', safeURL(p.url)], ['Ver código', safeURL(p.codigo)]].filter(([,url]) => url);
    $('dialogLinks').innerHTML = links.length ? links.map(([label,url])=>`<a class="button button-primary" href="${escapeHTML(url)}" ${url.startsWith('https://') ? 'target="_blank" rel="noopener noreferrer"' : ''}>${label} ↗</a>`).join('') : '<p class="unpublished">Proyecto sin enlace público. La ficha sigue disponible como referencia.</p>';
    dialog.showModal();
  }
  $('projectGrid').addEventListener('click', e => {const b = e.target.closest('[data-project]'); if (b) openProject(b.dataset.project);});
  $('dialogClose').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => {if (e.target === dialog) dialog.close();});

  $('resourcesGrid').innerHTML = (data.recursos || []).map((r,i) => {
    const url = safeURL(r.url);
    return `<article class="resource-card"><div class="resource-top"><span>0${i+1}</span><span aria-hidden="true">↗</span></div><span class="resource-category">${escapeHTML(r.categoria)}</span><h3>${escapeHTML(r.titulo)}</h3><p>${escapeHTML(r.descripcion)}</p>${url ? `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${escapeHTML(r.titulo)} en una nueva pestaña" class="resource-link">Abrir recurso ↗</a>` : ''}</article>`;
  }).join('');

  const menuButton = $('menuToggle');
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
    $('mainNav').classList.toggle('open', !isOpen);
  });
  document.querySelectorAll('#mainNav a').forEach(link => link.addEventListener('click', () => {
    $('mainNav').classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
  }));
  render();
})();
