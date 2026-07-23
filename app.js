(() => {
  const C = window.PORTAL_CONTENT;
  const loginView = document.getElementById('loginView');
  const portalView = document.getElementById('portalView');
  const main = document.getElementById('main');
  const nav = document.getElementById('nav');
  const search = document.getElementById('globalSearch');
  const searchResults = document.getElementById('searchResults');

  const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const table = (headers, rows) => `<div class="table-shell"><table><thead><tr>${headers.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.length ? rows.map(r=>`<tr>${r.map(v=>`<td>${esc(v)}</td>`).join('')}</tr>`).join('') : `<tr><td colspan="${headers.length}" class="empty">No records yet. Add them in content.js.</td></tr>`}</tbody></table></div>`;
  const pageHead = (title, text) => `<div class="page-head"><div><p class="eyebrow">${esc(C.portalName)}</p><h1>${esc(title)}</h1><p>${esc(text)}</p></div></div>`;
  const pill = (text, kind='') => `<span class="pill ${kind}">${esc(text)}</span>`;

  function showPortal() {
    sessionStorage.setItem('dplPortalSession','1');
    loginView.classList.add('hidden'); portalView.classList.remove('hidden');
    renderNav(); route();
  }

  document.getElementById('loginForm').addEventListener('submit', e => { e.preventDefault(); showPortal(); });
  document.getElementById('signOut').addEventListener('click', () => { sessionStorage.removeItem('dplPortalSession'); location.hash=''; location.reload(); });
  document.getElementById('menuButton').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('open'));
  document.getElementById('editHelp').addEventListener('click', () => window.open('EDITING_GUIDE.md','_blank'));

  function renderNav() {
    nav.innerHTML = `<div class="nav-label">Portal</div>` + C.tabs.map(t => `<a href="#${t.id}" data-id="${t.id}"><span>${esc(t.label)}</span></a>`).join('');
  }

  function setActive(id) {
    nav.querySelectorAll('a').forEach(a=>a.classList.toggle('active', a.dataset.id===id));
    document.getElementById('sidebar').classList.remove('open');
  }

  function renderMainPage() {
    const dirs = C.tabs.filter(t=>t.id!=='main').map(t=>`<a class="directory-row" href="#${t.id}"><div><strong>${esc(t.label)}</strong><p>${esc(t.description)}</p></div><span>→</span></a>`).join('');
    const arts = C.articles.map(a=>`<article class="article"><div>${pill(a.source)} ${pill(a.date,'soft')}</div><h3>${esc(a.title)}</h3><p>${esc(a.note)}</p></article>`).join('');
    main.innerHTML = `${pageHead('Main Page','Everything is one click away. Use the universal search above to search across the entire portal.')}<div class="home-grid"><section class="panel"><div class="panel-head"><h2>Portal Directory</h2><span>${C.tabs.length-1} sections</span></div>${dirs}</section><section class="panel"><div class="panel-head"><h2>Industry Articles</h2><span>Curated only</span></div>${arts}</section></div>`;
  }

  function renderComps() {
    const typeCards = Object.entries(C.compPropertyTypes).map(([type,cats])=>`<button class="type-card" data-comp-type="${esc(type)}"><strong>${esc(type)}</strong><span>${cats.map(c=>esc(c)).join(' · ')}</span></button>`).join('');
    main.innerHTML = `${pageHead('Comps','All comparable lease, sale, available, and pipeline properties organized by property type.')}<div class="type-grid">${typeCards}</div><div id="compTable"></div>`;
    const draw = type => {
      const rows=C.comps.filter(x=>x.propertyType===type).map(x=>[x.propertyName,x.address,x.city,x.submarket,x.propertyType,x.category,x.buildingSF,x.landAcres,x.rent,x.date]);
      document.getElementById('compTable').innerHTML=`<div class="section-title"><h2>${esc(type)}</h2><span>${rows.length} records</span></div>${table(['Property Name','Address','City','Submarket','Property Type','Category','Building SF','Land Acres','Rent','Date'],rows)}`;
      document.querySelectorAll('.type-card').forEach(b=>b.classList.toggle('selected',b.dataset.compType===type));
    };
    document.querySelectorAll('.type-card').forEach(b=>b.onclick=()=>draw(b.dataset.compType)); draw(Object.keys(C.compPropertyTypes)[0]);
  }

  function renderTenantRequirements() {
    main.innerHTML = `${pageHead('Tenant Requirements','The latest tenant requirements in a simple editable-source spreadsheet.')}<div class="callout"><strong>Easy updates:</strong> edit the <code>tenantRequirements</code> list in <code>content.js</code>, or replace the CSV template in the data folder.</div>${table(['Priority','Tenant','Requirement','Market','Timing','Broker','Notes'],C.tenantRequirements.map(x=>[x.priority,x.tenant,x.requirement,x.market,x.timing,x.broker,x.notes]))}`;
  }

  function renderDplProperties() {
    main.innerHTML = `${pageHead('DPL Properties','Master list of all properties owned by Dedeaux Properties.')}<div class="callout"><strong>Portfolio rule:</strong> this page is for Dedeaux-owned properties only.</div>${table(['Property','Address','City','Market','Type','Building SF','Land Acres','Occupancy','Tenant','Lease Expiration','Status'],C.dplProperties.map(x=>[x.name,x.address,x.city,x.market,x.type,x.buildingSF,x.landAcres,x.occupancy,x.tenant,x.leaseExpiration,x.status]))}`;
  }

  function renderReports(id) {
    const tab=C.tabs.find(t=>t.id===id), rows=C.reports[id]||[];
    main.innerHTML = `${pageHead(tab.label,tab.description.replace('Click this tab for ',''))}${table(['Report','Market','Date','Type','File / Status'],rows.map(x=>[x.title,x.market,x.date,x.type,x.status]))}`;
  }

  function renderActionable() {
    const cards=C.actionableIntel.map(x=>`<article class="intel-card"><div>${pill(x.priority,x.priority==='Requires Attention'?'alert':'good')} ${pill(x.category,'soft')}</div><h3>${esc(x.title)}</h3><p><strong>${esc(x.market)}</strong> · ${esc(x.date)}</p><p>${esc(x.action)}</p></article>`).join('');
    main.innerHTML = `${pageHead('Actionable Intel','Internal reports and market intelligence, opportunities, and important developments requiring attention.')}<div class="intel-grid">${cards}</div>`;
  }

  function renderTargets() {
    main.innerHTML = `${pageHead('Possible Properties to Target','Curated acquisition and redevelopment opportunities.')} ${table(['Property','Address','Market','Acres','Existing SF','Investment Thesis','Status'],C.targetProperties.map(x=>[x.property,x.address,x.market,x.acres,x.existingSF,x.thesis,x.status]))}`;
  }

  function renderDevelopment() {
    const d=C.development;
    const chips=d.markets.map(m=>`<button class="market-chip">${esc(m)}</button>`).join('');
    const characteristics=d.characteristics.map((x,i)=>`<div class="characteristic"><span>${i+1}</span>${esc(x)}</div>`).join('');
    const rankings=table(['Rank','Building Size','Average Achieved Rent','Rent Premium','Average Time on Market','Current Availability','Recent Lease Count','Demand','Confidence'],d.sampleSizeRankings.map(x=>[x.rank,x.size,x.rent,x.premium,x.days,x.availability,x.leases,x.demand,x.confidence]));
    main.innerHTML = `${pageHead('Development Intelligence','Determine the exact building most likely to achieve the highest rent and fastest lease-up in each market using current, market-specific information.')}<div class="callout strong"><strong>Primary question:</strong> If Dedeaux controlled a vacant site in the selected market today, what exact building should it construct to maximize rent and minimize lease-up time?</div><section class="panel"><div class="panel-head"><h2>Select Market</h2><span>Use only data pertaining to that market</span></div><div class="chip-row">${chips}</div></section><div class="section-title"><h2>Building Size Rankings</h2><span>Highest rent + fastest lease-up</span></div>${rankings}<div class="recommendation"><p class="eyebrow">Final Recommendation</p><h2>${esc(d.recommendation.market)} — Perfect Building Generator</h2><div class="recommendation-grid"><div><span>Best Building Size</span><strong>${esc(d.recommendation.size)}</strong></div><div><span>Best Site Size</span><strong>${esc(d.recommendation.site)}</strong></div><div><span>Best Configuration</span><strong>${esc(d.recommendation.configuration)}</strong></div></div><p>${esc(d.recommendation.summary)}</p><p><strong>The final output also lists:</strong> the top characteristics most in demand, the characteristics associated with the highest rents, the fastest-leasing characteristics, the best feature combinations, and which Southern California markets currently achieve the highest rents and lease most quickly.</p></div><div class="section-title"><h2>Characteristics Evaluated</h2><span>${d.characteristics.length} variables</span></div><div class="characteristic-grid">${characteristics}</div>`;
    document.querySelectorAll('.market-chip').forEach((b,i)=>{if(i===3)b.classList.add('selected'); b.onclick=()=>{document.querySelectorAll('.market-chip').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');}});
  }

  function route() {
    const id=(location.hash||'#main').slice(1); setActive(id);
    if(id==='main') renderMainPage(); else if(id==='comps') renderComps(); else if(id==='tenant-requirements') renderTenantRequirements(); else if(id==='dpl-properties') renderDplProperties(); else if(['ios-intelligence','pipeline','broker-research','internal-reports'].includes(id)) renderReports(id); else if(id==='actionable-intel') renderActionable(); else if(id==='targets') renderTargets(); else if(id==='development-intelligence') renderDevelopment(); else renderMainPage();
    main.focus();
  }
  window.addEventListener('hashchange',route);

  const searchIndex=[];
  C.tabs.forEach(t=>searchIndex.push({title:t.label,text:t.description,id:t.id}));
  C.comps.forEach(x=>searchIndex.push({title:x.propertyName,text:Object.values(x).join(' '),id:'comps'}));
  C.dplProperties.forEach(x=>searchIndex.push({title:x.name,text:Object.values(x).join(' '),id:'dpl-properties'}));
  C.tenantRequirements.forEach(x=>searchIndex.push({title:x.tenant,text:Object.values(x).join(' '),id:'tenant-requirements'}));
  C.actionableIntel.forEach(x=>searchIndex.push({title:x.title,text:Object.values(x).join(' '),id:'actionable-intel'}));
  C.targetProperties.forEach(x=>searchIndex.push({title:x.property,text:Object.values(x).join(' '),id:'targets'}));

  search.addEventListener('input',()=>{
    const q=search.value.trim().toLowerCase();
    if(!q){searchResults.classList.add('hidden');return;}
    const hits=searchIndex.filter(x=>(x.title+' '+x.text).toLowerCase().includes(q)).slice(0,10);
    searchResults.innerHTML=hits.length?hits.map(x=>`<a href="#${x.id}"><strong>${esc(x.title)}</strong><span>${esc(x.text).slice(0,120)}</span></a>`).join(''):'<div class="no-results">No matching portal items.</div>';
    searchResults.classList.remove('hidden');
  });
  document.addEventListener('click',e=>{if(!e.target.closest('.global-search-wrap'))searchResults.classList.add('hidden');});

  if(sessionStorage.getItem('dplPortalSession')) showPortal();
})();
