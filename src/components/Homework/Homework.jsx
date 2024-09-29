import React from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  font-size: 28px;
  color: #333;
  text-align: center;
`;

const HomeworkSection = styled.div`
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: #007bff;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #d1e7ff;
  }
`;

const Status = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background-color: ${(props) =>
    props.status === "Checked"
      ? "green"
      : props.status === "Denied"
      ? "red"
      : "orange"};
`;

// Main component
const Homework = () => {
  const students = [
    {
      name: "Botirov Muhammadali",
      status: "Not Checked",
      mark: "-",
      comment: "-",
    },
    {
      name: "Hasanov Zubayrxon",
      status: "Not Uploaded",
      mark: "-",
      comment: "-",
    },
    {
      name: "Jaloliddin Inomov",
      status: "Not Uploaded",
      mark: "-",
      comment: "-",
    },
    { name: "Jaloliddin Inomov", status: "Checked", mark: 100, comment: "-" },
    { name: "Mirzohidov Umidjon", status: "Denied", mark: 0, comment: "-" },
    { name: "Safarov Sanjar", status: "Not Uploaded", mark: "-", comment: "-" },
    {
      name: "Samir Sadullayev",
      status: "Not Uploaded",
      mark: "-",
      comment: "-",
    },
    { name: "Sherzod Skandaro", status: "Checked", mark: 75, comment: "-" },
    {
      name: "Suxrob Sadullayev",
      status: "Not Checked",
      mark: "-",
      comment: "-",
    },
    {
      name: "Elshod Turgunjonov",
      status: "Not Uploaded",
      mark: "-",
      comment: "-",
    },
  ];

  return (
    <Container>
      <Header>Front-001</Header>
      <HomeworkSection>
        <h2 style={{ textAlign: "center" }}>Bajarilgan Ishlar</h2>
        <Table>
          <thead>
            <tr>
              <th>Studentlar</th>
              <th>Status</th>
              <th>Belgi</th>
              <th>Izoh</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>
                  <Status status={student.status}>{student.status}</Status>
                </td>
                <td>{student.mark}</td>
                <td>{student.comment}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </HomeworkSection>
    </Container>
  );
};

export default Homework;
