import Cart from './Component/Cart'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Navbar from './Component/Navbar'; 
import Home from './Component/Home';
import Mobile from './Mobile';
import Airpods from './Component/Airpods';
import Headphones from './Headphones';
import Charger from './Charger';
import Smartwatch from './Smartwatch';
import Header from './Header';
import { createContext, useState } from 'react';
import Footer1 from './Component/Footer1';

// Exporting myContext from App.jsx To access the Object in Needed Component

export const myContext = createContext('')

// Exporting myContext from App.jsx To access the Object in Needed Component

const App = () => {

  // Object

const obj = [
  {
      "id": 19,
      "title": "Charger",
      "description": "Fast Charger",
      "price": 500,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "charger",
      "thumbnail": "Images/2.png",
      "images": [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      ]
  },
  {
      "id": 18,
      "title": "Charger",
      "description": "Charger",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "charger",
      "thumbnail": "Images/3.png",
      "images": [
          "https://i.dummyjson.com/data/products/2/1.jpg",
          "https://i.dummyjson.com/data/products/2/2.jpg",
          "https://i.dummyjson.com/data/products/2/3.jpg",
          "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
      ]
  },
  {
      "id": 17,
      "title": "Chager",
      "description": "Fast Charger",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "charger",
      "thumbnail": "Images/4.png",
      "images": [
          "https://i.dummyjson.com/data/products/3/1.jpg"
      ]
  },
  {
      "id": 16,
      "title": "Charger",
      "description": "Fast Charger",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "charger",
      "thumbnail": "Images/5.png",
      "images": [
          "https://i.dummyjson.com/data/products/4/1.jpg",
          "https://i.dummyjson.com/data/products/4/2.jpg",
          "https://i.dummyjson.com/data/products/4/3.jpg",
          "https://i.dummyjson.com/data/products/4/4.jpg",
          "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
      ]
  },
  {
      "id": 15,
      "title": "Charger",
      "description": "Charger",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "charger",
      "thumbnail": "Images/6.png",
      "images": [
          "https://i.dummyjson.com/data/products/5/1.jpg",
          "https://i.dummyjson.com/data/products/5/2.jpg",
          "https://i.dummyjson.com/data/products/5/3.jpg"
      ]
  },
  {
      "id": 14,
      "title": "Charger",
      "description": "Charger",
      "price": 249,
      "discountPercentage": 10,
      "rating": 4.8,
      "stock": 100,
      "brand": "Apple",
      "category": "charger",
      "thumbnail": "Images/7.png",
      "images": [
          "https://i.dummyjson.com/data/products/6/1.jpg",
          "https://i.dummyjson.com/data/products/6/2.jpg",
          "https://i.dummyjson.com/data/products/6/3.jpg"
      ]
  },
  {
      "id": 13,
      "title": "Charger",
      "description": "Charger",
      "price": 199,
      "discountPercentage": 5,
      "rating": 4.7,
      "stock": 86,
      "brand": "Samsung",
      "category": "charger",
      "thumbnail": "Images/8.png",
      "images": [
          "https://i.dummyjson.com/data/products/7/1.jpg",
          "https://i.dummyjson.com/data/products/7/2.jpg",
          "https://i.dummyjson.com/data/products/7/3.jpg"
      ]
  },
  {
      "id": 12,
      "title": "Charger",
      "description": "Charger",
      "price": 279,
      "discountPercentage": 15,
      "rating": 4.9,
      "stock": 50,
      "brand": "Sony",
      "category": "charger",
      "thumbnail": "Images/9.png",
      "images": [
          "https://i.dummyjson.com/data/products/8/1.jpg",
          "https://i.dummyjson.com/data/products/8/2.jpg",
          "https://i.dummyjson.com/data/products/8/3.jpg"
      ]
  },
  {
      "id": 11,
      "title": "Charger",
      "description": "Charger",
      "price": 129,
      "discountPercentage": 20,
      "rating": 4.6,
      "stock": 120,
      "brand": "Anker",
      "category": "charger",
      "thumbnail": "Images/10.png",
      "images": [
          "https://i.dummyjson.com/data/products/9/1.jpg",
          "https://i.dummyjson.com/data/products/9/2.jpg",
          "https://i.dummyjson.com/data/products/9/3.jpg"
      ]
  },
  {
      "id": 10,
      "title": "Charger",
      "description": "Charger",
      "price": 39,
      "discountPercentage": 0,
      "rating": 4.5,
      "stock": 200,
      "brand": "Apple",
      "category": "charger",
      "thumbnail": "Images/11.png",
      "images": [
          "https://i.dummyjson.com/data/products/10/1.jpg",
          "https://i.dummyjson.com/data/products/10/2.jpg",
          "https://i.dummyjson.com/data/products/10/3.jpg"
      ]
  },
  {
    "id": 9,
    "title": "Mobile",
    "description": "Mobile",
    "price": 500,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "mobile",
    "thumbnail": "Images/12.png",
    "images": [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
},
{
    "id": 8,
    "title": "Mobile",
    "description": "Mobile",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "mobile",
    "thumbnail": "Images/13.png",
    "images": [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    ]
},
{
    "id": 7,
    "title": "Mobile",
    "description": "Mobile",
    "price": 1249,
    "discountPercentage": 15.46,
    "rating": 4.09,
    "stock": 36,
    "brand": "Samsung",
    "category": "mobile",
    "thumbnail": "Images/14.png",
    "images": [
        "https://i.dummyjson.com/data/products/3/1.jpg"
    ]
},
{
    "id": 6,
    "title": "Mobile",
    "description": "Mobile",
    "price": 280,
    "discountPercentage": 17.91,
    "rating": 4.3,
    "stock": 123,
    "brand": "OPPO",
    "category": "mobile",
    "thumbnail": "Images/15.png",
    "images": [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
    ]
},
{
    "id": 5,
    "title": "Mobile",
    "description": "Mobile",
    "price": 499,
    "discountPercentage": 10.58,
    "rating": 4.09,
    "stock": 32,
    "brand": "Huawei",
    "category": "mobile",
    "thumbnail": "Images/16.png",
    "images": [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg"
    ]
},
{
    "id": 4,
    "title": "Mobile",
    "description": "Mobile",
    "price": 249,
    "discountPercentage": 10,
    "rating": 4.8,
    "stock": 100,
    "brand": "Apple",
    "category": "mobile",
    "thumbnail": "Images/17.png",
    "images": [
        "https://i.dummyjson.com/data/products/6/1.jpg",
        "https://i.dummyjson.com/data/products/6/2.jpg",
        "https://i.dummyjson.com/data/products/6/3.jpg"
    ]
},
{
    "id": 3,
    "title": "Mobile",
    "description": "Mobile",
    "price": 199,
    "discountPercentage": 5,
    "rating": 4.7,
    "stock": 86,
    "brand": "Samsung",
    "category": "mobile",
    "thumbnail": "Images/18.png",
    "images": [
        "https://i.dummyjson.com/data/products/7/1.jpg",
        "https://i.dummyjson.com/data/products/7/2.jpg",
        "https://i.dummyjson.com/data/products/7/3.jpg"
    ]
},
{
    "id": 2,
    "title": "Mobile",
    "description": "Mobile",
    "price": 279,
    "discountPercentage": 15,
    "rating": 4.9,
    "stock": 50,
    "brand": "Sony",
    "category": "mobile",
    "thumbnail": "Images/19.png",
    "images": [
        "https://i.dummyjson.com/data/products/8/1.jpg",
        "https://i.dummyjson.com/data/products/8/2.jpg",
        "https://i.dummyjson.com/data/products/8/3.jpg"
    ]
},
{
    "id": 1,
    "title": "Mobile",
    "description": "Mobile",
    "price": 129,
    "discountPercentage": 20,
    "rating": 4.6,
    "stock": 120,
    "brand": "Anker",
    "category": "mobile",
    "thumbnail": "Images/20.png",
    "images": [
        "https://i.dummyjson.com/data/products/9/1.jpg",
        "https://i.dummyjson.com/data/products/9/2.jpg",
        "https://i.dummyjson.com/data/products/9/3.jpg"
    ]
},
{
  "id": 20,
  "title": "Smart Watch",
  "description": "Smart Watch",
  "price": 500,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smart watch",
  "thumbnail": "Images/22.png",
  "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  ]
},
{
  "id": 21,
  "title": "Smart Watch",
  "description": "Smart Watch",
  "price": 899,
  "discountPercentage": 17.94,
  "rating": 4.44,
  "stock": 34,
  "brand": "Apple",
  "category": "smart watch",
  "thumbnail": "Images/23.png",
  "images": [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
  ]
},
{
  "id": 22,
  "title": "Smart Watch",
  "description": "Smart Watch",
  "price": 1249,
  "discountPercentage": 15.46,
  "rating": 4.09,
  "stock": 36,
  "brand": "Samsung",
  "category": "smart watch",
  "thumbnail": "Images/24.png",
  "images": [
      "https://i.dummyjson.com/data/products/3/1.jpg"
  ]
},
{
  "id": 23,
  "title": "Smart Watch",
  "description": "Smart Watch",
  "price": 280,
  "discountPercentage": 17.91,
  "rating": 4.3,
  "stock": 123,
  "brand": "OPPO",
  "category": "smart watch",
  "thumbnail": "Images/25.png",
  "images": [
      "https://i.dummyjson.com/data/products/4/1.jpg",
      "https://i.dummyjson.com/data/products/4/2.jpg",
      "https://i.dummyjson.com/data/products/4/3.jpg",
      "https://i.dummyjson.com/data/products/4/4.jpg",
      "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
  ]
},
{
  "id": 24,
  "title": "Smart Watch",
  "description": "Smart Watch",
  "price": 499,
  "discountPercentage": 10.58,
  "rating": 4.09,
  "stock": 32,
  "brand": "Huawei",
  "category": "smart watch",
  "thumbnail": "Images/26.png",
  "images": [
      "https://i.dummyjson.com/data/products/5/1.jpg",
      "https://i.dummyjson.com/data/products/5/2.jpg",
      "https://i.dummyjson.com/data/products/5/3.jpg"
  ]
},
{
  "id": 25,
  "title": "Smart Watch",
  "description": "Smart Watch",
  "price": 249,
  "discountPercentage": 10,
  "rating": 4.8,
  "stock": 100,
  "brand": "Apple",
  "category": "smart watch",
  "thumbnail": "Images/27.png",
  "images": [
      "https://i.dummyjson.com/data/products/6/1.jpg",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.jpg"
  ]
},
{
  "id": 26,
  "title": "Smart Watch",
  "description": "Smart Watch",
  "price": 199,
  "discountPercentage": 5,
  "rating": 4.7,
  "stock": 86,
  "brand": "Samsung",
  "category": "smart watch",
  "thumbnail": "Images/28.png",
  "images": [
      "https://i.dummyjson.com/data/products/7/1.jpg",
      "https://i.dummyjson.com/data/products/7/2.jpg",
      "https://i.dummyjson.com/data/products/7/3.jpg"
  ]
},
{
  "id": 27,
  "title": "Smart Watch",
  "description": "Smart Watch",
  "price": 279,
  "discountPercentage": 15,
  "rating": 4.9,
  "stock": 50,
  "brand": "Sony",
  "category": "smart watch",
  "thumbnail": "Images/29.png",
  "images": [
      "https://i.dummyjson.com/data/products/8/1.jpg",
      "https://i.dummyjson.com/data/products/8/2.jpg",
      "https://i.dummyjson.com/data/products/8/3.jpg"
  ]
},
{
  "id": 28,
  "title": "Smart Watch",
  "description": "Smart Watch",
  "price": 129,
  "discountPercentage": 20,
  "rating": 4.6,
  "stock": 120,
  "brand": "Anker",
  "category": "smart watch",
  "thumbnail": "Images/30.png",
  "images": [
      "https://i.dummyjson.com/data/products/9/1.jpg",
      "https://i.dummyjson.com/data/products/9/2.jpg",
      "https://i.dummyjson.com/data/products/9/3.jpg"
  ]
},
{
  "id": 29,
  "title": "Smart Watch",
  "description": "Smart Watch",
  "price": 129,
  "discountPercentage": 20,
  "rating": 4.6,
  "stock": 120,
  "brand": "Anker",
  "category": "smart watch",
  "thumbnail": "Images/31.png",
  "images": [
      "https://i.dummyjson.com/data/products/9/1.jpg",
      "https://i.dummyjson.com/data/products/9/2.jpg",
      "https://i.dummyjson.com/data/products/9/3.jpg"
  ]
},
{
  "id": 30,
  "title": "Airpods",
  "description": "Airpods",
  "price": 500,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "airpods",
  "thumbnail": "Images/32.png",
  "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  ]
},
{
  "id": 31,
  "title": "Airpods",
  "description": "Airpods",
  "price": 899,
  "discountPercentage": 17.94,
  "rating": 4.44,
  "stock": 34,
  "brand": "Apple",
  "category": "airpods",
  "thumbnail": "Images/33.png",
  "images": [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
  ]
},
{
  "id": 32,
  "title": "Airpods",
  "description": "Airpods",
  "price": 1249,
  "discountPercentage": 15.46,
  "rating": 4.09,
  "stock": 36,
  "brand": "Samsung",
  "category": "airpods",
  "thumbnail": "Images/34.png",
  "images": [
      "https://i.dummyjson.com/data/products/3/1.jpg"
  ]
},
{
  "id": 33,
  "title": "Airpods",
  "description": "Airpods",
  "price": 280,
  "discountPercentage": 17.91,
  "rating": 4.3,
  "stock": 123,
  "brand": "OPPO",
  "category": "airpods",
  "thumbnail": "Images/35.png",
  "images": [
      "https://i.dummyjson.com/data/products/4/1.jpg",
      "https://i.dummyjson.com/data/products/4/2.jpg",
      "https://i.dummyjson.com/data/products/4/3.jpg",
      "https://i.dummyjson.com/data/products/4/4.jpg",
      "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
  ]
},
{
  "id": 34,
  "title": "Airpods",
  "description": "Airpods",
  "price": 499,
  "discountPercentage": 10.58,
  "rating": 4.09,
  "stock": 32,
  "brand": "Huawei",
  "category": "airpods",
  "thumbnail": "Images/36.png",
  "images": [
      "https://i.dummyjson.com/data/products/5/1.jpg",
      "https://i.dummyjson.com/data/products/5/2.jpg",
      "https://i.dummyjson.com/data/products/5/3.jpg"
  ]
},
{
  "id": 35,
  "title": "Airpods",
  "description": "Airpods",
  "price": 249,
  "discountPercentage": 10,
  "rating": 4.8,
  "stock": 100,
  "brand": "Apple",
  "category": "airpods",
  "thumbnail": "Images/37.png",
  "images": [
      "https://i.dummyjson.com/data/products/6/1.jpg",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.jpg"
  ]
},
{
  "id": 36,
  "title": "Airpods",
  "description": "Airpods",
  "price": 199,
  "discountPercentage": 5,
  "rating": 4.7,
  "stock": 86,
  "brand": "Samsung",
  "category": "airpods",
  "thumbnail": "Images/38.png",
  "images": [
      "https://i.dummyjson.com/data/products/7/1.jpg",
      "https://i.dummyjson.com/data/products/7/2.jpg",
      "https://i.dummyjson.com/data/products/7/3.jpg"
  ]
},
{
  "id": 37,
  "title": "Airpods",
  "description": "Airpods",
  "price": 279,
  "discountPercentage": 15,
  "rating": 4.9,
  "stock": 50,
  "brand": "Sony",
  "category": "airpods",
  "thumbnail": "Images/39.png",
  "images": [
      "https://i.dummyjson.com/data/products/8/1.jpg",
      "https://i.dummyjson.com/data/products/8/2.jpg",
      "https://i.dummyjson.com/data/products/8/3.jpg"
  ]
},
{
  "id": 38,
  "title": "Airpods",
  "description": "Airpods",
  "price": 129,
  "discountPercentage": 20,
  "rating": 4.6,
  "stock": 120,
  "brand": "Anker",
  "category": "airpods",
  "thumbnail": "Images/40.png",
  "images": [
      "https://i.dummyjson.com/data/products/9/1.jpg",
      "https://i.dummyjson.com/data/products/9/2.jpg",
      "https://i.dummyjson.com/data/products/9/3.jpg"
  ]
},
{
  "id": 39,
  "title": "Airpods",
  "description": "Airpods",
  "price": 129,
  "discountPercentage": 20,
  "rating": 4.6,
  "stock": 120,
  "brand": "Anker",
  "category": "airpods",
  "thumbnail": "Images/41.png",
  "images": [
      "https://i.dummyjson.com/data/products/9/1.jpg",
      "https://i.dummyjson.com/data/products/9/2.jpg",
      "https://i.dummyjson.com/data/products/9/3.jpg"
  ]
},
{
  "id": 40,
  "title": "Airpods",
  "description": "Airpods",
  "price": 129,
  "discountPercentage": 20,
  "rating": 4.6,
  "stock": 120,
  "brand": "Anker",
  "category": "airpods",
  "thumbnail": "Images/42.png",
  "images": [
      "https://i.dummyjson.com/data/products/9/1.jpg",
      "https://i.dummyjson.com/data/products/9/2.jpg",
      "https://i.dummyjson.com/data/products/9/3.jpg"
  ]
},
{
  "id": 41,
  "title": "Headphones",
  "description": "headphones",
  "price": 899,
  "discountPercentage": 17.94,
  "rating": 4.44,
  "stock": 34,
  "brand": "Apple",
  "category": "headphones",
  "thumbnail": "Images/42.png",
  "images": [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
  ]
},
{
  "id": 42,
  "title": "Headphones",
  "description": "headphones",
  "price": 1249,
  "discountPercentage": 15.46,
  "rating": 4.09,
  "stock": 36,
  "brand": "Samsung",
  "category": "headphones",
  "thumbnail": "Images/43.png",
  "images": [
      "https://i.dummyjson.com/data/products/3/1.jpg"
  ]
},
{
  "id": 43,
  "title": "Headphones",
  "description": "headphones",
  "price": 280,
  "discountPercentage": 17.91,
  "rating": 4.3,
  "stock": 123,
  "brand": "OPPO",
  "category": "headphones",
  "thumbnail": "Images/44.png",
  "images": [
      "https://i.dummyjson.com/data/products/4/1.jpg",
      "https://i.dummyjson.com/data/products/4/2.jpg",
      "https://i.dummyjson.com/data/products/4/3.jpg",
      "https://i.dummyjson.com/data/products/4/4.jpg",
      "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
  ]
},
{
  "id": 44,
  "title": "Headphones",
  "description": "headphones",
  "price": 499,
  "discountPercentage": 10.58,
  "rating": 4.09,
  "stock": 32,
  "brand": "Huawei",
  "category": "headphones",
  "thumbnail": "Images/45.png",
  "images": [
      "https://i.dummyjson.com/data/products/5/1.jpg",
      "https://i.dummyjson.com/data/products/5/2.jpg",
      "https://i.dummyjson.com/data/products/5/3.jpg"
  ]
},
{
  "id": 45,
  "title": "Headphones",
  "description": "headphones",
  "price": 249,
  "discountPercentage": 10,
  "rating": 4.8,
  "stock": 100,
  "brand": "Apple",
  "category": "headphones",
  "thumbnail": "Images/46.png",
  "images": [
      "https://i.dummyjson.com/data/products/6/1.jpg",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.jpg"
  ]
},
{
  "id": 46,
  "title": "Headphones",
  "description": "headphones",
  "price": 199,
  "discountPercentage": 5,
  "rating": 4.7,
  "stock": 86,
  "brand": "Samsung",
  "category": "headphones",
  "thumbnail": "Images/47.png",
  "images": [
      "https://i.dummyjson.com/data/products/7/1.jpg",
      "https://i.dummyjson.com/data/products/7/2.jpg",
      "https://i.dummyjson.com/data/products/7/3.jpg"
  ]
},
{
  "id": 47,
  "title": "Headphones",
  "description": "headphones",
  "price": 279,
  "discountPercentage": 15,
  "rating": 4.9,
  "stock": 50,
  "brand": "Sony",
  "category": "headphones",
  "thumbnail": "Images/48.png",
  "images": [
      "https://i.dummyjson.com/data/products/8/1.jpg",
      "https://i.dummyjson.com/data/products/8/2.jpg",
      "https://i.dummyjson.com/data/products/8/3.jpg"
  ]
},
{
  "id": 48,
  "title": "Headphones",
  "description": "headphones",
  "price": 129,
  "discountPercentage": 20,
  "rating": 4.6,
  "stock": 120,
  "brand": "Anker",
  "category": "headphones",
  "thumbnail": "Images/49.png",
  "images": [
      "https://i.dummyjson.com/data/products/9/1.jpg",
      "https://i.dummyjson.com/data/products/9/2.jpg",
      "https://i.dummyjson.com/data/products/9/3.jpg"
  ]
},
{
  "id": 49,
  "title": "Headphones",
  "description": "headphones",
  "price": 129,
  "discountPercentage": 20,
  "rating": 4.6,
  "stock": 120,
  "brand": "Anker",
  "category": "headphones",
  "thumbnail": "Images/50.png",
  "images": [
      "https://i.dummyjson.com/data/products/9/1.jpg",
      "https://i.dummyjson.com/data/products/9/2.jpg",
      "https://i.dummyjson.com/data/products/9/3.jpg"
  ]
},
{
  "id": 50,
  "title": "Headphones",
  "description": "headphones",
  "price": 129,
  "discountPercentage": 20,
  "rating": 4.6,
  "stock": 120,
  "brand": "Anker",
  "category": "headphones",
  "thumbnail": "Images/51.png",
  "images": [
      "https://i.dummyjson.com/data/products/9/1.jpg",
      "https://i.dummyjson.com/data/products/9/2.jpg",
      "https://i.dummyjson.com/data/products/9/3.jpg"
  ]
},


  
]

// Use State For Object

const[product,setProduct]=useState(obj)

// Use State For Object

// Use State For Cart Value

let [value, setValue] = useState(0)

// Use State For Cart Value

// Use State For Cart Data

const [cart, setCart] = useState([]);

// Use State For Cart Data


// Function To Add Product Into Cart And Increase The Product Count In Cart Logo pn NavBar
const addToCart = (product) => {
  setValue(value = value + 1)
  setCart([...cart, product]);
};

// Function To Add Product Into Cart And Decrease The Product Count In Cart Logo pn NavBar
const removeFromCart = (product) => {
  setValue(value=value - 1)
    setCart(cart.filter(item => item.id !== product.id));
};



  return (
    <>

    {/* Using Context Provider to Access The Object Data in Needed Component  */}

     <myContext.Provider value={[product,setProduct]}>

    {/* Browser Router is Used to Route from One component to Another Component */}

     <BrowserRouter>
    
    {/* NavBar Component */}
    <Navbar value={value}/>
    {/* Header Component */}
    <Header/>

    
   <div className="container">
    
    <Routes>

    <Route path='/' element={<Home cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
    <Route path='/mobile' element={<Mobile cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>}/>
    <Route path='/airpods' element={<Airpods cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>}/>
    <Route path='/headphones' element={<Headphones cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>}/>
    <Route path='/charger' element={<Charger cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>}/>
    <Route path='/smartwatch' element={<Smartwatch cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>}/>
     
   </Routes>
   </div>
   </BrowserRouter>
   {/* Cart Component */}
     <Cart/>
     </myContext.Provider>
   {/* Footer Component */}
     <Footer1/>

    </>
  );
};

export default App;