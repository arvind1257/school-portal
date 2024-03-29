import React,{useState} from "react";
import { Routes,Route,BrowserRouter} from "react-router-dom"
import App from "./App"
import Navbar from "./components/NavBar/Navbar";
import Home from "./Pages/Dashboard/Home";
import Attendance from "./Pages/Attendance/Attendance"
import Error404 from "./Pages/Error404";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Leave from "./Pages/Leave/Leave";
import Assessments from "./Pages/Assessments/Assessments";
import Teacher from "./Pages/Teacher/Teacher";
import Settings from "./Pages/Settings/Settings";
import Marks from "./Pages/Marks/Marks";
import Bonafide from "./Pages/Bonafide/Bonafide";
import StudentInfo from "./Pages/Student/StudentInfo";
import TeacherInfo from "./Pages/Teacher/TeacherInfo";
import StudentList from "./Pages/Student/StudentList";
import PostStudent from "./Pages/Attendance/PostStudent";
import PostTeacher from "./Pages/Attendance/PostTeacher";
import ClassMessage from "./Pages/ClassMessage/ClassMessage";
import Timetable from "./Pages/Time table/timetable";
import NewAssessment from "./Pages/Assessments/NewAssessment"
import Exam from "./Pages/Exam/Exam"
import AddStudent from "./Pages/Student/AddStudent";
import AddTeacher from "./Pages/Teacher/AddTeacher";
import Fees from "./Pages/Fees/Fees";
import AddExam from "./Pages/Exam/AddExam";
import UploadMarks from "./Pages/Marks/UploadMarks";
import EditMarks from "./Pages/Marks/EditMarks";
import CreateClass from "./Pages/Class/CreateClass";
import ClassInfo from "./Pages/Class/ClassInfo";
import ViewBonafide from "./Pages/Bonafide/ViewBonafide";
import UpdateLeave from "./Pages/Leave/UpdateLeave";
import AddTimeTable from "./Pages/Time table/AddTimeTable";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import Profile from "./Pages/Profile/Profile"
import Spotlight from "./Pages/Spotlight/Spotlight";
import Loading from "./Pages/Loading/Loading";

const AllRoutes = () => {

    const [status,setStatus] = useState(false);
    console.log(status);

    return(
        <BrowserRouter>
            <Navbar/>
            <SideNavBar/>
            <Loading status={status} />
            <Routes>
                <Route path='/' element={<App status={status} onLoading={(status1)=>setStatus(status1)} />}/>
                <Route path='/Home' element={<Home status={status} onLoading={(status1)=>setStatus(status1)} />}/>
                <Route path='/Attendance' element={<Attendance status={status} onLoading={(status1)=>setStatus(status1)} />}/>
                <Route path='/Leave' element={<Leave/>}/>
                <Route path='/ContactUs' element={<ContactUs/>}/>                
                <Route path='/Assessment' element={<Assessments status={status} onLoading={(status1)=>setStatus(status1)} />}/>
                <Route path='/PostAssessment' element={<NewAssessment/>}/>
                <Route path='/Marks' element={<Marks/>}/>
                <Route path='/Teachers' element={<Teacher status={status} onLoading={(status1)=>setStatus(status1)} />}/>
                <Route path='/Setting' element={<Settings/>}/>
                <Route path='/Bonafide' element={<Bonafide status={status} onLoading={(status1)=>setStatus(status1)} />}/>
                <Route path='/StudentInfo' element={<StudentInfo/>}/>
                <Route path='/AddStudent' element={<AddStudent/>}/>
                <Route path='/StaffInfo' element={<TeacherInfo/>}/>
                <Route path='/StudentList' element={<StudentList/>}/>
                <Route path='/PostStudentAttendance' element={<PostStudent/>}/>
                <Route path='/PostTeacherAttendance' element={<PostTeacher/>}/>
                <Route path='/ClassMessage' element={<ClassMessage status={status} onLoading={(status1)=>setStatus(status1)} />}/>
                <Route path='/timetable' element={<Timetable status={status} onLoading={(status1)=>setStatus(status1)} />}/> 
                <Route path='*' element={<Error404/>}/>
                <Route path='/Exam' element={<Exam status={status} onLoading={(status1)=>setStatus(status1)} />}/>
                <Route path='/AddStaff' element={<AddTeacher/>}/>
                <Route path='/Payment' element={<Fees/>}/>
                <Route path='/AddSchedule' element={<AddExam/>} />
                <Route path='/UploadMarks' element={<UploadMarks/>} />
                <Route path='/EditMarks' element={<EditMarks/>} />
                <Route path='/CreateClass' element={<CreateClass/>} />
                <Route path='/ClassInfo' element={<ClassInfo/>} />
                <Route path='/ViewBonafide' element={<ViewBonafide/>} />
                <Route path='/PostLeave' element={<UpdateLeave/>}/>
                <Route path='/AddTimeTable' element={<AddTimeTable/>}/>
                <Route path='/Profile' element={<Profile/>} />
                <Route path='/Spotlight' element={ <Spotlight/> }/>
                
            </Routes>
        </BrowserRouter>
    )
}
export default AllRoutes;