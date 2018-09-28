module.exports = function solveEquation(equation) {
	const regexp = /(-?\d{1,})\s[*]\sx\^2\s([+-])\s(\d+)\s\*\sx\s([-+])\s(\d+)/;
	const mass = equation.match(regexp);
	const a = +mass[1];
	const b = +(mass[2] + mass[3]);
	const c = +(mass[4] + mass[5]);
	const d = Math.pow(b, 2) - 4 * a * c;
	return [(Math.round(-b - Math.sqrt(d))/(2 * a)), Math.round((-b + Math.sqrt(d)) / (2 * a))].sort((a, b) => {return a - b});
}