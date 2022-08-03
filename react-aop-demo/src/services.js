export function login(username, password) {
  return fetch("open-platform-demo-dev/callback", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => {
    if (res.status === 200) {
      const csrf = res.headers.get("x-csrf-token");
      console.log("csrf", csrf);
      localStorage.setItem("aop-csrf-token", csrf);
      return true;
    }
    return false;
  });
}
export function isAuth() {
  return fetch("/open-platform-demo-dev/ws/app/info", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-Token": localStorage.getItem("aop-csrf-token"),
    },
  }).then((res) => {
    return res.status === 200;
  });
}
export function fetchCountries() {
  return fetch(
    "/open-platform-demo-dev/ws/rest/com.axelor.contact.db.Country/search",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": localStorage.getItem("aop-csrf-token"),
      },
      body: JSON.stringify({
        fields: ["code", "name"],
        data: {},
        limit: 40,
        offset: 0,
      }),
    }
  ).then((res) => res.json());
}

export function removeAll(id, version) {
  return fetch(
    "/open-platform-demo-dev/ws/rest/com.axelor.contact.db.Country/removeAll",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": localStorage.getItem("aop-csrf-token"),
      },
      body: JSON.stringify({
        records: [{ id, version }],
      }),
    }
  ).then((res) => res.json());
}

export function createData(name, code) {
  return fetch(
    "http://localhost:3000/open-platform-demo-dev/ws/rest/com.axelor.contact.db.Country",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": localStorage.getItem("aop-csrf-token"),
      },
      body: JSON.stringify({
        data: { code, name },
      }),
    }
  ).then((res) => res.json());
}

export function editData(obj) {
  return fetch(
    "/open-platform-demo-dev/ws/rest/com.axelor.contact.db.Country",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": localStorage.getItem("aop-csrf-token"),
      },
      body: JSON.stringify({
        records: [
          {
            id: obj.id,
            version: obj.version,
            code: obj.code,
            name: obj.name,
          },
        ],
      }),
    }
  ).then((res) => res.json());
}

export function searchQueries(value) {
  return fetch(
    "/open-platform-demo-dev/ws/rest/com.axelor.contact.db.Country/search",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": localStorage.getItem("aop-csrf-token"),
      },
      body: JSON.stringify({
        data: {
          criteria: [
            { fieldName: "name", operator: "like", value: value },
            { fieldName: "code", operator: "like", value: value },
          ],
        },
      }),
    }
  ).then((res) => res.json());
}
