// app/tours/page.tsx

import Container from "@/components/layout/Container";
import Header from "@/components/layout/Header";
import Tours from "@/components/tours/Tours";

export default function ToursPage() {
  return (
    <Container>
      <Header />
      <Tours />
    </Container>
  );
}