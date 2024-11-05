import { generateId } from "../../../backend/utils/generateId";

describe("Checking generateId function", () => {
  it("Should return valid ID", () => {
    const res = generateId();
    expect(res.toString()).toHaveLength(8);
  });
});
