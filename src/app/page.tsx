'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [text, setText] = useState('');

  useEffect(() => {
    setText('To 小颜：');
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="border p-2 w-full max-w-md mt-4 bg-tropical-indigo rounded-md">
        <p>{text}</p>
      </div>
    </div>
  );
}
