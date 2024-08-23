import styled from "styled-components";

const AppButton = styled.button`
    margin-top: 1rem;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 10px;

    &:hover {
    background-color: ${(props) => props.variant === 'return' ? '#000000' : '#ffffff'} ;
    border-radius: 10px;
}
`;
const AppH1 = styled.h1`
    color: ${(props) => props.nombre === 'title' ? '#ffffff' : '#ff0000'} ;
    background-color: #000000;
    border-radius: 20px;
`;
const AppImg = styled.img`
    max-width: 150px;
`;
const AppDiv = styled.div`
    text-align: center;
    padding: 20px;
    font-size: 1.2rem;
    margin-left: 25%;
    margin-right: 25%;
    width: 50%;
    color: #ff0000;
    font-weight: 600;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    background-color: rgb(225, 255, 0);
`;
export {
    AppButton,
    AppH1,
    AppImg,
    AppDiv

}
