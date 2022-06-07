const data = JSON.stringify(require("./test_response.json"));

require("http")
  .createServer(function (req, res) {
    res.setHeader("access-control-allow-origin", "*");
    res.setHeader("cache-control", "no-store, no-cache, must-revalidate");
    res.setHeader("content-type", "application/json");
    res.end(data);
  })
  .listen(4000);

console.log("Mock server started");
