import { render } from "@testing-library/react";
import TabPanel from "./TabPanel";

describe("TabPanel Component", () => {
  it("should render children when activeTab matches index", () => {
    const { getByText } = render(
      <TabPanel index={0} activeTab={0}>
        <div>Test Content</div>
      </TabPanel>
    );

    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("does not render children when activeTab does not match index", () => {
    const { queryByText } = render(
      <TabPanel index={0} activeTab={1}>
        <div>Test Content</div>
      </TabPanel>
    );

    expect(queryByText("Test Content")).not.toBeInTheDocument();
  });
});
