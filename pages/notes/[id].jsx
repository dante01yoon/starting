import React from "react";
import { useRouter } from "next/router";

const NoteId = () => {
  const router = useRouter();
  console.log({ query: router.query, router: router })
  return (
    <div>Note</div>
  )
}

export default NoteId;