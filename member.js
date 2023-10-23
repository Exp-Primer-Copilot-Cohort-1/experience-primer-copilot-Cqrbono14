function skillsMember() {
  var member = document.getElementById("member");
  var memberSkills = document.getElementById("member-skills");
  var memberSkillsBtn = document.getElementById("member-skills-btn");
  var memberSkillsClose = document.getElementById("member-skills-close");
  var memberSkillsCloseBtn = document.getElementById("member-skills-close-btn");

  memberSkillsBtn.onclick = function() {
    memberSkills.style.display = "block";
  }

  memberSkillsClose.onclick = function() {
    memberSkills.style.display = "none";
  }

  memberSkillsCloseBtn.onclick = function() {
    memberSkills.style.display = "none";
  }
}