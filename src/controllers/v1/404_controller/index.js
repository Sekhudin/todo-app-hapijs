const NotFoundController = (req, res) => {
  return res.view("v1/404",{title:'Not Found'}).code(404);
};


module.exports = {
    NotFoundController
};

