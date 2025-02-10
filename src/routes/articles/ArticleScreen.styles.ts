import styled from "styled-components";

export const Root = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled("h1")`
  text-align: center;
`;

export const Search = {
  Root: styled.div`
    align-self: center;
    width: 100%;
    max-width: 400px;
  `,
  Bar: styled.input`
    all: unset;
    margin-top: 3rem;
    height: 1rem;
    border: 2px solid black;
    border-radius: 4px;
    height: 1.6rem;
    width: 100%;
    padding: 3px 5px;
  `,
  Results: {
    Root: styled.h4`
      margin-top: .4rem;
    `,
    Count: styled.span`
      font-weight: bold;
    `,
  },
};

export const ArticlesList = styled.ul`
  list-style: none;
  margin: auto;
  margin-top: 2rem;

  & > li:not(:first-of-type) {
    margin-top: 4rem;
  }
`;
