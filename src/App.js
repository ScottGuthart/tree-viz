import React from "react";
import UploadButton from "./UploadButton";
import RichObjectTreeView from "./RichObjectTreeView";

function App() {
  const [tree, setTree] = React.useState(null);

  const uploadTree = (ev) => {
    document.body.style.cursor = "progress";
    const file = ev.target.files[0];
    if (file) {
      console.info(ev.target.files[0]);
      const reader = new FileReader();
      reader.onload = async (event) => {
        const uploadedTree = JSON.parse(event.target.result);
        console.log(uploadedTree);
        ev.target.value = "";
        setTree(uploadedTree);
        document.body.style.cursor = "default";
      };
      reader.onerror = (error) => {
        alert(error);
        ev.target.value = "";
        document.body.style.cursor = "default";
      };

      console.info("Reading JSON");
      reader.readAsText(file);
    }
  };
  return !tree ? (
    <UploadButton
      variant={"contained"}
      size={"large"}
      onChange={uploadTree}
      id={"uploadTree"}
      title={"Upload Tree"}
      accept={".json"}
    />
  ) : (
    <RichObjectTreeView data={tree} />
  );
}

export default App;
