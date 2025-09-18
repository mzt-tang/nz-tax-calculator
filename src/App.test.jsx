import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("Tax calculator, amount ot pay for income", () => {
  it("10000 to be 1050", () => {
    render(<App />);

    const input = document.getElementById("income-amount");
    fireEvent.change(input, { target: { value: "10000" } });

    expect(screen.getByText("NZ$1,050.00")).toBeInTheDocument();
  });
  it("35000 to be 5033", () => {
    render(<App />);

    const input = document.getElementById("income-amount");
    fireEvent.change(input, { target: { value: "35000" } });

    expect(screen.getByText("NZ$5,033.00")).toBeInTheDocument();
  });
  it("100000 to be 22877.50", () => {
    render(<App />);

    const input = document.getElementById("income-amount");
    fireEvent.change(input, { target: { value: "100000" } });

    expect(screen.getByText("NZ$22,877.50")).toBeInTheDocument();
  });
  it("220000 to be 64877.50", () => {
    render(<App />);

    const input = document.getElementById("income-amount");
    fireEvent.change(input, { target: { value: "220000" } });

    expect(screen.getByText("NZ$64,877.50")).toBeInTheDocument();
  });
});
