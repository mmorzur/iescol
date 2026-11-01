(() => {
  'use strict';
  const data = window.SITE_DATA || {};
  const page = document.body.dataset.page;
  const $ = id => document.getElementById(id);
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalize = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es').trim();
  const safeURL = value => {
    const url = String(value || '').trim();
    if (!url || /[\u0000-\u0020\\]/.test(url)) return '';
    if (/^https:\/\//i.test(url)) { try { const parsed = new URL(url); return parsed.hostname && !parsed.username && !parsed.password ? url : ''; } catch { return ''; } }
    if (/^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith('//') || url.startsWith('/')) return '';
    return url;
  };
  const latest = entries => [...(entries || [])].sort((a,b) => {
    const date = entry => /^\d{4}-\d{2}-\d{2}$/.test(entry.fechaAlta || '') ? entry.fechaAlta : '';
    return date(b).localeCompare(date(a));
  });
  const apps = latest(data.apps), projects = latest(data.proyectos), webs = latest(data.webs);
  const external = url => /^https:\/\//i.test(url) ? ' target="_blank" rel="noopener noreferrer"' : '';
  const link = (raw, label, cls = 'card-link') => {const url = safeURL(raw); return url ? `<a class="${cls}" href="${escapeHTML(url)}"${external(url)}>${label} <span aria-hidden="true">↗</span><span class="sr-only">${external(url) ? ' (se abre en otra pestaña)' : ''}</span></a>` : '';};
  const icon = name => {
    const shapes = {key:'<rect x="4" y="10" width="16" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z"/>',book:'<path d="M12 5v16M12 5C9 2 4 3 2 4v15c4-2 7-1 10 2 3-3 6-4 10-2V4c-4-2-7-1-10 1Z"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'};
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shapes[name] || shapes.grid}</svg>`;
  };
  const art = name => {
    const shapes = {web:'<rect x="13" y="12" width="136" height="90" rx="6" fill="white"/><path d="M13 33h136"/><circle cx="24" cy="23" r="2"/><circle cx="33" cy="23" r="2"/><circle cx="42" cy="23" r="2"/><path d="m60 51-13 12 13 12m36-24 13 12-13 12m-10-29L72 80"/>',robot:'<rect x="38" y="28" width="86" height="62" rx="10" fill="white"/><path d="M81 28V13m-7 0h14M27 44v28m108-28v28M56 90v12m50-12v12M66 74h30"/><rect x="54" y="44" width="13" height="13" rx="3"/><rect x="95" y="44" width="13" height="13" rx="3"/>',chart:'<rect x="15" y="10" width="132" height="95" rx="6" fill="white"/><path d="M34 85h95M44 77V61h16v16m13 0V46h16v31m13 0V30h16v47M37 42l25-13 20 4 30-16"/>'};
    return `<svg viewBox="0 0 162 115" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shapes[name] || shapes.web}</svg>`;
  };
  const appCard = app => `<article class="app-card"><div class="app-card-top"><span class="app-icon">${icon(app.icono)}</span><span class="app-category">${escapeHTML(app.categoria)}</span></div><h3>${escapeHTML(app.titulo)}</h3><p>${escapeHTML(app.resumen)}</p><div class="app-card-bottom"><span class="access">${app.acceso === 'restringido' ? 'Acceso restringido' : 'App propia'}</span>${link(app.url,'Abrir app') || '<span class="access">Enlace pendiente</span>'}</div></article>`;
  const projectCard = project => `<article class="project-card"><div class="project-art" data-icon="${escapeHTML(project.icono)}"><span class="art-label">${escapeHTML(project.materia)}</span>${art(project.icono)}<span class="art-cross" aria-hidden="true">+</span></div><div class="project-body"><div class="project-meta"><span>${escapeHTML(project.nivel)}${project.grupo ? ` · ${escapeHTML(project.grupo)}` : ''}</span><span>${escapeHTML(project.anio)}</span></div><h3>${escapeHTML(project.titulo)}</h3><p>${escapeHTML(project.resumen)}</p><div class="tags">${(project.etiquetas || []).map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join('')}</div><div class="project-bottom"><span class="sample-label">${project.ejemplo ? 'EJEMPLO' : escapeHTML(project.grupo ? `Grupo ${project.grupo}` : 'Grupo sin indicar')}</span><button type="button" class="detail-button" data-project="${escapeHTML(project.id)}" aria-label="Ver ficha de ${escapeHTML(project.titulo)}">Ver proyecto <span aria-hidden="true">↗</span></button></div></div></article>`;
  const webCard = (web,index) => `<article class="web-row"><span class="web-number" aria-hidden="true">${String(index+1).padStart(2,'0')}</span><div><h3>${escapeHTML(web.titulo)}</h3><p>${escapeHTML(web.descripcion)}</p><span class="web-author">Autoría: ${escapeHTML(web.autor || 'No indicada')}</span></div><span class="web-category">${escapeHTML(web.categoria)}</span>${link(web.url,'Visitar web') || '<span class="access">Enlace pendiente</span>'}</article>`;
  const renderInto = (id,items,render) => { if ($(id)) $(id).innerHTML = items.length ? items.map(render).join('') : '<p class="unpublished">Todavía no hay incorporaciones en esta sección.</p>'; };
  const demo = projects.some(p=>p.ejemplo);
  if ($('demoNotice')) $('demoNotice').hidden = !demo;
  if ($('menuToggle')) {
    const closeMenu = () => {$('mainNav').classList.remove('is-open');$('menuToggle').setAttribute('aria-expanded','false');};
    $('menuToggle').addEventListener('click',()=>{const open=$('mainNav').classList.toggle('is-open');$('menuToggle').setAttribute('aria-expanded',String(open));});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
    $('mainNav').addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
    window.addEventListener('resize',()=>{if(window.innerWidth>800)closeMenu();});
  }
  if (page === 'home') {
    const limit = Number.isInteger(data.limiteInicio) && data.limiteInicio > 0 ? data.limiteInicio : 3;
    renderInto('latestApps',apps.slice(0,limit),appCard);
    renderInto('latestProjects',projects.slice(0,limit),projectCard);
    renderInto('latestWebs',webs.slice(0,limit),webCard);
    $('appsCount').textContent = `${apps.length} ${apps.length===1?'app':'apps'} en el laboratorio`;
    $('projectsCount').textContent = projects.length && projects.every(p=>p.ejemplo) ? `${projects.length} fichas de ejemplo` : `${projects.filter(p=>!p.ejemplo).length} proyectos publicados`;
    $('websCount').textContent = `${webs.length} ${webs.length===1?'web seleccionada':'webs seleccionadas'}`;
  }
  if (['projects','lab','webs'].includes(page)) {
    const MISSING_GROUP = '__sin_grupo__';
    const controls = page==='projects' ? {anio:$('yearSelect'),nivel:$('levelSelect'),grupo:$('groupSelect')} : page==='webs' ? {categoria:$('categorySelect')} : {};
    const placeholder = {anio:'Todos los cursos',nivel:'Todos los niveles',grupo:'Todos los grupos',categoria:'Todas las categorías'};
    const state = {q:'',anio:'',nivel:'',grupo:'',categoria:''};
    const groupOf = p => p.grupo || MISSING_GROUP;
    const options = (key,values) => {
      const select=controls[key];
      const current=state[key];
      const sorted=[...new Set(values.filter(Boolean))].sort((a,b)=>key==='anio'?b.localeCompare(a,'es'):a.localeCompare(b,'es',{numeric:true}));
      select.innerHTML=`<option value="">${placeholder[key]}</option>`+sorted.map(v=>`<option value="${escapeHTML(v)}">${escapeHTML(v===MISSING_GROUP?'Sin especificar':v)}</option>`).join('');
      state[key]=sorted.includes(current)?current:'';
      select.value=state[key];
    };
    const updateFacets = () => {
      if(page==='projects') {
        options('anio',projects.map(p=>p.anio));
        const inYear=projects.filter(p=>!state.anio||p.anio===state.anio);
        options('nivel',inYear.map(p=>p.nivel));
        options('grupo',inYear.filter(p=>!state.nivel||p.nivel===state.nivel).map(groupOf));
      } else if(page==='webs') options('categoria',webs.map(w=>w.categoria));
    };
    const writeURL=()=>{
      const url=new URL(location.href);
      for(const key of ['q',...Object.keys(controls)]){if(state[key])url.searchParams.set(key,state[key]);else url.searchParams.delete(key);}
      history.replaceState(null,'',url);
    };
    const render=()=>{
      updateFacets();
      const source=page==='projects'?projects:page==='lab'?apps:webs;
      const filtered=source.filter(item=>{
        if(page==='projects'&&((state.anio&&item.anio!==state.anio)||(state.nivel&&item.nivel!==state.nivel)||(state.grupo&&groupOf(item)!==state.grupo)))return false;
        if(page==='webs'&&state.categoria&&item.categoria!==state.categoria)return false;
        return !state.q || normalize([item.titulo,item.resumen,item.descripcion,item.autor,item.categoria,item.materia,item.anio,item.nivel,item.grupo,...(item.etiquetas||[])].join(' ')).includes(normalize(state.q));
      });
      const renderer=page==='projects'?projectCard:page==='lab'?appCard:webCard;
      $('catalogGrid').innerHTML=filtered.map(renderer).join('');
      $('catalogGrid').hidden=filtered.length===0;
      $('emptyState').hidden=filtered.length>0;
      const noun=page==='projects'?'proyectos':page==='lab'?'apps':'webs';
      $('resultCount').textContent=`${filtered.length} de ${source.length} ${noun}${page==='projects'&&source.length&&source.every(p=>p.ejemplo)?' · ejemplos':''}`;
    };
    const readURL=()=>{
      const params=new URLSearchParams(location.search);
      for(const key of ['q',...Object.keys(controls)])state[key]=params.get(key)||'';
      $('searchInput').value=state.q;
      render();
    };
    $('searchInput').addEventListener('input',e=>{state.q=e.target.value;render();writeURL();});
    for(const [key,select] of Object.entries(controls))select.addEventListener('change',()=>{state[key]=select.value;render();writeURL();});
    const reset=()=>{for(const key of Object.keys(state))state[key]='';$('searchInput').value='';render();writeURL();};
    $('resetFilters')?.addEventListener('click',reset);
    document.querySelectorAll('[data-reset]').forEach(b=>b.addEventListener('click',reset));
    window.addEventListener('popstate',readURL);
    readURL();
  }
  const dialog=$('projectDialog');
  if(dialog){
    let opener;
    document.addEventListener('click',e=>{
      const button=e.target.closest('[data-project]');
      if(!button)return;
      const p=projects.find(item=>item.id===button.dataset.project);
      if(!p)return;
      opener=button;
      $('dialogTitle').textContent=p.titulo;
      $('dialogMeta').innerHTML=[p.anio,p.nivel,p.grupo?`Grupo ${p.grupo}`:'Grupo sin especificar',p.materia,p.ejemplo?'Ejemplo de muestra':''].filter(Boolean).map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join('');
      $('dialogDescription').textContent=p.descripcion||p.resumen;
      $('dialogTags').innerHTML=(p.etiquetas||[]).map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join('');
      $('dialogLinks').innerHTML=link(p.url,'Abrir proyecto','button primary')+link(p.codigo,'Ver código','button secondary') || '<p class="unpublished">Esta ficha todavía no tiene un enlace a un proyecto publicado.</p>';
      dialog.showModal();
    });
    $('dialogClose').addEventListener('click',()=>dialog.close());
    dialog.addEventListener('click',e=>{if(e.target===dialog){const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)dialog.close();}});
    dialog.addEventListener('close',()=>opener?.focus());
  }
})();
