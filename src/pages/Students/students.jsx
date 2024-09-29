import React, { useState, useEffect } from 'react';
import './students.css';

const StudentCard = () => {
  const initialStudents = [
    { name: 'Botirov Muhammadali', league: 'Coder', lastVisit: '26.06.2024', total: 2095, today: 2, june26: 'B' },
    { name: 'Hasanov Zubayrxon', league: 'Coder', lastVisit: '26.06.2024', total: 1053, today: 1, june26: 'B' },
    { name: 'Jaloliddin Inomov', league: 'Coder', lastVisit: '26.06.2024', total: 1433, today: 1, june26: 'B' },
    { name: 'Jaloliddin Inomov', league: 'Ligas.null', lastVisit: 'Нет входа в Space', total: 1, today: 1, june26: 'Y' },
    { name: 'Mirzohidov Umidjon', league: 'Hacker', lastVisit: '26.06.2024', total: 975, today: 1, june26: 'B' },
    { name: 'Safarov Sanjar', league: 'Coder', lastVisit: '26.06.2024', total: 996, today: 1, june26: 'B' },
    { name: 'Samir Sadullayev', league: 'Geymer', lastVisit: '10.06.2024', total: 2413, today: 1, june26: 'B' },
    { name: 'Sherzod Skandarov', league: 'Coder', lastVisit: '26.06.2024', total: 1029, today: 1, june26: 'B' },
    { name: 'Suxrob Sadullayev', league: 'Coder', lastVisit: '10.06.2024', total: 1193, today: 1, june26: 'B' },
    { name: 'Elshod Turgunjonnov', league: 'Geymer', lastVisit: '26.06.2024', total: 1252, today: 1, june26: 'B' }
  ];

  const initialCoinLimit = 500;
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem('students');
    return savedStudents ? JSON.parse(savedStudents) : initialStudents;
  });

  const [coinLimit, setCoinLimit] = useState(() => {
    const savedLimit = localStorage.getItem('coinLimit');
    return savedLimit ? parseInt(savedLimit) : initialCoinLimit;
  });

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
    localStorage.setItem('coinLimit', coinLimit.toString());
  }, [students, coinLimit]);

  const updateTotalAndToday = (index, value) => {
    if (value > 0 && coinLimit - value < 0) {
      alert('Not enough coins in the limit!');
      return;
    }

    setStudents((prevStudents) =>
      prevStudents.map((student, i) =>
        i === index
          ? {
              ...student,
              total: student.total + value,
              today: student.today + value
            }
          : student
      )
    );

    if (value > 0) {
      setCoinLimit(prevLimit => prevLimit - value);
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleChange = (index, event) => {
    const newValue = event.target.value;
    setStudents((prevStudents) =>
      prevStudents.map((student, i) =>
        i === index ? { ...student, june26: newValue } : student
      )
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Front-001</h2>
        <button className="refresh-btn" onClick={handleRefresh} style={{cursor: "pointer"}}>Yangilash</button>
        <span className="limit">Coin Limit {coinLimit}</span>
      </div>
      <table className="student-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Liga</th>
            <th>Oxirga marta kirilgan</th>
            <th>Hammasi</th>
            <th>Bugun</th>
            <th>26 iyun</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}. {student.name}</td>
              <td>{student.league}</td>
              <td>{student.lastVisit}</td>
              <td>{student.total}</td>
              <td>{student.today}</td>
              <td>
                <select
                  value={student.june26}
                  onChange={(e) => handleChange(index, e)}
                  className="custom-select"
                >
                  <option value="B">B</option>
                  <option value="Y">Y</option>
                </select>
              </td>
              <td className="button-group">
                <button className="coin-btn minus" onClick={() => updateTotalAndToday(index, -2)}>-2</button>
                <button className="coin-btn plus" onClick={() => updateTotalAndToday(index, 1)}>1</button>
                <button className="coin-btn plus" onClick={() => updateTotalAndToday(index, 3)}>3</button>
                <button className="coin-btn plus" onClick={() => updateTotalAndToday(index, 5)}>5</button>
                <button className="coin-btn plus" onClick={() => updateTotalAndToday(index, 10)}>10</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentCard;
