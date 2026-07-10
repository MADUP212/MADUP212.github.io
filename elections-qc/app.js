// Application de visualisation des Élections du Québec (2018-2022)
let map;
let geojsonLayer;
let currentYear = '2022';
let currentScale = 'riding'; // 'riding' ou 'municipality'
let selectedFeature = null;

// Palette de couleurs des Partis (demande de l'utilisateur)
const partyColors = {
  'PCQ': '#0c2340',           // Bleu foncé
  'PQ': '#0055a5',            // Bleu
  'CAQ': '#00adef',           // Bleu pâle
  'QS': '#ffc20e',            // Jaune
  'PLQ': '#e31b23',           // Rouge
  'Parti Canadien': '#b19cd9', // Violet/Mauve
  'Autres': '#64748b'          // Gris
};

const partyFullNames = {
  'CAQ': 'Coalition Avenir Québec',
  'PLQ': 'Parti Libéral du Québec',
  'QS': 'Québec Solidaire',
  'PQ': 'Parti Québécois',
  'PCQ': 'Parti Conservateur du Québec',
  'Parti Canadien': 'Parti Canadien du Québec',
  'Autres': 'Autres / Indépendants'
};

document.addEventListener('DOMContentLoaded', () => {
  initMap();
  updateDashboard();
  setupEventListeners();
});

function initMap() {
  // Initialiser la carte Leaflet (centrée sur le Québec méridional)
  map = L.map('map', {
    zoomControl: false
  }).setView([47.5, -71.5], 6);

  // Ajouter le contrôle de zoom dans le coin supérieur droit
  L.control.zoom({
    position: 'topright'
  }).addTo(map);

  // Base map sombre élégante (CartoDB Dark Matter)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);

  // Charger la couche de circonscriptions GeoJSON
  renderGeoJson();

  // Ajouter la légende cartographique
  addLegend();
}

function getFeatureColor(feature, year) {
  const party = feature.properties[`Parti_${year}`];
  return partyColors[party] || partyColors['Autres'];
}

function getStyle(feature) {
  const isRiding = currentScale === 'riding';
  return {
    fillColor: getFeatureColor(feature, currentYear),
    weight: isRiding ? 1 : 0.5,
    opacity: 0.8,
    color: isRiding ? '#1e293b' : '#334155', // Couleur de la bordure
    fillOpacity: isRiding ? 0.75 : 0.7
  };
}

function renderGeoJson() {
  if (geojsonLayer) {
    map.removeLayer(geojsonLayer);
  }

  // Choisir le jeu de données approprié selon l'échelle active
  const data = currentScale === 'riding' ? electionsMapData : municipalMapData;

  geojsonLayer = L.geoJson(data, {
    style: getStyle,
    onEachFeature: onEachFeature
  }).addTo(map);
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: selectFeature
  });
}

function highlightFeature(e) {
  const layer = e.target;

  // Si ce n'est pas l'élément épinglé, on augmente la bordure au survol
  if (selectedFeature !== layer) {
    layer.setStyle({
      weight: currentScale === 'riding' ? 3 : 2,
      color: '#f8fafc',
      fillOpacity: 0.85
    });
  }

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }

  // Afficher les détails temporairement dans le panneau si aucun élément n'est sélectionné
  if (!selectedFeature) {
    displayRidingDetails(layer.feature.properties);
  }
}

function resetHighlight(e) {
  const layer = e.target;
  if (selectedFeature !== layer) {
    geojsonLayer.resetStyle(layer);
  }
  
  // Si rien n'est épinglé, on affiche de nouveau l'état par défaut dans le panneau latéral
  if (!selectedFeature) {
    clearRidingDetails();
  } else {
    displayRidingDetails(selectedFeature.feature.properties);
  }
}

function selectFeature(e) {
  const layer = e.target;

  // Si on clique sur l'élément déjà sélectionné, on le désélectionne
  if (selectedFeature === layer) {
    geojsonLayer.resetStyle(layer);
    selectedFeature = null;
    clearRidingDetails();
    return;
  }

  // Réinitialiser la sélection précédente
  if (selectedFeature) {
    geojsonLayer.resetStyle(selectedFeature);
  }

  // Définir la nouvelle sélection
  selectedFeature = layer;
  layer.setStyle({
    weight: currentScale === 'riding' ? 4 : 3,
    color: '#ffffff',
    fillOpacity: 0.9
  });

  // Centrer doucement la carte sur l'élément
  map.fitBounds(layer.getBounds(), {
    padding: [50, 50],
    maxZoom: 10
  });

  displayRidingDetails(layer.feature.properties);
}

// Mettre à jour les statistiques globales du tableau de bord
function updateDashboard() {
  const isRiding = currentScale === 'riding';
  const data = isRiding ? electionsMapData : municipalMapData;
  
  // Mettre à jour le libellé de la grille
  const gridLabel = document.getElementById('seats-grid-label');
  if (gridLabel) {
    gridLabel.textContent = isRiding ? "Sièges obtenus par parti" : "Municipalités remportées par parti";
  }

  // Calculer le total des sièges / victoires municipales
  const counts = { CAQ: 0, PLQ: 0, QS: 0, PQ: 0, PCQ: 0, 'Parti Canadien': 0, 'Autres': 0 };
  
  data.features.forEach(f => {
    const party = f.properties[`Parti_${currentYear}`];
    if (counts[party] !== undefined) {
      counts[party]++;
    } else {
      counts['Autres']++;
    }
  });

  // Mettre à jour l'affichage dans la grille
  document.getElementById('seats-caq').textContent = counts['CAQ'];
  document.getElementById('seats-plq').textContent = counts['PLQ'];
  document.getElementById('seats-qs').textContent = counts['QS'];
  document.getElementById('seats-pq').textContent = counts['PQ'];
  document.getElementById('seats-pcq').textContent = counts['PCQ'];
  document.getElementById('seats-autres').textContent = counts['Autres'] + counts['Parti Canadien'];

  // Calculer le taux de participation provincial moyen
  let totalInscrits = 0;
  let totalVotes = 0;

  if (isRiding) {
    let uniqueRidingCodes = new Set();
    data.features.forEach(f => {
      const props = f.properties;
      const code = props.Code;
      if (!uniqueRidingCodes.has(code)) {
        uniqueRidingCodes.add(code);
        const inscrits = props[`Inscrits_${currentYear}`] || 0;
        const turnout = props[`Turnout_${currentYear}`] || 0;
        totalInscrits += inscrits;
        totalVotes += (inscrits * (turnout / 100));
      }
    });
  } else {
    // Échelle des municipalités
    data.features.forEach(f => {
      const props = f.properties;
      const inscrits = props[`Inscrits_${currentYear}`] || 0;
      const turnout = props[`Turnout_${currentYear}`] || 0;
      totalInscrits += inscrits;
      totalVotes += (inscrits * (turnout / 100));
    });
  }

  const provincialTurnout = totalInscrits > 0 ? ((totalVotes / totalInscrits) * 100).toFixed(1) : 'N/A';
  document.getElementById('provincial-turnout').textContent = `${provincialTurnout} %`;
}

// Afficher les détails dans le panneau latéral
function displayRidingDetails(props) {
  const panel = document.getElementById('detail-panel');
  panel.classList.add('active');

  const isRiding = currentScale === 'riding';
  const name = isRiding ? props.Circonscription : props.Municipalite;
  const codeLabel = isRiding ? 'Code DGEQ' : 'Code géographique';
  const codeVal = isRiding ? props.Code : props.Code_Geo;

  const winnerParty = props[`Parti_${currentYear}`] || 'Autres';
  const pctWinner = props[`Pct_Winner_${currentYear}`] || 0;
  const turnout = props[`Turnout_${currentYear}`] || 0;
  const inscrits = props[`Inscrits_${currentYear}`] || 0;
  
  // Dans le GeoJSON municipal, la variable de vote s'appelle Votes_Parti_..., sinon Votes_Candidat_...
  const votesWinner = props[`Votes_Parti_${currentYear}`] || props[`Votes_Candidat_${currentYear}`] || 0;
  const winnerName = isRiding ? props[`Candidats_${currentYear}`] : null;

  // Calculer si la zone a changé de parti (Flip)
  const prevYear = currentYear === '2022' ? '2018' : '2022';
  const prevParty = props[`Parti_${prevYear}`];
  const hasFlipped = prevParty && prevParty !== winnerParty;
  
  let flipHTML = '';
  if (hasFlipped) {
    flipHTML = `
      <div class="detail-row" style="margin-top: 10px; background: rgba(244, 63, 94, 0.1); border: 1px solid rgba(244, 63, 94, 0.2); padding: 8px 12px; border-radius: 8px; width: 100%;">
        <span style="color: #fb7185; font-size: 0.8rem; font-weight: 700; text-transform: uppercase;">Bascule (Flip)</span>
        <span style="font-size: 0.85rem; font-weight: 600;">Gagné sur le <b>${prevParty}</b></span>
      </div>
    `;
  } else if (prevParty) {
    flipHTML = `
      <div class="detail-row" style="margin-top: 10px; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); padding: 8px 12px; border-radius: 8px; width: 100%;">
        <span style="color: #34d399; font-size: 0.8rem; font-weight: 700; text-transform: uppercase;">Territoire conservé</span>
        <span style="font-size: 0.85rem; font-weight: 600;">Détenu par le <b>${winnerParty}</b></span>
      </div>
    `;
  }

  // Notice pour les municipalités estimées/assimilées à leur circonscription
  let assimileHTML = '';
  if (props.Est_Assimile) {
    assimileHTML = `
      <div class="detail-row" style="margin-top: 10px; background: rgba(148, 163, 184, 0.15); border: 1px solid rgba(148, 163, 184, 0.25); padding: 8px 12px; border-radius: 8px; width: 100%; display: flex; flex-direction: column; align-items: flex-start; gap: 4px; text-align: left;">
        <span style="color: #cbd5e1; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">ℹ️ Données estimées</span>
        <span style="font-size: 0.8rem; color: #94a3b8; line-height: 1.3;">Cette zone n'a pas de bureau de vote physique propre. Les données présentées sont celles de sa circonscription (<b>${props.Circonscription_Map}</b>).</span>
      </div>
    `;
  }

  // Ligne de candidat (uniquement pour les circonscriptions)
  const candidateRowHTML = isRiding ? `
    <div class="detail-row">
      <span class="detail-label">Candidat élu</span>
      <span class="detail-value">${winnerName}</span>
    </div>
  ` : '';

  // Infos de comparaison historique rapide
  const histHTML = `
    <div style="margin-top: 18px; padding-top: 12px; border-top: 1px solid var(--border-panel); width: 100%;">
      <span class="control-label" style="font-size: 0.75rem; margin-bottom: 8px; display: block;">Comparatif Historique</span>
      <div style="display: flex; gap: 10px; width: 100%;">
        <div style="flex: 1; background: rgba(255,255,255,0.02); padding: 8px; border-radius: 8px; border: 1px solid var(--border-panel); text-align: center;">
          <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">2018</div>
          <div style="font-size: 0.9rem; font-weight: 700; color: ${partyColors[props['Parti_2018']] || partyColors['Autres']};">${props['Parti_2018'] || 'Autres'}</div>
          <div style="font-size: 0.7rem; color: var(--text-secondary);">${props['Pct_Winner_2018'] || 0}% des voix</div>
        </div>
        <div style="flex: 1; background: rgba(255,255,255,0.02); padding: 8px; border-radius: 8px; border: 1px solid var(--border-panel); text-align: center;">
          <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700;">2022</div>
          <div style="font-size: 0.9rem; font-weight: 700; color: ${partyColors[props['Parti_2022']] || partyColors['Autres']};">${props['Parti_2022'] || 'Autres'}</div>
          <div style="font-size: 0.7rem; color: var(--text-secondary);">${props['Pct_Winner_2022'] || 0}% des voix</div>
        </div>
      </div>
    </div>
  `;

  panel.innerHTML = `
    <div class="detail-header">
      <div class="detail-title">${name}</div>
      <div class="detail-code">${codeLabel} : ${codeVal}</div>
    </div>
    <div class="detail-stats">
      <div class="detail-row">
        <span class="detail-label">Parti en tête</span>
        <span class="party-badge" style="--badge-color: ${partyColors[winnerParty]};">${partyFullNames[winnerParty] || winnerParty}</span>
      </div>
      ${candidateRowHTML}
      <div class="detail-row">
        <span class="detail-label">% des votes du parti</span>
        <span class="detail-value">${pctWinner} %</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Nombre de votes</span>
        <span class="detail-value">${Number(votesWinner).toLocaleString('fr-CA')}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Participation</span>
        <span class="detail-value" style="color: #34d399;">${turnout} %</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Électeurs inscrits</span>
        <span class="detail-value">${Number(inscrits).toLocaleString('fr-CA')}</span>
      </div>
      ${flipHTML}
      ${assimileHTML}
      ${histHTML}
    </div>
  `;
}

// Vider le panneau des détails et remettre l'affichage par défaut
function clearRidingDetails() {
  const panel = document.getElementById('detail-panel');
  panel.classList.remove('active');
  panel.innerHTML = `
    <div class="detail-placeholder">
      <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25s-7.5-11.25 12 12s7.5 8.25c3.769 0 7.5-2.62 7.5-8.25z" />
      </svg>
      <div>Survolez ou cliquez sur un élément pour afficher ses résultats détaillés.</div>
    </div>
  `;
}

// Configurer les écouteurs d'événements
function setupEventListeners() {
  // Changement d'année (2018 vs 2022)
  const yearButtons = document.querySelectorAll('.switch-year-btn');
  yearButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const year = e.target.dataset.year;
      if (year === currentYear) return;

      yearButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      currentYear = year;
      geojsonLayer.setStyle(getStyle);
      updateDashboard();

      if (selectedFeature) {
        displayRidingDetails(selectedFeature.feature.properties);
      } else {
        clearRidingDetails();
      }
    });
  });

  // Changement d'échelle géographique (Circonscription vs Municipalité)
  const scaleButtons = document.querySelectorAll('.switch-scale-btn');
  scaleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const scale = e.target.dataset.scale;
      if (scale === currentScale) return;

      scaleButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      currentScale = scale;
      
      // Réinitialiser la sélection de l'élément actif
      selectedFeature = null;
      clearRidingDetails();

      // Re-rendre la couche de la carte avec les nouvelles données et styles
      renderGeoJson();
      updateDashboard();

      // Adapter la vue de la carte
      if (scale === 'riding') {
        map.setView([47.5, -71.5], 6);
      } else {
        // Pour les municipalités, on peut se concentrer légèrement plus bas ou garder la vue
        map.setView([46.8, -72.0], 7);
      }
    });
  });
}

// Légende Leaflet
function addLegend() {
  const legend = L.control({ position: 'bottomleft' });

  legend.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'info legend');
    div.innerHTML = '<h4>Partis politiques</h4>';
    
    const parties = ['CAQ', 'PLQ', 'QS', 'PQ', 'PCQ', 'Parti Canadien', 'Autres'];
    
    parties.forEach(p => {
      div.innerHTML += `
        <div class="legend-item">
          <div class="legend-color" style="background-color: ${partyColors[p]};"></div>
          <div>${p} (${partyFullNames[p]})</div>
        </div>
      `;
    });

    return div;
  };

  legend.addTo(map);
}
