import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OriginStoryStudio from "./pages/OriginStoryStudio";
import OriginStoryThankYou from "./pages/OriginStoryThankYou";
import DreamClientSprint from "./pages/DreamClientSprint";
import Blog from "./pages/Blog";
import Application from "./pages/Application";
import FullApplication from "./pages/FullApplication";
import NextSteps from "./pages/NextSteps";
import Order from "./pages/Order";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/origin-story-studio" element={<OriginStoryStudio />} />
          <Route path="/origin-story-thank-you" element={<OriginStoryThankYou />} />
          <Route path="/dream-client-sprint" element={<DreamClientSprint />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/application" element={<Application />} />
          <Route path="/full-application" element={<FullApplication />} />
          <Route path="/next-steps" element={<NextSteps />} />
          <Route path="/order" element={<Order />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
