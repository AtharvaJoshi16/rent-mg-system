import app from "../index";

describe("Testing API Endpoints", () => {
  it("GET /health-check should return Health Check", async () => {
    const res = await app.request("/api/v1/health-check");
    expect(res.status).toBe(200);
  });
});
