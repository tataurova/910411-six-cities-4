import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import {mount, configure} from "enzyme";
import withSelectedItem from "./with-selected-item";

configure({adapter: new Adapter()});

interface Props {
  onChangeItem: (item: string) => void;
}

const MockComponent: React.FunctionComponent<Props> = ({onChangeItem}: Props) => {
  return (
    <div>
      <button onClick = {() => {
        onChangeItem(`1`);
      }}>Button</button>
    </div>
  );
};

const MockComponentWrapped = withSelectedItem(MockComponent, 0);

describe(`withSelectedItem`, () => {
  it(`When a function is called in a component the state changes in HOC`, () => {

    const main = mount(
        <MockComponentWrapped
        />
    );
    const button = main.find(`button`);
    button.simulate(`click`);
    expect(main.state().item).toEqual(`1`);
  });
});
