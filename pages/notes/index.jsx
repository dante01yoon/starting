import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../src/styles/notes.module.css";

const Notes = ({ notes }) => {
  const router = useRouter();
  const { params } = router.query;
  return (
    <div>
      <h1> Note</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {/* <Link href="/notes/[id]" href={`/notes/${note.id}`}>{note.id}</Link> */}
            <button className={styles.notes_button} onClick={() => router.push("/notes/[id]", `/notes/${note.id}`)}>note 2</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Notes;


export async function getServerSideProps(context) {
  try {
    const res = await fetch(`http://localhost:3000/api/note`)

    const { data } = await res.json();
    return {
      props: { notes: data },
    }
  }
  catch (e) {
    console.error({ e })
    return {
      props: { notes: [] }
    }
  }
}