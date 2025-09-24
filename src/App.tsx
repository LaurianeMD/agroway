import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom"; // 👈 utiliser HashRouter
import { Dashboard } from "./components/Dashboard";
import { Marketplace } from "./components/Marketplace";
import { Weather } from "./components/Weather";
import { Messages } from "./components/Messages";
import { Payments } from "./components/Payments";
import { BottomNavigation } from "./components/BottomNavigation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* 👇 remplacer BrowserRouter par HashRouter */}
      <HashRouter>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/payments" element={<Payments />} />
            {/* Catch-all pour éviter les crash */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNavigation />
        </div>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
