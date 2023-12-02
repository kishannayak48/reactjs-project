import React from "react";
import students from "./student"
import StudInfo from "./studentInfo";
function studentAbout(){
    return students.student.map((studentData =>
        {
            return <StudInfo sData={studentData}/>
        }))
}export default studentAbout;