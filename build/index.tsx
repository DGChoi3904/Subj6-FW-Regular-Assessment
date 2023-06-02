import * as React from 'react';
import * as ReactDOM from 'react-dom/client'

const App: React.FC = () => {
  return <div>Hello, World!</div>;
};
ReactDOM.createRoot(document.getElementById("root")!).render(
<React.StrictMode>
  <App />
</React.StrictMode>
);