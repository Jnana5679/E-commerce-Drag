import { Component } from "react";
import { CategoryItems } from "../categoryItems";
import "./index.css";

const categoryListItems = [
  {
    name: "Fresh Vegitables",
    category: "FRESH_VEGETABLES",
    categoryId: 1,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143035/Fresh_Vegetables.avif",
  },
  {
    name: "Fresh Fruits",
    category: "FRESH_FRUITS",
    categoryId: 2,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143117/Fresh%20Fruits.avif",
  },
  {
    name: "Dairy, Bread and Eggs",
    category: "DAIRY_BREAD_AND_GGS",
    categoryId: 3,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143164/Dairy%2CEgg%20and%20Bread.avif",
  },
  {
    name: "Rice, Atta and Dals",
    category: "RICE_ATTA_AND_DALS",
    categoryId: 4,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143225/ingredient-bags-full-flour_23-2149482567_ciegfp.avif",
  },
  {
    name: "Masalas and Dry Fruits",
    category: "MASALAS_AND_DRY_FRUITS",
    categoryId: 5,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143251/top-view-various-indian-spices-seasonings-table_181624-58725_js9ovo.avif",
  },
  {
    name: "Edible Oils and Ghee",
    category: "EDIBLE_OILS_AND_GHEE",
    categoryId: 6,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143331/soybean-oil-soybean-food-beverage-products-food-nutrition-concept_1150-26352_wain0r.avif",
  },
  {
    name: "Munchies",
    category: "MUNCHIES",
    categoryId: 7,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143382/thin-golden-background-fat-pile_1339-42_nwitzb.avif",
  },
  {
    name: "Sweet Tooth",
    category: "SWEET_TOOTH",
    categoryId: 8,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143420/close-up-chocolate-arrangement_23-2148349283_jewnzb.avif",
  },
  {
    name: "Cold Drinks and Junkies",
    category: "COLD_DRINKS_AND_JUNKIES",
    categoryId: 9,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143474/soda-can-aluminium-white_1308-32368_vhjhkn.avif",
  },
  {
    name: "Biscuits and Cakes",
    category: "BISCUITS_AND_CAKES",
    categoryId: 10,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143506/download_cxwgpg.jpg",
  },

  {
    name: "Instant and Frozen Food",
    category: "INSTANT_AND_FROZEN_FOOD",
    categoryId: 11,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143560/images_yudje7.jpg",
  },
  {
    name: "Sauces and Spreads",
    category: "SAUCES_AND_SPREADS",
    categoryId: 12,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143614/download_ngpjoh.jpg",
  },
  {
    name: "Tea,Coffee and More",
    category: "TEA_COFFEE_AND_MORE",
    categoryId: 13,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143668/images_m4r4dr.jpg",
  },
  {
    name: "Cleaning Essentials",
    category: "CLEANING_ESSENTIALS",
    categoryId: 14,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143695/images_kf4kv1.jpg",
  },
  {
    name: "Pharma and Hygiene",
    category: "PHARMA_AND_HYGIENE",
    categoryId: 15,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143723/download_c2y7pl.jpg",
  },
  {
    name: "Bath, Body and Hair",
    category: "BATH_BODY_AND_HAIR",
    categoryId: 16,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143875/download_hadlx9.jpg",
  },
  {
    name: "Home and Kitchen Needs",
    category: "HOME_AND_KITCHEN_NEEDS",
    categoryId: 17,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143789/download_ycvgmh.jpg",
  },
  {
    name: "Baby Care",
    category: "BABY_CARE",
    categoryId: 18,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143759/download_hvdlcv.jpg",
  },
  {
    name: "Beauty and Grooming",
    category: "BEAUTY_AND_GROOMING",
    categoryId: 19,
    thumbnailUrl:
      "https://res.cloudinary.com/dwsedmm9n/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1691143908/download_gb0x92.jpg",
  },
];

class CategoryItemsList extends Component {
  onClickCategoryButton = (buttonCategory) => {
    console.log(buttonCategory);
  };

  render() {
    return (
      <div className="category-list-items-container">
        <div className="shop-by-category-container">
          <hr />
          <h1 className="category-title">Shop By Category</h1>
          <hr />
        </div>
        <ul className="category-list-items">
          {categoryListItems.map((eachItem) => (
            <CategoryItems key={eachItem.categoryId} categoryItem={eachItem} />
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoryItemsList;
