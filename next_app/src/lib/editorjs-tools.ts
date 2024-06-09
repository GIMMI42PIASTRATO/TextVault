import { BlockToolConstructable } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Link from "@editorjs/link";
import RawTool from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";
import Image from "@editorjs/image";
import Checklist from "@editorjs/checklist";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Quote from "@editorjs/quote";

export const editorJsTools = {
	header: {
		class: Header as unknown as BlockToolConstructable,
		inlineToolbar: true,
		config: {
			placeholder: "Heading",
			levels: [1, 2, 3],
			defaultLevel: 1,
		},
	},
};

export const defaultValue = {
	time: 1552744582951,
	blocks: [
		{
			id: "oUq2g_tl8y",
			type: "header",
			data: {
				text: "Editor.js",
				level: 2,
			},
		},
		{
			id: "zbGZFPM-iI",
			type: "paragraph",
			data: {
				text: "This is a block-styled editor. You can return a paragraph, preformatted text, or a heading.",
			},
		},
	],
	version: "2.8.1",
};
