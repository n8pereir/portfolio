import Header from "../components/Header";


const Resume = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center w-full min-h-screen bg-gray-100">
        <iframe
          src="/files/Nathan_Pereira_Resume_2025.pdf"
          title="Nathan Pereira Resume"
          width="80%"
          height="900px"
          style={{ border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        />
      </div>
    </>
  );
};

export default Resume;
