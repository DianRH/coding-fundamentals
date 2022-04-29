fetch("https://api.artic.edu/api/v1/artworks")
.then(value => value.json()
).then(response=> {
  const titles = response.data.map((titles)=> {
    return titles.title
  })
  console.log(titles)
})
.catch(error=> {
  console.log(error);
})



