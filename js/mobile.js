const loadPhone = async (searchfield, isShowAll) =>{
  const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchfield}`);
  const data = await res.json();
  const phone = data.data;
  displayPhones(phone, isShowAll);
}


const displayPhones = (phones, isShowAll) => {
const phoneContainer = document.getElementById('phone-container');

phoneContainer.textContent = '';

 const showMore = document.getElementById('show-all-button');
if(phones.length > 12 && !isShowAll){
  showMore.classList.remove('hidden');
}
else{
  showMore.classList.add('hidden');
}

if(!isShowAll){
  phones = phones.slice(0,6)
}


  phones.forEach(phone =>{
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card w-96 bg-gray-100 p-4 shadow-xl`;
    phoneCard.innerHTML = `<figure><img src="${phone.image}" alt="Shoes"/></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-center">
        <button class="btn btn-primary">Buy Now</button>
      </div>`;

      phoneContainer.appendChild(phoneCard);

  });
  toggleLoadingSpinner(false);
}

const clickHandlers = (isShowAll) => {
  toggleLoadingSpinner(true);
  const searchButton = document.getElementById('search-button')
  const searchfield = searchButton.value;
  loadPhone(searchfield,isShowAll);

}

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById('loading-spin');
  if(isLoading){
    loadingSpinner.classList.remove('hidden');
  }
  else{
    loadingSpinner.classList.add('hidden');
  }
}

const showAll = () => {
  clickHandlers(true)
} 
// loadPhone();