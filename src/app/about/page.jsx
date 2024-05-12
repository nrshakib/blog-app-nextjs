import Image from "next/image";

const About = () => {
  return (
    <div>
      <Image
        src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="about"
        width={500}
        height={500}
      />
    </div>
  );
};

export default About;
