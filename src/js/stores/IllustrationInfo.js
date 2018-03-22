import linoKitty from "../../img/illustrations/linokitty.jpg";
import redpanda from "../../img/illustrations/redpanda.jpg";
import trashPanda from "../../img/illustrations/trashpanda.jpg";
import houses from "../../img/illustrations/houses.jpg";
import jellyfish from "../../img/illustrations/jellyfish.jpg";
import treeshousescircle from "../../img/illustrations/houses.jpg";
import kneadkitty from "../../img/illustrations/kneadkitty.jpg";
import redpandascream from "../../img/illustrations/redpandascream.jpg";
import bigblackcat from "../../img/illustrations/bigblackcat.jpg";

export const illustrations = [
  {
    label: "Big Black Cat",
    image: bigblackcat,
    key: "bigblackcat",
    description: "A large black kitty in gouache",
    imageSet: [bigblackcat],
  },

  {
    label: "Forest Village",
    image: treeshousescircle,
    key: "treeshousescircle",
    description: "A forest village painted in gouache",
    imageSet: [treeshousescircle],
  },

  {
    label: "I Knead You",
    image: kneadkitty,
    key: "kneadkitty",
    description: "A pencil artwork for Valentines Day",
    imageSet: [kneadkitty],
  },
  {
    label: "Red Panda",
    image: redpandascream,
    key: "redpandascream",
    description: "Red panda illustration in pencil",
    imageSet: [redpandascream],
  },
  {
    label: "Trash Panda",
    image: trashPanda,
    key: "trashPanda",
    description: "",
    imageSet: [trashPanda, linoKitty],
  },
  {
    label: "Lino Kitty",
    image: linoKitty,
    key: "linoKitty",
    description: "",
    imageSet: [linoKitty, linoKitty],
  },
];

export default illustrations;
