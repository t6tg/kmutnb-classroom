import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";

export default class AddForm extends Component {
  state = { SName: "", SID: "", SDepart: "", Classroom: "", section: "" };
  AddData = () => {
    if (
      this.state.SName === "" ||
      this.state.SID === "" ||
      this.state.SDepart === "" ||
      this.state.Classroom === "" ||
      this.state.section === ""
    ) {
      return alert("กรุณากรอกข้อมูลให้ถูกต้อง และ ครบถ้วน");
    }
    document.querySelector("#submit").innerHTML = "Loading....";
    const db = firebase.firestore();
    const subjectRef = db.collection("subject").doc(`${this.state.SID}`);
    subjectRef
      .set({
        SName: this.state.SName,
        SID: this.state.SID,
        SDepart: this.state.SDepart,
        Classroom: this.state.Classroom,
        Section: this.state.section,
      })
      .then(function () {
        alert("ลงทะเบียนสำเร็จ");
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log(`เกิดข้อผิดพลาด ${error}`);
      });
  };

  render() {
    return (
      <div className="w-full grid grid-cols-1 gap-4">
        <div>
          <label>ชื่อวิชา :</label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            placeholder="Computer Programming"
            onChange={(e) => this.setState({ SName: e.target.value })}
          />
        </div>
        <div>
          <label>รหัสวิชา :</label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            placeholder="04062378"
            onChange={(e) => this.setState({ SID: e.target.value })}
          />
        </div>
        <div>
          <label>ตัวย่อสาขา :</label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            placeholder="CS"
            onChange={(e) => this.setState({ SDepart: e.target.value })}
          />
        </div>
        <div>
          <label>Section (หากมีมากกว่า 1 ให้ใส่ , หรือ -) :</label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            placeholder="1 หรือ 1-4 "
            onChange={(e) => this.setState({ section: e.target.value })}
          />
        </div>
        <div>
          <label>รหัส Classroom</label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            placeholder="xxxxxx"
            onChange={(e) => this.setState({ Classroom: e.target.value })}
          />
        </div>
        <p className="text-red-800 text-center">
          หากในวิชานี้มีการสอนหลายภาควิชา ให้เพิ่มตามจำนวนครั้งที่มี Sec
          ที่เปิดโดยการเปลียน ที่รหัสสาขา
        </p>
        <button
          id="submit"
          className="p-2 bg-green-600 text-white rounded-lg"
          onClick={this.AddData}
        >
          ยืนยัน
        </button>
        <Link
          to="/"
          className="p-2 bg-red-800 text-white rounded-lg text-center"
        >
          ยกเลิก
        </Link>
      </div>
    );
  }
}
