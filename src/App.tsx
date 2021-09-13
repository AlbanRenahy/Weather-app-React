import React from "react";

import SearchBox from "./components/Searchbox";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div>
      <main>
        <SearchBox />
        <Weather />
      </main>
    </div>
  );
};

export default App;
