import { Container } from "@/components/ui/Container";
import Image from "next/image";

export default function Home () {
  return (
    <>
      <Container>
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
