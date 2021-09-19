import React from "react";
import { useRouter } from "next/router";

const Notes = () => {
  const router = useRouter();
  const { params } = router.query;
  console.log({ params })
  return (
    <div>Note</div>
  )
}

export default Notes;