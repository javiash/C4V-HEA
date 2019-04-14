import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

const styles = theme => ({
  root: {
    width: '900px',
    margin: '0px auto',
    marginTop: 15,
    backgroundColor: theme.palette.background.paper,
    display: 'grid',
    'grid-template-columns': '1fr 1fr 1fr',
    justifyItems: 'center',
    alignItems: 'center',
    'grid-row-gap': '15px',
    'grid-column-gap': '15px'
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 140,
  }
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <div>
        <section class="grid-1">
          <div >
            <Card className='item-1' >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://todocrowdlending.com/wp-content/uploads/2018/11/venezuela-1460595_1920-1024x661.jpg"
                  title="Code for Venezuela"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Code For Venezuela
                  </Typography>
                  <Typography component="p">
                    En este dia vamos a hacer una aplicacion para el bien de Venezuela
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Compartir
            </Button>
                <Button size="small" color="primary">
                  Leer mas
            </Button>
              </CardActions>
            </Card>
          </div>
          <div className="items2y3">
            <div className="item-2">
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://todocrowdlending.com/wp-content/uploads/2018/11/venezuela-1460595_1920-1024x661.jpg"
                    title="Code for Venezuela"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Code For Venezuela
              </Typography>
                    <Typography component="p">
                      En este dia vamos a hacer una aplicacion para el bien de Venezuela
              </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Compartir
            </Button>
                  <Button size="small" color="primary">
                    Leer mas
            </Button>
                </CardActions>
              </Card>
            </div>
            <div className="item-3">
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://todocrowdlending.com/wp-content/uploads/2018/11/venezuela-1460595_1920-1024x661.jpg"
                    title="Code for Venezuela"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Code For Venezuela
              </Typography>
                    <Typography component="p">
                      En este dia vamos a hacer una aplicacion para el bien de Venezuela
              </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Compartir
            </Button>
                  <Button size="small" color="primary">
                    Leer mas
            </Button>
                </CardActions>
              </Card>
            </div>
          </div>

        </section>
        <List style={{ width: '900px', margin: '0 auto' }}>
          <AppBar position="static" color="default">
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Economia" />
            </Tabs>
          </AppBar>
          <div className={classes.root}>

            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://todocrowdlending.com/wp-content/uploads/2018/11/venezuela-1460595_1920-1024x661.jpg"
                  title="Code for Venezuela"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Code For Venezuela
              </Typography>
                  <Typography component="p">
                    En este dia vamos a hacer una aplicacion para el bien de Venezuela
              </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Compartir
            </Button>
                <Button size="small" color="primary">
                  Leer mas
            </Button>
              </CardActions>
            </Card>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://todocrowdlending.com/wp-content/uploads/2018/11/venezuela-1460595_1920-1024x661.jpg"
                  title="Code for Venezuela"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Code For Venezuela
              </Typography>
                  <Typography component="p">
                    En este dia vamos a hacer una aplicacion para el bien de Venezuela
              </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Compartir
            </Button>
                <Button size="small" color="primary">
                  Leer mas
            </Button>
              </CardActions>
            </Card>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://todocrowdlending.com/wp-content/uploads/2018/11/venezuela-1460595_1920-1024x661.jpg"
                  title="Code for Venezuela"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Code For Venezuela
              </Typography>
                  <Typography component="p">
                    En este dia vamos a hacer una aplicacion para el bien de Venezuela
              </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Compartir
            </Button>
                <Button size="small" color="primary">
                  Leer mas
            </Button>
              </CardActions>
            </Card>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://todocrowdlending.com/wp-content/uploads/2018/11/venezuela-1460595_1920-1024x661.jpg"
                  title="Code for Venezuela"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Code For Venezuela
              </Typography>
                  <Typography component="p">
                    En este dia vamos a hacer una aplicacion para el bien de Venezuela
              </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Compartir
            </Button>
                <Button size="small" color="primary">
                  Leer mas
            </Button>
              </CardActions>
            </Card>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://todocrowdlending.com/wp-content/uploads/2018/11/venezuela-1460595_1920-1024x661.jpg"
                  title="Code for Venezuela"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Code For Venezuela
              </Typography>
                  <Typography component="p">
                    En este dia vamos a hacer una aplicacion para el bien de Venezuela
              </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Compartir
            </Button>
                <Button size="small" color="primary">
                  Leer mas
            </Button>
              </CardActions>
            </Card>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://todocrowdlending.com/wp-content/uploads/2018/11/venezuela-1460595_1920-1024x661.jpg"
                  title="Code for Venezuela"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Code For Venezuela
              </Typography>
                  <Typography component="p">
                    En este dia vamos a hacer una aplicacion para el bien de Venezuela
              </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Compartir
            </Button>
                <Button size="small" color="primary">
                  Leer mas
            </Button>
              </CardActions>
            </Card>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://todocrowdlending.com/wp-content/uploads/2018/11/venezuela-1460595_1920-1024x661.jpg"
                  title="Code for Venezuela"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Code For Venezuela
              </Typography>
                  <Typography component="p">
                    En este dia vamos a hacer una aplicacion para el bien de Venezuela
              </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Compartir
            </Button>
                <Button size="small" color="primary">
                  Leer mas
            </Button>
              </CardActions>
            </Card>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://todocrowdlending.com/wp-content/uploads/2018/11/venezuela-1460595_1920-1024x661.jpg"
                  title="Code for Venezuela"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Code For Venezuela
              </Typography>
                  <Typography component="p">
                    En este dia vamos a hacer una aplicacion para el bien de Venezuela
              </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Compartir
            </Button>
                <Button size="small" color="primary">
                  Leer mas
            </Button>
              </CardActions>
            </Card>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://todocrowdlending.com/wp-content/uploads/2018/11/venezuela-1460595_1920-1024x661.jpg"
                  title="Code for Venezuela"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Code For Venezuela
              </Typography>
                  <Typography component="p">
                    En este dia vamos a hacer una aplicacion para el bien de Venezuela
              </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Compartir
            </Button>
                <Button size="small" color="primary">
                  Leer mas
            </Button>
              </CardActions>
            </Card>
          </div>
        </List>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);