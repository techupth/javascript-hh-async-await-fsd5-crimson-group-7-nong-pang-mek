// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
const johnProfile = async () => {
  try {
    const userProfile = await getJohnProfile();
    console.log(userProfile);
  } catch (error) {
    console.log(error);
  }
};

console.log(johnProfile());
