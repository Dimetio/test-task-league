const BASE_URL = "https://api.stackexchange.com/2.3";
const queries = "order=desc&sort=activity&site=stackoverflow";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return res.json().then((data) => {
    throw new Error(data.message);
  });
};

const headers = {
  "Content-type": "application/json",
  Accept: "application/json",
};

const request = (url, options) => {
  return fetch(url, options).then((res) => checkResponse(res));
};

export const getSearch = (value) => {
  return request(`${BASE_URL}/search?intitle=${value}&${queries}`);
};

export const getTopQuestions = (id) => {
  return request(
    `${BASE_URL}/users/${id}/questions?order=desc&sort=votes&site=stackoverflow`
  );
};

export const getTopTagQuestions = (tag) => {
  console.log(`${BASE_URL}/tags/${tag}/faq?site=stackoverflow`)
  return request(`${BASE_URL}/tags/${tag}/faq?site=stackoverflow`);
};

export const getAnswers = (id) => {
  console.log(`${BASE_URL}/questions/${id}/answers?order=desc&sort=votes&site=stackoverflow`)
  return request(
    `${BASE_URL}/questions/${id}/answers?order=desc&sort=votes&site=stackoverflow`
  );
};
