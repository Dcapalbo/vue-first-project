var app = new Vue ({

  el: '#app',

    data: {

        newSkill:'',

        skills: [
          
          'Procedural PHP', 
          'Laravel',
          'Node.js',
          'Javascript',
          'Vue'

        ]

    },
    methods: {

      addSkill() {

        this.skills.push(this.newSkill);

        this.newSkill = '';

      },
      deleteSkill (index) {

        this.skills.splice(index, 1);
      }

    },
});