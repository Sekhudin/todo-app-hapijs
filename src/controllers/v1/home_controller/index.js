const HomeController = (req, res) => {
  return res.view("v1/home", { title: "home" });
};

module.exports = {
  HomeController,
};
