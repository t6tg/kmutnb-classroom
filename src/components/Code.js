import React from "react";

export default function Code(props) {
  return (
    <div className="p-4 mt-4">
      {props.data.map((r) => (
        <div className="w-full shadow-xl grid grid-cols-2 border border-gray-700 rounded-lg p-2 mt-2">
          <div>
            {console.log(r)}
            <h1 className="text-xl">
              วิชา : <b>{r.SName}</b>
            </h1>
            <h1 className="text-md">
              เซคที่รับ : <b>{r.Section}</b>
            </h1>
            <h1 className="text-md">
              ภาควิชา : <b>{r.SDepart}</b>
            </h1>
          </div>
          <div>
            รหัส Classroom
            <b>
              <h1 className="text-2xl">{r.Classroom}</h1>
            </b>
          </div>
        </div>
      ))}
    </div>
  );
}
