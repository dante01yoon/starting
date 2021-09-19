import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Notes = () => {
  const router = useRouter();
  const { params } = router.query;
  console.log({ params })
  return (
    <div>
      <h1> Note</h1>
      <Link href="/notes/[id]" as={`/notes/1`}>note 1</Link>
      <button onClick={() => router.push("/notes/[id]", "/notes/2")}>note 2</button>
    </div>
  )
}

export default Notes;