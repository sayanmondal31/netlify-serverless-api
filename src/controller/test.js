exports.dummytest = (req, res, next) => {
  res.json({
    test: "test success",
  });
};

exports.dummytesttwo = (req, res, next) => {
  res.json({
    test: "test success two",
  });
};
