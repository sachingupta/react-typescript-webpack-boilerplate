import * as React from "react";

export interface WelcomeProps { name: string; }

export const Welcome = (props: WelcomeProps) => <h1>Welcome {props.name}!</h1>;