import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContactFormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const ContactFormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const ContactForm = styled.form`
  max-width: 700px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 100px 32px;
  border-radius: 4px;

  @media screen and (max-width: 700px) {
    padding: 32px 32px;
  }
`;

export const ContactFormH1 = styled.h1`
  margin-bottom: 40px;
  color: #000000;
  font-size: 40px;
  font-weight: 400;
  text-align: center;
`;

export const ContactFormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 18px;
  color: #000000;
`;
export const ContactFormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;

export const ContactFormTextMessageInput = styled.input`
  padding: 40px 40px;
  margin-bottom: 40px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;

export const ContactFormButton = styled.button`
  background: #faed64;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #000000;
  font-size: 20px;
  cursor: pointer;
`;
// export const Text = styled.span`
//   text-align: center;
//   margin-top: 24px;
//   color: #fff;
//   font-size: 14px;
// `;
