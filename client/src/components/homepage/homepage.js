import React, { PureComponent } from "react";
import FileSelector from "../FileSelector";
import Card from "@material-ui/core/Card";


export default class Homepage extends PureComponent {
  render() {
    return (
      <div>
        {/* <Card className={classes.card}> */}
        <Card>
          <card>test</card>
          <div>
            <FileSelector />
          </div>
          <div>upload</div>

          <div>3r button</div>
          <div>4e button</div>
        </Card>
      </div>
    );
  }
}
