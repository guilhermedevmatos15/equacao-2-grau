// arquivo no qual realiza o cálculo.

function solveEquation(a = 1, b = 1, c = 1) {
	if (a === 0) return false;

	const delta = b * b - 4 * a * c;

	if (delta < 0) return [];

	if (delta === 0) return [(0 - b) / (2 * a)];

	const rootDelta = Math.sqrt(delta);

	const x1 = (-b + rootDelta) / (2 * a);
	const x2 = (-b - rootDelta) / (2 * a);

	return [x1, x2];
}

export default solveEquation;
