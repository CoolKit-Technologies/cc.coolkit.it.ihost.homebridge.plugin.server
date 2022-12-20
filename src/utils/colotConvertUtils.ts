import convert from 'color-convert'

type COLOR = [number, number, number];

function rgb2hsv(rgb: COLOR) {
	return convert.rgb.hsv(rgb)
}

function hsv2rgb(hsv: COLOR) {
	return convert.hsv.rgb(hsv)
}

export default {
	rgb2hsv,
	hsv2rgb
}