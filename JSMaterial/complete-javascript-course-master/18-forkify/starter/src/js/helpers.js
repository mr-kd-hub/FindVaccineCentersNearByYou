export const getJSON = async url => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.status, data.data);

    //if bad request occures
    if (!res.ok) throw new Error(`errror ${res.status}`);
    return data;
  } catch (e) {
    alert(e);
    console.error(e);
  }
};
