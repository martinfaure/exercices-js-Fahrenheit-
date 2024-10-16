function tarif(age) {
	if (age <= 5) {
		return "Gratuit";
	} else if (age >= 5 && age <= 18) {
		return "Réduit";
	} else if (age >= 18) {
		return "Plein tarif";
	}
}

let age = prompt("Quel est votre âge ?");
console.log(tarif(age));
