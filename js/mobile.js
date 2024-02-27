const loadPhone = async (searchfield) =>{
  const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchfield}`);
  const data = await res.json();
  const phone = data.data;
  displayPhones(phone);
}


const displayPhones = phones => {
const phoneContainer = document.getElementById('phone-container');

phoneContainer.textContent = '';
  phones.forEach(phone =>{
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card w-96 bg-gray-100 p-4 shadow-xl`;
    phoneCard.innerHTML = `<figure><img src="${phone.image}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div> `;

      phoneContainer.appendChild(phoneCard);

    
  });
}

const clickHandlers = () => {
  const searchButton = document.getElementById('search-button')
  const searchfield = searchButton.value;
  loadPhone(searchfield);

}

