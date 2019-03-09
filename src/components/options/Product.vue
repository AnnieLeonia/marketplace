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
      <input for="product" type="text" placeholder="Search product by name">

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
                  <tr class="body" v-for="option in collections" v-bind:key="option.id">
                    <label class="optionText" :for="option.id">
                      <div class="bolded" v-if="collectionSelected.includes(option.id)">
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
                        v-else-if="collectionSelected.length > 0"
                        @click="select(option)"
                      >
                        <td class="optionColl">{{option.collection}}</td>
                        <td class="optionPro">{{option.product}}</td>
                        <td class="optionTag">{{option.tag}}</td>
                      </div>
                      <div class="beginning" v-else @click="select(option)">
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
    </div>

    <div class="modalFooter">
      <button class="btnCancel">Cancel</button>
      <button class="btnConfirm">Confirm</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        { id: 2, categories: "Beauty", product: "46 products" }
      ],
      optionSelected: "",
      collectionSelected: []
    };
  },
  methods: {
    select: function(s) {
      this.collectionSelected = [];
      this.collectionSelected.push(s.id);
    }
  }
};
</script>

<style scoped>
.label {
  font-size: 20px;
  margin-top: 1.5em;
}
.wholeTable {
  table-layout: fixed;
  width: 70%;
  height: 10em;
  margin-left: 1.3em;
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
.pro {
  width: 8em;
}
.modalBody {
  width: 713px;
  overflow: auto;
  height: 10em;
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
