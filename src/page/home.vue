<template>
  <div>
    <nav id="navbar" class="navbar has-shadow  is-info ">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="../assets/logo-me.png" alt="Logo">
          </a>
          <div class="navbar-burger burger" v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }" aria-label="menu"
            aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
          <div class="navbar-start">
            <a href="#about" class="navbar-item  ">About</a>
            <a href="#studio" class="navbar-item   ">Studio</a>
            <a href="#upload" class="navbar-item   ">Upload</a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <p class="control">
                <a href="#" class=" navbar-item button is-danger   ">
                  <span> Log Out</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="columns" style="margin-top:10px">
        <div class="column">
          <h1>Welcome to Shetoseplanet !o! </h1>
        </div>
      </div>
      <div class="box" id="about">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <img src="../assets/pluto.jpg" alt="plutoto" class="">
          </div>
        </div>
        <div class="columns">
          <div class="comlumn">
            <span>{{name}}</span>
          </div>
        </div>

      </div>
      <div class="box" id="studio">
        <b-table :data="dataTbl" :columns="columnsTbl" class="table-wrapper"></b-table>
      </div>
      <div class="box" id="upload">
        <div class="columns">
          <div class="column is-12">
            <span> Upload your file !</span>
          </div>
        </div>
        <div class="columns ">
          <div class="column is-half is-offset-one-quarter">
            <div id="divPreview" v-for="(file,index) in dropFiles" :key="index">
              <figure class="image is-3by2">
                <img :src="createUrlImg(index)" />
              </figure>
              <span>Image Name : {{file.name}}</span>

            </div>
            <b-field>
              <b-upload v-model="dropFiles" multiple drag-drop @change="createUrlImg">
                <section class="section">
                  <div class="content has-text-centered">
                    <p>
                      <b-icon icon="upload" size="is-large">
                      </b-icon>
                    </p>
                    <p>Drop your files here or click to upload</p>
                  </div>
                </section>
              </b-upload>
            </b-field>

            <div class="tags">
              <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
                {{file.name}}
                <button class="delete is-small" type="button" @click="deleteDropFile(index)">
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentUser: localStorage.getItem('currentUser'),
        showNav: false,
        name: 'demoniis',
        dDate: '',
        dropFiles: [],
        url: null,
        dataTbl: [
          { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
          { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
          { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
          { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
          { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }

        ],
        columnsTbl: [
          {
            field: 'id',
            label: 'ID',
            width: '40',
            numeric: true
          },
          {
            field: 'first_name',
            label: 'First Name',
          },
          {
            field: 'last_name',
            label: 'Last Name',
          },
          {
            field: 'date',
            label: 'Date',
            centered: true
          },
          {
            field: 'gender',
            label: 'Gender',
          }
        ]
      }
    },
    methods: {
      deleteDropFile(index) {

        this.dropFiles.splice(index, 1)
      },
      createUrlImg(index) {
        const fileup = this.dropFiles[index];
        return URL.createObjectURL(fileup)
      }

    }
  }
</script>

<style>
  .navbarColor {
    background-color: #139b36;
    position: relative;
  }

  .txtHead {
    padding-left: 10px;
    font-size: 20px;
    color: #ffffff;
  }

  .table-wrapper {
    overflow-x: auto
  }
</style>