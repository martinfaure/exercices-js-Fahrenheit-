function tarif(age) {
	if (age <= 5) {
		return "Gratuit";
	} else if (age >= 5 && age <= 18) {
		return "Réduit";
	} else if (age >= 18) {
		return "Plein tarif";
	}
}
console.log(tarif(3)); // Résultat attendu : "Gratuit"
console.log(tarif(15)); // Résultat attendu : "Réduit"
console.log(tarif(25)); // Résultat attendu : "Plein tarif"
