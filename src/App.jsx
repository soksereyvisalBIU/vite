// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import "./App.css";
import CVOne from "./components/template/CVOne";
import Master from "./layouts/Master";
import CreateCV from "./screens/CreateCV";

export default function App() {
  return (
    <>
      <Master>
        <CreateCV></CreateCV>
      </Master>
    </>
  );
}
