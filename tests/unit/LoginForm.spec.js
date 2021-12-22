import { mount } from "@vue/test-utils";
import LoginForm from "@/components/LoginForm";

describe("LoginForm", () => {
  it("Should emit an event with a user data payload", async () => {
    const wrapper = mount(LoginForm);
    const input = wrapper.find("[data-testid='input-name']");

    await input.setValue("Rickson Simões");
    await wrapper.trigger("submit");

    const formSubmittedCalls = wrapper.emitted("formSubmitted");

    expect(formSubmittedCalls).toHaveLength(1);

    const expectedPayload = { name: "Rickson Simões" };

    // expect(wrapper.emitted("formSubmitted")).toStrictEqual([[expectedPayload]]);
    expect(wrapper.emitted("formSubmitted")[0][0]).toMatchObject(
      expectedPayload
    );
  });
});
