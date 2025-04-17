// arquivo no qual realiza o cálculo.

function solveEquation(a = 1, b = 1, c = 1) {
	if (a === 0) return false;

	const delta = b * b - 4 * a * c;

	if (delta < 0) return [];

	if (delta === 0) return [(0 - b) / (2 * a)];

	let rootDelta = Math.sqrt(delta);

	
	let x1 = (-b + rootDelta) / (2 * a);
	let x2 = (-b - rootDelta) / (2 * a);
	
	x1 = x1 % 1 === 0 ? x1 : x1.toFixed(2);
	x2 = x2 % 1 === 0 ? x2 : x2.toFixed(2);

	return [x1, x2];
}

export default solveEquation;
