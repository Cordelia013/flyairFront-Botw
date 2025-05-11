// app/page.tsx
'use client'

import type { ReactNode } from 'react';
import Container from "@/components/layout/Container";
// import Grid from "@/components/layout/Grid";
import Header from '@/components/layout/Header';
import Search from '@/components/home/Search';
import Homecontent from '@/app/home/Homecontent';


export default function Home(): ReactNode {
  return (
    <Container>

        <Header />
<Homecontent />
     <Search /> 
    </Container>
  );
}