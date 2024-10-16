function peutVoter(age, nationalite) {
	if (age >= 18 && nationalite == "française") {
		return "Éligible";
	} else {
		return "Non éligible";
	}
}

let age = prompt("Quel est votre âge ?");
let nationalite = prompt("Quelle est votre nationalité ?");
console.log(peutVoter(age, nationalite));
