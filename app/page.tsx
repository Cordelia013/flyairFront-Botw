// app/page.tsx
'use client'

import type { ReactNode } from 'react';
import Container from "@/components/layout/Container";
// import Grid from "@/components/layout/Grid";
import Header from '@/components/layout/Header';


export default function Home(): ReactNode {
  return (
    <Container>

        <Header />
   <>
       <div className="grid grid-cols-12 gap-2 relative">
        <h1 className="col-start-3 col-end-8 absolute -top-[6vh] left-[33px]">
          <p className="leading-[115px] text-[96px] "> FLY AIR <br /> <span className="">TO KOREA</span>  </p>
        </h1>
        
      </div>
      <div className="absolute top-[53vh] left-[19vw] max-w-[370px] ">
             <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur. Fusce nunc nisi neque luctus in dolor in. Nisl ultrices risus orci vitae amet a. Nullam gravida accumsan pretium sagittis amet libero sed. Senectus duis non tellus imperdiet hendrerit lorem.</p>
      </div>
      
      
        
   </>
     
     
     
    </Container>
  );
}