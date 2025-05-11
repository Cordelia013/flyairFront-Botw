// app/resa/page.tsx  
import Resa from "@/components/resa/resa";
import Container from "@/components/layout/Container";
import Header from "@/components/layout/Header";

export default function ResaPage() {
  return (
    <Container>
      <Header />
      <Resa />
    </Container>
  );
}