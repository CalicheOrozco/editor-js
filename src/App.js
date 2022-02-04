import React from "react";
import { Button, Container } from "@exponentialeducation/betomic";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import LinkTool from "@editorjs/link";
import RawTool from "@editorjs/raw";
import ImageTool from "@editorjs/image";
import Checklist from "@editorjs/checklist";
import Embed from "@editorjs/embed";
import Quote from "@editorjs/quote";
import CalicheRange from "./CalicheRange";

function App() {
  const holder = "bedu-editor";
  const editorRef = React.useRef();
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: holder,
      placeholder: "Start typing here...",
      onReady: () => {
        editorRef.current = editor;
      },
      tools: {
        calicheRange: {
          class: CalicheRange,
        },
        header: {
          class: Header,
          inlineToolbar: ["link"],
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        linkTool: {
          class: LinkTool,
          config: {
            endpoint: "http://localhost:8008/fetchUrl", // Your backend endpoint for url data fetching,
          },
        },
        raw: RawTool,
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
              byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
            },
          },
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              coub: true,
              instagram: true,
              facebook: true,
              twitter: true,
              pinterest: true,
            },
          },
        },
        quote: Quote,
      },
    });
  }, []);

  return (
    <div className="App">
      <Container>
        <h1 className="text-primary-600 font-bold uppercase text-center text-4xl py-6 ">
          Welcome to editorJS Caliche Testing
        </h1>
        <div id={holder}></div>

        <Button
          onClick={async () => {
            console.log(editorRef);
            const content = await editorRef.current.save();
            console.log(content);
          }}
        >
          Save Data
        </Button>
      </Container>
    </div>
  );
}

export default App;
