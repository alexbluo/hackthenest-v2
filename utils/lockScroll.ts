"use client";

const lockScroll = (lock: boolean) => {
  if (lock) {
    document.body.classList.add("h-full", "overflow-hidden");
  } else {
    document.body.classList.remove("h-full", "overflow-hidden");
  }
};

export default lockScroll;
