/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (method, url, data, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  //  if (method === "GET") {
  try {
    xhr.open(method, url, [async, data.mail, data.password]);
    xhr.send(data);
    if (xhr.readyState === 4 && xhr.status === 200) {
      const answer = JSON.parse(xhr.responseText);
      console.log(answer); //   здесь будет positive callback
    }
  } catch (e) {
    // перехват сетевой ошибки
    callback(e);
    //}
  }
};

createRequest(
  "GET",
  "http://localhost:5500/public/",
  { mail: "ivan@biz.pro", password: "odinodin" },
  () => console.log("error") //negative callback
);
