import { FONT_UNIT_REGEX } from './constants'

interface Font {
    value: number,
    unit: string
}

export default function parseFont (font: string): Font {
  return {
    value: Number.parseFloat(font),
    unit: FONT_UNIT_REGEX.exec(font)[0] || ''
  }
}
