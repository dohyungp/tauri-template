import type { SimplePaletteColorOptions } from "@mui/material"

interface ICustomPalette extends SimplePaletteColorOptions {
	main: string
}

declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		contained: true
		outlined: true
		text: true
	}
}
