type Heroes = "Hulk" | "Capt" | "Thor";
type HeroesInfo = {
  [p in Heroes]: {
    name: string;
    age: number;
  };
};

const heroes: HeroesInfo = {
  Hulk: {
    name: "헐크",
    age: 60,
  },
  Capt: {
    name: "캡틴 아메리카",
    age: 40,
  },
  Thor: {
    name: "토르",
    age: 30,
  },
};
