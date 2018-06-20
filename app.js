const media = [
    {
      title: 'A wonderful horrible life', 
      description: "Technical skateboard video",
      type: 'DVD',
      contributor: 'PJ Ladd',
      showDetail: false,
    },
    {
      title: 'Team Fortress', 
      description: "Push the payload for victory",
      type: 'Games',
      contributor: 'Valve',
      showDetail: false
    },
    {
      title: 'Kicker Issue 41', 
      description: "Skateboard documentary",
      type: 'DVD',
      contributor: "Thrasher",
      showDetail: false
    },
    {
      title: 'Planet Earth', 
      description: "A documentary about the planet earth",
      type: 'tv shows',
      contributor: 'National Geographic',
      showDetail: false,
    },
    {
      title: 'Titanic', 
      description: "The boat sinks.",
      type: 'DVD',
      contributor: 'James Cameron',
      showDetail: false,
    },
    {
      title: 'Breaking Bad', 
      description: "The blue stuff",
      type: 'tv shows',
      contributor: '',
      showDetail: false,
    },
    {
      title: 'Fortnite', 
      description: "100 people on an island, fight to the death",
      type: 'Games',
      contributor: 'Epic Games',
      showDetail: false,
    }
  ];

const app = new Vue({
  el: '#media-list',
  data: {
    title: 'Jasons public library',
    mediaList: media,
    type: ''
  },
  methods: {
    toggleDetails: function(media){
      console.log(media);
      media.showDetail = !media.showDetail
    },
    filterList: function(){
      this.type = event.target.value;
      console.log(this.type);
    }
  }
});