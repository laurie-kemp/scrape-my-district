import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Homepage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = ''
    }
  
  render() {
    const { history, currentUser } = this.props;
    if (!currentUser) return <Redirect to="/login" />

    return (
      <div>
        <Grid container  spacing={16}>
      <Card className='dataCard'>
        <CardContent>
          <Typography variant="headline" component="h2">
            Full Database
          </Typography>
          <Typography component="p">
            See or update your Database here<br />
            {'"uhhh.. it tickles"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className='dataCardButton' onClick={() => history.push("/list")}>Data</Button>
        </CardActions>
      </Card>
      </Grid>

      <Card className='reportsCard'>
        <CardContent>
          <Typography variant="headline" component="h2">
            Full Database
          </Typography>
          <Typography component="p">
            See or update your Database here<br />
            {'"uhhh.. it tickles"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className='dataCardButton' onClick={() => history.push("/reports")}>Data</Button>
        </CardActions>
      </Card>
    </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  currentUser: state.currentUser,
  authenticated: state.currentUser !== null,
  
})

export default connect(mapStateToProps)(Homepage)