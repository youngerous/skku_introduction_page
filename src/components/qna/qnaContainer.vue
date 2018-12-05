<template>
  <div id="qa-app">
  <v-app id="qa-inspire">
    <div>
      <v-toolbar flat color="white">
        <v-toolbar-title>qna CRUD</v-toolbar-title>
        <v-divider
          class="mx-2"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
  
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.index" label="Index"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.title" label="Title"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.content" label="Content"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.password" label="Password"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.created" label="Created"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
  
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="qnas"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.title }}</td>
          <td class="text-xs-right">{{ props.item.content }}</td>
          <td class="text-xs-right">{{ props.item.password }}</td>
          <td class="justify-center layout px-0">
            <v-icon
              small
              class="mr-2"
              @click="editItem(props.item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              @click="deleteItem(props.item)"
            >
              delete
            </v-icon>
          </td>
        </template>
        <template slot="no-data">
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
    </div>
  </v-app>
</div>


</template>

<script>
export default {
new Vue({
  el: '#app',
  data: () =>   ({
    dialog: false,
    headers: [
      {
        text: 'QnAs',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'index', value: 'index' },
      { text: 'Title', value: 'title' },
      { text: 'Content', value: 'content' },
      { text: 'Password', value: 'password' },
      { text: 'Created', value: 'created', sortable: false }
    ],
    qnas: [],
    editedIndex: -1,
    editedItem: {
      index: 0,
      title: '',
      content: '',
      password: '',
      created: new Date()
    },
    defaultItem: {
      index: 0,
      title: '',
      content: '',
      password: '',
      created: new Date()
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.qnas = [
        {
          index: 1,
          title: '질문 있습니다',
          content: '파이썬 모르겠어요',
          password: '2432',
          created: new Date()
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.qnas.indexOf(item)
      confirm('질문을 정말 삭제하시겠습니까?') && this.qnas.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.qnas[this.editedIndex], this.editedItem)
      } else {
        this.qnas.push(this.editedItem)
      }
      this.close()
    }
  }
}
)};
 el: '#app',
  data () {
    return {
      headers: [
        {
          text: 'QnAs',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'index', value: 'index' },
        { text: 'Title', value: 'title' },
        { text: 'Content', value: 'content' },
        { text: 'Password', value: 'password' },
        { text: 'Created', value: 'created'}
      ],
      qnas: [
        {
          value: false,
          index: 1,
          title: '질문 있습니다',
          content: '파이썬 모르겠어요',
          password: '2432',
          created: new Date()
        }
      ]
    }
  }
})

}
</script>

<style>
</style>          
       text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: [
        {
          value: false,
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          value: false,
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          value: false,
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          value: false,
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          value: false,
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          value: false,
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          value: false,
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          value: false,
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          value: false,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
    }
  }
})

}
</script>

<style>
</style>