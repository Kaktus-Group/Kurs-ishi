import { useState } from "react";

const DataProducts = [
  {
    type: "Пицца",
    products: [
      {
        Name: "Bucco",
        Price: 600,
        title:
          "Bucco specializes for children. It has much energy which is important the youngest, it is made from 350 gr flour and 5 eggs and other products.",
        img: "https://io.bellissimo.uz/images/30a219fa-4065-4390-9fb7-d71b5d6974e2.jpg",
        info: "New",
      },
      {
        Name: "Nano",
        Price: 700,
        title:
          "Nano specializes for children. It has much energy which is important the youngest, it is made from 450 gr flour and 5 eggs and other products.",
        img: "https://io.bellissimo.uz/images/07b2af79-95e0-48ae-8962-3b29fdfcb6d4.jpg",
        info: "",
      },
      {
        Name: "Spahetti",
        Price: 500,
        title:
          "Spahetti specializes for children. It has much energy which is important the youngest, it is made from 300 gr flour and 5 eggs and other products.",
        img: "https://io.bellissimo.uz/images/32dd0b5b-8fc0-400d-8ad0-cf929a2538ed.jpg",
        info: "",
      },

      {
        Name: "Big Nano",
        Price: 900,
        title:
          "Big Nano specializes for family. It has much energy which is important the youngest, it is made from 500 gr flour and 5 eggs and other products.",
        img: "https://foodtodo.ru/image/catalog/pizza/kisspng-sushi-pizza-italian-cuisine-makizushi-japanese-cui-tomato-pizza-5a8a2908a21c62.600534321519003912664.png",
        info: "New",
      },
    ],
  },
  {
    type: "Напитки",
    products: [
      {
        Name: "Coca-Cola",
        Price: 100,
        title: "Delicious",
        img: "https://cdnprod.mafretailproxy.com/sys-master-root/hbd/h4f/14414958919710/33639_main.jpg_1700Wx1700H",
        info: "",
      },
      {
        Name: "Fanta-Cola",
        Price: 200,
        title: "shocked",
        img: "https://pictures.grocerapps.com/original/grocerapp-fanta-orange-soft-drink-5f4db989a122b.jpeg",
        info: "",
      },
      {
        Name: "Pepsi-Cola",
        Price: 100,
        title: "Delicious",
        img: "http://maxmart.uz/image/cache/catalog/pepsi-1.5l-500x500-product_popup.jpg",
        info: "",
      },
      {
        Name: "Coffee",
        Price: 100,
        title: "Delicious",
        img: "https://pngicon.ru/file/uploads/kofe.png",
        info: "",
      },
    ],
  },
  {
    type: "Супы",
    products: [
      {
        Name: "Chicken soup",
        Price: 1000,
        title: "Taste",
        img: "https://www.vippng.com/png/full/173-1731981_chicken-thai-curry.png",
        info: "",
      },
      {
        Name: "Beef soup",
        Price: 1300,
        title: "Delicous",
        img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/5/4/4/FNM-060112_Low-Country-Shrimp-Chowder_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382546123651.jpeg",
        info: "",
      },
    ],
  },
  {
    type: "Салаты",
    products: [
      {
        Name: "Olivia",
        Price: 300,
        title: "Not very good",
        img: "https://zira.uz/wp-content/uploads/2018/04/olivye-1.jpg",
        info: "",
      },
    ],
  },
  {
    type: "Паста",
    products: [
      {
        Name: "Alien",
        Price: 600,
        title: "Amazing",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/linguine-with-garlic-butter-prawns-10-pastas-make-in-minutes-0d94d96.jpg",
        info: "",
      },
    ],
  },
  {
    type:"Cоус",
    products:[
      {
        Name: "Сырный соус",
        Price: 120,
        title: "Amazing",
        img: "https://static.tildacdn.com/tild6364-6237-4162-b464-306431366337/photo.jpg",
        info: "",
      },
      {
        Name: "Барбекю",
        Price: 120,
        title: "Amazing",
        img: "https://news.unipack.ru/light_editor_img/images/2016-7-5/file1467486852.jpg",
        info: "",
      },
      {
        Name: "Ранч",
        Price: 120,
        title: "Amazing",
        img: "https://i.pinimg.com/originals/db/e4/b5/dbe4b508357cad8b74431737e5ad7b32.jpg",
        info: "",
      },
      {
        Name: "Сгущёнка",
        Price: 120,
        title: "Amazing",
        img: "https://arcept.ru/sousy/domashnii-karamelny-sous-dlya-desertov/domashnii-karamelny-sous-dlya-desertov-ready0-recept.jpg",
        info: "",
      },
    ],
  },
];
export default DataProducts;
