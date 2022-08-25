const mail = "tamerlan@gmail.com";
const password = 12345;
const drinkname = [
  "White water",
  "Beliy Volk",
  "Zolotoe kolco",
  "Grey Cardinal",
];

function getIdByAuth(mail, pass, successCallback, errorCallback) {
  setTimeout(() => {
    if (mail === "tamerlan@gmail.com" && pass === 12345) {
      const data = { id: 1991 };
      return successCallback(data);
    } else {
      return errorCallback({ err: "Auth failed" });
    }
  }, 2000);
}
function getUserList(id, successCallback, errorCallback) {
  setTimeout(() => {
    if (id === 1991) {
      const info = { name: "Tamerlan", surname: "Alimardanli", age: 31 };
      return successCallback(info);
    } else {
      return errorCallback({ err: "NO user list found!" });
    }
  }, 2500);
}
function ageChecker(age, successCallback, errorCallback) {
  setTimeout(() => {
    let allow = false;
    if (age >= 18) {
      allow = true;
      return successCallback(allow);
    } else if (age > 0 && age < 18) {
      return errorCallback(allow);
    } else {
      return errorCallback({ err: "Age failed!" });
    }
  }, 1000);
}
function drinkChecker(allow, successCallback, errorCallback) {
  setTimeout(() => {
    if (allow === true) {
      return successCallback(drinkname);
    } else {
      return errorCallback({ err: "You are little for it!" });
    }
  }, 1500);
}
function getDrinkId(drink, successCallback, errorCallback) {
  setTimeout(() => {
    const data = { beverageId: 31 };
    if (drink) {
      return successCallback(data);
    } else {
      return errorCallback({ err: "Drink not found!" });
    }
  }, 1000);
}
function getDrinkInfo(beverageId, successCallback, errorCallback) {
  setTimeout(() => {
    if (beverageId) {
      return successCallback({
        id: beverageId,
        Name: drinkname[0],
        releaseDate: "12 / 12 / 2020",
        slogan: "Drink and die",
      });
    } else {
      return errorCallback({ err: "Drink info not found!" });
    }
  });
}
getIdByAuth(
  mail,
  password,
  (data) => {
    getUserList(
      data.id,
      (info) => {
        ageChecker(
          info.age,
          (allow) => {
            drinkChecker(
              allow,
              (drinkname) => {
                getDrinkId(
                  drinkname[0],
                  (beverageId)=>{
                  getDrinkInfo(
                    beverageId,
                    (info) => {
                      console.log(info);
                    },
                    (err) => console.log(err)
                  )
              });
              },
              (err) => console.log(err)
            );
          },
          (err) => console.log(err)
        );
      },
      (err) => console.log(err)
    );
  },
  (err) => console.log(err)
);
