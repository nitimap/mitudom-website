"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { NavigationItem } from "@/content/school";

export function MobileNavigation({ items }: { items: NavigationItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <div className="mobile-nav">
      <button
        ref={triggerRef}
        className="menu-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label="เปิดเมนูหลัก"
        onClick={() => setIsOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <div className="mobile-menu-backdrop" onMouseDown={close}>
          <nav
            id="mobile-menu"
            className="mobile-menu-panel"
            aria-label="เมนูหลักบนมือถือ"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mobile-menu-head">
              <span>เมนู</span>
              <button
                ref={closeButtonRef}
                type="button"
                className="menu-close"
                aria-label="ปิดเมนูหลัก"
                onClick={close}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="mobile-menu-links">
              {items.map((item) => (
                <Link key={item.href} href={item.href} onClick={close}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

