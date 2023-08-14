import { Component } from "react";

const categoryListItems = [
  {
    name: "Select Category",
    category: "SELECT_CATEGORY",
  },
  {
    name: "Fresh Vegitables",
    category: "FRESH_VEGETABLES",
  },
  {
    name: "Fresh Fruits",
    category: "FRESH_FRUITS",
  },
  {
    name: "Dairy, Bread and Eggs",
    category: "DAIRY_BREAD_AND_GGS",
  },
  {
    name: "Rice, Atta and Dals",
    category: "RICE_ATTA_AND_DALS",
  },
  {
    name: "Masalas and Dry Fruits",
    category: "MASALAS_AND_DRY_FRUITS",
  },
  {
    name: "Edible Oils and Ghee",
    category: "EDIBLE_OILS_AND_GHEE",
  },
  {
    name: "Munchies",
    category: "MUNCHIES",
  },
  {
    name: "Sweet Tooth",
    category: "SWEET_TOOTH",
  },
  {
    name: "Cold Drinks and Junkies",
    category: "COLD_DRINKS_AND_JUNKIES",
  },
  {
    name: "Biscuits and Cakes",
    category: "BISCUITS_AND_CAKES",
  },

  {
    name: "Instant and Frozen Food",
    category: "INSTANT_AND_FROZEN_FOOD",
  },
  {
    name: "Sauces and Spreads",
    category: "SAUCES_AND_SPREADS",
  },
  {
    name: "Tea,Coffee and More",
    category: "TEA_COFFEE_AND_MORE",
  },
  {
    name: "Cleaning Essentials",
    category: "CLEANING_ESSENTIALS",
  },
  {
    name: "Pharma and Hygiene",
    category: "PHARMA_AND_HYGIENE",
  },
  {
    name: "Bath, Body and Hair",
    category: "BATH_BODY_AND_HAIR",
  },
  {
    name: "Home and Kitchen Needs",
    category: "HOME_AND_KITCHEN_NEEDS",
  },
  {
    name: "Baby Care",
    category: "BABY_CARE",
  },
  {
    name: "Beauty and Grooming",
    category: "BEAUTY_AND_GROOMING",
  },
];

class ProductsCategoryOptions extends Component {
  onSelectCategory = (event) => {
    const { updateProductCategory } = this.props;
    updateProductCategory(event.target.value);
  };

  render() {
    return (
      <div className="upload-product-details-input">
        <label htmlFor="categorySelection">Select Category</label>
        <select
          className="ctaegory-select-input"
          id="categorySelection"
          onChange={this.onSelectCategory}
        >
          {categoryListItems.map((eachCategory) => (
            <option key={eachCategory.category} value={eachCategory.category}>
              {eachCategory.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default ProductsCategoryOptions;
