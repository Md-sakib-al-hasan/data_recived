const loaddata = async () => {
    const res= await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    if(data.status == false){
        document.write("something rong");
    }else{
        displaycard(data.data.tools);
    }

}
const displaycard = (hub)=> {

    hub.forEach(element => {
        console.log(element);
      const cardContainer = document.getElementById('card_container');
      const createCard = document.createElement('div');
      createCard.classList = `card w-96 bg-base-100 shadow-xl`
      createCard.innerHTML = ` <figure><img src="${element?.image ? element?.image : "https://i.ibb.co/mFS1x1J/images.jpg" }" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>`;
      cardContainer.appendChild(createCard);
    });
}
loaddata();