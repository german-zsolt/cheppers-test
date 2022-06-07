const httpProxy = require("http-proxy");

httpProxy
  .createProxyServer({
    target: "https://opentdb.com",
    changeOrigin: true,
  })
  .on("proxyRes", function (proxyRes, req, res) {
    const body = [];
    proxyRes.on("data", function (chunk) {
      body.push(chunk);
    });
    proxyRes.on("end", function () {
      const text = body.join("");
      console.log(text, "\n");
      res.end(text);
    });
  })
  .listen(4000);
