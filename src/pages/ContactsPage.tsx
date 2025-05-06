import img from "@/app/assets/images/contacts.jpg";
import Socials from "@/components/Socials";

const ContactsPage = () => {
  return (
    <div className="pb-50 md:pb-10 px-5 lg:px-20 w-full flex items-center relative">
      <div className="w-1/2 h-full">
        <img
          src={img}
          className="w-full h-full object-cover rounded-2xl"
          alt=""
        />
      </div>
      <div className="w-1/2 ml-5 lg:ml-20 py-10">
        <h2 className="text-4xl font-bold text-main-dark mb-4">
          Let's connect!
        </h2>
        <p className="text-lg text-muted mb-10 max-w-xl">
          Whether it's a collaboration, a question, or just a hello — I'm always
          happy to hear from others. Feel free to reach out via any of the
          platforms below.
        </p>
        <div className="w-full px-5 md:px-0 absolute flex justify-center md:justify-start items-center left-0 bottom-[50px] md:static">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
