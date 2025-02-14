import { observable } from '@legendapp/state';

export const previewState = observable({
	language: 'Latin',
	size: 32,
	italic: false,
	lineHeight: 2,
	letterSpacing: 2,
	transparency: 100,
	color: '#000000',

	text: 'Sphinx of black quartz, judge my vow.',
});

// Verify that the color is a valid hex code
const COLOR_REGEX = /^#[a-fA-F0-9]{0,6}$/;
previewState.color.onChange((e) => {
	if (!COLOR_REGEX.test(e.value)) previewState.color.set(e.getPrevious());
});

export const variableState = observable<Record<string, number | undefined>>({});
export const fontVariation = observable('');

// Generate font-variation-settings string from axes object e.g. "wght" 400, "wdth" 100
const createFontVariation = (axes: Record<string, number | undefined>) => {
	let fontVariation = '';
	for (const [key, value] of Object.entries(axes)) {
		if (value !== undefined) fontVariation += `"${key}" ${value}, `;
	}
	// Remove trailing comma and space
	return fontVariation.slice(0, -2);
};

// Update fontVariation when variableState changes
variableState.onChange(() => {
	fontVariation.set(createFontVariation(variableState.get()));
});
