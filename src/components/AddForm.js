import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";

export default class AddForm extends Component {
  state = { SName: "", SID: "", SYear: "", SDepart: "", Classroom: "" };
  AddData = () => {
    const db = firebase.firestore();
    db.collection("subject")
      .doc(`${this.state.SYear}${this.state.SDepart}-${this.state.SID}`)
      .set({
        SName: this.state.SName,
        SID: this.state.SID,
        SYear: this.state.SYear,
        SDepart: this.state.SDepart,
        Classroom: this.state.Classroom,
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  render() {
    return (
      <div className="w-full grid grid-cols-1 xl:grid-cols-4 gap-4">
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
          <label>รหัสปี :</label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            placeholder="61"
            onChange={(e) => this.setState({ SYear: e.target.value })}
          />
        </div>
        <div>
          <label>สาขา (ใช้เป็นเลข 4 หลัก คณะ + ภาควิชา) :</label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            placeholder="0406 04 = คณะวิทย์ , 06 = ภาคคอม"
            onChange={(e) => this.setState({ SDepart: e.target.value })}
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
        <button
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
