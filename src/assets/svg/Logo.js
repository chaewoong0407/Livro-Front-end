import * as React from "react"

function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={76}
      height={102}
      viewBox="0 0 76 102"
      {...props}
    >
      <image
        width={76}
        height={102}
        xlinkHref="data:image/png;base64,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"
      />
    </svg>
  )
}

export default Logo
