import React from "react";
import StudentCard from "./components/StudentCard";
import CodeList from "./components/CodeList";

export default function App() {
  return (
    <div className="container mx-auto mt-8">
      <StudentCard />
      <CodeList />
    </div>
  );
}
