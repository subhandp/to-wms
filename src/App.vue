<template>
  <div id="app">
   
   <div class="w-1/4 h-full "></div>
        <div class="flex-col w-1/2 h-full p-4 shadow-outline">
            <h1 class="flex-1  text-center text-5xl  text-blue-600 ">Awesome Grid Image</h1>
            <svg class="animate-bounce w-6 h-6 text-blue-600 " fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            <div class="flex items-center border-b-2 py-2">
                <input class=" text-2xl w-full  mr-3 py-1 px-2 leading-tight outline-none hover:bg-blue-100  " type="text" placeholder="Image search here" v-model="search">
            </div>
            <div v-if="!minSearching()">
                <h2 class="w-full text-center text-red-600 text-lg italic">Sorry, minimal 3 character for searching</h2>
            </div>

            <div class="text-lg ">{{processFeedback}}</div>
            <template>
                <div class="flex  w-full h-auto p-2 mt-4 " >
                   
                    <div class="flex flex-wrap -mx-2">
                        <div v-bind:key="image.id" v-for="image in imageList" class="w-1/3 sm:px-2">

                            <div class="max-w-sm rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <img class="w-full" :src="image.thumbnailUrl"  alt="image empty">
                                <div class="px-6 py-4">
                                  <p class="sm:block  text-base text-center ">
                                    {{image.title}}
                                  </p>
                                </div>

                              </div><br>

                        </div>
                    </div>
                </div>

            </template>

        </div>
   
    <!-- e nd div app -->
  </div>
</template>

<script>

export default {
  name: 'App',
     computed: {
            processFeedback: function() {
                if (!this.searching && this.imageList.length <= 0) {
                    return "Sorry, Your image not found.";
                } else if (this.searching) {
                    return "Searching, wait for second...";
                }
                else{
                  return "";
                }
            }
        },
        watch: {
            //coment kode dibawah jika menggunakan method untuk pencarian
            search: async function() {
                if (this.minSearching()) {
                    this.searching = true;
                    await this.waitingForSearch(1000);
                    this.imageList = this.resources.filter((data) =>
                        data.title.startsWith(this.search)
                    );
                    this.searching = false;
                } else {
                    this.searching = false;
                    this.imageList = this.resources;
                }
            }

        },
        methods: {
            minSearching: function() {
                if (this.search.length != 0 && this.search.length < 3) {
                    return false
                } else {
                    return true;
                }
            },
            
            waitingForSearch: function(time) {
                return new Promise((resolve) => setTimeout(resolve, time));

            },
        },
         created() {
            //coment kode dibawah jika menggunakan method untuk pencarian
            this.imageList = this.resources;
            //uncoment kode dibawah jika menggunakan method untuk pencarian
            // this.minSearching();
        },
  data(){
    return {
       search: "",
       searching: false,
      resources: [{
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
        "albumId": 1,
        "id": 7,
        "title": "officia delectus consequatur vero aut veniam explicabo molestias",
        "url": "https://via.placeholder.com/600/b0f7cc",
        "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
        "albumId": 1,
        "id": 8,
        "title": "aut porro officiis laborum odit ea laudantium corporis",
        "url": "https://via.placeholder.com/600/54176f",
        "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
        "albumId": 1,
        "id": 9,
        "title": "qui eius qui autem sed",
        "url": "https://via.placeholder.com/600/51aa97",
        "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    },
    {
        "albumId": 1,
        "id": 10,
        "title": "beatae et provident et ut vel",
        "url": "https://via.placeholder.com/600/810b14",
        "thumbnailUrl": "https://via.placeholder.com/150/810b14"
    },
    {
        "albumId": 1,
        "id": 11,
        "title": "nihil at amet non hic quia qui",
        "url": "https://via.placeholder.com/600/1ee8a4",
        "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
    },
    {
        "albumId": 1,
        "id": 12,
        "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
        "url": "https://via.placeholder.com/600/66b7d2",
        "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
    },
    {
        "albumId": 1,
        "id": 13,
        "title": "repudiandae iusto deleniti rerum",
        "url": "https://via.placeholder.com/600/197d29",
        "thumbnailUrl": "https://via.placeholder.com/150/197d29"
    },
    {
        "albumId": 1,
        "id": 14,
        "title": "est necessitatibus architecto ut laborum",
        "url": "https://via.placeholder.com/600/61a65",
        "thumbnailUrl": "https://via.placeholder.com/150/61a65"
    },
    {
        "albumId": 1,
        "id": 15,
        "title": "harum dicta similique quis dolore earum ex qui",
        "url": "https://via.placeholder.com/600/f9cee5",
        "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
    },
    {
        "albumId": 1,
        "id": 16,
        "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
        "url": "https://via.placeholder.com/600/fdf73e",
        "thumbnailUrl": "https://via.placeholder.com/150/fdf73e"
    },
    {
        "albumId": 1,
        "id": 17,
        "title": "natus doloribus necessitatibus ipsa",
        "url": "https://via.placeholder.com/600/9c184f",
        "thumbnailUrl": "https://via.placeholder.com/150/9c184f"
    },
    {
        "albumId": 1,
        "id": 18,
        "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
        "url": "https://via.placeholder.com/600/1fe46f",
        "thumbnailUrl": "https://via.placeholder.com/150/1fe46f"
    },
    {
        "albumId": 1,
        "id": 19,
        "title": "perferendis nesciunt eveniet et optio a",
        "url": "https://via.placeholder.com/600/56acb2",
        "thumbnailUrl": "https://via.placeholder.com/150/56acb2"
    },
    {
        "albumId": 1,
        "id": 20,
        "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
        "url": "https://via.placeholder.com/600/8985dc",
        "thumbnailUrl": "https://via.placeholder.com/150/8985dc"
    },
    {
        "albumId": 1,
        "id": 21,
        "title": "ad et natus qui",
        "url": "https://via.placeholder.com/600/5e12c6",
        "thumbnailUrl": "https://via.placeholder.com/150/5e12c6"
    },
    {
        "albumId": 1,
        "id": 22,
        "title": "et ea illo et sit voluptas animi blanditiis porro",
        "url": "https://via.placeholder.com/600/45601a",
        "thumbnailUrl": "https://via.placeholder.com/150/45601a"
    },
    {
        "albumId": 1,
        "id": 23,
        "title": "harum velit vero totam",
        "url": "https://via.placeholder.com/600/e924e6",
        "thumbnailUrl": "https://via.placeholder.com/150/e924e6"
    },
    {
        "albumId": 1,
        "id": 24,
        "title": "beatae officiis ut aut",
        "url": "https://via.placeholder.com/600/8f209a",
        "thumbnailUrl": "https://via.placeholder.com/150/8f209a"
    },
    {
        "albumId": 1,
        "id": 25,
        "title": "facere non quis fuga fugit vitae",
        "url": "https://via.placeholder.com/600/5e3a73",
        "thumbnailUrl": "https://via.placeholder.com/150/5e3a73"
    },
    {
        "albumId": 1,
        "id": 26,
        "title": "asperiores nobis voluptate qui",
        "url": "https://via.placeholder.com/600/474645",
        "thumbnailUrl": "https://via.placeholder.com/150/474645"
    },
    {
        "albumId": 1,
        "id": 27,
        "title": "sit asperiores est quos quis nisi veniam error",
        "url": "https://via.placeholder.com/600/c984bf",
        "thumbnailUrl": "https://via.placeholder.com/150/c984bf"
    },
    {
        "albumId": 1,
        "id": 28,
        "title": "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
        "url": "https://via.placeholder.com/600/392537",
        "thumbnailUrl": "https://via.placeholder.com/150/392537"
    },
    {
        "albumId": 1,
        "id": 29,
        "title": "aut ipsam quos ab placeat omnis",
        "url": "https://via.placeholder.com/600/602b9e",
        "thumbnailUrl": "https://via.placeholder.com/150/602b9e"
    },
    {
        "albumId": 1,
        "id": 30,
        "title": "odio enim voluptatem quidem aut nihil illum",
        "url": "https://via.placeholder.com/600/372c93",
        "thumbnailUrl": "https://via.placeholder.com/150/372c93"
    },
    {
        "albumId": 1,
        "id": 31,
        "title": "voluptate voluptates sequi",
        "url": "https://via.placeholder.com/600/a7c272",
        "thumbnailUrl": "https://via.placeholder.com/150/a7c272"
    },
    {
        "albumId": 1,
        "id": 32,
        "title": "ad enim dignissimos voluptatem similique",
        "url": "https://via.placeholder.com/600/c70a4d",
        "thumbnailUrl": "https://via.placeholder.com/150/c70a4d"
    },
    {
        "albumId": 1,
        "id": 33,
        "title": "culpa ipsam nobis qui fuga magni et mollitia",
        "url": "https://via.placeholder.com/600/501fe1",
        "thumbnailUrl": "https://via.placeholder.com/150/501fe1"
    },
    {
        "albumId": 1,
        "id": 34,
        "title": "vitae est facere quia itaque adipisci perferendis id maiores",
        "url": "https://via.placeholder.com/600/35185e",
        "thumbnailUrl": "https://via.placeholder.com/150/35185e"
    },
    {
        "albumId": 1,
        "id": 35,
        "title": "tenetur minus voluptatum et",
        "url": "https://via.placeholder.com/600/c96cad",
        "thumbnailUrl": "https://via.placeholder.com/150/c96cad"
    },
    {
        "albumId": 1,
        "id": 36,
        "title": "expedita rerum eaque",
        "url": "https://via.placeholder.com/600/4d564d",
        "thumbnailUrl": "https://via.placeholder.com/150/4d564d"
    },
    {
        "albumId": 1,
        "id": 37,
        "title": "totam voluptas iusto deserunt dolores",
        "url": "https://via.placeholder.com/600/ea51da",
        "thumbnailUrl": "https://via.placeholder.com/150/ea51da"
    },
    {
        "albumId": 1,
        "id": 38,
        "title": "natus magnam iure rerum pariatur molestias dolore nisi",
        "url": "https://via.placeholder.com/600/4f5b8d",
        "thumbnailUrl": "https://via.placeholder.com/150/4f5b8d"
    },
    {
        "albumId": 1,
        "id": 39,
        "title": "molestiae nam ullam et rerum doloribus",
        "url": "https://via.placeholder.com/600/1e71a2",
        "thumbnailUrl": "https://via.placeholder.com/150/1e71a2"
    },
    {
        "albumId": 1,
        "id": 40,
        "title": "est quas voluptates dignissimos sint praesentium nisi recusandae",
        "url": "https://via.placeholder.com/600/3a0b95",
        "thumbnailUrl": "https://via.placeholder.com/150/3a0b95"
    },
    {
        "albumId": 1,
        "id": 41,
        "title": "in voluptatem doloremque cum atque architecto deleniti",
        "url": "https://via.placeholder.com/600/659403",
        "thumbnailUrl": "https://via.placeholder.com/150/659403"
    },
    {
        "albumId": 1,
        "id": 42,
        "title": "voluptatibus a autem molestias voluptas architecto culpa",
        "url": "https://via.placeholder.com/600/ca50ac",
        "thumbnailUrl": "https://via.placeholder.com/150/ca50ac"
    },
    {
        "albumId": 1,
        "id": 43,
        "title": "eius hic autem ad beatae voluptas",
        "url": "https://via.placeholder.com/600/6ad437",
        "thumbnailUrl": "https://via.placeholder.com/150/6ad437"
    },
    {
        "albumId": 1,
        "id": 44,
        "title": "neque eum provident et inventore sed ipsam dignissimos quo",
        "url": "https://via.placeholder.com/600/29fe9f",
        "thumbnailUrl": "https://via.placeholder.com/150/29fe9f"
    },
    {
        "albumId": 1,
        "id": 45,
        "title": "praesentium fugit quis aut voluptatum commodi dolore corrupti",
        "url": "https://via.placeholder.com/600/c4084a",
        "thumbnailUrl": "https://via.placeholder.com/150/c4084a"
    },
    {
        "albumId": 1,
        "id": 46,
        "title": "quidem maiores in quia fugit dolore explicabo occaecati",
        "url": "https://via.placeholder.com/600/e9b68",
        "thumbnailUrl": "https://via.placeholder.com/150/e9b68"
    },
    {
        "albumId": 1,
        "id": 47,
        "title": "et soluta est",
        "url": "https://via.placeholder.com/600/b4412f",
        "thumbnailUrl": "https://via.placeholder.com/150/b4412f"
    },
    {
        "albumId": 1,
        "id": 48,
        "title": "ut esse id",
        "url": "https://via.placeholder.com/600/68e0a8",
        "thumbnailUrl": "https://via.placeholder.com/150/68e0a8"
    },
    {
        "albumId": 1,
        "id": 49,
        "title": "quasi quae est modi quis quam in impedit",
        "url": "https://via.placeholder.com/600/2cd88b",
        "thumbnailUrl": "https://via.placeholder.com/150/2cd88b"
    },
    {
        "albumId": 1,
        "id": 50,
        "title": "et inventore quae ut tempore eius voluptatum",
        "url": "https://via.placeholder.com/600/9e59da",
        "thumbnailUrl": "https://via.placeholder.com/150/9e59da"
    }
]
      // akhir return
    }
  }
}
</script>

<style>

</style>

<style scoped>
</style>