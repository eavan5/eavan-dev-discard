import { Container } from "@/components/ui/Container";
import Image from "next/image";
import Headline from "./(main)/Headline";
import { Articles } from "./(main)/Articles";
import NewsLetter from "./(main)/NewsLetter";

export default function Home () {
  return (
    <>
      <Container>
        <Headline />
        <Articles />
        <NewsLetter />
      </Container>
    </>
  );
}
