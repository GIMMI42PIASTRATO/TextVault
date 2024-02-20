// components
import TextArea from "./pages/write/TextArea";
import Sidebar from "./components/Sidebar/Sidebar";

// types
import { FC } from "react";

const App: FC = () => {
	return (
		<>
			<TextArea />
			<Sidebar />
		</>
	);
};

export default App;
