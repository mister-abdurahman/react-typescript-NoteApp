import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route, Routes, Navigate } from "react-router-dom";
import NewNote from "./NewNote";
import { UseLocalStorage } from "./UseLocalStorage";
import { Test } from "./Test";

export type Note = {
  id: string;
} & NoteData;

export type RawNote = {
  id: string;
};

export type RawNoteData = {
  id: string;
  markdown: string;
  tagIds: string[];
};

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

function App() {
  const [notes, setNotes] = UseLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = UseLocalStorage<Tag[]>("TAGS", []);
  return (
    <Container className="my-4">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Home</h1>
              <Test
                render={(item: string) => <span>{item}</span>}
                items={["React", "Typescript", "Javascript", "Jira"]}
              />
            </>
          }
        />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
