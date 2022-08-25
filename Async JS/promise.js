const mail = "tamerlan@gmail.com";
const password = 12345;
const drinkname = [
  "White water",
  "Beliy Volk",
  "Zolotoe kolco",
  "Grey Cardinal",
];

function getIdByAuth(mail, pass) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (mail === "tamerlan@gmail.com" && pass === 12345) {
              const data = { id: 1991 };
              return resolve(data);
            } else {
              return reject({ err: "Auth failed" });
            }
          }, 2000)
    })
  
}
function getUserList(id) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (id === 1991) {
              const info = { name: "Tamerlan", surname: "Alimardanli", age: 31 };
              return resolve(info);
            } else {
              return reject({ err: "NO user list found!" });
            }
          }, 2500)
        })
  
}
function ageChecker(age) {
 return new Promise((resolve,reject)=>{
    setTimeout(() => {
        let allow = false;
        if (age >= 18) {
          allow = true;
          return resolve(allow);
        } else if (age > 0 && age < 18) {
          return reject(allow);
        } else {
          return reject({ err: "Age failed!" });
        }
      }, 1000)
 })
}
function drinkChecker(allow) {
 return new Promise((resolve,reject)=>{
    setTimeout(() => {
        if (allow === true) {
          return resolve(drinkname);
        } else {
          return reject({ err: "You are little for it!" });
        }
      }, 1500)
 })
}
function getDrinkId(drink) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        const data = { beverageId: 31 };
        if (drink) {
          return resolve(data);
        } else {
          return reject({ err: "Drink not found!" });
        }
      }, 1000)
  })
}
function getDrinkInfo(beverageId) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        if (beverageId) {
          return resolve({
            id: beverageId,
            Name: drinkname[2],
            releaseDate: "12 / 12 / 2020",
            slogan: "Drink and die",
          });
        } else {
          return reject({ err: "Drink info not found!" });
        }
      })
  })
}
getIdByAuth(mail,password)
  .then(
    data => getUserList(data.id)
    .then(
        info=> ageChecker(info.age)
        .then(
            allow=>drinkChecker(allow)
            .then(
                drinkname=>getDrinkId(drinkname[2])
                .then(
                    beverageId=> getDrinkInfo(beverageId)
                    .then(
                        info=>console.log(info)
                        ).catch(err=> console.log(err))
                    ).catch(err=> console.log(err))
                )
            
            ).catch(err=> console.log(err))
        ).
        catch(err=> console.log(err))
    )
    .catch(err=> console.log(err))
