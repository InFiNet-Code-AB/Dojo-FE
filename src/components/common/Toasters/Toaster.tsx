import React from "react";
import { TEToast } from "tw-elements-react";

interface ToasterProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

const Toaster: React.FC<ToasterProps> = ({ open, message, onClose }) => {
  return (
    <TEToast
      staticToast
      open={open}
      color="bg-danger-100 text-danger-700"
      className="mb-6"
    >
      <div className="flex items-center justify-between rounded-t-lg border-b-2 border-danger-200 bg-clip-padding px-4 pb-2 pt-2.5">
        <p className="flex items-center font-bold">
          <span className="[&>svg]:w-4 [&>svg]:h-4 mr-2 -mt-[2px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Error
        </p>
        <div className="flex items-center">
          <p className="text-xs text-danger-700"></p>
          <button
            type="button"
            className="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            onClick={onClose}
            aria-label="Close"
          >
            <span className="w-[0.75em] h-[0.75em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="break-words rounded-b-lg px-4 py-4">{message}</div>
    </TEToast>
  );
};

export default Toaster;
