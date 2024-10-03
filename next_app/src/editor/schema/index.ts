import { BlockNoteSchema, defaultBlockSpecs } from "@blocknote/core";
import { Alert } from "@/editor/blocks/Alert";

export const schema = BlockNoteSchema.create({
	blockSpecs: {
		// Add all the default blocks here
		...defaultBlockSpecs,
		//Add the custom block here
		alert: Alert,
	},
});
