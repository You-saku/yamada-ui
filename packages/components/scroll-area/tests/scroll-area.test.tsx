import { a11y, render } from "@yamada-ui/test"
import { ScrollArea } from "../src"

describe("<ScrollArea/>", () => {
  it("should pass a11y test", async () => {
    await a11y(<ScrollArea></ScrollArea>)
  })
  it("always scrollbar display", async () => {
    render(<ScrollArea type="always"></ScrollArea>)
  })
})
