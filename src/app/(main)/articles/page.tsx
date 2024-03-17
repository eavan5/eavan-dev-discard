import { Container } from "@/components/ui/Container"
import Articles from "../Articles"

export default function ArticlesPage () {

  return (
    <>
      <Container>
        <Articles title="全部文章" limit={8} />
      </Container>
    </>
  )
}