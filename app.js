function notifyUser() {
  console.log("notifyUser function was called!");
}

function myAwesomeFunction(notifyUserCallback) {
  console.log("Running myAwesomeFunction... doing complex task...");
  console.log("Complex task complete. I will notify the user");
  notifyUserCallback();
}
myAwesomeFunction(notifyUser);

function myAwesomeFunction(onCompleteCallback) {
  console.log("Running myAwesomeFunction ...doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  onCompleteCallback();
}
myAwesomeFunction(function () {
  console.log("notifyUser function was called!");
});

function myAwesomeFunction(onSuccessCallback, onFailureCallback) {
  console.log("Running myAwesomeFunction...doing complex tasks...");
  console.log("Complex task complete. I will notify the user");

  const success = Math.random() > 0.5;
  if (success) {
    onSuccessCallback({
      message: "This is the message of success",
    });
  } else {
    onFailureCallback();
  }
}
function onAwesomeSuccess(data) {
  console.log("It was successful: ", data.message);
}
function onAwesomeFailure() {
  console.log("It failed :(");
}
myAwesomeFunction(onAwesomeSuccess, onAwesomeFailure);
