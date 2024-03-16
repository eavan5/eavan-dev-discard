import { Container } from "../components/ui/Container";
import Headline from "./(main)/Headline";
import Articles from "./(main)/Articles";
import NewsLetter from "./(main)/NewsLetter";

export default function Home () {
  return (
    <>
      <Container>
        <Headline />
        <Articles title="Recent Articles" limit={4} />
        <NewsLetter />
        <Articles title="Top Articles" limit={2} />
      </Container>
    </>
  );
}
