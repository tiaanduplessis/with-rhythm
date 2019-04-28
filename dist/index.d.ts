interface WithRhythmArgs {
    baseFontSize?: string;
    baseLineHeight?: number;
    basefontWeight?: number;
    headerFontWeight?: number;
    baseLetterSpacing?: string;
    headingFont?: string;
    headerLetterSpacing?: string;
    bodyFont?: string;
    scale?: number;
}
interface WithRhythm {
    root: object;
    h1?: object;
    h2?: object;
    h3?: object;
    h4?: object;
    h5?: object;
    h6?: object;
}
export declare const scales: {
    goldenRatio: number;
    perfectFifth: number;
    augmentedFourth: number;
    perfectFourth: number;
    minorThird: number;
    majorSecond: number;
};
export declare function toString(styleObj?: object): string;
declare function withRhythm({ baseFontSize, baseLineHeight, basefontWeight, headerFontWeight, baseLetterSpacing, headerLetterSpacing, headingFont, bodyFont, scale, }?: WithRhythmArgs): WithRhythm;
export default withRhythm;
