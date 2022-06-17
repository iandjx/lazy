import "./App.css";
import { lazy, Suspense, useState } from "react";
import { test } from "./test";
const Foo = lazy(() => import("./Foo"));
const Bar = lazy(() => import("./Bar"));

const mmap = {
  foo: Foo,
  bar: Bar,
};
function App() {
  const [open, setOpen] = useState(false);
  const [sopen, ssetOpen] = useState(false);
  const [aa, setAa] = useState([]);
  const t = test();
  return (
    <div className="App">
      <button
        onClick={() => {
          setOpen(true);
          setAa(["foo"]);
        }}
      >
        Foo
      </button>
      <button onClick={() => ssetOpen(true)}>Foo</button>
      {t}
      <Suspense fallback={<div />}>
        {aa.map((ele) => {
          const A = mmap[ele];
          return <A />;
        })}
        {sopen && <Bar />}
      </Suspense>
    </div>
  );
}

export default App;
