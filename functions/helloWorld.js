exports.handler = async (event, context) => {
  // let's return a JSON response that looks like: { hello: "world" }
  // bumping it
  return {
    statusCode: 200,
    body: JSON.stringify({ hello: "world"}),
  };
};
