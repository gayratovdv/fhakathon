import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 90%;
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
  position: relative;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background-color: ${(props) =>
    props.status === "TEKSHIRILDI"
      ? "green"
      : props.status === "TEKSHIRILMAGAN"
      ? "orange"
      : "red"};
  cursor: pointer;

  &:hover .dropdown {
    display: block;
  }
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  z-index: 1;
  min-width: 120px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 5px;
`;

const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  color: #333;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

// Main component
const Homework = () => {
  const [students, setStudents] = useState([
    {
      name: "Botirov Muhammadali",
      status: "TEKSHIRILMAGAN",
      mark: "-",
      comment: "-",
    },
    {
      name: "Hasanov Zubayrxon",
      status: "YUKLANMAGAN",
      mark: "-",
      comment: "-",
    },
    {
      name: "Jaloliddin Inomov",
      status: "YUKLANMAGAN",
      mark: "-",
      comment: "-",
    },
    {
      name: "Jaloliddin Inomov",
      status: "TEKSHIRILDI",
      mark: 100,
      comment: "-",
    },
    {
      name: "Mirzohidov Umidjon",
      status: "TEKSHIRILMAGAN",
      mark: 0,
      comment: "-",
    },
    { name: "Safarov Sanjar", status: "YUKLANMAGAN", mark: "-", comment: "-" },
    {
      name: "Samir Sadullayev",
      status: "YUKLANMAGAN",
      mark: "-",
      comment: "-",
    },
    { name: "Sherzod Skandaro", status: "TEKSHIRILDI", mark: 75, comment: "-" },
    {
      name: "Suxrob Sadullayev",
      status: "TEKSHIRILMAGAN",
      mark: "-",
      comment: "-",
    },
    {
      name: "Elshod Turgunjonov",
      status: "YUKLANMAGAN",
      mark: "-",
      comment: "-",
    },
  ]);

  const updateStatus = (index, newStatus) => {
    const updatedStudents = [...students];
    updatedStudents[index].status =
      newStatus === "DENIED" ? "TEKSHIRILMAGAN" : newStatus;
    setStudents(updatedStudents);
  };

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
                  <Status status={student.status}>
                    {student.status}
                    <Dropdown className="dropdown">
                      {["TEKSHIRILDI", "TEKSHIRILMAGAN", "YUKLANMAGAN"].map(
                        (status) => (
                          <DropdownItem
                            key={status}
                            onClick={() => updateStatus(index, status)}
                          >
                            {status}
                          </DropdownItem>
                        )
                      )}
                    </Dropdown>
                  </Status>
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
