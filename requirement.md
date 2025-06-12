<!-- container
body append(container)
main-image div
container append(main-image)
alll-images div
container append(all-images) -->
<!-- const images = [
  {
    description: "Lady with a Teddy",
    url: "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
  },
  {
    description: "Girl with camera",
    url: "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg",
  },
  {
    description: "Beautiful Girl with Glasses",
    url: "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg",
  },
  {
    description: "Redhead with frackles",
    url: "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg",
  },
  {
    description: "Girl in black dress",
    url: "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg",
  },
  {
    description: "Girl Sitting on Chair",
    url: "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg",
  },
];
const mainContainer = document.createElement('div')
mainContainer.className = 'wrapper'
document.body.appendChild(mainContainer)

const pervBtn = document.createElement('button')
pervBtn.textContent ='<'
pervBtn.className = 'prev-btn'
mainContainer.appendChild(pervBtn)

const imgContainer = document.createElement('img')
imgContainer.src = images[0].url
mainContainer.appendChild(imgContainer)

const nextBtn = document.createElement('button')
nextBtn.textContent ='>'
nextBtn.className = 'next-btn'
mainContainer.appendChild(nextBtn)

const allImages = document.createElement('div')
allImages.className = 'all-image'
document.body.appendChild(allImages)


images.forEach((img) => {
  const container = document.createElement("button");
  container.className = 'container'
  // document.body.appendChild(container)
  container.addEventListener('click',()=>{
    imgContainer.src =  imgCard.src
  })
  
  const imgCard = document.createElement("img");
  imgCard.src = img.url;

  container.appendChild(imgCard);
  allImages.appendChild(container)
});
  
let index =0


nextBtn.addEventListener('click',()=>{
  index = (index +1)% images.length
  imgContainer.src = images[index].url
})
pervBtn.addEventListener('click',()=>{
  index = (index - 1 + images.length)%images.length
  imgContainer.src = images[index].url
}) -->