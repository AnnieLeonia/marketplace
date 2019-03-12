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
      <input for="product" list="prod" type="text" placeholder="Search product by name">
      <datalist id="prod">
        <option class="dropdownHeader">
          <div class="propro">
            <b>Product</b>
          </div>
          <div class="propro">
            <b>Vendor</b>
          </div>
          <div class="procat">
            <b>Category</b>
          </div>
          <div class="propro">
            <b>Tags</b>
          </div>
        </option>
        <option v-for="option in productAlt" v-bind:key="option.id">
          <div class="propro">{{option.product}}</div>
          <div class="proven">{{option.vendors}}</div>
          <div class="procat">{{option.category}}</div>
          <div class="protag">{{option.tags}}</div>
        </option>
      </datalist>
      <!--<v-select v-model="setProduct" :options="productAlt" :label="'product'"></v-select>

      <select v-model="setProduct" placeholder="Search product by name">
        <option v-for="option in productAlt" v-bind:key="option.id" :value="option.id">
          <p>{{option.product}} {{option.category}}</p>
        </option>
      </select>-->
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
      <button class="btnCancel">Cancel</button>
      <button class="btnConfirm">Confirm</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import vSelect from "vue-select";
Vue.component("v-select", vSelect);
export default {
  data() {
    return {
      productAlt: [
        {
          id: 0,
          product: "Acqua Di Parma",
          vendors: "PanaShop",
          category: "Beauty",
          tags: "For him"
        },
        {
          id: 1,
          product: "Victor & Rolf Spicebomb",
          vendors: "PanaShop",
          category: "Beauty",
          tags: "For him"
        },
        {
          id: 2,
          product: "Lacoste L.12.12 Neon",
          vendors: "PanaShop",
          category: "Beauty",
          tags: "For her"
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
      setProduct: null,
      collectionSelected: [],
      categorieSelected: []
    };
  },
  computed: {
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
    selectCollection: function(s) {
      this.optionSelected = "1";
      this.collectionSelected = [];
      this.collectionSelected.push(s.id);
    },
    selectCategories: function(s) {
      this.optionSelected = "2";
      this.categorieSelected = [];
      this.categorieSelected.push(s.id);
    },
    getProduct() {
      let returnValue = this.productAlt.product;
      console.log("hejsan ", returnValue);
    }
  }
};
</script>

<style scoped>
.label {
  font-size: 20px;
  margin-top: 1.5em;
}
.dropdownHeader {
  font-weight: bold;
}
.wholeTable {
  table-layout: fixed;
  width: 70%;
  height: 10em;
  margin: 0.5em 0 0.5em 1.3em;
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
