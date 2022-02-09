import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Real estate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h1 className={styles.title}>
          Welcome to <a href="http://localhost:3000">Green Farms!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
