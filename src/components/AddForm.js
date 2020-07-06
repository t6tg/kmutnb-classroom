import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddForm() {
  const [SName, setSName] = useState("");
  const [SID, setSID] = useState("");
  const [SYear, setSYear] = useState("");
  const [SDepart, setSDepart] = useState("");
  return (
    <form className="w-full grid grid-cols-1 xl:grid-cols-4 gap-4">
      <div>
        <label>ชื่อวิชา :</label>
        <input
          className="border border-gray-400 p-2 w-full"
          type="text"
          placeholder="Computer Programming"
          onChange={(e) => setSName(e.target.value)}
        />
      </div>
      <div>
        <label>รหัสวิชา :</label>
        <input
          className="border border-gray-400 p-2 w-full"
          type="text"
          placeholder="04062378"
          onChange={(e) => setSID(e.target.value)}
        />
      </div>
      <div>
        <label>รหัสปี (หากมีมากกว่า 1 ใหม่ใส่ 61-62-63) :</label>
        <input
          className="border border-gray-400 p-2 w-full"
          type="text"
          placeholder="61"
          onChange={(e) => setSYear(e.target.value)}
        />
      </div>
      <div>
        <label>สาขา (ใช้เป็นตัวย่อ หากรับทุกสาขาให้ใส่คำว่า ALL) :</label>
        <input
          className="border border-gray-400 p-2 w-full"
          type="text"
          placeholder="CS"
          onChange={(e) => setSDepart(e.target.value)}
        />
      </div>
      <button className="p-2 bg-green-600 text-white rounded-lg">ยืนยัน</button>
      <Link to="/" className="p-2 bg-red-800 text-white rounded-lg text-center">
        ยกเลิก
      </Link>
    </form>
  );
}
