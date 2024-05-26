module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: { banana: 4, apple: 3 },
        input: event,
      },
      null,
      2
    ),
  };
};
