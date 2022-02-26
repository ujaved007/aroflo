import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeProvider } from "styled-components";
import Theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles.styles";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
