import Head from "next/head";
import styled from "styled-components";
import BigBox from "../../components/BigBox";
import LeftMenu from "../../components/LeftMenu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arc-Ad</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <LeftMenu />
        </Container>
      </main>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: row;
`;
