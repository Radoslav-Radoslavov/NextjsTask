import styled from 'styled-components'

export const CardContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 6rem;
  border-radius: 8px;
  border: 3px solid transparent;

  &:hover {
    border: 3px solid #12345f;
    color: #12345f;
    cursor: pointer;
}
`;
export const CardInnerHeading = styled(({ ...props }) => <h1 {...props} />)`
  font-family: Poppins;
  font-weight: 700;
  font-size: 1.10rem;
  margin-bottom: 0;

${CardContainer}:hover & {
	text-decoration: underline;
}
`;
export const CardInnerText = styled((props) => <p {...props} />)`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1.4rem;
  font-weight: 400;
  color: black;
	margin-top: 5px;
`;

export const CardInfoContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-grow: 1; 
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
`;

export const ImageContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  max-width: 5rem;
  max-height: 5rem;
  width: 80%;
  height: 80%;
  justify-content: center;
  align-self: center;
  padding: 2rem;
`;

