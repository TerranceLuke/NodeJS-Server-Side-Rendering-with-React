import '../src/styles/master.scss';
import "../src/styles/default.scss";

// This default export is required in a new `pages/_app.js` file.
const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App;