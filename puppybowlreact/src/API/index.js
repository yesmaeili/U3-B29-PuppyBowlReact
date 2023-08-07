
export async function fetchPlayers() {
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-b/players"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching players:", error);
    return [];
  }
}

async function main() {
  try {
    const players = await fetchPlayers();
    if (players) {
      console.log('All players:', players);
    } else {
      console.log('Failed to fetch players.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
main();