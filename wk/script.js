
const matches = [
  // 11 JUNI
  { date:"Do 11 juni", dateKey:"jun11", localTime:"13:00 (Mexico-Stad, CDT)", nlTime:"20:00", confKeys:["CAF"], confDisplay:"CONCACAF–CAF", home:"Mexico", away:"Zuid-Afrika", group:"A", round:1, scoringNote:"ZA: 1× (CAF)" },
  { date:"Do 11 juni", dateKey:"jun11", localTime:"20:00 (Guadalajara, CDT)", nlTime:"03:00 +1", confKeys:["AFC","UEFA"], confDisplay:"AFC–UEFA", home:"Zuid-Korea", away:"Tsjechië", group:"A", round:1, scoringNote:"ZK: 1× (AFC) · TJ: 1× (UEFA)" },
  // 12 JUNI
  { date:"Vr 12 juni", dateKey:"jun12", localTime:"15:00 (Toronto, EDT)", nlTime:"21:00", confKeys:["UEFA"], confDisplay:"CONCACAF–UEFA", home:"Canada", away:"Bosnië-Herz.", group:"B", round:1, scoringNote:"BIH: 1× (UEFA)" },
  { date:"Vr 12 juni", dateKey:"jun12", localTime:"18:00 (Los Angeles, PDT)", nlTime:"03:00 +1", confKeys:["CONMEBOL"], confDisplay:"CONCACAF–CONMEBOL", home:"USA", away:"Paraguay", group:"D", round:1, scoringNote:"PAR: 2× (CONMEBOL)" },
  // 13 JUNI
  { date:"Za 13 juni", dateKey:"jun13", localTime:"12:00 (Santa Clara, PDT)", nlTime:"21:00", confKeys:["AFC","UEFA"], confDisplay:"AFC–UEFA", home:"Qatar", away:"Zwitserland", group:"B", round:1, scoringNote:"QAT: 1× (AFC) · ZWI: 1× (UEFA)" },
  { date:"Za 13 juni", dateKey:"jun13", localTime:"18:00 (New Jersey, EDT)", nlTime:"00:00 +1", confKeys:["CONMEBOL","CAF"], confDisplay:"CONMEBOL–CAF", home:"Brazilië", away:"Marokko", group:"C", round:1, scoringNote:"BRA: 2× (CONMEBOL) · MAR: 1× (CAF)" },
  { date:"Za 13 juni", dateKey:"jun13", localTime:"21:00 (Boston, EDT)", nlTime:"03:00 +1", confKeys:["UEFA"], confDisplay:"CONCACAF–UEFA", home:"Haïti", away:"Schotland", group:"C", round:1, scoringNote:"SCO: 1× (UEFA)" },
  { date:"Za 13 juni", dateKey:"jun13", localTime:"21:00 (Vancouver, PDT)", nlTime:"06:00 +1", confKeys:["AFC","UEFA"], confDisplay:"AFC–UEFA", home:"Australië", away:"Turkije", group:"D", round:1, scoringNote:"AUS: 1× (AFC) · TUR: 1× (UEFA)" },
  // 14 JUNI
  { date:"Zo 14 juni", dateKey:"jun14", localTime:"12:00 (Houston, CDT)", nlTime:"19:00", confKeys:["UEFA"], confDisplay:"UEFA–CONCACAF", home:"Duitsland", away:"Curaçao", group:"E", round:1, scoringNote:"DUI: 1× (UEFA)" },
  { date:"Zo 14 juni", dateKey:"jun14", localTime:"15:00 (Arlington, CDT)", nlTime:"22:00", confKeys:["UEFA","AFC"], confDisplay:"UEFA–AFC", home:"Nederland", away:"Japan", group:"F", round:1, scoringNote:"NED: 1× (UEFA) · JPN: 1× (AFC)" },
  { date:"Zo 14 juni", dateKey:"jun14", localTime:"19:00 (Philadelphia, EDT)", nlTime:"01:00 +1", confKeys:["CAF","CONMEBOL"], confDisplay:"CAF–CONMEBOL", home:"Ivoorkust", away:"Ecuador", group:"E", round:1, scoringNote:"IVC: 1× (CAF) · ECU: 2× (CONMEBOL)" },
  { date:"Zo 14 juni", dateKey:"jun14", localTime:"20:00 (Monterrey, CDT)", nlTime:"03:00 +1", confKeys:["UEFA","CAF"], confDisplay:"UEFA–CAF", home:"Zweden", away:"Tunesië", group:"F", round:1, scoringNote:"ZWE: 1× (UEFA) · TUN: 1× (CAF)" },
  // 15 JUNI
  { date:"Ma 15 juni", dateKey:"jun15", localTime:"12:00 (Atlanta, EDT)", nlTime:"18:00", confKeys:["UEFA","CAF"], confDisplay:"UEFA–CAF", home:"Spanje", away:"Kaapverdië", group:"H", round:1, scoringNote:"SPA: 1× (UEFA) · KAP: 1× (CAF)" },
  { date:"Ma 15 juni", dateKey:"jun15", localTime:"15:00 (Seattle, PDT)", nlTime:"00:00 +1", confKeys:["UEFA","CAF"], confDisplay:"UEFA–CAF", home:"België", away:"Egypte", group:"G", round:1, scoringNote:"BEL: 1× (UEFA) · EGY: 1× (CAF)" },
  { date:"Ma 15 juni", dateKey:"jun15", localTime:"18:00 (Miami, EDT)", nlTime:"00:00 +1", confKeys:["AFC","CONMEBOL"], confDisplay:"AFC–CONMEBOL", home:"Saudi-Arabië", away:"Uruguay", group:"H", round:1, scoringNote:"SAU: 1× (AFC) · URU: 2× (CONMEBOL)" },
  { date:"Ma 15 juni", dateKey:"jun15", localTime:"21:00 (Los Angeles, PDT)", nlTime:"06:00 +1", confKeys:["AFC"], confDisplay:"AFC–OFC", home:"Iran", away:"Nieuw-Zeeland", group:"G", round:1, scoringNote:"IRN: 1× (AFC)" },
  // 16 JUNI
  { date:"Di 16 juni", dateKey:"jun16", localTime:"15:00 (New Jersey, EDT)", nlTime:"21:00", confKeys:["UEFA","CAF"], confDisplay:"UEFA–CAF", home:"Frankrijk", away:"Senegal", group:"I", round:1, scoringNote:"FRA: 1× (UEFA) · SEN: 1× (CAF)" },
  { date:"Di 16 juni", dateKey:"jun16", localTime:"18:00 (Boston, EDT)", nlTime:"00:00 +1", confKeys:["AFC","UEFA"], confDisplay:"AFC–UEFA", home:"Irak", away:"Noorwegen", group:"I", round:1, scoringNote:"IRK: 1× (AFC) · NOR: 1× (UEFA)" },
  { date:"Di 16 juni", dateKey:"jun16", localTime:"21:00 (Kansas City, CDT)", nlTime:"04:00 +1", confKeys:["CONMEBOL","CAF"], confDisplay:"CONMEBOL–CAF", home:"Argentinië", away:"Algerije", group:"J", round:1, scoringNote:"ARG: 2× (CONMEBOL) · ALG: 1× (CAF)" },
  { date:"Di 16 juni", dateKey:"jun16", localTime:"00:00 (Santa Clara, PDT)", nlTime:"09:00 +1", confKeys:["UEFA","AFC"], confDisplay:"UEFA–AFC", home:"Oostenrijk", away:"Jordanië", group:"J", round:1, scoringNote:"OOS: 1× (UEFA) · JOR: 1× (AFC)" },
  // 17 JUNI
  { date:"Wo 17 juni", dateKey:"jun17", localTime:"13:00 (Houston, CDT)", nlTime:"20:00", confKeys:["UEFA","CAF"], confDisplay:"UEFA–CAF", home:"Portugal", away:"DR Congo", group:"K", round:1, scoringNote:"POR: 1× (UEFA) · DRC: 1× (CAF)" },
  { date:"Wo 17 juni", dateKey:"jun17", localTime:"16:00 (Arlington, CDT)", nlTime:"23:00", confKeys:["UEFA"], confDisplay:"UEFA×2", home:"Engeland", away:"Kroatië", group:"L", round:1, scoringNote:"ENG: 1× (UEFA) · KRO: 1× (UEFA)" },
  { date:"Wo 17 juni", dateKey:"jun17", localTime:"20:00 (Mexico-Stad, CDT)", nlTime:"03:00 +1", confKeys:["AFC","CONMEBOL"], confDisplay:"AFC–CONMEBOL", home:"Oezbekistan", away:"Colombia", group:"K", round:1, scoringNote:"OEZ: 1× (AFC) · COL: 2× (CONMEBOL)" },
];

const dayLabels = {
  jun11:"Donderdag 11 juni", jun12:"Vrijdag 12 juni", jun13:"Zaterdag 13 juni",
  jun14:"Zondag 14 juni", jun15:"Maandag 15 juni", jun16:"Dinsdag 16 juni", jun17:"Woensdag 17 juni"
};

let activeFilter = "all";

function filterConf(conf, btn) {
  activeFilter = conf;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAll();
}

function confBadges(confKeys, display) {
  const known = confKeys.filter(c => ["UEFA","CONMEBOL","AFC","CAF"].includes(c));
  if (known.length === 0) return `<span class="conf-badge conf-multi">${display}</span>`;
  if (known.length === 1) return `<span class="conf-badge conf-${known[0]}">${display}</span>`;
  return known.map(c => `<span class="conf-badge conf-${c}">${c}</span>`).join(' ');
}

function roundBadge(r) {
  return `<span class="round-badge round-${r}">${r}e wedstrijd</span>`;
}

function renderAll() {
  const container = document.getElementById('schedule');
  container.innerHTML = '';
  const days = ["jun11","jun12","jun13","jun14","jun15","jun16","jun17"];
  let total=0, uefaC=0, conC=0, afcC=0, cafC=0;

  days.forEach(dk => {
    const dayMatches = matches.filter(m => {
      if (m.dateKey !== dk) return false;
      const rel = m.confKeys.filter(c => ["UEFA","CONMEBOL","AFC","CAF"].includes(c));
      if (rel.length === 0) return false;
      if (activeFilter === "all") return true;
      return m.confKeys.includes(activeFilter);
    });
    if (dayMatches.length === 0) return;

    total += dayMatches.length;
    dayMatches.forEach(m => {
      if (m.confKeys.includes("UEFA")) uefaC++;
      if (m.confKeys.includes("CONMEBOL")) conC++;
      if (m.confKeys.includes("AFC")) afcC++;
      if (m.confKeys.includes("CAF")) cafC++;
    });

    const block = document.createElement('div');
    block.className = 'day-block';
    block.innerHTML = `<div class="day-header">📅 ${dayLabels[dk]}</div>
    <div class="table-wrap"><table>
      <thead><tr>
        <th>Lokale tijd</th><th>🇳🇱 Ned. tijd (CEST)</th>
        <th>Confederatie(s)</th><th>Wedstrijd</th>
        <th>Gr.</th><th>Ronde</th><th>Moet scoren</th>
      </tr></thead>
      <tbody>${dayMatches.map(m => `<tr>
        <td><div class="time-local">${m.localTime}</div></td>
        <td><div class="time-nl">${m.nlTime}</div></td>
        <td>${confBadges(m.confKeys, m.confDisplay)}</td>
        <td class="match-cell">${m.home} <span class="vs">vs</span> ${m.away}</td>
        <td style="color:var(--muted);font-weight:600">${m.group}</td>
        <td>${roundBadge(m.round)}</td>
        <td class="note-cell"><span class="note-tag">⚽</span>${m.scoringNote}</td>
      </tr>`).join('')}</tbody>
    </table></div>`;
    container.appendChild(block);
  });

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-uefa').textContent = uefaC;
  document.getElementById('stat-con').textContent = conC;
  document.getElementById('stat-afc').textContent = afcC;
  document.getElementById('stat-caf').textContent = cafC;
}

renderAll();