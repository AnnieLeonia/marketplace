<template>
  <div>
    <div class="modalHeader">
      <img class="modalIcon" src="../../assets/product.svg" alt="icon" />
      <h1>Product</h1>
    </div>
    <hr />
    <Side />
    <div class="modalBody">
      <div clas="product">
        <el-radio v-model="optionSelected" :label="0">Single Product </el-radio>
        <el-select
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
            <img
              class="prefix"
              :src="products.find(o => o.product === productSelected).path"
            />
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
              <img class="optionIcon" v-bind:src="item.path" alt="icon" />
              <span class="one">{{ item.product }}</span>
              <span class="one">{{ item.vendors }}</span>
              <span class="oneCat">{{ item.category }}</span>
              <span class="oneTag">{{ item.tags }}</span>
            </div>
          </el-option>
        </el-select>
      </div>
      <div class="collection">
        <el-radio v-model="optionSelected" :label="1">
          Collections
        </el-radio>
        <table class="wholeTable" cellspacing="0" cellpadding="0" border="1">
          <tr>
            <td>
              <table cellspacing="0" cellpadding="0">
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
              <div class="tableList">
                <table cellspacing="0" cellpadding="1">
                  <tr
                    class="body"
                    v-for="option in collectionList"
                    v-bind:key="option.id"
                  >
                    <label class="optionText" :for="option.id">
                      <div
                        class="bolded"
                        v-if="
                          collectionSelected.includes(option.collection) &&
                            optionSelected === 1
                        "
                      >
                        <td class="optionColl" id="optionFrom">
                          <b>{{ option.collection }}</b>
                        </td>
                        <td class="optionPro" id="optionTo">
                          <b>{{ option.product }}</b>
                        </td>
                        <td class="optionTag" id="optionDescription">
                          <b>{{ option.tag }}</b>
                        </td>
                      </div>
                      <div
                        class="notChosen"
                        v-else-if="
                          collectionSelected.length > 0 && optionSelected === 1
                        "
                        v-on:click="selectCollection(option)"
                      >
                        <td class="optionColl">{{ option.collection }}</td>
                        <td class="optionPro">{{ option.product }}</td>
                        <td class="optionTag">{{ option.tag }}</td>
                      </div>
                      <div
                        class="beginning"
                        v-else
                        v-on:click="selectCollection(option)"
                      >
                        <td class="optionColl">{{ option.collection }}</td>
                        <td class="optionPro">{{ option.product }}</td>
                        <td class="optionTag">{{ option.tag }}</td>
                      </div>
                    </label>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="categories">
        <el-radio class="label" v-model="optionSelected" :label="2"
          >Categories</el-radio
        >
        <table
          class="wholeTable"
          cellspacing="0"
          cellpadding="0"
          border="1"
          width="325"
        >
          <tr>
            <td>
              <table cellspacing="0" cellpadding="0">
                <tr class="header">
                  <th class="cat">Categories</th>
                  <th class="proCat">Products</th>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <div class="tableList">
                <table cellspacing="0" cellpadding="1">
                  <tr
                    class="body"
                    v-for="option in categorieList"
                    v-bind:key="option.id"
                  >
                    <label class="optionText" :for="option.id">
                      <div
                        class="bolded"
                        v-if="
                          categorieSelected.includes(option.categories) &&
                            optionSelected === 2
                        "
                      >
                        <td class="optionCat" id="optionFrom">
                          <b>{{ option.categories }}</b>
                        </td>
                        <td class="optionPro" id="optionTo">
                          <b>{{ option.product }}</b>
                        </td>
                      </div>
                      <div
                        class="notChosen"
                        v-else-if="
                          categorieSelected.length > 0 && optionSelected === 2
                        "
                        @click="selectCategories(option)"
                      >
                        <td class="optionCat">{{ option.categories }}</td>
                        <td class="optionPro">{{ option.product }}</td>
                      </div>
                      <div
                        class="beginning"
                        v-else
                        @click="selectCategories(option)"
                      >
                        <td class="optionCat">{{ option.categories }}</td>
                        <td class="optionPro">{{ option.product }}</td>
                      </div>
                    </label>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
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
          collection: "FF Granola Bars Giveaway",
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
      if (this.optionSelected === 0) {
        returnValue = this.products.find(
          o => o.product === this.productSelected
        ).product;
        this.$props.option.path = this.products.find(
          o => o.product === this.productSelected
        ).path;
      } else if (this.optionSelected === 1) {
        returnValue = this.collections.find(
          o => o.collection === this.collectionSelected[0]
        ).collection;
        this.$props.option.path = require("../../assets/product.svg");
      } else if (this.optionSelected === 2) {
        returnValue = this.categories.find(
          o => o.categories === this.categorieSelected[0]
        ).categories;
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
  width: calc(75% - 2em);
  padding: 1em;
}

el-radio {
  width: 60px;
  border: solid red 1px;
}

el-select {
  width: 35em;
  margin-top: 0.5em;
  margin-left: -1.5em;
}

.prefix {
  width: 2em;
  height: 2em;
  margin-top: 0.4em;
}

table {
  width: 100%;
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
  /* width: 180px; */
  padding: 0.3em 0 0 0.3em;
}

.two {
  padding: 0 25px;
  background-color: gray;
  /* height: 1.6em; */
  padding-top: 0.5em;
}

.optionIcon {
  margin-top: 0.5em;
  float: left;
}

.searchField {
  height: 3em;
}

.collection,
.categories {
  margin-top: 0.5em;
  display: flex;
}

.wholeTable {
  /* table-layout: fixed;*/
  /* width: 56%; */
  width: 600px;
  height: 9em;
  /* margin: -1.5em 0 1em 8.5em; */
}

.header {
  color: white;
  background-color: gray;
  font-size: 20px;
}

.coll,
.pro,
.tag {
  width: calc(100% / 3);
}

.cat,
.proCat {
  width: calc(100% / 2);
}
.proCat {
  width: 12.5em;
}

.tableList {
  /*width: 575px;*/
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