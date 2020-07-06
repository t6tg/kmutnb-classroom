import React from "react";

export default function StudentCard() {
  return (
    <div>
      <div className="flex justify-center p-4">
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full block appearance-none leading-normal shadow-lg"
          type="text"
          placeholder="รหัสนักศึกษา 13 หลัก"
        />
        <button className="bg-orange-500 w-2/5 p-3 rounded-lg text-white ml-1 shadow-lg">
          ค้นหา
        </button>
      </div>
    </div>
  );
}
