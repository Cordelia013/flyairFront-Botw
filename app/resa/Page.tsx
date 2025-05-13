'use client'
// app/resa/page.tsx  
import './resa.css';
import Resa from "@/components/resa/Resa";
import Container from "@/components/layout/Container";
import Header from "@/components/layout/Header";

export default function ResaPage() {
  return (
    <Container>
      <Header />
      <main className="resa-page">
        <Resa />
      </main>
    </Container>
  );
}