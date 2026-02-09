import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "@/src/components/common/Forms/Login";
import { getLoginUserData } from "@/src/lib/api/login";

const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
}));

jest.mock("@/src/lib/api/login", () => ({
  getLoginUserData: jest.fn(),
}));

jest.mock("@/src/components/common/ImageNext", () => () => (
  <div data-testid="mock-image" />
));

const mockedGetLoginUserData = getLoginUserData as jest.MockedFunction<
  typeof getLoginUserData
>;

describe("LoginForm", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the email and password inputs and login button", () => {
    render(<LoginForm />);

    expect(screen.getByLabelText(/username or email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /login/i }),
    ).toBeInTheDocument();
  });

  it("shows error when submitting with empty fields", async () => {
    render(<LoginForm />);

    await user.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.getByText("Empty email or password")).toBeInTheDocument();
    expect(mockedGetLoginUserData).not.toHaveBeenCalled();
  });

  it("shows error when email format is invalid", async () => {
    render(<LoginForm />);

    await user.type(screen.getByLabelText(/username or email/i), "not-an-email");
    await user.type(screen.getByLabelText(/password/i), "password123");
    await user.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.getByText("Incorrect email format")).toBeInTheDocument();
    expect(mockedGetLoginUserData).not.toHaveBeenCalled();
  });

  it("calls getLoginUserData and redirects on successful login", async () => {
    mockedGetLoginUserData.mockResolvedValueOnce({} as never);
    render(<LoginForm />);

    await user.type(
      screen.getByLabelText(/username or email/i),
      "user@example.com",
    );
    await user.type(screen.getByLabelText(/password/i), "password123");
    await user.click(screen.getByRole("button", { name: /login/i }));

    expect(mockedGetLoginUserData).toHaveBeenCalledWith(
      "user@example.com",
      "password123",
    );
    expect(mockPush).toHaveBeenCalledWith("/about");
  });

  it("shows error message when login request fails", async () => {
    mockedGetLoginUserData.mockRejectedValueOnce(new Error("Invalid credentials"));
    render(<LoginForm />);

    await user.type(
      screen.getByLabelText(/username or email/i),
      "user@example.com",
    );
    await user.type(screen.getByLabelText(/password/i), "wrong-password");
    await user.click(screen.getByRole("button", { name: /login/i }));

    expect(
      screen.getByText(
        "Unexpected error, with message: Invalid credentials",
      ),
    ).toBeInTheDocument();
    expect(mockPush).not.toHaveBeenCalled();
  });

  it("clears error when typing in the email field", async () => {
    render(<LoginForm />);

    await user.click(screen.getByRole("button", { name: /login/i }));
    expect(screen.getByText("Empty email or password")).toBeInTheDocument();

    await user.type(screen.getByLabelText(/username or email/i), "a");
    expect(
      screen.queryByText("Empty email or password"),
    ).not.toBeInTheDocument();
  });

  it("clears error when typing in the password field", async () => {
    render(<LoginForm />);

    await user.click(screen.getByRole("button", { name: /login/i }));
    expect(screen.getByText("Empty email or password")).toBeInTheDocument();

    await user.type(screen.getByLabelText(/password/i), "a");
    expect(
      screen.queryByText("Empty email or password"),
    ).not.toBeInTheDocument();
  });

  it("toggles password visibility when clicking the eye button", async () => {
    render(<LoginForm />);

    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toHaveAttribute("type", "password");

    const toggleButton = passwordInput
      .closest(".relative")!
      .querySelector("button")!;

    await user.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "text");

    await user.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });
});
