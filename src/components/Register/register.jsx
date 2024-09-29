import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // React Router'dan useNavigate import qilamiz
import Photo from "../../assets/image 18.png";

// Styled Components
const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 60%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    box-shadow: none;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 1rem;
`;

const WelcomeText = styled.h1`
  font-size: 24px;
  color: #3f2c8a;
  margin-bottom: 3rem;
  text-align: center;
  font-family: "Arial", sans-serif;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 300px;
  padding: 20px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  color: #333;
`;

const EyeIcon = styled.span`
  position: absolute;
  right: 12px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 60%;
  height: 40px;
  border: none;
  border-radius: 15px;
  background-color: #ff7e67;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #ff9470;
  }
`;

const AstronautImage = styled.img`
  margin-left: 2rem;
  width: 300px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`;

// React Component
const LoginForm = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // useNavigate hook'ini chaqiramiz

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateInputs = () => {
    const phonePattern = /^\+998\d{9}$/;
    const isPhoneValid = phonePattern.test(phone);
    const isPasswordValid = password.length >= 6;

    // Agar ma'lumotlar to'g'ri bo'lsa, /home ga o'tkazamiz
    if (isPhoneValid && isPasswordValid) {
      navigate("/home");
    } else {
      if (!isPhoneValid) {
        alert("To'g'ri telefon raqamini kiriting!");
      }
      if (!isPasswordValid) {
        alert("Parol kamida 6 ta belgidan iborat bo'lishi kerak!");
      }
    }
  };

  return (
    <RegisterContainer>
      <FormContainer>
        <Left>
          <Logo
            src="https://media.licdn.com/dms/image/v2/D4D03AQGSDIrnD5j4dQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1687704992224?e=2147483647&v=beta&t=9d9x_S7Hg1agDjBb-k4eD3UdRUmb5Th6rX-XMI-XLuA"
            alt="MARS logo"
          />
          <WelcomeText>Xush kelibsiz</WelcomeText>
          <InputWrapper>
            <Input
              type="tel"
              placeholder="+998"
              value={phone}
              onChange={handlePhoneChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Parol"
              value={password}
              onChange={handlePasswordChange}
            />
            <EyeIcon onClick={togglePasswordVisibility}>
              {showPassword ? "🙈" : "👁️"}
            </EyeIcon>
          </InputWrapper>
          <Button onClick={validateInputs}>Kirish</Button>
        </Left>
        <AstronautImage src={Photo} alt="Astronaut" />
      </FormContainer>
    </RegisterContainer>
  );
};

export default LoginForm;
