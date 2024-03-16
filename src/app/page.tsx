import { Container } from "@/components/ui/Container";
import Image from "next/image";
import Headline from "./(main)/Headline";

export default function Home () {
  return (
    <>
      <Container>
        <Headline />

        <h1>Home</h1>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={72}
          height={16}
        />
      </Container>
    </>
  );
}
