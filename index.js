function searchData() {
  return {
    num: 1,
    mount: {},
    getMount(num) {
      fetch(`https://mount-recorder-server.herokuapp.com/mounts/${num}`)
        .then((response) => response.json())
        .then((data) => (this.mount = data));
    },
  };
}

function mountData() {
  return {
    mounts: [],
    fetchData() {
      fetch('https://mount-recorder-server.herokuapp.com/mounts')
        .then((response) => response.json())
        .then((data) => data.forEach((mount) => this.mounts.push(mount)));
    },
  };
}
