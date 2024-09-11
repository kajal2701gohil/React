import React, { useEffect, useState } from "react";

interface Student {
  id: number;
  name: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  courses: string[];
  gpa: number;
  image?: string;
}

const APIdata: React.FC = () => {
  const [studentDetails, setStudentDetails] = useState<Student[]>([]);
  useEffect(() => {
    fetch("https://freetestapi.com/api/v1/students")
      .then((res) => res.json())
      .then((data) => setStudentDetails(data));
  }, []);

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Courses</th>
            <th>GPA</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {studentDetails?.map((x: Student, i: number) => {
            return (
              <tr key={i}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.age}</td>
                <td>{x.gender}</td>
                <td>{x.email}</td>
                <td>{x.phone}</td>
                <td>{x.courses.join(", ")}</td>
                <td>{x.gpa}</td>
                <td>
                  <img src={x.image} alt="img" width={50} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default APIdata;
