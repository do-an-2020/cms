import React from "react";
import clsx from "clsx";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {},
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);
export default function TableList() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    showPassword: false
  });
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
            <p className={classes.cardCategoryWhite}>Complete your profile</p>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <TextField
                  onChange={handleChange("email")}
                  required
                  id="email"
                  value={values.email}
                  label="Email"
                  variant="outlined"
                  style={{ width: "100%", marginTop: "16px" }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                  style={{ width: "100%", marginTop: "16px" }}
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                  style={{ width: "100%", marginTop: "16px" }}
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />
                </FormControl>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <TextField
                  required
                  id="name"
                  label="Full Name"
                  variant="outlined"
                  style={{ width: "100%", marginTop: "16px" }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <TextField
                  required
                  id="phone"
                  label="Phone"
                  variant="outlined"
                  style={{ width: "100%", marginTop: "16px" }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <TextField
                  required
                  id="catogory"
                  label="Catogory"
                  variant="outlined"
                  style={{ width: "100%", marginTop: "16px" }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <TextField
                  required
                  id="city"
                  label="City"
                  variant="outlined"
                  style={{ width: "100%", marginTop: "16px" }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <TextField
                  required
                  id="image"
                  label="Image"
                  variant="outlined"
                  style={{ width: "100%", marginTop: "16px" }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <TextField
                  required
                  id="discription"
                  label="Discription"
                  variant="outlined"
                  style={{ width: "100%", marginTop: "16px" }}
                />
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter>
            <Button color="primary">Update Profile</Button>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
