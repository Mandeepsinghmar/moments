"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="w-screnn m-0 h-screen bg-zinc-900/50 text-white"
      onClose={onDismiss}
    >
      {children}
      {/* <button
        onClick={onDismiss}
        className="close-button text-4xl text-yellow-500"
      >
        X
      </button> */}
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
