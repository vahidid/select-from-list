import React from 'react';
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Home from "./Components/Home";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Home />
			</Provider>
		</ThemeProvider>
	);
}

export default App;
