import React from "react";
import { render } from "react-dom";

import styles from "./styles.css";
import { FC } from "react";

export type Props = { text: string };

const ExampleComponent: FC<Props> = ({ text }: Props) => {
  return <div>Hello {text}</div>;
};

export default ExampleComponent;

export function createExampleComponent(text: string, node: HTMLElement) {
  render(<ExampleComponent text={text}></ExampleComponent>, node);
}
