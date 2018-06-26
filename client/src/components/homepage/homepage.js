import React, { PureComponent } from "react";
import FileSelector from "../FileSelector";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

export default class Homepage extends PureComponent {
  render() {
    return (
      <div>
        <Card>
          <div>
            <FileSelector />
          </div>
          <div>upload</div>
          <div>3r button</div>
        </Card>
      </div>
    );
  }
}
