const reviews = [
    {
        name: 'Fernada',
        job: 'Ux Designer',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt omnis dignissimos fugiat quibusdam. Quae expedita, itaque, animi sint nam qui velit delectus quam ad debitis iusto fugiat soluta quia ipsam voluptas necessitatibus numquam praesentium. Laudantium dolor quia possimus facilis modi distinctio ipsam, similique expedita necessitatibus, soluta vero consequatur quidem voluptas!",
    },
    
    {
        id: 1,
        name: 'Susan Smith',
        job: 'Web Devolver',
        image: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up",
    },

    {
        id: 2,
        name: 'Anna Johnson',
        job: 'Web Designer',
        image: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
        text: "Helvetica artisan kindfolk thundercats. Disrupt glossier gastropub deep v vice frazen...",
    },

    {
        id: 3,
        name: 'Peter Jones',
        job: 'Intern',
        image: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
        text: "Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa.",
    },

    {
        id: 4,
        name: 'Bill Anderson',
        job: 'The Boss',
        image: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
        text: "Edilson bulp put a bird on it humblebrag, marfa pok pok heirloom fashion axe crazy stumptown vanmo actually seitan.",
    },
];

let backPeople = document.getElementById('back');
let nextPeople = document.getElementById('next');
let supriseButton = document.getElementsByClassName('random-button')[0];
let indexPeople = 0;

backPeople.addEventListener('click', () => {
    if(indexPeople == 0){
        indexPeople = 4;
        newPeople(indexPeople);
    } else {
        indexPeople--;
        newPeople(indexPeople);
    }
});

nextPeople.addEventListener('click', () => {
    if(indexPeople == 4){
        indexPeople = 0;
        newPeople(indexPeople);
    } else {
        indexPeople++;
        newPeople(indexPeople);
    }
});

supriseButton.addEventListener("click", () =>{
    const suprisePeople = Math.floor(Math.random() * reviews.length);
    newPeople(suprisePeople);
});

function newPeople(index) {
    document.getElementById('name').innerHTML = reviews[index].name;
    document.getElementById('job').innerHTML = reviews[index].job;
    document.getElementById('image').setAttribute("src", reviews[index].image)
    document.getElementById('text').innerHTML = reviews[index].text;
};
