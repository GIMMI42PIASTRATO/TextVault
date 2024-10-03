import { schema } from "@/editor/schema";
import { insertOrUpdateBlock } from "@blocknote/core";
import { TriangleAlert } from "lucide-react";

const insertAlert = (editor: typeof schema.BlockNoteEditor) => ({
	title: "Alert",
	onItemClick: () => {
		insertOrUpdateBlock(editor, {
			type: "alert",
		});
	},
	aliases: [
		"alert",
		"notification",
		"emphasize",
		"warning",
		"error",
		"info",
		"success",
	],
	group: "Other",
});
