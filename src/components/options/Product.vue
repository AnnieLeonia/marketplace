<template>
  <div>
    <div class="modalHeader">
      <img class="modalIcon" src="../../assets/product.svg" alt="icon">
      <h1>Product</h1>
    </div>
    <hr>
    <Side/>
    <div class="modalBody">
      <div class="products">
        <el-radio class="radio" v-model="optionSelected" :label="0">Single Product</el-radio>
        <el-select
          class="select"
          v-model="productSelected"
          filterable
          placeholder="Search product by name"
        >
          <div class="header">
            <p>Product</p>
            <p>Vendors</p>
            <p>Category</p>
            <p>Tags</p>
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
              <p class="prod">
                <img class="optionIcon" v-bind:src="item.path" alt="icon">
                {{ item.product }}
              </p>
              <p>{{ item.vendors }}</p>
              <p>{{ item.category }}</p>
              <p>{{ item.tags }}</p>
            </div>
          </el-option>
        </el-select>
      </div>
      <div class="collection">
        <el-radio class="radio" v-model="optionSelected" :label="1">Collections</el-radio>

        <table class="wholeTable" cellspacing="0" cellpadding="0" border="1">
          <table cellspacing="0" cellpadding="0">
            <tr>
              <th>Collections</th>
              <th>Products</th>
              <th>Tags</th>
            </tr>
          </table>

          <div class="tableList">
            <table cellspacing="0" cellpadding="1">
              <tr v-for="option in collectionList" v-bind:key="option.id">
                <label class="optionText" :for="option.id">
                  <div
                    class="selected"
                    v-if="
                      collectionSelected.includes(option.collection) &&
                        optionSelected === 1
                    "
                  >
                    <td id="optionFrom">{{ option.collection }}</td>
                    <td id="optionTo">{{ option.product }}</td>
                    <td id="optionDescription">{{ option.tag }}</td>
                  </div>
                  <div
                    class="notChosen"
                    v-else-if="
                      collectionSelected.length > 0 && optionSelected === 1
                    "
                    v-on:click="selectCollection(option)"
                  >
                    <td>{{ option.collection }}</td>
                    <td>{{ option.product }}</td>
                    <td>{{ option.tag }}</td>
                  </div>
                  <div v-else v-on:click="selectCollection(option)">
                    <td class="optionColl">{{ option.collection }}</td>
                    <td>{{ option.product }}</td>
                    <td>{{ option.tag }}</td>
                  </div>
                </label>
              </tr>
            </table>
          </div>
        </table>
      </div>
      <div class="categories">
        <el-radio class="radio" v-model="optionSelected" :label="2">Categories</el-radio>
        <table class="wholeTable" cellspacing="0" cellpadding="0" border="1">
          <table cellspacing="0" cellpadding="0">
            <tr>
              <th>Categories</th>
              <th>Products</th>
            </tr>
          </table>

          <div class="tableList">
            <table cellspacing="0" cellpadding="1">
              <tr v-for="option in categorieList" v-bind:key="option.id">
                <label class="optionText" :for="option.id">
                  <div
                    class="selected"
                    v-if="
                      categorieSelected.includes(option.categories) &&
                        optionSelected === 2
                    "
                  >
                    <td class="optionCat" id="optionFrom">{{ option.categories }}</td>
                    <td class="optionPro2" id="optionTo">{{ option.product }}</td>
                  </div>
                  <div
                    class="notChosen"
                    v-else-if="
                      categorieSelected.length > 0 && optionSelected === 2
                    "
                    @click="selectCategories(option)"
                  >
                    <td class="optionCat">{{ option.categories }}</td>
                    <td class="optionPro2">{{ option.product }}</td>
                  </div>
                  <div v-else @click="selectCategories(option)">
                    <td class="optionCat">{{ option.categories }}</td>
                    <td class="optionPro2">{{ option.product }}</td>
                  </div>
                </label>
              </tr>
            </table>
          </div>
        </table>
      </div>
    </div>
    <div class="modalFooter">
      <button class="btnCancel" v-on:click="close()">Cancel</button>
      <button class="btnConfirm" v-on:click="confirm()">Confirm</button>
    </div>
  </div>
</template>

<script scoped>
import Side from "../Side";
export default {
  props: ["option"],
  components: {
    Side
  },
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
          collection: "Spring Fragrances",
          product: "3 products",
          tag: "food"
        },
        {
          id: 6,
          collection: "Kids Menu",
          product: "4 products",
          tag: "kids"
        },
        {
          id: 7,
          collection: "Granola Bars Giveaway",
          product: "5 products",
          tag: "granola bars, give away"
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
      this.optionSelected = 0;
      this.collectionSelected = [];
      this.categorieSelected = [];
    },
    selectCollection: function(s) {
      this.optionSelected = 1;
      this.productSelected = "";
      this.categorieSelected = [];
      this.collectionSelected = [];
      this.collectionSelected.push(s.collection);
    },
    selectCategories: function(s) {
      this.optionSelected = 2;
      this.categorieSelected = [];
      this.productSelected = "";
      this.collectionSelected = [];
      this.categorieSelected.push(s.categories);
    },
    confirm: function() {
      this.$props.option.edited = true;
      let returnValue = "";
      if (this.optionSelected === 0 && this.productSelected.length > 0) {
        returnValue = this.products.find(
          o => o.product === this.productSelected
        ).product;
        this.$props.option.path = this.products.find(
          o => o.product === this.productSelected
        ).path;
      } else if (
        this.optionSelected === 1 &&
        this.collectionSelected.length > 0
      ) {
        returnValue = this.collections.find(
          o => o.collection === this.collectionSelected[0]
        ).collection;
        this.$props.option.path = require("../../assets/product.svg");
      } else if (
        this.optionSelected === 2 &&
        this.categorieSelected.length > 0
      ) {
        returnValue = this.categories.find(
          o => o.categories === this.categorieSelected[0]
        ).categories;
        this.$props.option.path = require("../../assets/product.svg");
      } else {
        this.$props.option.edited = false;
        this.$props.option.path = require("../../assets/product.svg");
      }
      this.$props.option.display = returnValue;
      this.$props.option.value = {
        radio: this.optionSelected,
        pro: returnValue
      };
      this.$emit("close");
    },
    close: function() {
      this.$emit("close");
    },
    change: function() {
      this.optionSelected = 1;
    }
  },
  created: function() {
    if (this.$props.option.edited) {
      this.optionSelected = this.$props.option.value.radio;
      if (this.optionSelected === 0) {
        this.productSelected = this.$props.option.value.pro;
      } else if (this.optionSelected === 1) {
        this.collectionSelected = [this.$props.option.value.pro];
      } else if (this.optionSelected === 2) {
        this.categorieSelected = [this.$props.option.value.pro];
      }
    }
  }
};
</script>

<style scoped>
.modalBody {
  font-family: "Avenir";
  width: calc(75% - 2em);
  padding: 1em;
}

.radio {
  flex: 1;
  margin: 0;
}

.header {
  padding: 0 1em;
}

.header,
.proText {
  font-family: "Avenir";
  display: flex;
}

.header p,
.proText p {
  width: 110px;
}

.header p:first-child,
.proText p:first-child {
  width: 200px;
}

.header p,
.proText p {
  margin: 0;
}

.prefix {
  width: 2em;
  height: 2em;
  margin-top: 0.4em;
}

.optionIcon {
  float: left;
  padding-right: 0.5em;
}

.searchField {
  height: 3em;
}
.products,
.collection,
.categories {
  margin-top: 0.5em;
  display: flex;
}

table,
.select {
  width: 100%;
  flex: 5;
}

.tableList {
  overflow: auto;
  font-size: 16px;
  height: 8.5em;
}

th {
  color: white;
  background-color: #18477f;
  padding-left: 0.5em;
  font-size: 20px;
  padding: 0.2em 0.5em;
}

.collection th {
  width: calc(100% / 3);
}

.categories th {
  width: calc(100% / 2);
}

td {
  padding: 0.5em 0.5em;
}

.collection td {
  width: 200px;
}

.categories td {
  width: 300px;
}

tr:hover {
  background-color: #f5f5f5;
}

.selected {
  font-weight: bold;
}

.notChosen {
  color: gray;
}
</style>