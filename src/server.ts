import express from "express";

const app = express();

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/api/resource", (_req, res) => {
  res.json({ data: "ok" });
});

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => {
  console.log(`listening on :${port}`);
});
