import { EventEmitter } from "events";
import Jellyimg from "../../img/art/jelly.jpg";

class ArtStore extends EventEmitter {
  constructor() {
    super();
    this.art = [
      {
        img: Jellyimg,
        name: "Jellyfish",
        medium: "pen, digital",
        desc: "My friends",
        date: "2017 February",
      },
    ];
  }
  getAllArt() {
    return this.art;
  }
  getSampleArt() {
    return {
      img: "",
      name: "",
      medium: "",
      desc: "",
      date: "",
    };
  }
}
const artStore = new ArtStore();

export default artStore;
