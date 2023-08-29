class FilmsApi {
  async getFilms() {
    try {
      const response = await fetch('https://leelachakra.com/resource/stargate/data.json');
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  }
}

export const filmsApi = new FilmsApi();
