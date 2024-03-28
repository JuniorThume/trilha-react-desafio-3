import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 75px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Column = styled.div`
    flex: 1;
`;

export const Wrapper = styled.div`
    max-width: 300px;
`;

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;`;

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
`;

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

`;

export const ErrorText = styled.p`
    color: red;
    margin:5px 0 10px 0;
`;

export const DescriptionTerms = styled.p`
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 400;
    text-align: left;


    color: #FFFFFF;
`;

export const InlineComponents = styled.div`
    margin-bottom: 10px;
    display: flex;
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    text-align: left;

`;

export const AlreadyHaveAccount = styled.a`
    color: #23DD7A;
    cursor: pointer;
    text-decoration: none;
`;

export const BoldText = styled.span`
    font-weight: bold;
    color: white;
`;