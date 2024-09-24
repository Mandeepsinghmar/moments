'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
      <dialog ref={dialogRef} className="w-full h-full m-0 bg-zinc-900/50 absolute top-[50%] left-[50%]" onClose={onDismiss}>
        {children}
        <button onClick={onDismiss} className="close-button text-yellow-500 text-4xl" >X</button>
      </dialog>,
    document.getElementById('modal-root')!
  );
}