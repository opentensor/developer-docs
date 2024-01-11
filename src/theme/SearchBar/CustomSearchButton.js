import React from "react";
import styles from "./styles.module.css";
// import { IoSearchCircleOutline } from "react-icons/io5";

{
  /* <DocSearchButton
        onTouchStart={importDocSearchModalIfNeeded}
        onFocus={importDocSearchModalIfNeeded}
        onMouseOver={importDocSearchModalIfNeeded}
        onClick={onOpen}
        ref={searchButtonRef}
        translations={translations.button}
        placeholder="d documentation"
      /> */
}

export default function CustomSearchButton({
  onTouchStart,
  onFocus,
  onMouseOver,
  onClick,
  ref,
  translations,
  placeholder,
}) {
  return (
    <>
      <div className="search_container">
        <div
          className={styles.container}
          onClick={onClick}
          ref={ref}
          onTouchStart={onTouchStart}
          onFocus={onFocus}
          onMouseOver={onMouseOver}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_87_1095)">
              <path
                d="M19.4855 20.1542L13.224 13.8926C12.724 14.3183 12.149 14.6477 11.499 14.8811C10.849 15.1144 10.1958 15.2311 9.53937 15.2311C7.9377 15.2311 6.58216 14.6767 5.47274 13.5679C4.36331 12.459 3.80859 11.1042 3.80859 9.50343C3.80859 7.90263 4.363 6.54678 5.47182 5.43588C6.58064 4.32498 7.93544 3.76953 9.53624 3.76953C11.1371 3.76953 12.4929 4.32424 13.6038 5.43366C14.7147 6.54307 15.2701 7.89862 15.2701 9.50031C15.2701 10.1952 15.1471 10.8676 14.9009 11.5176C14.6548 12.1676 14.3317 12.7234 13.9317 13.1849L20.1932 19.4465L19.4855 20.1542ZM9.53937 14.2311C10.8663 14.2311 11.9865 13.7743 12.8999 12.8609C13.8134 11.9474 14.2701 10.8272 14.2701 9.50031C14.2701 8.17339 13.8134 7.0532 12.8999 6.13973C11.9865 5.22627 10.8663 4.76953 9.53937 4.76953C8.21245 4.76953 7.09226 5.22627 6.17879 6.13973C5.26534 7.0532 4.80862 8.17339 4.80862 9.50031C4.80862 10.8272 5.26534 11.9474 6.17879 12.8609C7.09226 13.7743 8.21245 14.2311 9.53937 14.2311Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_87_1095">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>{placeholder}</p>
          <div className={styles.keys}>
            <svg
              width="34"
              height="24"
              viewBox="0 0 34 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z"
                stroke="#5F6368"
              />
              <path
                d="M14.448 16C13.332 16 12.612 15.292 12.612 14.188C12.612 13.024 13.308 12.34 14.676 12.34H15.384V11.02H14.676C13.308 11.02 12.612 10.336 12.612 9.172C12.612 8.068 13.332 7.36 14.448 7.36C15.792 7.36 16.224 8.2 16.224 9.208V10.204H17.544V9.208C17.544 8.2 17.976 7.36 19.32 7.36C20.436 7.36 21.156 8.068 21.156 9.172C21.156 10.336 20.46 11.02 19.092 11.02H18.384V12.34H19.092C20.46 12.34 21.156 13.024 21.156 14.188C21.156 15.292 20.436 16 19.32 16C17.976 16 17.544 15.16 17.544 14.152V13.156H16.224V14.152C16.224 15.16 15.792 16 14.448 16ZM18.384 9.184V10.204H19.092C19.944 10.204 20.304 9.856 20.304 9.172C20.304 8.464 19.884 8.188 19.32 8.188C18.696 8.188 18.384 8.572 18.384 9.184ZM14.676 10.204H15.384V9.184C15.384 8.572 15.072 8.188 14.448 8.188C13.884 8.188 13.464 8.464 13.464 9.172C13.464 9.856 13.824 10.204 14.676 10.204ZM16.224 12.34H17.544V11.02H16.224V12.34ZM14.448 15.172C15.072 15.172 15.384 14.788 15.384 14.176V13.156H14.676C13.824 13.156 13.464 13.504 13.464 14.188C13.464 14.896 13.884 15.172 14.448 15.172ZM18.384 14.176C18.384 14.788 18.696 15.172 19.32 15.172C19.884 15.172 20.304 14.896 20.304 14.188C20.304 13.504 19.944 13.156 19.092 13.156H18.384V14.176Z"
                fill="#5F6368"
              />
            </svg>
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H28C29.933 0.5 31.5 2.067 31.5 4V20C31.5 21.933 29.933 23.5 28 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z"
                stroke="#5F6368"
              />
              <path
                d="M12.984 16V7.6H13.992V11.512L17.28 7.6H18.564L15.024 11.776V11.824L18.612 16H17.304L13.992 12.148V16H12.984Z"
                fill="#5F6368"
              />
            </svg>
          </div>
        </div>
        <div
          className="search_mobile_icon"
          onClick={onClick}
          ref={ref}
          onTouchStart={onTouchStart}
          onFocus={onFocus}
          onMouseOver={onMouseOver}>
          <svg
            width="20"
            height="20"
            class="DocSearch-Search-Icon"
            viewBox="0 0 20 20">
            <path
              d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
              stroke="currentColor"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"></path>
          </svg>
        </div>
      </div>
    </>
  );
}
