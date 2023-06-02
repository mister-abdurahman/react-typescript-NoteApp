import { ReactNode } from "react";

interface testProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

export function Test<T>({ render, items }: testProps<T>) {
  return (
    <ul>
      {items.map((item, i) => (
        <li>{render(item)}</li>
      ))}
    </ul>
  );
}
