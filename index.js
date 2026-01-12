let heroinas = [
  { nome: "Luna", xp: 950 },
  { nome: "Maya", xp: 1500 },
  { nome: "Atena", xp: 4800 },
  { nome: "Clara", xp: 7000 },
  { nome: "Artemys", xp: 10200 }
];

for (let i = 0; i < heroinas.length; i++) {

  let heroina = heroinas[i]; // pega UMA heroína
  let nivel;

  if (heroina.xp < 1000) {
    nivel = "Ferro";
  } else if (heroina.xp <= 2000) {
    nivel = "Bronze";
  } else if (heroina.xp <= 5000) {
    nivel = "Prata";
  } else if (heroina.xp <= 7000) {
    nivel = "Ouro";
  } else if (heroina.xp <= 8000) {
    nivel = "Platina";
  } else if (heroina.xp <= 9000) {
    nivel = "Ascendente";
  } else if (heroina.xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log(`A heroína de nome ${heroina.nome} está no nível de ${nivel}`);
}
