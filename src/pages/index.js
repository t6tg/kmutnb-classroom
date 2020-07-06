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
        อีกทั้งเว็บนี้จะไม่มีการเก็บรหัสนักศึกษาที่เข้าใช้งาน
        แต่ฟอร์มรับรหัสนักศึกษามีไว้เพื่อจำแนกคณะและสาขา <br />
        ติดต่อ : support@thanawatgulati.com
      </p>
    </div>
  );
}
