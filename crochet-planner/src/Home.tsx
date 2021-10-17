import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import afghanPic from "./images/pile-of-blankets.jpg";
import questioningPic from "./images/woman-questioning.jpg";
import { Button } from "@material-ui/core";

const images: { [key: string]: string } = {
  afghan: afghanPic,
  none: questioningPic,
};

export default function Home() {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 400,
      marginBottom: 50,
    },
    pictures: {
      width: 600,
      height: 500,
      margin: theme.spacing(1),
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: theme.spacing(8),
    },
  }));

  const classes = useStyles();
  const [projectName, setProjectName] = React.useState("none");
  const [projectExample, setProjectExample] = React.useState(questioningPic);
  const [goButtonDisabled, setGoButtonDisabled] = React.useState(true);

  const onProjectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const project = event.target.value as string;
    setProjectName(project);
    setProjectExample(images[project]);
    setGoButtonDisabled(false);
  };

  return (
    <div className={classes.content}>
      <h1>Welcome to the Crochet Project Planner!</h1>
      <FormControl className={classes.formControl}>
        <InputLabel id="project-picker-label">
          What kind of project are we planning today?
        </InputLabel>
        <Select
          labelId="project-picker-label"
          id="project-dropdown"
          value={projectName}
          onChange={onProjectChange}
        >
          <MenuItem value="" disabled>
            None
          </MenuItem>
          <MenuItem value={"afghan"}>Afghan</MenuItem>
        </Select>
      </FormControl>
      <img
        src={projectExample}
        alt="Example project"
        className={classes.pictures}
      />
      <Button variant="contained" color="secondary" disabled={goButtonDisabled}>
        Let's Go!
      </Button>
    </div>
  );
}
