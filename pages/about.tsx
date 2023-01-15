import Link from "next/link";
import {
  Container,
  Title,
  Main,
  Description,
} from "@/dtr/adaptor/web/components/sharedstyles";

export default function About() {
  return (
    <Container>
      <Main>
        <Title>About Page</Title>
        <Description>
          <Link href="/">&larr; Go Back</Link>
        </Description>
      </Main>
    </Container>
  );
}
