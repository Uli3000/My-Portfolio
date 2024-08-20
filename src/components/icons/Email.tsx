import type { SVGProps } from "react";

function Email(props : SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M13 19c0-.34.04-.67.09-1H4V8l8 5 8-5v5.09c.72.12 1.39.37 2 .72V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9.09c-.05-.33-.09-.66-.09-1m7-13l-8 5-8-5h16m0 9v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2z" />
    </svg>
  );
}

export default Email