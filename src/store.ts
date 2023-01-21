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
      birthdate: "2003-01-20",
      major: "Computer Science",
      faculty: "Science",
      stuId: "6404101318",
      bio: `The reason that I learned Computer Science. It is an exciting and dynamic field that has the power to change the world. It encompasses a wide range of topics, from programming and algorithms to artificial intelligence and cybersecurity. By learning computer science, individuals gain valuable skills such as problem-solving, critical thinking, and creativity, which are essential for success in today's digital age. Moreover, computer science is a rapidly growing field with an abundance of career opportunities, from developing new technologies to solving complex problems. Furthermore, computer science has a wide range of applications, from improving healthcare and education to advancing scientific research. By learning computer science, you'll be on the forefront of innovation and have the opportunity to make a real impact on the world.`,
      utilities: {
        bgColor: "#12AFF3",
        picUrl: "http://bit.ly/3jtdxT1",
      },
    },
  ],
});
