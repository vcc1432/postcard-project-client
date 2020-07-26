import { ReactElement } from "../node_modules/@types/react";
import { ShallowWrapper } from "../node_modules/@types/enzyme";

export const findByTestAttr = (component: ShallowWrapper<any>, attr: string) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
}