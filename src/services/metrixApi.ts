const fetchPlayerUrl: URL = new URL("https://discgolfmetrix.com/api.php?content=my_competitions");

async function fetchPlayerCompetitions(integrationCode: string): Promise<number[]> {
  return new Promise<number[]>((resolve, reject) => {
    fetchPlayerUrl.searchParams.append("code", integrationCode);
    const url = fetchPlayerUrl.toString();
    fetchPlayerUrl.searchParams.delete("code");
    console.log(url.toString());

    fetch(url)
      .then(async (res) => {
        const data = res.json();
        data
          .then((data) => {
            resolve(data.my_competitions);
          })
          .catch((err) => {
            reject(`JSON parsing of request failed : ${err}`);
          });
      })
      .catch((err) => {
        reject(`Fetching player competitions failed: ${err}`);
      });
  });
}

export { fetchPlayerCompetitions };
