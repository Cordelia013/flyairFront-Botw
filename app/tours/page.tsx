'use client';

// app/tours/page.tsx
import Container from "@/components/layout/Container";
import Header from "@/components/layout/Header";
import Tours from "@/components/tours/Tours";
  import './tours.css'
export default function ToursPage() {
  return (
    <>
  
      
      <Container className="flex-grow">
        <Tours />
      </Container>
    </>
  );
}