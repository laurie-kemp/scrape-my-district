import React, { PureComponent } from "react";
import FileSelector from "../FileSelector";
import Card from "@material-ui/core/Card";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

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
