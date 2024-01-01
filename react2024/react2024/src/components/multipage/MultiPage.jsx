import { useState } from "react";

function Page1({ links }) {
  return (
    <div>
      <h1>Page 1</h1>
      <button onClick={links.page2}>Page2</button>
      <button onClick={links.page3}>Page3</button>
    </div>
  );
}

function Page2({ links }) {
    return (
        <div>
          <h1>Page 2</h1>
          <button onClick={links.page1}>Page1</button>
          <button onClick={links.page3}>Page3</button>
        </div>
      );
}

function Page3({ links }) {
    return (
        <div>
          <h1>Page 3</h1>
          <button onClick={links.page1}>Page1</button>
          <button onClick={links.page2}>Page2</button>
        </div>
      );
}

function MultipPage() {
  const [page, setPage] = useState("Page1");

  const page1 = () => setPage("Page1");
  const page2 = () => setPage("Page2");
  const page3 = () => setPage("Page3");

  const links = { page1, page2, page3 };

  switch (page) {
    case "Page1":
      return <Page1 links={links} />;
    case "Page2":
      return <Page2 links={links} />;
    case "Page3":
      return <Page3 links={links} />;
    default:
      return <h1>No Matching page</h1>;
  }
}

export default MultipPage;
