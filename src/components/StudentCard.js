import React, { Component } from "react";
import firebase from "firebase/app";
import Code from "./Code";
import "firebase/firestore";

export default class StudentCard extends Component {
  state = { UID: "", data: null };
  getData = () => {
    const db = firebase.firestore();
    try {
      const subjectRef = db.collection("subject").doc(this.state.UID);
      subjectRef.get().then((docSnapshot) => {
        if (docSnapshot.exists) {
          subjectRef.onSnapshot((doc) => {
            this.setState({ data: doc.data() });
          });
        } else {
          alert(
            "ไม่พบรหัสวิชานี้ในระบบค้นหาของเรา อาจเป็นไปได้ว่า อาจารย์ประจำวิชายังไม่ได้ลงทะเบียนในระบบนี้"
          );
        }
      });
    } catch (error) {
      alert(
        "ไม่พบรหัสวิชานี้ในระบบค้นหาของเรา อาจเป็นไปได้ว่า อาจารย์ประจำวิชายังไม่ได้ลงทะเบียนในระบบนี้"
      );
    }
  };

  render() {
    return (
      <div>
        <div className="flex justify-center p-4">
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full block appearance-none leading-normal shadow-lg"
            type="text"
            placeholder="กรุณากรอกรหัสวิชา"
            onChange={(e) => this.setState({ UID: e.target.value })}
          />
          <button
            className="bg-orange-500 w-2/5 p-3 rounded-lg text-white ml-1 shadow-lg"
            onClick={() => this.getData()}
          >
            ค้นหา
          </button>
        </div>
        {this.state.data !== null && <Code {...this.state.data} />}
      </div>
    );
  }
}
