import {EventEmitter} from "events";
class DesignStore extends EventEmitter {
  constructor() {
    super()
    this.designCards = [
      {
        name: "RGA",
        desc: "",
        date: "",
        imgurl: "",
        what: "",
        how: "",
        why: "",
        process: [
          {title: "process 1",
            imgurl: "",
            desc: "desc of process"
          },
          {title: "process 2",
            imgurl: "",
            desc: "desc of process"
          },
          {title: "process 3",
            imgurl: "",
            desc: "desc of process"
          },
        ],
        demo: "",
        photo: "",
        logoIcon: "home",
        logoText: ""
      },
      {
        name: "Website",
        desc: "",
        date: "",
        imgurl: "",
        what: "",
        how: "",
        why: "",
        process: [
          {title: "process 1",
            imgurl: "",
            desc: "desc of process"
          },
          {title: "process 2",
            imgurl: "",
            desc: "desc of process"
          },
          {title: "process 3",
            imgurl: "",
            desc: "desc of process"
          },
        ],
        demo: "",
        photo: "",
        logoIcon: "website",
        logoText: ""
      },
      {
        name: "Adani",
        desc: "",
        date: "",
        imgurl: "",
        what: "",
        how: "",
        why: "",
        process: [
          {title: "process 1",
            imgurl: "",
            desc: "desc of process"
          },
          {title: "process 2",
            imgurl: "",
            desc: "desc of process"
          },
          {title: "process 3",
            imgurl: "",
            desc: "desc of process"
          },
        ],
        demo: "",
        photo: "",
        logoIcon: "people",
        logoText: ""
      },

    ];
  }
  getAllCards() {
    return this.designCards;
  }
  getSampleCard() {
    return {
      name: "",
      desc: "",
      date: "",
      imgurl: "",
      what: "",
      how: "",
      why: "",
      process: [
        {title: "process 1",
          imgurl: "",
          desc: "desc of process"
        },
        {title: "process 2",
          imgurl: "",
          desc: "desc of process"
        },
        {title: "process 3",
          imgurl: "",
          desc: "desc of process"
        },
      ],
      demo: "",
      photo: "",
      logoIcon: "",
      logoText: ""
    }
  }

}
const designStore = new DesignStore();

export default designStore;