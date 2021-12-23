import MessageDisplay from "@/components/MessageDisplay";
import { mount } from "@vue/test-utils";
import { getMessage } from "@/services/axios";
import flushPromises from "flush-promises";

jest.mock("@/services/axios");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("MessageDisplay", () => {
  it("Should call the api getMessage and show the data", async () => {
    const mockMessage = "Hello from the DB!";
    getMessage.mockResolvedValueOnce({ text: mockMessage });

    const wrapper = mount(MessageDisplay);

    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);

    const message = wrapper.find("[data-testid='message']").text();
    expect(message).toEqual(mockMessage);
  });

  it("Should display an error when getMessage call fails", async () => {
    const mockError = "Oops! Something went wrong.";
    getMessage.mockRejectedValueOnce(mockError);

    const wrapper = mount(MessageDisplay);

    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);

    const message = wrapper.find("[data-testid='message-error']").text();
    expect(message).toEqual(mockError);
  });
});
