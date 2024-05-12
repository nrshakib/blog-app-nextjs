import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex items-center gap-20">
      <div className="flex-1 relative">
        <Image src="/contact.png" alt="" width={500} height={500} />
      </div>
      <div className="flex-1">
        <form action="" className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name and Surname"
            className="p-3 rounded-lg outline-none text-soft bg-bgSoft font-semibold"
          />
          <input
            type="text"
            placeholder="Type Your Email"
            className="p-3 rounded-lg outline-none text-soft bg-bgSoft font-semibold"
          />
          <input
            type="text"
            placeholder="Type Your Phone Number"
            className="p-3 rounded-lg outline-none text-soft bg-bgSoft font-semibold"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="p-3 rounded-lg outline-none text-soft bg-bgSoft"
          ></textarea>
          <button className="bg-btn rounded-lg h-12 font-bold">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
