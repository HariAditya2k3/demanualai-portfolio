const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-10 border-2 border-white text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-white font-semibold">
          &copy; {new Date().getFullYear()} DemanualAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
