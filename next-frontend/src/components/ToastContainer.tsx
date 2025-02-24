'use client';

import { ToastContainer as ToastContainerLib } from "react-toastify";

/**
 * Client component and Helper method to work with toast messages, this allow config to be passed on to configure toast notifications within the
 * Eg maximum number of toasts at once
 */
export function ToastContainer() {
  return <ToastContainerLib />; //Context API
}
