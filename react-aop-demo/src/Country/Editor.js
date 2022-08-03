import React from "react";
import { Form, Button } from "react-bootstrap";

const Editor = (props) => {
  const { selectedOb, setSelectedOb, isEdit, updateHandler, createHandler } =
    props;
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country name"
            value={selectedOb.name}
            onChange={(e) =>
              setSelectedOb({ ...selectedOb, name: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country code"
            value={selectedOb.code}
            onChange={(e) =>
              setSelectedOb({ ...selectedOb, code: e.target.value })
            }
          />
        </Form.Group>
        <div className="d-grid gap-2 mx-5 mb-2">
          {!isEdit ? (
            <Button
              variant="primary"
              type="submit"
              className="mb-2"
              size="lg"
              onClick={(e) => createHandler(e)}
            >
              Create
            </Button>
          ) : (
            <Button
              variant="danger"
              type="submit"
              className="mb-2"
              size="lg"
              onClick={(e) => updateHandler(e)}
            >
              Update
            </Button>
          )}
        </div>
      </Form>
    </>
  );
};

export default Editor;
