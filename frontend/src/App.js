import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ErrorBoundary from "./components/ErrorBoundary";
import { Toaster } from "./components/ui/toaster";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const PoolPlaster = lazy(() => import("./pages/PoolPlaster"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-[#0a0f1a] flex items-center justify-center">
    <div className="animate-pulse">
      <div className="flex gap-1 mb-2 justify-center">
        <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
        <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
      </div>
      <span className="text-white text-sm tracking-[0.3em]">LOADING...</span>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <div className="App min-h-screen flex flex-col">
        <BrowserRouter>
          <Header />
          <main className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pool-plaster" element={<PoolPlaster />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppButton />
          <Toaster />
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  );
}

export default App;
