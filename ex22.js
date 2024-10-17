function to_a(c1 = "a", c2 = "z") {
	a = "zyxwvutsrqponmlkjihgfedcba".split("");
	return a.slice(a.indexOf(c1), a.indexOf(c2) + 1);
}

console.log(to_a("z", "a"));
