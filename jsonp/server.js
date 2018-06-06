const http = require('http');
const urllib = require('url');
const  httpdispatcher = require('httpdispatcher');
const dispatcher = new httpdispatcher();

const PORT = 1112;

function handleRequest(req, res) {
    try {
        console.log(req.url);

        dispatcher.dispatch(req, res);
    }catch(err) {
        console.log(err);
    }
}

const server = http.createServer(handleRequest);

dispatcher.onGet('/getPerson', function (req, res, next) {
  const data = {'name': 'Jchermy', 'company': 'dog company'};
  const params = urllib.parse(req.url, true);

  if(params.query && params.query.callback) {
      let str = `${params.query.callback}(${JSON.stringify(data)})`;
      res.write(str);
      res.end();
  }else {
      res.write(JSON.stringify(data));
      res.end();
  }
})

server.listen(PORT, function () {
    console.log("server listening on http://localhost: %s", PORT);
  })

