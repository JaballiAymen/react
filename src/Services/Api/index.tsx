import React from "react";
import axios from "axios";
import { Person } from "./Model";
import { List, ListItem, ListItemText, ListSubheader } from "@mui/material";
import {setupInterceptorsTo} from "./Interceptors";

interface State {
  persons: Person[];
}

const specificAxios = setupInterceptorsTo(axios.create());

export default class PersonList extends React.Component<{}, State> {
  state: State = {
    persons: [],
  };

  componentDidMount() {
    specificAxios.get('http://localhost:3000/users').then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <List subheader={<ListSubheader>Person List</ListSubheader>}>
        {this.state.persons.map((person) => (
          <ListItem key={person.id}>
            <ListItemText >{person.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    );
  }

  addPerson = (person: Person) => {
    specificAxios.post(`http://localhost:3000/users`, person).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };
  
}
