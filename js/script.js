const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

drawTeam();

document.getElementById("submit-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const member = createNewTeamMember();
    team.push(member);
    drawTeam();
})

/****
 * FUNCTIONS
 */

function drawTeam() {
  const listElem = document.querySelector(".row");
  listElem.innerHTML = "";
  let elemsStr = "";
  for (let i = 0; i < team.length; i++) {
    const teamMember = team[i]; // oggetto
    console.log(teamMember.name, teamMember.role, teamMember.image);
    elemsStr += drawTeamMemeber(teamMember);
  }
  listElem.innerHTML += elemsStr;
}

/**
 * Crea elemento HTML per un membro del team
 * @param {object} teamMember
 * @returns {string}
 */
function drawTeamMemeber(teamMember) {
  //   return `
  //         <li>
  //             <p>${teamMember.name}</p>
  //             <p>${teamMember.role}</p>
  //             <img src="img/${teamMember.image}" alt="image of ${teamMember.name}">
  //         </li>
  //     `;

  // Metodo con creae element
  //   const colElem = document.createElement("div");
  //   colElem.classList.add("col");
  //   colElem.innerHTML = `
  //         <div class="card">
  //             <img src="img/${teamMember.image}" class="card-img-top" alt="image of ${teamMember.name}">
  //             <div class="card-body">
  //                 <h5 class="card-title">${teamMember.name}</h5>
  //                 <p class="card-text">Ruolo: ${teamMember.role}</p>
  //             </div>
  //         </div>`;

  return `
    <div class="col">
        <div class="card">
            <img src="img/${teamMember.image}" class="card-img-top" alt="image of ${teamMember.name}">
            <div class="card-body">
                <h5 class="card-title">${teamMember.name}</h5>
                <p class="card-text">Ruolo: ${teamMember.role}</p>
            </div>
        </div>
    </div>
    `;
}

/**
 * Funzione che preleva dati dal form e crea un nuovo oggetto per membro del team
 * @returns {object}
 */
function createNewTeamMember() {
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const image = document.getElementById("image").value;
    
    return {
        name: name,
        role: role,
        image: image
    }
}
