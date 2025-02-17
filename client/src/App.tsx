import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";

// Get the base path from the environment or use the repository name for GitHub Pages
const basePath = import.meta.env.BASE_URL || "/gccp-qa-platform";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  useTheme(); // Initialize theme system
  return <>{children}</>;
}

function Router() {
  return (
    <WouterRouter base={basePath}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;