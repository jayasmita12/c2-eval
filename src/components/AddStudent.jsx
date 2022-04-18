import { useState } from "react";
import { ShowStudents } from "./ShowStudents";


export const AddStudent = () => {
    const [studentData , setStudentData] = useState({
        first_name :"",
        last_name:"",
        email:"",
        gender:"",
        age:"",
        tenth_score:"",
        twelth_score:"",
        preferred_branch:""
    })

    const datachange=(e)=>{
        const {className,value}= e.target
        setStudentData({
            ...studentData,
            [className]:value
        })
    }
    const checkfunc =(e)=>{
        // const {className,value}= e.target
        setStudentData({
            ...studentData,
            [e.target.name]:e.target.checked
        })
    }

    const submitData= async(e)=>{
        e.preventDefault()
        try{
            let res  = await fetch("http://localhost:8080/students",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(studentData)
            })
            let data = await res.json()
            console.log(data)

        }
        catch(err){
            console.log(err)
        }
    }

    return (
      <form className="addstudent">
        <div>
          Firstname:{" "}
          <input
            type="text"
            // name="first_name"
            className="first_name"
            placeholder="enter first name"
            onChange={datachange}
            value={studentData.first_name}
          />
        </div>
        <div>
          {" "}
          Last Name:
          <input
            type="text"
            // name="last_name"
            className="last_name"
            placeholder="enter last name"
            onChange={datachange}
            value={studentData.last_name}

          />
        </div>
        <div>
          {" "}
          Email:
          <input
            type="email"
            // name="email"
            className="email"
            placeholder="enter email"
            onChange={datachange}
            value={studentData.email}
          />
        </div>
  
        <div>
          Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
          <div>
            Male
            <input
              name="gender"
              className="male"
              type="radio"
              value="male"
              onChange={checkfunc}
              checked={studentData.gender}
            />{" "}
            Female{" "}
            <input
              name="gender"
              className="female"
              type="radio"
              value="female"
              onChange={checkfunc}
              checked={studentData.gender}
            />
          </div>
        </div>
        <div>
          Age{" "}
          <input
            type="number"
            // name="age"
            className="age"
            placeholder="enter age"
            onChange={datachange}
            id="age"
            value={studentData.age}
          />
        </div>
        <div>
          Tenth Score:{" "}
          <input
            type="number"
            // name="tenth_score"
            className="tenth_score"
            placeholder="enter 10th score"
            onChange={datachange}
            value={studentData.tenth_score}
          />{" "}
        </div>
        <div>
          Twelth Score:{" "}
          <input
            type="number"
            // name="twelth_score"
            className="twelth_score"
            placeholder="enter 12th score"
            onChange={datachange}
            value={studentData.twelth_score}
          />{" "}
        </div>
        <div>
          <select
            value={studentData.preferred_branch} // select dropdown needs both value and onChange attributes
            // name="preferred_branch"
            className="preferred_branch"
            onChange={datachange}
          >
            <option value="law">law</option>
            <option value="commerce">commerce</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="arts">arts</option>
            <option value="acting">acting</option>
          </select>
        </div>
  
        <input className="submit" onClick={submitData} type="submit" value="Submit" />
        {
          // <div className="error"></div>
          // show this div with proper error before submitting form, if there's anything not provided
          // eg: first name missing, age cannot be greater than 100 etc
        }
        
      </form>
      
    );
  };