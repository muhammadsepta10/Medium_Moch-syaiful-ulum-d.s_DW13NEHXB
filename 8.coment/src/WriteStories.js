import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PageHead from "./components/PageHead";

export default class WriteStories extends Component {
  render() {
    return (
      <div>
        <PageHead />
        <Container className="mt-5">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Title" />
            </Form.Group>
            <CKEditor
              editor={ClassicEditor}
              style={{ border: "none" }}
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
            <Button type="submit" className=" mt-5" variant="primary">
              Publish
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
