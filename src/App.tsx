import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout";
import ResourcesPage from "./pages/resources";
import LessonPlanner from "./pages/lesson-planner";
import ChatPage from "./pages/chat";
import NotFound from "./pages/NotFound";
import { BottomNav } from "./components/blocks/bottom-nav";

export default function App() {
  document.documentElement.classList.add('dark');

  return (
    <div className="bg-[#020617] min-h-screen">
      <Routes>
        <Route element={<Layout showHeader={false} showSidebar={false} showFooter={false} />}>
          <Route path="/" element={<Navigate to="/resources" replace />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/lesson-planner" element={<LessonPlanner />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <BottomNav />
    </div>
  );
}