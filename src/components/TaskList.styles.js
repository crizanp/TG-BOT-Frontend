import styled, { keyframes, css } from "styled-components"; // Import css from styled-components
import { GiClockwork } from "react-icons/gi";

// Keyframe for slide-in animation from the top right
const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Keyframe for fade-out animation
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const FloatingMessageContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${({ type }) => (type === 'success' ? '#4caf50' : '#f44336')}; /* Green for success, red for error */
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${slideIn} 0.5s ease-out forwards, ${({ $fade }) => $fade && css`${fadeOut} 0.5s ease-out forwards`};

  @media (max-width: 480px) {
    width: 50%;
    right: 5%;
    top: 10px;
    padding: 10px 15px;
  }
`;

export const MessageText = styled.div`
  font-size: 16px;
  margin-right: 10px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const CloseButton = styled.div`
  cursor: pointer;
  font-size: 20px;
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  color: white;
  padding-bottom: 80px;
  font-family: "Orbitron", sans-serif;
  min-height: 87vh;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    padding-bottom: 80px;
  }
`;
// Define the spin animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled component for the loading spinner
export const LoadingSpinner = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TaskCategory = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #fffbfb0a;
  padding: 20px;
  margin-bottom: 20px;
`;

export const TaskTitle = styled.h3`
  color: #c2beb9;
  margin-bottom: 20px;
  margin-top: 4px;
  /* text-align: center; */
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
`;

export const CoinLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  margin-bottom: 10px;
  font-size: 64px;
`;
export const PointsDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 85px;
`;

export const PointsDisplay = styled.div`
  font-size: 50px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  animation: ${({ $animate }) =>
    $animate &&
    css`
      ${pointsAnimation} 1s ease-in-out;
    `};
`;

export const DollarIcon = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 10px;
`;

export const CoinText = styled.div`
  text-align: center;
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const TaskItem = styled.div`
  background-color: #1e1e1e;
  padding: 15px;
  margin: 10px 0;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
  }

  ${({ $completed }) =>
    $completed &&
    `
    background-color: #2e7d32;
    cursor: default;
    &:hover {
      transform: none;
      box-shadow: none;
    }
  `}

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const TaskDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TaskItemTitle = styled.div`
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 5px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const TaskPoints = styled.div`
  background-color: #ff9800;
  color: white;
  padding: 8px 12px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 16px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const TaskIcon = styled.div`
  font-size: 20px;
  color: #ffffff;

  ${({ $completed }) =>
    $completed &&
    `
    font-size: 16px;
    color: #ffffff;
    background-color: #2e7d32;
    padding: 8px 12px;
    border-radius: 12px;
  `}

  @media (max-width: 480px) {
    font-size: 18px;

    ${({ $completed }) =>
      $completed &&
      `
      font-size: 14px;
    `}
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 480px) {
    align-items: center;
  }
`;

export const Modal = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 20px 20px 0 0;
  width: 100%;
  max-width: 400px;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 15px 15px 0 0;
  }

  @media (max-width: 480px) {
    padding: 10px;
    border-radius: 10px 10px 0 0;
  }
`;

export const ModalHeader = styled.div`
  font-size: 24px;
  color: #ff9800;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ModalContent = styled.div`
  font-size: 16px;
  color: white;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ModalButton = styled.button`
  background-color: #ff9800;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffb74d;
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 20px;
  }
`;

export const ClaimButton = styled(ModalButton)`
  background-color: green;
  margin-top: 20px;

  &:hover {
    background-color: #66bb6a;
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

export const CloseButtonModel = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  color: white;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ProofInput = styled.input`
  background-color: #333;
  border: 2px solid #ff9800;
  padding: 12px;
  border-radius: 8px;
  width: calc(100% - 24px);
  color: white;
  margin-bottom: 20px;
  font-size: 18px;

  &:focus {
    outline: none;
    border-color: #ffb74d;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 16px;
  }
`;

export const PointsContainer = styled.div`
  background-color: #4caf50;
  padding: 10px 20px;
  border-radius: 15px;
  margin-top: 15px;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  position: fixed;
  top: 0;
  z-index: 10;

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 18px;
  }
`;

export const TotalPoints = styled.div`
  font-weight: bold;
`;

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const TimerIcon = styled(GiClockwork)`
  font-size: 32px;
  color: #ff9800;
  animation: ${spinAnimation} 2s linear infinite;
  margin-top: 20px;

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const TimerText = styled.div`
  color: #ff9800;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
// Define the pointsAnimation keyframes
const pointsAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5) rotate(10deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
`;
