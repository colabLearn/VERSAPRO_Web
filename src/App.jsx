// import React from 'react';
import { Suspense } from 'react';
import Routes from "./AppRoutes";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-2xl">Loading...</div></div>}>
          <Routes />
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
