var app = new Vue ({
  el: '#app',
  data: {
    newSkill: "",
    skills: [
      {
        skill: "Procedural PHP"
      },
      {
        skill: "Laravel"
      },
      {
        skill: "Node.js"
      }
    ]
  },
  methods: {
    createSkills: function () {
      var newSkill = {
        skill: this.newSkill
      }
      this.skills.push(newSkill);
    }
  }
}); 