import AppHeader from "@/components/AppHeader";
import { mount } from "@vue/test-utils";

describe("AppHeader", () => {
  it("Should not show logout button if the user is not logged-in", async () => {
    const wrapper = mount(AppHeader);
    await wrapper.setData({ loggedIn: false });
    const Button = wrapper.find("button").isVisible();

    expect(Button).toBe(false);
  });

  it("Should show logout button if the user is logged-in", async () => {
    const wrapper = mount(AppHeader);
    await wrapper.setData({ loggedIn: true });
    const Button = wrapper.find("button").isVisible();

    expect(Button).toBe(true);
  });
});
