import React from "react";
import { Link } from "react-router-dom";

export default function AddButton() {
  return (
    <div className="p-4">
      <Link to="/add">
        <button className="bg-green-500 w-full py-3 rounded-lg text-white ml-1 shadow-lg">
          เพิ่มรหัส Classroom เข้าระบบ
        </button>
      </Link>
    </div>
  );
}
