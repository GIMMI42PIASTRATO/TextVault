import DocumentComponent from "./DocumentComponent";

export default function RecentsNotes() {
	return (
		<div>
			<h3 className="mt-10 font-semibold">Recent Notes</h3>
			<div className="grid grid-cols-1 gap-4 mt-4">
				<DocumentComponent
					title="Note 1"
					content="This is the content of note 1"
				/>
				<DocumentComponent
					title="What is TextVault?"
					content="TextVault is a secure note-taking app that allows you to store your notes securely and access them from anywhere in the world."
				/>
			</div>
		</div>
	);
}
