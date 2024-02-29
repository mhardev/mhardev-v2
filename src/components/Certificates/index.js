import React from "react"
import { useState } from "react"
import CertificateCard from "../Cards/CertificateCards"
import { certificates } from "../../data/constant"
import styled from "styled-components";

const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 0px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 0px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const ToggleButtonGroup = styled.div`
    display: flex;
    font-size: 16px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    border: 3px solid ${({ theme }) => theme.primary};
    border-radius: 6px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: #79b1ec;
        color: ${({ theme }) => theme.white};     
        border-color: ${({ theme }) => theme.white};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
    transition: all 0.6s ease-in-out;
`;

const Divider = styled.div`
    width: 1.5px;
`;


const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // grid-gap: 32px;
  // grid-auto-rows: minmax(100px, auto);
  // @media (max-width: 960px) {
  //     grid-template-columns: repeat(2, 1fr);
  // }
  // @media (max-width: 640px) {
  //     grid-template-columns: repeat(1, 1fr);
  // }
    
`;

const Certificates = ({openModal,setOpenModal}) => {
    const [toggle, setToggle] = useState('all');
    const sortedCertificates = [...certificates].sort((a, b) => b.id - a.id);
    return (
      <Container id="certificates">
        <Wrapper>
          <Title>Certificates</Title>
          <Desc>
            Here are my certificates that i achieved.
          </Desc>
          <ToggleButtonGroup >
            {toggle === 'all' ?
              <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
              :
              <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            }
            <Divider />
            {toggle === '2024' ?
              <ToggleButton active value="2024" onClick={() => setToggle('2024')}>2024</ToggleButton>
              :
              <ToggleButton value="2024" onClick={() => setToggle('2024')}>2024</ToggleButton>
            }
            <Divider />
            {toggle === '2022' ?
              <ToggleButton active value="2022" onClick={() => setToggle('2022')}>2022</ToggleButton>
              :
              <ToggleButton value="2022" onClick={() => setToggle('2022')}>2022</ToggleButton>
            }
            <Divider />
            {toggle === '2020' ?
              <ToggleButton active value="2020" onClick={() => setToggle('2020')}>2020</ToggleButton>
              :
              <ToggleButton value="2020" onClick={() => setToggle('2020')}>2020</ToggleButton>
            }
          </ToggleButtonGroup>
          <CardContainer>
            {toggle === 'all' &&
              sortedCertificates.map((certificate) => (
                <CertificateCard key={certificate.id} certificate={certificate} openModal={openModal} setOpenModal={setOpenModal} />
              ))}
            {sortedCertificates
              .filter((item) => item.year === toggle)
              .map((certificate) => (
                <CertificateCard key={certificate.id} certificate={certificate} openModal={openModal} setOpenModal={setOpenModal} />
              ))}
          </CardContainer>
        </Wrapper>
      </Container>
    )
  }
  
  export default Certificates
