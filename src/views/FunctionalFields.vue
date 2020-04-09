<template>
  <v-container>
       <h1>Functional Fields</h1>
    <hr />
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            Functional Fields
          </v-card-title>
          <v-card-text>
            <v-data-table :headers="headers" :items="items">
              <template v-slot:item.functionalTag="{ item }" class="mt-2">
                <v-select class="mt-2" v-model="item.functionalTag" :item-text="item.functionalTag" :item-value="item.functionalTag" :items="catalog"></v-select>
              </template>

              <template v-slot:item.value="{ item }" class="mt-2">
                <v-text-field class="mt-2" v-model="item.value" :items="catalog"></v-text-field>
              </template>

              <template v-slot:item.options="{ item }" class="mt-2">
                <v-btn class="error" @click="deleteItem(item)"> Delete</v-btn>
              </template>

            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
        <v-spacer></v-spacer>
        <v-btn class="success" @click="save">Save</v-btn>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "UploadPage",
  data() {
    return {
      headers: [
        {
          text: "Tag",
          value: "tag",
          align: "start",
          width: "100px",
          fixed: true,
        },
        {
          text: "Functional Tag",
          value: "functionalTag",
          align: "start",
          width: "100px",
          fixed: true,
        },
        {
          text: "Value",
          value: "value",
          align: "start",
          width: "100px",
          fixed: true,
        },
        {
          text: "Options",
          value: "options",
          align: "start",
          width: "100px",
          fixed: true,
        },
      ],
      items: [
        { tag: "Location", functionalTag: "Location", value: "" },
        { tag: "Org", functionalTag: "Org", value: "" },
        { tag: "Person", functionalTag: "Person", value: "" },
        { tag: "Date", functionalTag: "Date", value: "" },
      ],
      catalog:[
          'Location',
          'Org',
          'Person',
          'Date',
      ],
    };
  },
  methods:{
      deleteItem(item){
          let index = this.items.indexOf(item);
          this.items.splice(index,1);
      },
      save(){
          let result = {};
          let i = 1;

            for(let item of this.items){
                result[item.tag + i++ + ''] = item.value
            }

          console.log(result);
      }
  },
};
</script>

<style scoped></style>
