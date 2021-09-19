import Canvas from 'drawille';

const canvas = new Canvas(64, 32);

const draw = (x = 0, y = 0) => {
	console.clear();
	canvas.clear();

	new Array(31).forEach((_, i) => {
		canvas.set(i, i);
	});
	canvas.set(x, y);
	canvas.set(63, 31);
	console.log(canvas.frame());
};

draw(10,10);
