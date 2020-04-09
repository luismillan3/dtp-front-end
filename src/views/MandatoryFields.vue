<template>
  <v-container>
    <h1>Mandatory Fields</h1>
    <hr />
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            Titles
          </v-card-title>
          <v-card-text>
            <v-data-table :headers="headers" :items="itemsTitle">
              <template v-slot:item.value="{ item }" class="mt-2">
                <v-text-field v-model="item.value" class="mt-2" :label="item.tag"></v-text-field>
              </template>
              <template v-slot:item.options="{ item }" class="mt-2">
                <v-btn class="error"  @click="clearItemTitles(item)"> Clear</v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            Author
          </v-card-title>
          <v-card-text>
            <v-data-table :headers="headers" :items="itemsAuthor">
              <template v-slot:item.value="{ item }" class="mt-2">
                <v-text-field  v-model="item.value" class="mt-2" :label="item.tag"></v-text-field>
              </template>
              <template v-slot:item.options="{ item }" class="mt-2">
                <v-btn class="error"  @click="clearItemAuthor(item)"> Clear</v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            Class
          </v-card-title>
          <v-card-text>
            <v-data-table :headers="headers" :items="itemsClass">
              <template v-slot:item.value="{ item }" class="mt-2">
                <v-select v-model="item.value" :items="getDropDownCatalog(item.tag)"></v-select>
              </template>

              <template v-slot:item.options="{ item }" class="mt-2">
                <v-btn class="error" @click="clearItemClass(item)"> Clear</v-btn>
              </template>

            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
        <v-spacer></v-spacer>
        <v-btn class="success" @click="next()">Next</v-btn>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'

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

      itemsTitle: [
        { tag: "Classification", value: "" },
        { tag: "Title", value: "" },
      ],

      itemsAuthor: [
        { tag: "Country", value: "" },
        { tag: "Organization", value: "" },
        { tag: "Dictorate", value: "" },
        { tag: "Division", value: "" },
        { tag: "Branch", value: "" },
        { tag: "Name", value: "" },
        { tag: "Date", value: "" },
      ],

      itemsClass: [
        { tag: "Classification", value: "" },
        { tag: "Bucket", value: "" },
        { tag: "Disposition", value: "" },
        { tag: "Category", value: "" },
      ],

      ddClassification:[
          'Clas 1',
          'Clas 2',
      ],
      ddBucket:[
          'Buck 1',
          'Buck 2',
      ],
      ddDisposition:[
          'Dis 1',
          'Dis 2',
      ],
      ddCategory:[
          'Cat 1',
          'Cat 2',
      ],

};
  },
  methods:{
      clearItemAuthor(item){
        let index = this.itemsAuthor.indexOf(item);
        this.itemsAuthor[index].value = '';
      },
       clearItemClass(item){
        let index = this.itemsClass.indexOf(item);
          this.itemsClass[index].value = '';
      },
       clearItemTitles(item){
        let index = this.itemsTitle.indexOf(item);
          this.itemsTitle[index].value = '';
      },
      getDropDownCatalog(calssification){
        switch(calssification){
            case 'Classification':
                return this.ddClassification;
            break;

            case 'Bucket':
                return this.ddBucket;
            break;

            case 'Disposition':
                return this.ddDisposition;
            break;

            case 'Category':
                return this.ddCategory;
            break;
        }
      },
      next(){

      let result={};

            for(let item of this.itemsAuthor){
                result['Author' + item.tag] = item.value;
            }
            for(let item of this.itemsClass){
                result['Class' + item.tag] = item.value;
            }
            for(let item of this.itemsTitle){
                result['Title' + item.tag] = item.value;
            }
      
           this.postToApi(result);
          console.log(result);

          
      },

      postToApi(body){
        axios.post('http://localhost:3000/document/tag/?name='+'Test.docx',body)
          .then((response) => {
            console.log(response);
          })
         .catch((err) => {
             console.log(err)
         })
      }
  }
};
</script>

<style scoped></style>>
