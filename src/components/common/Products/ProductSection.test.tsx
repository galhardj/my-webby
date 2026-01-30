import ProductSection from "./ProductSection";
import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";
import { mockProducts, mockCategories } from "@/src/__mocks__/domain/products";

describe("ProductSection", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    render(
      <ProductSection
        productList={mockProducts}
        allCategories={mockCategories}
      />,
    );
  });

  describe("Buttons", () => {
    const expectButtonToExist = (buttonId: string) =>
      expect(screen.getByTestId(buttonId)).toBeInTheDocument();
    const expectButtonNotToExist = (buttonId: string) =>
      expect(screen.queryByTestId(buttonId)).not.toBeInTheDocument();

    beforeEach(() => {
      expectButtonToExist("show-more-products");
      expectButtonToExist("show-all-products");
      expectButtonNotToExist("minimize-product-list");
    });

    it("clicks 'show more' button", async () => {
      await user.click(screen.getByTestId("show-more-products"));

      expectButtonToExist("show-more-products");
      expectButtonToExist("show-all-products");
      expectButtonToExist("minimize-product-list");
    });

    it("clicks 'show all' button", async () => {
      await user.click(screen.getByTestId("show-all-products"));

      expectButtonNotToExist("show-more-products");
      expectButtonNotToExist("show-all-products");
      expectButtonToExist("minimize-product-list");
    });

    it("clicks 'minimize' button", async () => {
      await user.click(screen.getByTestId("show-all-products"));
      await user.click(screen.getByTestId("minimize-product-list"));

      expectButtonToExist("show-more-products");
      expectButtonToExist("show-all-products");
      expectButtonNotToExist("minimize-product-list");
    });
  });

  describe("Sort & Search filter", () => {
    const fireType = mockCategories[2];

    const expectProductToExist = (product: string) =>
      expect(
        screen.getByRole("button", { name: new RegExp(product, "i") }),
      ).toBeInTheDocument();

    const expectProductNotToExist = (product: string) =>
      expect(
        screen.queryByRole("button", { name: new RegExp(product, "i") }),
      ).not.toBeInTheDocument();

    const filterSearchBox = async (query: string) => {
      const input = screen.getByTestId("filter-product");

      await user.clear(input);
      await user.type(input, query);
    };

    const sortByCategory = async (category: string) => {
      await user.selectOptions(screen.getByRole("combobox"), category);
    };

    const resetFilter = async () => {
      await user.click(
        screen.getByRole("button", { name: /clear product section filters/i }),
      );
    };

    beforeEach(() => {
      ["bulbasaur", "charmander", "charmeleon", "squirtle"].forEach((name) =>
        expectProductToExist(name),
      );
    });

    it("filters products based on the text query", async () => {
      await filterSearchBox("bul");

      expectProductToExist("bulbasaur");
      expectProductNotToExist("charmander");
      expectProductNotToExist("charmeleon");
      expectProductNotToExist("squirtle");
    });

    it("sorts products of a specific category", async () => {
      await sortByCategory(fireType);

      expectProductNotToExist("bulbasaur");
      expectProductToExist("charmander");
      expectProductToExist("charmeleon");
      expectProductNotToExist("squirtle");
    });

    it("sorts & searches & clicks reset button to clear filter", async () => {
      await sortByCategory(fireType);
      await filterSearchBox("leon");

      expectProductNotToExist("bulbasaur");
      expectProductNotToExist("charmander");
      expectProductToExist("charmeleon");
      expectProductNotToExist("squirtle");

      await resetFilter();

      ["bulbasaur", "charmander", "charmeleon", "squirtle"].forEach((name) =>
        expectProductToExist(name),
      );
    });
  });

  describe("ProductDetail modal", () => {
    const expectProductShowcasedInModal = (
      name: string,
      dialog: HTMLElement,
    ) => {
      expect(
        within(dialog).getByAltText(new RegExp(name, "i")),
      ).toBeInTheDocument();
      expect(
        within(dialog).getByRole("heading", { name: new RegExp(name, "i") }),
      ).toBeInTheDocument();
      expect(within(dialog).getByRole("link")).toHaveAttribute(
        "href",
        expect.stringContaining(name),
      );
    };

    const expectProductNotShowcasedInModal = (
      name: string,
      dialog: HTMLElement,
    ) => {
      expect(
        within(dialog).queryByAltText(new RegExp(name, "i")),
      ).not.toBeInTheDocument();
      expect(
        within(dialog).queryByRole("heading", { name: new RegExp(name, "i") }),
      ).not.toBeInTheDocument();
      expect(within(dialog).queryByRole("link")).not.toHaveAttribute(
        "href",
        expect.stringContaining(name),
      );
    };

    it("appears for a specific product clicked from the product list", async () => {
      await user.click(screen.getByRole("button", { name: /bulbasaur/i }));

      const dialog = screen.getByRole("dialog");
      expectProductShowcasedInModal("bulbasaur", dialog);
      expectProductNotShowcasedInModal("charmander", dialog);
    });
  });
});
