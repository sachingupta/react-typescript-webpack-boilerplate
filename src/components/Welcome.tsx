import * as React from "react";

import * as Styles from "./App.css"; 

export interface WelcomeProps { name: string; }

export const Welcome = (props: WelcomeProps) => <h1 className={Styles.app}>Welcome {props.name}!</h1>;