'use client';

import { useState, useEffect } from 'react';
import { PreLoader } from "@/components/PreLoader";
import { TopBar } from "@/components/TopBar";
import { Header } from '@/components/Header';

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartExit(true);
    }, 750);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadComplete = () => {
    setShowPreloader(false);
    document.body.classList.add('loaded');
  };

  return (
    <>
      {showPreloader && (
        <PreLoader startExit={startExit} onLoadComplete={handleLoadComplete} />
      )}
      {!showPreloader && (
        <>
          <TopBar />
          <Header />
        </>
      )}
    </>
  );
}