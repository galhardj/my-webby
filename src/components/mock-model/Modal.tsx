"use client";

import { useState, useRef, useEffect } from "react";

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Auto focus modal when opened
      modalRef.current.focus();
      // Block background scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling when modal closes
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        // Return focus to button after modal closes
        setTimeout(() => {
          buttonRef.current?.focus();
        }, 0);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      buttonRef.current?.focus();
    }, 0);
  };

  return (
    <>
      <div
        className={
          "flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4"
        }
      >
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(true)}
          className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
        >
          Open Modal
        </button>
      </div>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40 bg-black/50" aria-hidden="true" />

          {/* Modal */}
          <div
            ref={modalRef}
            tabIndex={-1}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <div
              className="w-full max-w-md transform rounded-xl bg-white p-6 shadow-2xl transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Modal Title
                </h2>
                <button
                  onClick={handleClose}
                  className="rounded p-1 text-gray-400 hover:text-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  aria-label="Close modal"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <p className="mb-6 text-gray-600">
                This modal automatically receives focus when opened. Press the
                Escape key to close it and return focus to the button.
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={handleClose}
                  className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  onClick={handleClose}
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
