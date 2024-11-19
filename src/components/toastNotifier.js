"use client";

import toast, { Toaster } from "react-hot-toast";

export default function ToastNotifier() {
    return <Toaster position="top-right" reverseOrder={false} />;
}

// Utility functions for different toast types
export const showToast = {
    success: (message) => toast.success(message, { duration: 4000 }),
    error: (message) => toast.error(message, { duration: 4000 }),
    promise: (promise, messages) =>
        toast.promise(
            promise,
            {
                loading: messages.loading || "Processing...",
                success: messages.success || "Operation successful!",
                error: messages.error || "Something went wrong!",
            },
            { duration: 5000 }
        ),
};
