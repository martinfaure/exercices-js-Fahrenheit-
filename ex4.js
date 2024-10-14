function peutVoter(age, nationalite) {
	if ((age >= 18) & (nationalite == "française")) {
		return "Éligible";
	} else {
		return "Non éligible";
	}
}

console.log(peutVoter(20, "française")); // Résultat : "Éligible"
console.log(peutVoter(16, "française")); // Résultat : "Non éligible"
console.log(peutVoter(20, "espagnole")); // Résultat : "Non éligible"
