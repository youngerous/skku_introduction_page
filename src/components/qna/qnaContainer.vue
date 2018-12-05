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
  data () {
    return {

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
      },
    }
  },
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
</script>

<style>
</style>