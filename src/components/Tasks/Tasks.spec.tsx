import { render, fireEvent, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Tasks from "./Tasks";

describe("Tasks Components", () => {
  const worker = setupServer(
    rest.get(
      "https://jsonplaceholder.typicode.com/todos",
      async (req, res, ctx) => {
        return res(
          ctx.json([
            {
              userId: 1,
              id: 1,
              title: "delectus aut autem",
              completed: false,
            },
          ])
        );
      }
    )
  );

  beforeAll(() => {
    worker.listen();
  });

  beforeEach(() => {
    worker.listHandlers();
  });

  it("should fetch and show on button click", async () => {
    render(<Tasks />);

    const button = screen.getByText("Get tasks from API");

    fireEvent.click(button);

    await screen.findByText("delectus aut autem");
  });

  it("should error msg on fetch error", async () => {
    worker.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/todos",
        async (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    render(<Tasks />);

    const button = screen.getByText("Get tasks from API");

    fireEvent.click(button);

    await screen.findByText("error");
  });
});

export default {};
