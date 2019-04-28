import {HEADERS, FONT_STACK} from './utils/constants'
import parseFont from './utils/parse-font'

interface WithRhythmArgs {
	baseFontSize?: string,
	baseLineHeight?: number,
	basefontWeight?: number,
	headerFontWeight?: number,
	baseLetterSpacing?: string,
	headingFont?: string,
	headerLetterSpacing?: string
	bodyFont?: string,
	scale?: number
}

interface WithRhythm {
	root: object,
	h1?: object,
	h2?: object,
	h3?: object,
	h4?: object,
	h5?: object,
	h6?: object
}

export const scales = {
	goldenRatio: 1.618,
	perfectFifth: 1.5,
	augmentedFourth: 1.414,
	perfectFourth: 1.333,
	minorThird: 1.2,
	majorSecond: 1.125,
}

export function toString(styleObj: object = {}): string {
	return Object.keys(styleObj).reduce((acc, key) => {
		acc += `${key}: ${styleObj[key]};`
		return acc
	}, '')
}

function withRhythm({
	baseFontSize = '16px',
	baseLineHeight = 1.5,
	basefontWeight = 400,
	headerFontWeight = 600,
	baseLetterSpacing = '-.005em',
	headerLetterSpacing = '-.025em',
	headingFont = FONT_STACK,
	bodyFont = FONT_STACK,
	scale = scales.perfectFourth,
}: WithRhythmArgs = {}): WithRhythm {
	const font = parseFont(baseFontSize)
	const headerLineHeight = baseLineHeight * 0.8

	const headers = HEADERS.reduce((acc, current, index) => {
		const headerNum = index + 1
		const currentScale = Math.pow(scale, headerNum)
		const fontValue = (font.value * currentScale).toFixed(2)

		acc[current] = {
			'font-family': headingFont,
			'font-weight': headerFontWeight,
			'letter-spacing': headerLetterSpacing,
			'font-size': `${fontValue}${font.unit}`,
			'line-height': headerLineHeight,
			margin: `0 0 ${font.value * headerNum}${font.unit} 0 `,
		}

		return acc
	}, {})

	return Object.assign(
		{
			root: {
				'font-smoothing': 'antialiased',
				'text-rendering': 'optimizeLegibility',
				'font-style': 'normal',
				'font-family': bodyFont,
				'line-height': baseLineHeight,
				'font-weight': basefontWeight,
				'letter-spacing': baseLetterSpacing,
			},
		},
		headers,
	)
}

export default withRhythm
