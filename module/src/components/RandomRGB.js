function RandomRGB() {
	const randomNumber = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	};
	const randomRGB = () => {
		return [ randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255) ];
	};
	const rgb = randomRGB();
	const color = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;

	return color;
}

export default RandomRGB;
