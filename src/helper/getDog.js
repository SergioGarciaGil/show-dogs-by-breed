const getDog = async (breedId) => {
  let url;
  if (breedId === 0 || !breedId) {
    url = "https://api.thedogapi.com/v1/images/search";
  } else {
    url = "https://api.TheDogAPI.com/v1/images/search?breed_ids=" + breedId;
  }

  const res = await fetch(url);
  const [data] = await res.json(); //data desde la posicion cer [data]

  //ahoara vamos a estraer los siguientes atributos

  let {
    url: image,
    breeds: [breed], //desectructuramos y le ponemos un alias [breed] posicion cero
  } = data;

  if (!breed) {
    breed = {
      id: 0,
      name: "random",
    };
  }
  console.log(data);
  const dog = {
    image,
    breed,
  };
  console.log(dog);
  return dog;
};

export default getDog;
