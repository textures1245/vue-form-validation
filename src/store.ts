import { reactive } from "vue";

export class Student {
  public constructor(
    name: string,
    genders: string,
    birthdate: string,
    major: string,
    stuId: string,
    bio: string,
    utilities: {
      bgColor: string;
      picUrl: string;
    }
  ) {}
}

export type StudentType = {
  name: string;
  gender: string;
  birthdate: string;
  major: string;
  faculty: string;
  stuId: string;
  bio: string;
  utilities: {
    bgColor: string;
    picUrl: string;
  };
};

export const store = reactive({
  studentState: [
    {
      name: "Traiphakh Sittikaew",
      gender: "Male",
      birthdate: "2023-01-21",
      major: "Computer Science",
      faculty: "Science",
      stuId: "6404101318",
      bio: "Brah brah brah brah",
      utilities: {
        bgColor: "#e3e3e3",
        picUrl:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      },
    },
  ],
});
