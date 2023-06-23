async function fetchPlayerCompetitions(integrationCode: string): Promise<number[]> {
  const fetchPlayerUrl: URL = new URL("https://discgolfmetrix.com/api.php?content=my_competitions");
  fetchPlayerUrl.searchParams.append("code", integrationCode);
  const url = fetchPlayerUrl.toString();

  return new Promise<number[]>((resolve, reject) => {
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

interface Competition {}

interface CompetitionResponse {
  Competition: Competition;
}

/**
 *
 * @param competitionId
 * @param playerCode Optional, needed to return private competition.
 * @returns  promise containing that resolves to the competition.
 */
async function fetchCompetition(competitionId: number, playerCode?: string) {
  const fetchCompetitionUrl = new URL("https://discgolfmetrix.com/api.php?content=result");
  fetchCompetitionUrl.searchParams.append("id", competitionId.toString());
  if (playerCode) {
    fetchCompetitionUrl.searchParams.append("code", playerCode);
  }

  return new Promise<CompetitionResponse>((resolve, reject) => {
    fetch(fetchCompetitionUrl)
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
        reject(`Fetching competition failed: ${err}`);
      });
  });
}

export { fetchPlayerCompetitions, fetchCompetition };
export type { Competition };
