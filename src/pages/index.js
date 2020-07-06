import React from "react";
import StudentCard from "../components/StudentCard";
import AddButton from "../components/AddButton";

export default function Index() {
  return (
    <div>
      <StudentCard />
      <AddButton />
      <p className="text-sm text-center p-4">
        เว็บไซต์นี้ มิได้มีส่วนเกี่ยวข้องกับทางมหาวิทยาลัยโดยตรง
        สร้างขึ้นเพื่อความสะดวกของนักศึกษา ในช่วงการแพร่ระบาด Covid-19
        <br />
        อีกทั้งขอความกรุณาไม่นำข้อมูลอันเป็นเท็จลงสู่ระบบคอมพิวเตอร์
        <br />
        ติดต่อ : support@thanawatgulati.com
      </p>
    </div>
  );
}
