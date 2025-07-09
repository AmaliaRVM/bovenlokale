//Global variables
const sectionBoven = document.querySelector('section.bovenlokale_budget');
const sectionKortrijk = document.querySelector('section.kortrijk_main_container');
const sectionGent = document.querySelector('section.gent_main_container');
const sectionBrussels = document.querySelector('section.brussels_main_container');
const divGeneral = document.querySelector('div.general');
const divKortrijk = document.querySelector('section.kortrijk');
const divGent = document.querySelector('section.gent');
const divBrussels = document.querySelector('section.brussels');

const generalBudget = {
  salary: 28500,
  teachers: 8000,
  artists: 4000,
  stage_designer: 1800,
  hardware: 386.76,
  transport_team: 4287,
  scenography: 1000,
  outputs: 1400,
  fablab_material: 1400,
  volunteer_work: 4452,
  microcontrolers: 200,
  catering: 4200
}

const kortrijkBudget = {
  fablab: 4000,
  transport_parti: 4074,
  telephone_plan: 192,
  office: 60,
  hosting: 250,
  printed_com: 160,
  insurance: 400,
  Buda: 1500,
  Buda_insurance: 270,
  e_textile: 1000,
  sim: 8
}

const gentBudget = {
  transport_parti: 4074,
  extra_rail: 102,
  telephone_plan: 192,
  office: 60,
  printed_com: 160,
  insurance: 400
}

const bruBudget = {
  Fablab: 4000,
  Rental_Mics: 792,
  transport_parti: 4109,
  office: 80,
  printed_com: 180,
  globa_aroma: 1500,
  material_pub: 400,
  publication: 2000
}

//Same general budget for three editions

const general = Object.values(generalBudget).reduce((acc, val) => acc + val, 0);
console.log(general);

for (const [key, value] of Object.entries(generalBudget)) {
  divGeneral.innerHTML = divGeneral.innerHTML + `
  <div class="values">
    <div><p>${key}</p></div>
    <div><p>${value}</p></div>
  </div>
  `
}

//General budget for ODLTextile Kortrijk 2025

const kor = Object.values(kortrijkBudget).reduce((acc, val) => acc + val, 0);
console.log(kor);

const totalKortrijk = general + kor;
const totalKortrijkRound = Math.round(totalKortrijk);

for (const [key, value] of Object.entries(kortrijkBudget)) {
  divKortrijk.innerHTML = divKortrijk.innerHTML + `
    <div class="values">
      <div><p>${key}</p></div>
      <div><p>${value}</p></div>
    </div>
  `
}

//General budget for ODLDesign&Democracy Gent 2026

const gent = Object.values(gentBudget).reduce((acc, val) => acc + val, 0);
console.log(gent);

const totalGent = general + gent;
const totalGentRound = Math.round(totalGent);

for (const [key, value] of Object.entries(gentBudget)) {
  divGent.innerHTML = divGent.innerHTML + `
  <div class="values">
    <div><p>${key}</p></div>
    <div><p>${value}</p></div>
  </div>
  `
}

//General budget for ODLSounds&Bits Brussels 2027

const bru = Object.values(bruBudget).reduce((acc, val) => acc + val, 0);
console.log(bru);

const totalBru = general + bru;
const totalBruRound = Math.round(totalBru);

for (const [key, value] of Object.entries(bruBudget)) {
  divBrussels.innerHTML = divBrussels.innerHTML + `
  <div class="values">
    <div><p>${key}</p></div>
    <div><p>${value}</p></div>
  </div>
  `
}

//Total Bovenlokale
const totalTotal =  totalKortrijk + totalGent + totalBru;
console.log(totalTotal);
const totalTotalRound = Math.round(totalTotal);

//Display data of the total boven and total budgets for each edition on html

sectionBoven.innerHTML = sectionBoven.innerHTML + `
  <h1>Bovenlokale<h1>
  <h2>${totalTotalRound}</h2>  
`

sectionKortrijk.innerHTML = sectionKortrijk.innerHTML + `
  <div>
      <h1>ODLTextile Kortrijk 2025 Budget</h1>
      <h2>${totalKortrijkRound}<h1>
  </div>
`

sectionGent.innerHTML = sectionGent.innerHTML + `
  <div>
      <h1>ODLDesign&Democracy Gent 2026 Budget</h1>
      <h2>${totalGentRound}<h1>
  </div>
`

sectionBrussels.innerHTML = sectionBrussels.innerHTML + `
  <div>
      <h1>ODLSounds&Bits 2027 Brussels Budget</h1>
      <h2>${totalBruRound}<h1>
  </div>
`