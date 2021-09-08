const speaker1 = {
  name: 'Ken Levine',
  about: 'American Game Developer',
  description:
    'He is the creative director and co-founder of Ghost Story Games (formerly known as Irrational Games)',
  profileImg: 'img/kevin-levine-profile.jpeg',
};

const speaker2 = {
  name: 'Yū Suzuki',
  about: 'Japanese game designer, producer, programmer, and engineer',
  description:
    'Considered one of the first auteurs of video games, he has been responsible for a number of Segas arcade hits.',
  profileImg: 'img/yu-suzuki-profile.jpeg',
};

const speaker3 = {
  name: 'Hideo Kojima',
  about: 'Japanese video game designer, director, producer and writer.',
  description:
    'Regarded as an auteur of video games, he developed a strong passion for action/adventure cinema and literature during his childhood and adolescence.',
  profileImg: 'img/hideo-kojima.jpeg',
};

const speaker4 = {
  name: 'John Romero',
  about:
    'American director, designer, programmer, and developer in the video game industry.',
  description:
    'Co-founder of id Software and designer for many of their games, including Wolfenstein 3D, Dangerous Dave, Hexen, Doom, Doom II and Quake.',
  profileImg: 'img/john-romero.jpeg',
};

const speaker5 = {
  name: 'Markus Persson',
  about: 'Swedish video game programmer and designer.',
  description:
    'Creator of the sandbox video game Minecraft and for founding the video game company Mojang in 2009.',
  profileImg: 'img/markus-persson.jpeg',
};

const speaker6 = {
  name: 'Will Wright',
  about: 'American video game designer.',
  description:
    'Co-founder of the former game development company Maxis, and then part of Electronic Arts (EA).',
  profileImg: 'img/will-wright.jpeg',
};

const featuredSpeakers = [
  speaker1,
  speaker2,
  speaker3,
  speaker4,
  speaker5,
  speaker6,
];

const spLi = document.querySelectorAll('.sp-list > li');

document.addEventListener('DOMContentLoaded', () => {
  spLi.forEach((item, i) => {
    const spDiv = item.children[1];
    const spName = spDiv.children[0];
    const spAbout = spDiv.children[1];
    const spDes = spDiv.children[3];
    spName.innerHTML = featuredSpeakers[i].name;
    spAbout.innerHTML = featuredSpeakers[i].about;
    spDes.innerHTML = featuredSpeakers[i].description;
  });
});
