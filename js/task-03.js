const images = [
    {
        url:
            "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
    },
    {
        url:
            "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        url:
            "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
];

// const galleryRef = document.querySelector("#gallery");
// let markUp = "";
// images.forEach((elem) => {
//     markUp += `<li><img src="${elem.url}" alt="${elem.alt}"></li>`;
// });
// galleryRef.insertAdjacentHTML("afterbegin", markUp);

//

const galleryList = document.querySelector("#gallery");
const createGallery = ({ url, alt }) =>
    `<li class="list__item"><img src="${url}" alt="${alt}" width = 300 class="list__item--img"></li>`;
const createMarkup = images.reduce(
    (acc, item) => acc + createGallery(item),
    ""
);
galleryList.insertAdjacentHTML("afterbegin", createMarkup);
