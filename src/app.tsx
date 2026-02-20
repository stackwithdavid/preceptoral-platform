import Page3 from "@/pages/build";
import Page2 from "@/pages/learn";
import Page5 from "@/pages/registration";
import Page4 from "@/pages/training";
import Welcome from "@/pages/welcome";

import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";

import QueryClientProvider from "@/providers/queryclient.provider";
import Router from "@/router";
import { ErrorBoundary } from "react-error-boundary";
import AppLayout from "./layout";
import ServerErrorPage from "./pages/500";

const App = () => {
  return (
    <AppLayout>
      <ErrorBoundary FallbackComponent={ServerErrorPage}>
        <QueryClientProvider>
          <Welcome />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Router />
          <Toaster />
        </QueryClientProvider>
      </ErrorBoundary>
    </AppLayout>
  );
};

export default App;
