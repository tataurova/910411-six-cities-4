import {mount} from "enzyme";
import React from "react";
import withSelectedItem from "./with-selected-item.jsx";
import PropTypes from "prop-types";

const MockComponent = ({onChangeItem}) => {
  return (
    <div>
      <button onClick = {() => {
        onChangeItem(1);
      }}>Button</button>
    </div>
  );
};

MockComponent.propTypes = {
  onChangeItem: PropTypes.func.isRequired,
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
    expect(main.state().item).toEqual(1);
  });
});
