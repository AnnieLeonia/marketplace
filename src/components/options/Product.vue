<template>
  <div>
    <div class="modalHeader">
      <img class="modalIcon" src="../../assets/product.svg" alt="icon">
      <h1>Product</h1>
    </div>
    <hr>
    <div class="radioButtons">
      <input type="radio" v-model="optionSelected" id="product" value="0">
      <label for="product" class="label">Single Product</label>
      <div class="searchBar" for="product">
        <el-select
          class="search"
          v-model="productSelected"
          filterable
          placeholder="Search product by name"
        >
          <div class="two">
            <span class="onePro">Product</span>
            <span class="one">Vendors</span>
            <span class="oneCat">Category</span>
            <span class="oneTag">Tags</span>
          </div>
          <template v-if="productSelected.length > 0" slot="prefix">
            <img class="prefix" :src="products.find(o => o.product === productSelected).path">
          </template>
          <template v-else slot="prefix"></template>
          <el-option
            class="searchField"
            v-for="item in productList"
            :key="item.id"
            :label="item.product"
            :photo="item.path"
            :value="item.product"
          >
            <div class="proText" @click="selectProduct()">
              <img class="optionIcon" v-bind:src="item.path" alt="icon">
              <span class="one">{{ item.product }}</span>
              <span class="one">{{ item.vendors }}</span>
              <span class="oneCat">{{ item.category }}</span>
              <span class="oneTag">{{ item.tags }}</span>
            </div>
          </el-option>
        </el-select>
      </div>
      <div class="collection">
        <input type="radio" class="label" v-model="optionSelected" id="collection" value="1">
        <label for="collection" class="label">Collections</label>
        <table class="wholeTable" cellspacing="0" cellpadding="0" border="1" width="325">
          <tr>
            <td>
              <table cellspacing="0" cellpadding="0" width="696">
                <tr class="header">
                  <th class="coll">Collections</th>
                  <th class="pro">Products</th>
                  <th class="tag">Tags</th>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <div class="modalBody">
                <table cellspacing="0" cellpadding="1" width="696">
                  <tr class="body" v-for="option in collectionList" v-bind:key="option.id">
                    <label class="optionText" :for="option.id">
                      <div
                        class="bolded"
                        v-if="collectionSelected.includes(option.id) && optionSelected.includes(1)"
                      >
                        <td class="optionColl" id="optionFrom">
                          <b>{{option.collection}}</b>
                        </td>
                        <td class="optionPro" id="optionTo">
                          <b>{{option.product}}</b>
                        </td>
                        <td class="optionTag" id="optionDescription">
                          <b>{{option.tag}}</b>
                        </td>
                      </div>
                      <div
                        class="notChosen"
                        v-else-if="collectionSelected.length > 0 && optionSelected.includes(1)"
                        @click="selectCollection(option)"
                      >
                        <td class="optionColl">{{option.collection}}</td>
                        <td class="optionPro">{{option.product}}</td>
                        <td class="optionTag">{{option.tag}}</td>
                      </div>
                      <div class="beginning" v-else @click="selectCollection(option)">
                        <td class="optionColl">{{option.collection}}</td>
                        <td class="optionPro">{{option.product}}</td>
                        <td class="optionTag">{{option.tag}}</td>
                      </div>
                    </label>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <input type="radio" v-model="optionSelected" id="categories" value="2">
      <label for="categories" class="label">Categories</label>
      <table class="wholeTable" cellspacing="0" cellpadding="0" border="1" width="325">
        <tr>
          <td>
            <table cellspacing="0" cellpadding="0" width="696">
              <tr class="header">
                <th class="cat">Categories</th>
                <th class="proCat">Products</th>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <div class="modalBody">
              <table cellspacing="0" cellpadding="1" width="696">
                <tr class="body" v-for="option in categorieList" v-bind:key="option.id">
                  <label class="optionText" :for="option.id">
                    <div
                      class="bolded"
                      v-if="categorieSelected.includes(option.id) && optionSelected.includes(2)"
                    >
                      <td class="optionCat" id="optionFrom">
                        <b>{{option.categories}}</b>
                      </td>
                      <td class="optionPro" id="optionTo">
                        <b>{{option.product}}</b>
                      </td>
                    </div>
                    <div
                      class="notChosen"
                      v-else-if="categorieSelected.length > 0 && optionSelected.includes(2)"
                      @click="selectCategories(option)"
                    >
                      <td class="optionCat">{{option.categories}}</td>
                      <td class="optionPro">{{option.product}}</td>
                    </div>
                    <div class="beginning" v-else @click="selectCategories(option)">
                      <td class="optionCat">{{option.categories}}</td>
                      <td class="optionPro">{{option.product}}</td>
                    </div>
                  </label>
                </tr>
              </table>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div class="modalFooter">
      <button class="btnCancel" v-on:click="close()">Cancel</button>
      <button class="btnConfirm" v-on:click="confirm()">Confirm</button>
    </div>
  </div>
</template>

<script scoped>
export default {
  props: ["option"],
  data() {
    return {
      products: [
        {
          id: 0,
          path: require("../../assets/mensbeauty-aquadiparma.jpg"),
          product: "Acqua Di Parma",
          vendors: "PanaShop",
          category: "Beauty",
          tags: "For him"
        },
        {
          id: 1,
          path: require("../../assets/mensbeauty-victorrolf.jpg"),
          product: "Victor & Rolf Spicebomb",
          vendors: "PanaShop",
          category: "Beauty",
          tags: "For him"
        },
        {
          id: 2,
          path: require("../../assets/mensbeauty-lacostel12.jpg"),
          product: "Lacoste L.12.12 Neon",
          vendors: "PanaShop",
          category: "Beauty",
          tags: "For her"
        },
        {
          id: 3,
          path: require("../../assets/mensbuty-jackblacktravelerkit.jpg"),
          product: "Jack Black SuperFly",
          vendors: "PanaShop",
          category: "Beauty",
          tags: "For him"
        },
        {
          id: 4,
          path: require("../../assets/clothing-bosshugojonnetexture.jpg"),
          product: "Hugo Boss Jonne Shirt",
          vendors: "PanaShop",
          category: "Apparel",
          tags: "Men's clothing"
        }
      ],
      collections: [
        {
          id: 0,
          collection: "Christmas Special",
          product: "5 products",
          tag: "gift, holiday"
        },
        {
          id: 1,
          collection: "Valentines Day Specials",
          product: "3 products",
          tag: "valentines, holiday"
        },
        {
          id: 2,
          collection: "FF Ice Cream Giveaway",
          product: "3 products",
          tag: "ice cream, give away"
        },
        {
          id: 3,
          collection: "Snack Specials",
          product: "3 products",
          tag: "food"
        },
        {
          id: 4,
          collection: "Meal Deal",
          product: "3 products",
          tag: "food"
        },
        {
          id: 5,
          collection: "Meal Deal",
          product: "3 products",
          tag: "food"
        },
        {
          id: 6,
          collection: "Meal Deal",
          product: "3 products",
          tag: "food"
        },
        {
          id: 7,
          collection: "Meal Deal",
          product: "3 products",
          tag: "food"
        },
        {
          id: 8,
          collection: "Meal Deal",
          product: "3 products",
          tag: "food"
        }
      ],
      categories: [
        { id: 0, categories: "Accessories", product: "22 products" },
        { id: 1, categories: "Drinks", product: "54 products" },
        { id: 2, categories: "Beauty", product: "46 products" },
        { id: 3, categories: "Electronics", product: "7 products" },
        { id: 4, categories: "Kids", product: "3 products" },
        { id: 5, categories: "Food", product: "30 products" }
      ],
      optionSelected: "",
      ascending: true,
      productSelected: [],
      collectionSelected: [],
      categorieSelected: []
    };
  },
  computed: {
    productList: function() {
      var ascending = this.ascending;
      return this.products.sort((a, b) => {
        if (a.product > b.product) {
          return ascending ? 1 : -1;
        } else if (a.product < b.product) {
          return ascending ? -1 : 1;
        }
        return 0;
      });
    },
    collectionList: function() {
      var ascending = this.ascending;
      return this.collections.sort((a, b) => {
        if (a.collection > b.collection) {
          return ascending ? 1 : -1;
        } else if (a.collection < b.collection) {
          return ascending ? -1 : 1;
        }
        return 0;
      });
    },
    categorieList: function() {
      var ascending = this.ascending;
      return this.categories.sort((a, b) => {
        if (a.categories > b.categories) {
          return ascending ? 1 : -1;
        } else if (a.categories < b.categories) {
          return ascending ? -1 : 1;
        }
        return 0;
      });
    }
  },
  methods: {
    selectProduct: function() {
      this.optionSelected = "0";
      this.collectionSelected = [];
      this.categorieSelected = [];
    },
    selectCollection: function(s) {
      this.optionSelected = "1";
      this.productSelected = "";
      this.categorieSelected = [];
      this.collectionSelected = [];
      this.collectionSelected.push(s.id);
    },
    selectCategories: function(s) {
      this.optionSelected = "2";
      this.categorieSelected = [];
      this.productSelected = "";
      this.collectionSelected = [];
      this.categorieSelected.push(s.id);
    },
    confirm: function() {
      this.$props.option.edited = true;
      let returnValue = "";
      if (this.optionSelected.includes(0)) {
        returnValue = this.products.find(
          o => o.product === this.productSelected
        ).product;
        this.$props.option.path = this.products.find(
          o => o.product === this.productSelected
        ).path;
      } else if (this.optionSelected.includes(1)) {
        returnValue = this.collections.find(
          o => o.id === this.collectionSelected[0]
        ).collection;
        this.$props.option.path = require("../../assets/product.svg");
      } else if (this.optionSelected.includes(2)) {
        returnValue = this.categories.find(
          o => o.id === this.categorieSelected[0]
        ).categories;
        this.$props.option.path = require("../../assets/product.svg");
      }
      this.$props.option.value = returnValue;
      this.$emit("close");
    },
    close: function() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.label {
  font-size: 20px;
  margin-top: 1.5em;
}
.searchBar {
  margin: 0.1em 0 0 1.5em;
}
.search {
  width: 44em;
}
.prefix {
  width: 2em;
  height: 2em;
  margin-top: 0.4em;
  margin-left: -0.2em;
}
.onePro {
  display: inline-grid;
  width: 160px;
  padding-right: 2.7em;
}
.oneCat {
  display: inline-grid;
  width: 150px;
}
.oneTag {
  display: inline-grid;
  width: 74px;
}
.one {
  display: inline-grid;
  width: 180px;
  padding: 0.3em 0 0 0.3em;
}
.two {
  padding: 0 25px;
  background-color: gray;
  height: 1.6em;
  padding-top: 0.5em;
}
.optionIcon {
  margin-top: 0.5em;
  float: left;
}
.searchField {
  height: 3em;
}
.proText {
  font-size: 16px;
}
.collection {
  margin-top: -1em;
}
.wholeTable {
  table-layout: fixed;
  width: 70%;
  height: 9em;
  margin: 0.1em 0 0.5em 1.3em;
}

.header {
  color: white;
  background-color: gray;
  font-size: 20px;
}
.coll {
  padding-left: 0.4em;
  width: 10em;
}
.cat {
  padding-left: 0.4em;
  width: 5em;
}
.pro {
  width: 8em;
}
.proCat {
  width: 12.5em;
}
.modalBody {
  width: 713px;
  overflow: auto;
  height: 8em;
}
.body {
  font-size: 16px;
}
.body:hover {
  background-color: #f5f5f5;
}
.optionColl {
  padding: 0.4em 0 0 0.5em;
  width: 12em;
}
.optionCat {
  padding: 0.4em 0 0 0.5em;
  width: 12em;
}
.optionPro {
  padding-left: 0.5em;
  width: 7em;
}
.optionTag {
  padding-left: 3em;
}
.notChosen {
  color: gray;
}
</style>